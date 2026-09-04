import { NotLLException, SyntacticError } from '../../analyser/SystemErros'
import { Options } from '../Options'
import { FunctionCustom, RecursiveDescendent } from '../RecursiveDescendent'
import { Grammar } from '../parser/Grammar'
import { LLParser } from '../parser/ll/LLParser'

export class RustParserGenerator {
  public async generate(g: Grammar, options: Options): Promise<Map<string, string>> {
    //throws NotLLException
    const result: Map<string, string> = new Map()
    const pkgpath = options.pkgName !== '' ? options.pkgName + '/' : ''

    if (options.generateParser == true) {
      if (g != null) {
        result.set(`src/${pkgpath}parser.rs`, await this.parser(g, options))
        result.set(`src/${pkgpath}codegen.rs`, this.semantic(options))

        if (options.useASTLib == true) {
          result.set(`src/${pkgpath}node.rs`, this.node(g, options))
        }
      }
    }

    return result
  }

  private node(g: Grammar, options: Options) {
    let pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''
    let res: string[] = [];

    res.push(`use crate::${pkgpath}{constants::NonTerm, token::Token};\n`);
    res.push("pub type NodeTransform = fn(&mut Box<Node>);\n\n");

    res.push("#[derive(Debug)]\n");
    res.push("pub enum NodeKind {\n");
    res.push("    Terminal(Token),\n");
    res.push("    NonTerminal(NonTerm),\n");
    res.push("    SemanticAction(i32),\n");
    res.push("}\n\n");

    res.push("impl Default for NodeKind {\n");
    res.push("    fn default() -> Self {\n");
    res.push("        NodeKind::NonTerminal(NonTerm::EPSILON)\n");
    res.push("    }\n");
    res.push("}\n\n");

    res.push("#[derive(Default)]\n");
    res.push("pub struct Node {\n");
    res.push("    kind: NodeKind,\n");
    res.push("    children: Vec<Box<Node>>,\n");
    res.push("}\n\n");

    res.push("impl Node {\n");
    res.push("    pub fn new(kind: NodeKind) -> Box<Self> {\n");
    res.push("        Box::new(Self {\n");
    res.push("            kind,\n");
    res.push("            children: Vec::new(),\n");
    res.push("        })\n");
    res.push("    }\n");
    res.push("    pub fn cpush(&mut self, c: Box<Node>) {\n");
    res.push("        self.children.push(c);\n");
    res.push("    }\n");
    res.push("    pub fn morph(&mut self, nkind: NodeKind) {\n");
    res.push("        self.kind = nkind;\n");
    res.push("    }\n");
    res.push("    pub fn invert_children(&mut self) {\n");
    res.push("        self.children.reverse();\n");
    res.push("    }\n");
    res.push("    pub fn print_tree(&self, depth: usize) {\n");
    res.push("        println!(\"{} {:?}\", \" \".repeat(depth * 4),self.kind);\n");
    res.push("        self.children.iter().for_each(|n| n.print_tree(depth + 1));\n");
    res.push("    }\n");
    res.push("}\n");

    return res.join('');
  }

  private semantic(options: Options): string {
    const name = options.semanticName
    const pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''
    return (
      '' +
      `
use crate::${pkgpath}{errors::AnalysisError, token::Token};

pub struct ${name} {}

impl ${name} {
    pub fn new() -> Self {
        ${name} {}
    }
    pub fn execute_action(&mut self, action: u32, token: &Token) -> Result<(), AnalysisError> {
        println!("Ação: {action}, Token: {token:?}");
        Ok(())
    }
}
`
    )
  }

  private async parser(g: Grammar, options: Options): Promise<string> {
    switch (options.parser) {
      case Options.PARSER_REC_DESC:
        return await this.redDecParser(g, options)

      case Options.PARSER_LL:
        return this.llParser(g, options)

      default: //slr, lalr, lr
        return this.lrParser(g, options)
    }
  }

