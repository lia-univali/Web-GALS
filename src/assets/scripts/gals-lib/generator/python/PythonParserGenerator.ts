import { NotLLException, SyntacticError } from '../../analyser/SystemErros'
import { Options } from '../Options'
import { FunctionCustom, RecursiveDescendent } from '../RecursiveDescendent'
import { Grammar } from '../parser/Grammar'
import { LLParser } from '../parser/ll/LLParser'

export class PythonParserGenerator {
  //	private rd: RecursiveDescendent | undefined;

  public async generate(g: Grammar, options: Options): Promise<Map<string, string>> {
    //throws NotLLException
    const result: Map<string, string> = new Map()

    if (options.generateParser == true) {
      if (g != null) {
        const classname: string = options.parserName

        result.set(classname + '.py', await this.parser(g, options))
        result.set(options.semanticName + '.py', this.semantic(options))

        if (options.useASTLib) {
          result.set('Node.py', this.node(options))
        }
      }
    }

    return result
  }

  private node(options: Options): string {
    let res: string[] = []
    const pkgname: string = options.pkgName !== '' ? options.pkgName + '.' : ''

    res.push("from enum import Enum\n")
    res.push(`from ${pkgname}Constants import NonTerm\n`)
    res.push(`from ${pkgname}Token import Token\n`)
    res.push(`from ${pkgname}${options.semanticName} import CustomNode\n\n`)

    res.push("class NodeData:\n");
    res.push("	lex: Token\n");
    res.push("	nt: NonTerm\n");
    res.push("	action: int\n");
    res.push("	actionlex: Token\n");
    res.push("	custom: CustomNode\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def with_lex(self, l: Token):\n");
    res.push("		nd = NodeData()\n");
    res.push("		nd.lex = l\n");
    res.push("		return nd\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def with_nt(self, n: NonTerm):\n");
    res.push("		nd = NodeData()\n");
    res.push("		nd.nt = n\n");
    res.push("		return nd\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def with_action(self, a: int, lex: Token | None):\n");
    res.push("		nd = NodeData()\n");
    res.push("		nd.action = a\n");
    res.push("		nd.actionlex = lex\n");
    res.push("		return nd\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def with_customnode(self, c: CustomNode):\n");
    res.push("		nd = NodeData()\n");
    res.push("		nd.custom = c\n");
    res.push("		return nd\n");
    res.push("\n");
    res.push("class NodeKind(Enum):\n");
    res.push("	Terminal = 1\n");
    res.push("	NonTerminal = 2\n");
    res.push("	SemanticAction = 3\n");
    res.push("	CustomNode = 4\n");
    res.push("\n");
    res.push("class Node:\n");
    res.push("	children: list[\"Node\"]\n");
    res.push("	kind: tuple[NodeKind, NodeData]\n");
    res.push("\n");
    res.push("	def __init__(self, nknd: (NodeKind, NodeData)):\n");
    res.push("		self.kind = nknd\n");
    res.push("		self.children = []\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def from_terminal(self, tk: Token):\n");
    res.push("		return Node( (NodeKind.Terminal, NodeData.with_lex(tk)) )\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def from_nonterminal(self, nt: NonTerminal):\n");
    res.push("		return Node( (NodeKind.NonTerminal, NodeData.with_nt(nt)) )\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def from_semanticaction(self, a: int, lex: Token):\n");
    res.push("		return Node( (NodeKind.SemanticAction, NodeData.with_action(a, lex)) )\n");
    res.push("\n");
    res.push("	@classmethod\n");
    res.push("	def from_customnode(self, c: CustomNode):\n");
    res.push("		return Node( (NodeKind.CustomNode, NodeData.with_customnode(c)) )\n");
    res.push("\n");
    res.push("	def ccount(self):\n");
    res.push("		return len(self.children)\n");
    res.push("\n");
    res.push("	def cpush(self, nc: Node):\n");
    res.push("		self.children.append(nc)\n");
    res.push("\n");
    res.push("	def kidnap(self, which: int):\n");
    res.push("		o = self.children[which]\n");
    res.push("		del self.children[which]\n");
    res.push("		return o\n");
    res.push("\n");
    res.push("	def morph(self, nknd: (NodeKind, NodeData)):\n");
    res.push("		self.kind = nknd\n");
    res.push("\n");
    res.push("	def invert_children(self):\n");
    res.push("		self.children.reverse()\n");
    res.push("\n");
    res.push("	def follow(self, where: int):\n");
    res.push("		return self.children[where]\n");
    res.push("\n");
    res.push("	def print_tree(self, level = 0):\n");
    res.push("\n");
    res.push("		for i in range(level):\n");
    res.push("			print('  ', end='', sep='')\n");
    res.push("\n");
    res.push("		(nk, nd) = self.kind\n");
    res.push("\n");
    res.push("		if nk == NodeKind.Terminal:\n");
    res.push("			l = nd.lex\n");
    res.push("			print(str(l.tkid) + \" \\\"\" + l.lexeme + \"\\\" \")\n");
    res.push("		elif nk == NodeKind.NonTerminal:\n");
    res.push("			p = nd.nt\n");
    res.push("			print('<' + str(p) + '>')\n");
    res.push("		elif nk == NodeKind.SemanticAction:\n");
    res.push("			a = nd.action\n");
    res.push("			print(\"#\" + str(a))\n");
    res.push("		else:\n");
    res.push("			c = nd.custom\n");
    res.push("			print(str(c))\n");
    res.push("\n");
    res.push("		for c in self.children:\n");
    res.push("			c.print_tree(level + 1)\n");
    res.push("\n");
    res.push("	def is_similar(self, rhs: tuple[NodeKind, NodeData]):\n");
    res.push("		lhs_kind, lhs_data = self.kind\n");
    res.push("		rhs_kind, rhs_data = rhs\n");
    res.push("\n");
    res.push("		if lhs_kind != rhs_kind:\n");
    res.push("			return False\n");
    res.push("\n");
    res.push("		if lhs_kind == NodeKind.Terminal:\n");
    res.push("			return lhs_data.lex.tkid == rhs_data.lex.tkid\n");
    res.push("\n");
    res.push("		if lhs_kind == NodeKind.NonTerminal:\n");
    res.push("			return lhs_data.nt == rhs_data.nt\n");
    res.push("\n");
    res.push("		if lhs_kind == NodeKind.SemanticAction:\n");
    res.push("			return lhs_data.action == rhs_data.action\n");
    res.push("\n");
    res.push("		if lhs_kind == NodeKind.CustomNode:\n");
    res.push("			return lhs_data.custom == rhs_data.custom\n");
    res.push("\n");
    res.push("		return False\n");
    res.push("\n");
    res.push("	# ---\n");
    res.push("\n");
    res.push("	def transform(self, t):\n");
    res.push("		for child in self.children:\n");
    res.push("			child.transform(t)\n");
    res.push("		t(self)\n");
    res.push("\n");
    res.push("	def transform_preorder(self, t):\n");
    res.push("		t(self)\n");
    res.push("		for child in self.children:\n");
    res.push("			child.transform_preorder(t)\n");
    res.push("\n");
    res.push("	def transform_dual(self, t):\n");
    res.push("		t(self, False)\n");
    res.push("		for child in self.children:\n");
    res.push("			child.transform_dual(t)\n");
    res.push("		t(self, True)\n");
    res.push("\n");
    res.push("	# ---\n");
    res.push("\n");
    res.push("	def assimilate(self, newkind, similars):\n");
    res.push("		def transform(n):\n");
    res.push("			for similar in similars:\n");
    res.push("				if n.is_similar(similar):\n");
    res.push("					n.morph(newkind)\n");
    res.push("					break\n");
    res.push("		self.transform(transform)\n");
    res.push("\n");
    res.push("	def squash(self, target):\n");
    res.push("		def transform(n):\n");
    res.push("			if not n.is_similar(target):\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			if n.ccount() != 1:\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			child = n.follow(0)\n");
    res.push("\n");
    res.push("			if child.is_similar(n.kind):\n");
    res.push("				n.kind = child.kind\n");
    res.push("				n.children = child.children\n");
    res.push("\n");
    res.push("		self.transform(transform)\n");
    res.push("\n");
    res.push("	def filter(self, target, removelist):\n");
    res.push("		def transform(n):\n");
    res.push("			if not n.is_similar(target):\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			n.children = [\n");
    res.push("				child\n");
    res.push("				for child in n.children\n");
    res.push("				if not any(child.is_similar(ri) for ri in removelist)\n");
    res.push("			]\n");
    res.push("\n");
    res.push("		self.transform(transform)\n");
    res.push("\n");
    res.push("	def flatten(self, target):\n");
    res.push("		def transform(n):\n");
    res.push("			new_children = []\n");
    res.push("\n");
    res.push("			for child in n.children:\n");
    res.push("				if child.is_similar(target):\n");
    res.push("					new_children.extend(child.children)\n");
    res.push("				else:\n");
    res.push("					new_children.append(child)\n");
    res.push("\n");
    res.push("			n.children = new_children\n");
    res.push("\n");
    res.push("		self.transform(transform)\n");
    res.push("\n");
    res.push("	def enlistify(self, target):\n");
    res.push("		def transform(n):\n");
    res.push("			if not n.is_similar(target):\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			if not n.children:\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			if not n.children[-1].is_similar(target):\n");
    res.push("				return\n");
    res.push("\n");
    res.push("			new_children = []\n");
    res.push("\n");
    res.push("			for child in n.children:\n");
    res.push("				if child.is_similar(target):\n");
    res.push("					new_children.extend(child.children)\n");
    res.push("				else:\n");
    res.push("					new_children.append(child)\n");
    res.push("\n");
    res.push("				n.children = new_children\n");
    res.push("\n");
    res.push("		self.transform(transform)\n");
    res.push("\n");
    res.push("	def raise_nodes(self, targetdest, targetsrc):\n");
    res.push("		def transform(n):\n");
    res.push("			new_children = []\n");
    res.push("\n");
    res.push("			for child in n.children:\n");
    res.push("				if child.is_similar(targetdest):\n");
    res.push("					risen = []\n");
    res.push("					remaining = []\n");
    res.push("\n");
    res.push("					for k in child.children:\n");
    res.push("						if k.is_similar(targetsrc):\n");
    res.push("							risen.append(k)\n");
    res.push("						else:\n");
    res.push("							remaining.append(k)\n");
    res.push("\n");
    res.push("					child.children = remaining\n");
    res.push("\n");
    res.push("					new_children.append(child)\n");
    res.push("					new_children.extend(risen)\n");
    res.push("				else:\n");
    res.push("					new_children.append(child)\n");
    res.push("\n");
    res.push("			n.children = new_children\n");
    res.push("\n");
    res.push("		self.transform(transform)\n");

    return res.join('')
  }

