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

    res.push("use std::fmt::Display;\n");
    res.push(`use crate::${pkgpath}{errors::AnalysisError, codegen::CustomNode, constants::NonTerm, token::Token};\n`);

    res.push("#[allow(unused)]\n");
    res.push("#[derive(Debug, Clone)]\n");
    res.push("pub enum NodeKind {\n");
    res.push("    Terminal(Token),\n");
    res.push("    NonTerminal(NonTerm),\n");
    res.push("    SemanticAction(i32),\n");
    res.push("    Custom(CustomNode),\n");
    res.push("}\n\n");

    res.push("#[allow(unused)]\n");
    res.push("impl NodeKind {\n");
    res.push("    pub fn as_terminal(&self) -> &Token {\n");
    res.push("        match self {\n");
    res.push("            NodeKind::Terminal(token) => token,\n");
    res.push("            _ => panic!(),\n");
    res.push("        }\n");
    res.push("    }\n");
    res.push("    pub fn as_nonterminal(&self) -> &NonTerm {\n");
    res.push("        match self {\n");
    res.push("            NodeKind::NonTerminal(non_term) => non_term,\n");
    res.push("            _ => panic!(),\n");
    res.push("        }\n");
    res.push("    }\n");
    res.push("    pub fn as_semanticaction(&self) -> &i32 {\n");
    res.push("        match self {\n");
    res.push("            NodeKind::SemanticAction(n) => n,\n");
    res.push("            _ => panic!()\n");
    res.push("        }\n");
    res.push("    }\n");
    res.push("    pub fn as_custom(&self) -> &CustomNode {\n");
    res.push("        match self {\n");
    res.push("            NodeKind::Custom(cn) => cn,\n");
    res.push("            _ => panic!()\n");
    res.push("        }\n");
    res.push("    }\n");
    res.push("    pub fn is_similar(&self, rhs: &NodeKind) -> bool {\n");
    res.push("        match (self, rhs) {\n");
    res.push("            (NodeKind::Terminal(a), NodeKind::Terminal(b)) => a.get_id() == b.get_id(),\n");
    res.push("            (NodeKind::NonTerminal(a), NodeKind::NonTerminal(b)) => *a == *b,\n");
    res.push("            (NodeKind::SemanticAction(a), NodeKind::SemanticAction(b)) => *a == *b,\n");
    res.push("            (NodeKind::Custom(a), NodeKind::Custom(b)) => *a == *b,\n");
    res.push("            _ => false,\n");
    res.push("        }\n");
    res.push("    }\n");
    res.push("}\n\n");

    res.push("impl Display for NodeKind {\n");
    res.push("    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {\n");
    res.push("        match self {\n");
    res.push("            NodeKind::Terminal(token) => {\n");
    res.push("                write!(f, \"{:?} : \\\"{}\\\" \", token.get_id(), token.get_lexeme())\n");
    res.push("            }\n");
    res.push("            NodeKind::NonTerminal(non_term) => write!(f, \"<{:?}>\", *non_term),\n");
    res.push("            NodeKind::SemanticAction(n) => write!(f, \"#{}\", *n),\n");
    res.push("            NodeKind::Custom(c) => write!(f, \"{}\", *c),");
    res.push("        }\n");
    res.push("    }\n");
    res.push("}\n\n");

    res.push("impl Default for NodeKind {\n");
    res.push("    fn default() -> Self {\n");
    res.push("        NodeKind::NonTerminal(NonTerm::EPSILON)\n");
    res.push("    }\n");
    res.push("}\n\n");

    res.push("#[derive(Default, Clone, Debug)]\n");
    res.push("pub struct Node {\n");
    res.push("    kind: NodeKind,\n");
    res.push("    children: Vec<Box<Node>>,\n");
    res.push("    actionlex: Option<Token>,\n");
    res.push("}\n\n");

    res.push("#[allow(unused)]\n")
    res.push("impl Node {\n");
    res.push("    pub fn new(kind: NodeKind) -> Box<Self> {\n");
    res.push("        Box::new(Self {\n");
    res.push("            kind,\n");
    res.push("            children: Vec::new(),\n");
    res.push("            actionlex: None,\n");
    res.push("        })\n");
    res.push("    }\n");
    res.push("    pub fn new_action(kind: NodeKind, actionlex: Token) -> Box<Self> {\n");
    res.push("        Box::new(Self {\n");
    res.push("            kind,\n");
    res.push("            children: Vec::new(),\n");
    res.push("            actionlex: Some(actionlex),\n");
    res.push("        })\n");
    res.push("    }\n");
    res.push("    pub fn get_actionlex(&self) -> Option<&Token> {\n");
    res.push("        (&self.actionlex).as_ref()\n");
    res.push("    }\n");
    res.push("    pub fn get_children(&self) -> &Vec<Box<Node>> {\n");
    res.push("        &self.children\n");
    res.push("    }\n");
    res.push("    pub fn get_children_mut(&mut self) -> &mut Vec<Box<Node>> {\n");
    res.push("        &mut self.children\n");
    res.push("    }\n");
    res.push("    pub fn get_kind_mut(&mut self) -> &mut NodeKind {\n");
    res.push("        &mut self.kind\n");
    res.push("    }\n");
    res.push("    pub fn get_kind(&self) -> &NodeKind {\n");
    res.push("        &self.kind\n");
    res.push("    }\n");
    res.push("    pub fn ccount(&self) -> usize {\n");
    res.push("        self.children.len()\n");
    res.push("    }\n");
    res.push("    pub fn cpush(&mut self, c: Box<Node>) {\n");
    res.push("        self.children.push(c);\n");
    res.push("    }\n");
    res.push("    pub fn morph(&mut self, nkind: NodeKind) {\n");
    res.push("        self.kind = nkind;\n");
    res.push("    }\n");
    res.push("    pub fn follow(&self, whre: usize) -> Option<&Box<Node>> {\n");
    res.push("        self.children.get(whre)\n");
    res.push("    }\n");
    res.push("    pub fn follow_mut(&mut self, whre: usize) -> Option<&mut Box<Node>> {\n");
    res.push("        self.children.get_mut(whre)\n");
    res.push("    }\n");
    res.push("    pub fn kidnap(&mut self, which: usize) -> Box<Node> {\n");
    res.push("        self.children.swap_remove(which)\n");
    res.push("    }\n");
    res.push("    pub fn try_transform<F>(self: &mut Box<Self>, t: &mut F) -> Result<(), AnalysisError>\n");
    res.push("    where\n");
    res.push("        F: FnMut(&mut Box<Self>) -> Result<(), AnalysisError>,\n");
    res.push("    {\n");
    res.push("        self.children.iter_mut().try_for_each(|c| c.try_transform(t));\n");
    res.push("        t(self)\n");
    res.push("    }\n");
    res.push("    pub fn transform<F>(self: &mut Box<Self>, t: &mut F)\n");
    res.push("    where\n");
    res.push("        F: FnMut(&mut Box<Self>),\n");
    res.push("    {\n");
    res.push("        self.children.iter_mut().for_each(|c| c.transform(t));\n");
    res.push("        t(self);\n");
    res.push("    }\n");
    res.push("    pub fn transform_bfs<F>(self: &mut Box<Self>, t: &mut F)\n");
    res.push("    where\n");
    res.push("        F: FnMut(&mut Box<Self>),\n");
    res.push("    {\n");
    res.push("        t(self);\n");
    res.push("        self.children.iter_mut().for_each(|c| c.transform_bfs(t));\n");
    res.push("    }\n");
    res.push("    pub fn transform_dual<F>(self: &mut Box<Self>, t: &mut F)\n");
    res.push("    where\n");
    res.push("        F: FnMut(&mut Box<Self>, bool),\n");
    res.push("    {\n");
    res.push("        t(self, false);\n");
    res.push("        self.children.iter_mut().for_each(|c| c.transform_dual(t));\n");
    res.push("        t(self, true);\n");
    res.push("    }\n");
    res.push("    pub fn invert_children(&mut self) {\n");
    res.push("        self.children.reverse();\n");
    res.push("    }\n");
    res.push("    pub fn print_tree(&self, depth: usize) {\n");
    res.push("        println!(\"{} {}\", \" \".repeat(depth * 4), self.kind);\n");
    res.push("        self.children.iter().for_each(|n| n.print_tree(depth + 1));\n");
    res.push("    }\n\n");
    res.push("    //---\n\n");
    res.push("    pub fn assimilate(self: &mut Box<Self>, newkind: NodeKind, similars: &[NodeKind]) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            for similar in similars {\n");
    res.push("                if n.get_kind().is_similar(similar) {\n");
    res.push("                    n.morph(newkind.clone());\n");
    res.push("                    break;\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("    pub fn squash(self: &mut Box<Self>, target: NodeKind) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            if n.get_kind().is_similar(&target) {\n");
    res.push("                if n.ccount() == 1 {\n");
    res.push("                    if n.follow(0).unwrap().get_kind().is_similar(n.get_kind()) {\n");
    res.push("                        *n = n.kidnap(0);\n");
    res.push("                    }\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("    pub fn filter(self: &mut Box<Self>, target: NodeKind, removelist: &[NodeKind]) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            if n.get_kind().is_similar(&target) {\n");
    res.push("                n.children.retain(|node| {\n");
    res.push("                    for ri in removelist {\n");
    res.push("                        if node.get_kind().is_similar(ri) {\n");
    res.push("                            return false;\n");
    res.push("                        }\n");
    res.push("                    }\n");
    res.push("                    return true;\n");
    res.push("                });\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("    pub fn flatten(self: &mut Box<Self>, target: NodeKind) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            n.children = n\n");
    res.push("                .children\n");
    res.push("                .iter_mut()\n");
    res.push("                .flat_map(|child| {\n");
    res.push("                    if child.get_kind().is_similar(&target) {\n");
    res.push("                        let mut new = Vec::default();\n");
    res.push("                        std::mem::swap(&mut child.children, &mut new);\n");
    res.push("                        new\n");
    res.push("                    } else {\n");
    res.push("                        let mut new = Box::default();\n");
    res.push("                        std::mem::swap(child, &mut new);\n");
    res.push("                        vec![new]\n");
    res.push("                    }\n");
    res.push("                })\n");
    res.push("                .collect();\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("    pub fn enlistify(self: &mut Box<Self>, target: NodeKind) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            if n.get_kind().is_similar(&target) {\n");
    res.push("                if let Some(c) = n.children.last() {\n");
    res.push("                    if c.get_kind().is_similar(&target) {\n");
    res.push("                        n.children = n\n");
    res.push("                            .children\n");
    res.push("                            .iter_mut()\n");
    res.push("                            .flat_map(|kinder| {\n");
    res.push("                                if kinder.get_kind().is_similar(&target) {\n");
    res.push("                                    let mut new = Vec::default();\n");
    res.push("                                    std::mem::swap(&mut kinder.children, &mut new);\n");
    res.push("                                    new\n");
    res.push("                                } else {\n");
    res.push("                                    let mut new = Box::default();\n");
    res.push("                                    std::mem::swap(kinder, &mut new);\n");
    res.push("                                    vec![new]\n");
    res.push("                                }\n");
    res.push("                            })\n");
    res.push("                            .collect();\n");
    res.push("                    }\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("    pub fn raise(self: &mut Box<Self>, targetdest: NodeKind, targetsrc: NodeKind) {\n");
    res.push("        self.transform(&mut |n| {\n");
    res.push("            n.children = n\n");
    res.push("                .children\n");
    res.push("                .iter_mut()\n");
    res.push("                .flat_map(|m| {\n");
    res.push("                    if m.get_kind().is_similar(&targetdest) {\n");
    res.push("                        let mut risen = vec![];\n");
    res.push("                        m.children.retain_mut(|k| {\n");
    res.push("                            if k.get_kind().is_similar(&targetsrc) {\n");
    res.push("                                let mut new = Box::default();\n");
    res.push("                                std::mem::swap(k, &mut new);\n");
    res.push("                                risen.push(new);\n");
    res.push("                                return false;\n");
    res.push("                            } else {\n");
    res.push("                                return true;\n");
    res.push("                            }\n");
    res.push("                        });\n");
    res.push("                        let mut new = Box::default();\n");
    res.push("                        std::mem::swap(m, &mut new);\n");
    res.push("                        let mut res = vec![new];\n");
    res.push("                        res.append(&mut risen);\n");
    res.push("                        res\n");
    res.push("                    } else {\n");
    res.push("                        let mut new = Box::default();\n");
    res.push("                        std::mem::swap(m, &mut new);\n");
    res.push("                        vec![new]\n");
    res.push("                    }\n");
    res.push("                })\n");
    res.push("                .collect();\n");
    res.push("        });\n");
    res.push("    }\n")
    res.push("}\n");

    return res.join('');
  }

  private semantic(options: Options): string {
    const name = options.semanticName
    const pkgpath = options.pkgName !== '' ? options.pkgName + '::' : ''

    const res1 = '' +
`
use crate::${pkgpath}{errors::AnalysisError, token::Token};
${options.useASTLib == true ? "use std::fmt::Display;": ''}

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
`;
    let res2: string[] = [];

    if (options.useASTLib == true) {
      res2.push("\n#[derive(Debug, Clone, PartialEq)]\n");
      res2.push("pub struct CustomNode {}\n\n");
      res2.push("#[allow(unused)]\n");
      res2.push("impl CustomNode {\n");
      res2.push("    pub fn new() -> Self {\n");
      res2.push("        CustomNode {}\n");
      res2.push("    }\n");
      res2.push("}\n\n");
      res2.push("impl Display for CustomNode {\n");
      res2.push("    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {\n")
      res2.push("        write!(f, \"(custom)\")\n");
      res2.push("    }\n")
      res2.push("}\n");
    }

    return res1 + res2.join('');
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
    ${options.useASTLib == false ? `codegen::${options.semanticName},` : ''} constants::*, errors::AnalysisError, scanner::${options.scannerName}, token::Token,
};

${options.useASTLib ? `use crate::${pkgpath}node::{Node, NodeKind};` : ''}

pub struct ${name}${stringmd ? `` : `<T: Read + Seek>`} {
    previous_token: Option<Token>,
    current_token: Option<Token>,
    stack: Vec<u32>,
    scanner: ${options.scannerName}${stringmd ? '' : '<T>'},
    ${options.useASTLib == false ? `semantic: ${options.semanticName},` : ''}
    ${options.useASTLib ? "forest: Vec<Box<Node>>," : ''}
}

enum SyntaxParsingState {
    Continue,
    Accept,
    Reject(AnalysisError),
}

impl${stringmd ? '' : '<T: Read + Seek>'} ${name}${stringmd ? '' : '<T>'} {
    pub fn new(scanner: ${options.scannerName}${stringmd ? '' : '<T>'}${options.useASTLib == false ? `, semantic: ${options.semanticName}` : ''}) -> Self {
        ${name} {
            previous_token: None,
            current_token: None,
            stack: Vec::new(),
            scanner,
            ${options.useASTLib == false ? "semantic," : ''}
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
`                self.forest.push(Node::new_action(
                    NodeKind::SemanticAction(cmd.1 - 1),
                    self.previous_token.as_ref().expect("token").clone(),
                ));
`: ''}
                self.stack
                    .push(PARSER_TABLE[state][action as usize].1 as u32);
${options.useASTLib ?
`                Continue
                }
` :
`                let res = self
                    .semantic
                    .execute_action(cmd.1 as u32, self.previous_token.as_ref().expect("token"));
                  if let Err(e) = res {
                      Reject(e)
                  } else {
                      Continue
                  }
              }`
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
    ${options.useASTLib ? 'node::NodeKind, node::Node,' : `codegen::${semanname},`} constants::*, errors::AnalysisError, scanner::${scannername}, token::Token,
};

pub struct ${parsername}${stringmd ? '' : '<T: Read + Seek>'} {
    stack: Vec<i32>,
    current_token: Option<Token>,
    previous_token: Option<Token>,
    scanner: ${scannername}${stringmd ? '' : '<T>'},
${options.useASTLib ?
`    forest: Vec<Box<Node>>,
    nodect: Vec<usize>,` :
`    semantic: ${semanname},`}
}

impl${stringmd ? '' : '<T: Read + Seek>'} ${parsername}${stringmd ? '' : '<T>'} {
    pub fn new(lex: ${scannername}${stringmd ? '' : '<T>'}${options.useASTLib ? '' : ` , sem: ${semanname}`}) -> Self {
        ${parsername} {
            stack: Vec::new(),
            current_token: None,
            previous_token: None,
            scanner: lex,
${options.useASTLib ?
`            forest: Vec::new(),
            nodect: Vec::new(),` :
`            semantic: sem,`}
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
${options.useASTLib ?
`            self.forest
                .push(Node::new(NodeKind::NonTerminal(NonTerm::from(top_stack))));
            self.nodect.push(production.len());` : ''}
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

${options.useASTLib ?
`        macro_rules! depopulate_forest {
            ($self:ident, $nn:expr) => {
                $self.forest.last_mut().expect("a").cpush($nn);

                let mut itg = $self.nodect.pop().unwrap();
                while itg == 1 {
                    let node = $self.forest.pop().unwrap();
                    $self.forest.last_mut().unwrap().cpush(node);
                    if $self.nodect.len() > 0 {
                        itg = $self.nodect.pop().unwrap();
                    } else {
                        break;
                    }
                }

                $self.nodect.push(itg.saturating_sub(1));
            };
        }` : ''}

        if x == TokenId::EPSILON as i32 {
${options.useASTLib ?
`            depopulate_forest!(
                self,
                Node::new(NodeKind::Terminal(Token::new_dummy(TokenId::EPSILON)))
            );` : ''}
            return Ok(Some(()));
        } else if ${parsername}${stringmd ? '' : '::<T>'}::is_terminal(x) {
${options.useASTLib ?
`            depopulate_forest!(
                self,
                Node::new(NodeKind::Terminal(self.current_token.clone().unwrap()))
            );` : ''}
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
${options.useASTLib ?
`            depopulate_forest!(
                self,
                Node::new_action(
                    NodeKind::SemanticAction(x - FIRST_SEMANTIC_ACTION - 1),
                    self.previous_token.clone().unwrap()
                )
            );
` :
`            self.semantic.execute_action(
                (x - FIRST_SEMANTIC_ACTION) as u32,
                self.previous_token.as_ref().unwrap(),
            )?;`}
            return Ok(Some(()));
        }
    }

    pub fn parse(mut self) -> Result<${options.useASTLib ? 'Box<Node>' : '()'}, AnalysisError> {
        self.stack.push(TokenId::DOLLAR as i32);
        self.stack.push(START_SYMBOL);

        self.current_token = self.scanner.next_token().transpose()?;

${options.useASTLib ?
`            self.forest
            .push(Node::new(NodeKind::Terminal(Token::new_dummy(
                TokenId::EPSILON,
            ))));` : ''}

        while let Some(_) = self.step()? {}

${options.useASTLib ?
`        if self.forest.len() != 1 {
            return Err(AnalysisError::syntatic(
                "Erro desconhecido no motor sintático (teve sucesso mas contém mais de uma árvore sintática resultante.)".into(),
                0,
            ));
        }

        Ok(self.forest.pop().unwrap().kidnap(0))` :
`        Ok(())`}
    }
}

`

    return result
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