  private lrParser(g: Grammar, options: Options): string {
    const name = options.parserName
    const pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''
    const stringmd: boolean = options.input == Options.INPUT_STRING
    return (
      '' +
      `${stringmd ? `` : `use std::io::{Read, Seek};`}
use crate::${pkgpath}{
    codegen::${options.semanticName}, constants::*, errors::AnalysisError, scanner::${options.scannerName}, token::Token,
};

${options.useASTLib ? `use crate::${pkgpath}node::{Node, NodeKind};` : ''}

pub struct ${name}${stringmd ? `` : `<T: Read + Seek>`} {
    previous_token: Option<Token>,
    current_token: Option<Token>,
    stack: Vec<u32>,
    scanner: ${options.scannerName}${stringmd ? '' : '<T>'},
    semantic: ${options.semanticName},
    ${options.useASTLib ? "forest: Vec<Box<Node>>," : ''}
}

enum SyntaxParsingState {
    Continue,
    Accept,
    Reject(AnalysisError),
}

impl${stringmd ? '' : '<T: Read + Seek>'} ${name}${stringmd ? '' : '<T>'} {
    pub fn new(scanner: ${options.scannerName}${stringmd ? '' : '<T>'}, semantic: ${options.semanticName}) -> Self {
        ${name} {
            previous_token: None,
            current_token: None,
            stack: Vec::new(),
            scanner,
            semantic,
            ${options.useASTLib ? "forest: Vec::new()," : ''}
        }
    }

    ${options.useASTLib ? "pub fn parse(mut self) -> Result<Box<Node>, AnalysisError>" : "pub fn parse(mut self) -> Result<(), AnalysisError>" } {
        self.stack.push(0);
        self.previous_token = None;

        match self.scanner.next_token() {
            Some(tk) => self.current_token = Some(tk?),
            None => self.current_token = None,
        }

        loop {
            match self.step() {
${options.useASTLib ?
`                SyntaxParsingState::Accept => {
                    let mut res = Box::default();
                    std::mem::swap(&mut res, &mut self.forest[0]);
                    return Ok(res);
                }
`
:`               SyntaxParsingState::Accept => return Ok(()),`}
                SyntaxParsingState::Reject(err) => return Err(err),
                SyntaxParsingState::Continue => {}
            }
        }
    }
    fn step(&mut self) -> SyntaxParsingState {
        if self.current_token.is_none() {
            let mut pos = 0;
            if let Some(tk) = &self.previous_token {
                pos = tk.get_position() + tk.get_lexeme().len();
            }
            self.current_token = Some(Token::new(TokenId::DOLLAR, "$".into(), pos));
        }

        let token = self.current_token.as_ref().expect("token").get_id() as usize;
        let state = *self.stack.last().expect("stack") as usize;

        let cmd = PARSER_TABLE[state][token - 1];

        use SyntaxParsingState::*;

        match cmd.0 {
            SLRAction::SHIFT => {
                self.stack.push(cmd.1 as u32);

${options.useASTLib ?
`                self.forest.push(Node::new(NodeKind::Terminal(
                    self.current_token.clone().unwrap()
                )));
`
:
''}

                self.previous_token = self.current_token.take();

                match self.scanner.next_token() {
                    Some(r) => match r {
                        Ok(tk) => self.current_token = Some(tk),
                        Err(e) => return Reject(e),
                    },
                    None => self.current_token = None,
                }

                Continue
            }
            SLRAction::REDUCE => {
                let prod = PRODUCTIONS[cmd.1 as usize];

${options.useASTLib ?
`                let mut node = Node::new(NodeKind::NonTerminal(NonTerm::EPSILON));
`
:''}

                for _ in 0..prod.1 {
${options.useASTLib ?
`                    node.cpush(self.forest.pop().expect("insufficient trees"));
`
:''}
                    self.stack.pop();
                }

${options.useASTLib ?
`                node.invert_children();
`
:''}

                let oldstate = *self.stack.last().expect("oldstate") as usize;

                self.stack
                    .push(PARSER_TABLE[oldstate][(prod.0 - 1) as usize].1 as u32);

${options.useASTLib ?
`                node.morph(NodeKind::NonTerminal(NonTerm::from(prod.0)));
                self.forest.push(node);
`
:''}

                Continue
            }
            SLRAction::ACTION => {
                let action = FIRST_SEMANTIC_ACTION + cmd.1 - 1;
${options.useASTLib ?
`                self.forest
                    .push(Node::new(NodeKind::SemanticAction(cmd.1 - 1)));
`: ''}
                self.stack
                    .push(PARSER_TABLE[state][action as usize].1 as u32);
                let res = self
                    .semantic
                    .execute_action(cmd.1 as u32, self.previous_token.as_ref().expect("token"));
                if let Err(e) = res {
                    Reject(e)
                } else {
                    Continue
                }
            }
${options.useASTLib ?
`            SLRAction::ACCEPT => {
               assert_eq!(self.forest.len(), 1);
               Accept
            },`
:`            SLRAction::ACCEPT => Accept,`}
            SLRAction::GO_TO => unimplemented!(),
            SLRAction::ERROR => Reject(AnalysisError::syntatic(
                PARSER_ERROR[state].into(),
                self.current_token.as_ref().expect("token").get_position(),
            )),
        }
    }
}

`
    )
  }