  private semantic(options: Options): string {
    const classname: string = options.semanticName
    const pkgname: string = options.pkgName !== '' ? options.pkgName + '.' : ''
    return (
      `from ${pkgname}Token import Token\n\n` +
      `class ${classname}:\n\n` +
      '\tdef execute_action(self, action: int, token: Token):\n' +
      '\t\tprint("Ação: ", action, "Token: ", token)\n\n'+
      (options.useASTLib ?
      'class CustomNode:\n' +
      '\n' +
      '\tdef __eq__(self, other):\n' +
      '\t\treturn True\n' +
      '\n' +
      '\tdef __str__(self):\n' +
      '\t\treturn "#CUSTOM"\n'
      :
      ''
      )
    )
  }

  private async redDecParser(g: Grammar, options: Options): Promise<string> {
    const tables = await new LLParser(g).generateTable()
    const rd: RecursiveDescendent = new RecursiveDescendent(tables, g)

    const pkg = options.pkgName !== '' ? options.pkgName + '.' : ''
    const prs = options.parserName

    let result =
      '' +
      `from ${pkg}Token     import Token\n` +
      `from ${pkg}Constants import *\n` +
      `from ${pkg}Errors    import SyntacticError\n\n` +
      `class ${prs}:\n\n` +
      '\tdef __init__(self):\n' +
      '\t\tself.previous_token = None\n' +
      '\t\tself.current_token  = None\n\n' +
      '\tdef parse(self, scanner, semantic):\n' +
      '\t\tself.scanner  = scanner\n' +
      '\t\tself.semantic = semantic\n\n' +
      '\t\tself.current_token = self.scanner.next_token()\n' +
      '\t\tif self.current_token == None:\n' +
      `\t\t\tself.current_token = Token(TokenId.DOLLAR, "$", 0)\n\n` +
      `\t\tself._${rd.getStart()}()\n` +
      '\t\tif self.current_token.tkid != TokenId.DOLLAR:\n' +
      '\t\t\traise SyntacticError(PARSER_ERROR[TokenId.DOLLAR.value], self.current_token.position)\n\n' +
      '\tdef matchr(self, tknum):\n\n' +
      '\t\tif self.current_token.tkid.value == tknum:\n' +
      '\t\t\tself.previous_token = self.current_token\n' +
      '\t\t\tself.current_token  = self.scanner.next_token()\n\n' +
      '\t\t\tif self.current_token == None:\n' +
      '\t\t\t\tpos = 0\n' +
      '\t\t\t\tif self.previous_token == None:\n' +
      '\t\t\t\t\tpos = self.previous_token.position + len(self.previous_token.lexeme)\n' +
      `\t\t\t\tself.current_token = Token(TokenId.DOLLAR, "$")\n` +
      '\t\telse:\n' +
      '\t\t\traise SyntacticError(PARSER_ERROR[tknum], self.current_token.position)\n\n'

    const funcs: Map<string, FunctionCustom> = rd.build()

    for (let symb = g.FIRST_NON_TERMINAL; symb < g.FIRST_SEMANTIC_ACTION(); symb++) {
      const name: string = rd.getSymbols(symb)
      const f: FunctionCustom | undefined = funcs.get(name)

      result += '' + `\tdef _${name}(self):\n` + '\t\tmatch self.current_token.tkid:\n'

      if (f == undefined) throw new NotLLException('Gramática não é LL.')

      const keys = Array.from(f.input.keys())
      let pushed: Set<number> = new Set()

      for (let i = 0; i < keys.length; i++) {
        const rhs = f.input.get(keys[i])
        let token = keys[i]

        if (pushed.has(token)) continue

        let sym = rd.getSymbols(token)
        result += `\t\t\tcase TokenId.${sym === '$' ? 'DOLLAR' : 't_' + sym}`

        pushed.add(token)

        for (let j = i + 1; j < keys.length; j++) {
          const rhs2 = f.input.get(keys[j])
          if (rhs2 === rhs) {
            token = keys[j]
            if (pushed.has(token)) continue
            let sym = rd.getSymbols(token)
            result += ` | TokenId.${sym === '$' ? 'DOLLAR' : 't_' + sym}`
            pushed.add(token)
          }
        }

        result += ':\n'

        if (rhs == undefined) throw new NotLLException('Gramática não é LL.')

        if (rhs.length == 0) result += '\t\t\t\tpass # EPSILON\n'

        for (let k = 0; k < rhs.length; k++) {
          const s = rhs[k]
          if (g.isTerminal(s)) {
            result += `\t\t\t\tself.matchr(${s}) # ${rd.getSymbols(s)}\n`
          } else if (g.isNonTerminal(s)) {
            result += `\t\t\t\tself._${rd.getSymbols(s)}()\n`
          } else {
            result += `\t\t\t\tself.semantic.execute_action(${s - g.FIRST_SEMANTIC_ACTION()}, self.previous_token)\n`
          }
        }
      }
      result += `\t\t\tcase _:\n\t\t\t\traise SyntacticError(PARSER_ERROR[${f.lhs}], self.current_token.position)\n`
    }

    return result
  }

  private llParser(g: Grammar, options: Options) {
    const pkg = options.pkgName !== '' ? options.pkgName + '.' : ''
    const prs = options.parserName

    let result =
      '' +
      `from ${pkg}Token     import Token\n` +
      `from ${pkg}Constants import *\n` +
      `from ${pkg}Errors    import SyntacticError\n` +
      (options.useASTLib ? 'from compiler.Node      import *\n\n' : '\n') +
      `class ${prs}:\n\n` +
      '\tdef __init__(self):\n' +
      '\t\tself.previous_token = None\n' +
      '\t\tself.current_token  = None\n' +
      (options.useASTLib ?
      '\t\tself.forest         = []\n' +
      '\t\tself.nodect         = []\n'
      : '')+
      '\t\tself.stack          = []\n\n' +
      '\tdef is_terminal(self, x):\n' +
      '\t\treturn x < FIRST_NON_TERMINAL\n\n' +
      '\tdef is_non_terminal(self, x):\n' +
      '\t\treturn x >= FIRST_NON_TERMINAL and x < FIRST_SEMANTIC_ACTION\n\n' +
      '\tdef is_semantic_action(self, x):\n' +
      '\t\treturn x >= FIRST_SEMANTIC_ACTION\n\n' +
      '\tdef step(self):\n\n' +
      '\t\tif self.current_token == None:\n' +
      '\t\t\tpos = 0\n' +
      '\t\t\tif self.previous_token != None:\n' +
      '\t\t\t\tpos = self.previous_token.position + len(self.previous_token.lexeme)\n\n' +
      `\t\t\tself.current_token = Token(TokenId.DOLLAR, "$", pos)\n\n` +
      '\t\tx = self.stack.pop()\n' +
      '\t\ta = self.current_token.tkid.value\n\n' +
      '\t\tif x == TokenId.EPSILON.value:\n' +
      (options.useASTLib ?
      '\t\t\tself.depopulate_forest(Node.from_terminal(Token(TokenId.EPSILON, "", 0)))\n'
      : '') +
      '\t\t\treturn False\n' +
      '\t\telif self.is_terminal(x):\n' +
      (options.useASTLib ?
      '\t\t\tself.depopulate_forest(Node.from_terminal(self.current_token))\n'
      : '') +
      '\t\t\tif x == a:\n' +
      '\t\t\t\tif len(self.stack) == 0:\n' +
      '\t\t\t\t\treturn True\n' +
      '\t\t\t\telse:\n' +
      '\t\t\t\t\tself.previous_token = self.current_token\n' +
      '\t\t\t\t\tself.current_token  = self.scanner.next_token()\n' +
      '\t\t\t\t\treturn False\n' +
      '\t\t\telse:\n' +
      '\t\t\t\traise SyntacticError(PARSER_ERROR[x], self.current_token.position)\n' +
      '\t\telif self.is_non_terminal(x):\n' +
      '\t\t\tif self.push_production(x, a):\n' +
      '\t\t\t\treturn False\n' +
      '\t\t\telse:\n' +
      '\t\t\t\traise SyntacticError(PARSER_ERROR[x], self.current_token.position)\n' +
      '\t\telse:\n' +
      (options.useASTLib ?
      '\t\t\tself.depopulate_forest(Node.from_semanticaction(x - FIRST_SEMANTIC_ACTION, self.previous_token))\n'
      :
      '\t\t\tself.semantic.execute_action(x-FIRST_SEMANTIC_ACTION, self.previous_token)\n'
      ) +
      '\t\t\treturn False\n\n' +
      '\tdef push_production(self, topstack, token):\n' +
      '\t\tp = PARSER_TABLE[topstack-FIRST_NON_TERMINAL][token-1]\n' +
      '\t\tif p >= 0:\n' +
      '\t\t\tproduction = PRODUCTIONS[p]\n\n' +
      '\t\t\tfor i in range(len(production) - 1, -1, -1):\n' +
      '\t\t\t\tself.stack.append(production[i])\n\n' +
      (options.useASTLib ?
			'\t\t\tself.forest.append(Node.from_nonterminal(NonTerm(topstack)))\n' +
			'\t\t\tself.nodect.append(len(production))\n'
      : '')+
      '\t\t\treturn True\n' +
      '\t\telse:\n' +
      '\t\t\treturn False\n\n' +
      (options.useASTLib ? '\tdef parse(self, scanner):\n' : '\tdef parse(self, scanner, semantic):\n') +
      '\t\tself.scanner  = scanner\n' +
      (options.useASTLib ? '' : '\t\tself.semantic = semantic\n\n') +
      '\t\tself.stack.clear()\n' +
      '\t\tself.stack.append(TokenId.DOLLAR.value)\n' +
      '\t\tself.stack.append(START_SYMBOL)\n\n' +
      (options.useASTLib ?
      '\t\tself.forest.append(Node.from_terminal(Token(TokenId.EPSILON, "", 0)))\n\n'
      : '') +
      '\t\tself.current_token = self.scanner.next_token()\n\n' +
      '\t\twhile self.step() == False:\n' +
      '\t\t\tpass\n'+
      (options.useASTLib ?
      '\t\treturn self.forest.pop().kidnap(0)\n'
      : '') +
      (options.useASTLib ?
      '\n\tdef depopulate_forest(self, nn: Node):\n' +
      '\t\tself.forest[-1].cpush(nn)\n' +
      '\t\titg = self.nodect.pop()\n' +
      '\t\twhile itg == 1:\n' +
      '\t\t\tnode = self.forest.pop()\n' +
      '\t\t\tself.forest[-1].cpush(node)\n' +
      '\t\t\tif len(self.nodect) > 0:\n' +
      '\t\t\t\titg = self.nodect.pop()\n' +
      '\t\t\telse:\n' +
      '\t\t\t\tbreak\n' +
      '\t\tself.nodect.append(itg - 1 if itg - 1 > 0 else 0)\n'
      : '')

    return result
  }