  private async redDecParser(g: Grammar, options: Options): Promise<string> {
    const tables = await new LLParser(g).generateTable()
    const rd: RecursiveDescendent = new RecursiveDescendent(tables, g)

    let scannername = options.scannerName
    let parsername = options.parserName
    let semanticname = options.semanticName
    const pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''
    const stringmd: boolean = options.input == Options.INPUT_STRING

    let result =
      '' +
      `
${stringmd ? '' : 'use std::io::{Read, Seek};'}

use crate::${pkgpath}{
    codegen::${semanticname}, constants::*, errors::AnalysisError, scanner::${scannername}, token::Token,
};

pub struct ${parsername}${stringmd ? '' : '<T: Read + Seek>'} {
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${scannername}${stringmd ? '' : '<T>'},
    semantic: ${semanticname},
}

impl${stringmd ? '' : '<T: Read + Seek>'} ${parsername}${stringmd ? '' : '<T>'} {
    pub fn new(lex: ${scannername}${stringmd ? '' : '<T>'}, sem: ${semanticname}) -> Self {
        Parser {
            current_token: None,
            previous_token: None,
            scanner: lex,
            semantic: sem,
        }
    }

    pub fn parse(mut self) -> Result<(), AnalysisError> {
        self.current_token = self.scanner.next_token().transpose()?;
        if self.current_token.is_none() {
            self.current_token = Token::new(TokenId::DOLLAR, "$".into(), 0).into();
        }

        self._${rd.getStart()}()?;

        if self.current_token.as_ref().unwrap().get_id() != TokenId::DOLLAR {
            Err(AnalysisError::syntatic(
                PARSER_ERROR[TokenId::DOLLAR as usize].into(),
                self.current_token.as_ref().unwrap().get_position(),
            ))
        } else {
            Ok(())
        }
    }

    fn matchr(&mut self, tknum: i32) -> Result<(), AnalysisError> {
        if self.current_token.as_ref().unwrap().get_id() as i32 == tknum {
            self.previous_token = self.current_token.take();
            self.current_token = self.scanner.next_token().transpose()?;
            if self.current_token.is_none() {
                let mut pos = 0;
                if let Some(tk) = self.previous_token.as_ref() {
                    pos = tk.get_position() + tk.get_lexeme().len();
                }
                self.current_token = Token::new(TokenId::DOLLAR, "$".into(), pos).into();
            }
            return Ok(());
        } else {
            return Err(AnalysisError::syntatic(
                PARSER_ERROR[tknum as usize].into(),
                self.current_token.as_ref().unwrap().get_position(),
            ));
        }
    }

`
    const funcs: Map<string, FunctionCustom> = rd.build()

    for (let symb = g.FIRST_NON_TERMINAL; symb < g.FIRST_SEMANTIC_ACTION(); symb++) {
      const name: string = rd.getSymbols(symb)
      const f: FunctionCustom | undefined = funcs.get(name)

      result +=
        '' +
        `    fn _${name}(&mut self) -> Result<(), AnalysisError> {\n` +
        '        match self.current_token.as_ref().unwrap().get_id() {\n'

      if (f == undefined) throw new NotLLException('Gramática não é LL.')

      const keys = Array.from(f.input.keys())
      let pushed: Set<number> = new Set()

      for (let i = 0; i < keys.length; i++) {
        const rhs = f.input.get(keys[i])
        let token = keys[i]

        if (pushed.has(token)) continue

        let sym = rd.getSymbols(token)
        //				result += `\t\t\tcase TokenId.${sym === '$' ? "DOLLAR" : 't_' + sym}`;
        result += `            TokenId::${sym === '$' ? 'DOLLAR' : 't_' + sym}`

        pushed.add(token)

        for (let j = i + 1; j < keys.length; j++) {
          const rhs2 = f.input.get(keys[j])
          if (rhs2 === rhs) {
            token = keys[j]
            if (pushed.has(token)) continue
            let sym = rd.getSymbols(token)
            result += ` | TokenId::${sym === '$' ? 'DOLLAR' : 't_' + sym}`
            pushed.add(token)
          }
        }

        result += ' => {\n'

        if (rhs == undefined) throw new NotLLException('Gramática não é LL.')

        //				if (rhs.length == 0)
        //					result += "\t\t\t\tpass # EPSILON\n";

        for (let k = 0; k < rhs.length; k++) {
          const s = rhs[k]
          if (g.isTerminal(s)) {
            result += `                self.matchr(${s})?; // ${rd.getSymbols(s)}\n`
          } else if (g.isNonTerminal(s)) {
            result += `                self._${rd.getSymbols(s)}()?;\n`
          } else {
            result += `                self.semantic.execute_action(${s - g.FIRST_SEMANTIC_ACTION()}, self.previous_token.as_ref().unwrap())?;\n`
          }
        }

        result += '            },\n'
      }
      result += `            _ => return Err(AnalysisError::syntatic(PARSER_ERROR[${f.lhs}].into(), self.current_token.as_ref().unwrap().get_position()))\n`
      //			result += `\t\t\tcase _:\n\t\t\t\traise SyntacticError(PARSER_ERROR[${f.lhs}], self.current_token.position)\n`;
      result += '        };\n'
      result += '        Ok(())\n'
      result += '    }\n'
    }

    result += '}\n'

    return result
  }