  private async parser(g: Grammar, options: Options): Promise<string> {
    const pkgname: string = options.pkgName !== '' ? options.pkgName + '.' : ''
    switch (options.parser) {
      case Options.PARSER_REC_DESC:
        return await this.redDecParser(g, options)

      case Options.PARSER_LL:
        return this.llParser(g, options)

      default:
        {
          //slr, lalr, lr
          const parserName: string = options.parserName

          return (
            `from ${pkgname}Token import Token\n` +
            `from ${pkgname}Constants import *\n` +
            `from ${pkgname}Errors import SyntacticError\n\n` +
            (options.useASTLib ? `from ${pkgname}Node import *\n` : '')+
            'class ' +
            parserName +
            ':\n\n' +
            '\tdef __init__(self):\n' +
            '\t\tself.previous_token = None\n' +
            '\t\tself.current_token  = None\n' +
            '\t\tself.stack          = []\n' +
            (options.useASTLib ?
            '\t\tself.forest         = []\n\n' : '\n') +
            (options.useASTLib ? '\tdef parse(self, scanner):\n' : '\tdef parse(self, scanner, semantic):\n') +
            '\t\tself.scanner  = scanner\n' +
            (options.useASTLib ? '\n' : '\t\tself.semantic = semantic\n\n') +
            '\t\tself.stack.clear()\n\n' +
            '\t\tself.stack.append(0)\n' +
            '\t\tself.previous_token = None\n\n' +
            '\t\tself.current_token = self.scanner.next_token()\n\n' +
            '\t\twhile True:\n' +
            '\t\t\tif self.step() != False:\n' +
            '\t\t\t\tbreak\n\n' +
            (options.useASTLib ?
            '\t\treturn self.forest.pop()\n\n' : '') +
            '\tdef step(self):\n\n' +
            '\t\tif self.current_token == None:\n' +
            '\t\t\tpos = 0\n' +
            '\t\t\tif self.previous_token != None:\n' +
            '\t\t\t\tpos = self.previous_token.position + len(self.previous_token.lexeme)\n' +
            '\t\t\tself.current_token = Token(TokenId.DOLLAR, "$", pos)\n\n' +
            '\t\ttoken = self.current_token.tkid.value\n' +
            '\t\tstate = self.stack[-1]\n\n' +
            '\t\tcmd = PARSER_TABLE[state][token-1]\n\n' +
            '\t\tmatch cmd[0]:\n' +
            '\t\t\tcase SLRAction.SHIFT:\n' +
            '\t\t\t\tself.stack.append(cmd[1])\n' +
            (options.useASTLib ?
            '\t\t\t\tself.forest.append(Node.from_terminal(self.current_token))\n' : '')+
            '\t\t\t\tself.previous_token = self.current_token\n' +
            '\t\t\t\tself.current_token = self.scanner.next_token()\n' +
            '\t\t\t\treturn False\n' +
            '\t\t\tcase SLRAction.REDUCE:\n' +
            '\t\t\t\tprod = PRODUCTIONS[cmd[1]]\n\n' +
            (options.useASTLib ?
            '\t\t\t\tnode = Node.from_nonterminal(NonTerm.EPSILON)\n': '')+
            '\t\t\t\tfor i in range(0, prod[1]):\n' +
            (options.useASTLib ?
            '\t\t\t\t\tnode.cpush(self.forest.pop())\n' : '') +
            '\t\t\t\t\tself.stack.pop()\n\n' +
            (options.useASTLib ?
            '\t\t\t\tnode.invert_children()\n': '') +
            '\t\t\t\toldstate = self.stack[-1]\n\n' +
            '\t\t\t\tself.stack.append(PARSER_TABLE[oldstate][prod[0]-1][1])\n\n' +
            (options.useASTLib ?
            '\t\t\t\tnode.morph((NodeKind.NonTerminal, NodeData.with_nt(NonTerm(prod[0]))))\n' +
            '\t\t\t\tself.forest.append(node)\n' : '') +
            '\t\t\t\treturn False\n' +
            '\t\t\tcase SLRAction.ACTION:\n' +
            '\t\t\t\taction = FIRST_SEMANTIC_ACTION + cmd[1] - 1\n' +
            '\t\t\t\tself.stack.append(PARSER_TABLE[state][action][1])\n' +
            (options.useASTLib ?
            '\t\t\t\tself.forest.append(Node.from_semanticaction(cmd[1], self.previous_token))\n'
            :
            '\t\t\t\tself.semantic.execute_action(cmd[1], self.previous_token)\n\n'
            )+
            '\t\t\t\treturn False\n' +
            '\t\t\tcase SLRAction.ACCEPT:\n' +
            '\t\t\t\treturn True\n' +
            '\t\t\tcase SLRAction.ERROR:\n' +
            '\t\t\t\traise SyntacticError(PARSER_ERROR[state], self.current_token.position)\n' +
            '\t\t\tcase _:\n' +
            "\t\t\t\traise RuntimeError('Invalid Command')\n\n" +
            '\t\treturn False\n'
          )
        }
        break
    }
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