  private llParser(g: Grammar, options: Options) {
    const scannername: string = options.scannerName
    const parsername: string = options.parserName
    const semanname: string = options.semanticName
    const pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''
    const stringmd: boolean = options.input == Options.INPUT_STRING

    let result =
      '' +
      `
use std::io::{Read, Seek};

use crate::${pkgpath}{
    codegen::${semanname}, constants::*, errors::AnalysisError, scanner::${scannername}, token::Token,
};

pub struct ${parsername}${stringmd ? '' : '<T: Read + Seek>'} {
    stack: Vec<i32>,
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${scannername}${stringmd ? '' : '<T>'},
    semantic: ${semanname},
}

impl${stringmd ? '' : '<T: Read + Seek>'} ${parsername}${stringmd ? '' : '<T>'} {
    pub fn new(lex: ${scannername}${stringmd ? '' : '<T>'}, sem: ${semanname}) -> Self {
        ${parsername} {
            stack: Vec::new(),
            current_token: None,
            previous_token: None,
            scanner: lex,
            semantic: sem,
        }
    }

    fn is_terminal(x: i32) -> bool {
        x < FIRST_NON_TERMINAL
    }

    fn is_non_terminal(x: i32) -> bool {
        x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION
    }

    fn push_production(&mut self, top_stack: i32, token_input: i32) -> bool {
        let p = PARSER_TABLE[(top_stack - FIRST_NON_TERMINAL) as usize][(token_input - 1) as usize];

        if p >= 0 {
            let production = PRODUCTIONS[p as usize];
            for i in (0..=(production.len() - 1)).rev() {
                self.stack.push(production[i]);
            }
            true
        } else {
            false
        }
    }

    fn step(&mut self) -> Result<Option<()>, AnalysisError> {
        if self.current_token.is_none() {
            let mut pos = 0;
            if let Some(tk) = self.previous_token.as_ref() {
                pos = tk.get_position() + tk.get_lexeme().len();
            }
            self.current_token = Token::new(TokenId::DOLLAR, "$".into(), pos).into();
        }

        let x = self.stack.pop().unwrap();
        let a = self.current_token.as_ref().unwrap().get_id() as i32;

        if x == TokenId::EPSILON as i32 {
            return Ok(Some(()));
        } else if ${parsername}${stringmd ? '' : '::<T>'}::is_terminal(x) {
            if x == a {
                if self.stack.is_empty() {
                    return Ok(None);
                } else {
                    self.previous_token = self.current_token.take();
                    self.current_token = self.scanner.next_token().transpose()?;
                    return Ok(Some(()));
                }
            } else {
                return Err(AnalysisError::syntatic(
                    PARSER_ERROR[x as usize].into(),
                    self.current_token.as_ref().unwrap().get_position(),
                ));
            }
        } else if ${parsername}${stringmd ? '' : '::<T>'}::is_non_terminal(x) {
            if self.push_production(x, a) {
                return Ok(Some(()));
            } else {
                return Err(AnalysisError::syntatic(
                    PARSER_ERROR[x as usize].into(),
                    self.current_token.as_ref().unwrap().get_position(),
                ));
            }
        } else {
            self.semantic.execute_action(
                (x - FIRST_SEMANTIC_ACTION) as u32,
                self.previous_token.as_ref().unwrap(),
            )?;
            return Ok(Some(()));
        }
    }

    pub fn parse(mut self) -> Result<(), AnalysisError> {
        self.stack.push(TokenId::DOLLAR as i32);
        self.stack.push(START_SYMBOL);

        self.current_token = self.scanner.next_token().transpose()?;

        while let Some(_) = self.step()? {}

        Ok(())
    }
}

`

    return result
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
