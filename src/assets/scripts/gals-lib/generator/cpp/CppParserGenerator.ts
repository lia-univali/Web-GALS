import { SyntacticError } from '../../analyser/SystemErros'
import { Options } from '../Options'
import { FunctionCustom, RecursiveDescendent } from '../RecursiveDescendent'
import { Grammar } from '../parser/Grammar'
import { LLParser } from '../parser/ll/LLParser'

export class CppParserGenerator {
  private rd: RecursiveDescendent | undefined

  public async generate(g: Grammar, options: Options): Promise<Map<string, string>> {
    //throws NotLLException
    const result: Map<string, string> = new Map()

    if (g != null) {
      const classname: string = options.parserName

      result.set(classname + '.h', await this.parserH(g, options))
      result.set(classname + '.cpp', await this.parserCpp(g, options))

      result.set(options.semanticName + '.cpp', this.semanticAnalyserCpp(options))
      result.set(options.semanticName + '.h', this.semanticAnalyserH(options))

      if (options.useASTLib) {
        result.set('Node.h',   this.nodeH(options));
        result.set('Node.cpp', this.nodeCpp(options));
      }
    }

    return result
  }

  private openNamespace(options: Options): string {
    const namespace: string = options.pkgName

    if (namespace != null && !(namespace === '')) return 'namespace ' + namespace + ' {\n\n'
    else return ''
  }

  private closeNamespace(options: Options): string {
    const namespace: string = options.pkgName

    if (namespace != null && !(namespace === '')) return '} //namespace ' + namespace + '\n\n'
    else return ''
  }

  private nodeH(options: Options): string {
    let res: string[] = [];

    res.push("#ifndef NODE_H\n");
    res.push("#define NODE_H\n\n");

    res.push("#include <memory>\n");
    res.push("#include <variant>\n");
    res.push("#include <vector>\n");
    res.push("#include <iostream>\n");
    res.push("#include <algorithm>\n");
    res.push("#include <functional>\n");
    res.push("#include \"Token.h\"\n\n");

    if (options.pkgName)
      res.push(`using namespace ${options.pkgName};\n\n`);

    res.push("/*\n");
    res.push(" * As funções make_unique da biblioteca padrão foram\n");
    res.push(" * declaradas de forma diferente entre versões do C++.\n");
    res.push(" */\n");
    res.push("#if defined(__cpp_lib_constexpr_memory) && \\\n");
    res.push("    __cpp_lib_constexpr_memory >= 202202L\n");
    res.push("    #define NODE_MAKE_UNIQUE_CONSTEXPR constexpr\n");
    res.push("#else\n");
    res.push("    #define NODE_MAKE_UNIQUE_CONSTEXPR\n");
    res.push("#endif\n\n");

    res.push(this.openNamespace(options));

    res.push("using NodeData = std::variant<Token*, NonTerm, int>;\n\n");

    res.push("enum class NodeKind {\n");
    res.push("        Terminal,\n");
    res.push("        NonTerminal,\n");
    res.push("        SemanticAction,\n");
    res.push("        Custom\n");
    res.push("};\n\n");

    res.push("class Node {\n");
    res.push("private:\n");
    res.push("        std::vector<std::unique_ptr<Node>> m_children;\n");
    res.push("        NodeKind m_kind;\n");
    res.push("        NodeData m_data;\n");
    res.push("        Token* m_actionlex;\n\n");


    res.push("        Node() = delete;\n\n");

    res.push("        Node(Token*& lex)\n");
    res.push("        : m_children(), m_kind(NodeKind::Terminal), m_data(lex)\n");
    res.push("        {}\n\n");

    res.push("        Node(NonTerm& prod)\n");
    res.push("        : m_children(), m_kind(NodeKind::NonTerminal), m_data(prod)\n");
    res.push("        {}\n\n");

    res.push("        Node(int& action, Token*& actlex)\n");
    res.push("        : m_children(), m_kind(NodeKind::SemanticAction), m_data(action), m_actionlex(actlex)\n");
    res.push("        {}\n\n");

    res.push("public:\n\n");

    res.push("        ~Node() = default;\n\n");

    res.push("        Node(Node&)             = delete;\n");
    res.push("        Node& operator=(Node&)  = delete;\n");
    res.push("        Node(Node&&)            = default;\n");
    res.push("        Node& operator=(Node&&) = default;\n\n");

    res.push("        NodeKind kind(void) const noexcept;\n");
    res.push("        const NodeData& data(void) const noexcept;\n\n");

    res.push("        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, Token*&>(Token*&);\n");
    res.push("        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, NonTerm&>(NonTerm&);\n");
    res.push("        friend NODE_MAKE_UNIQUE_CONSTEXPR std::unique_ptr<Node> std::make_unique<Node, int&, Token*&>(int&, Token*&);\n\n");

    res.push("        static std::unique_ptr<Node> from_terminal(Token* lex);\n");
    res.push("        static std::unique_ptr<Node> from_nonterminal(NonTerm prod);\n");
    res.push("        static std::unique_ptr<Node> from_semanticaction(int action, Token* actlex);\n\n");

    res.push("        Token* getActionLex(void);\n");
    res.push("        std::vector<std::unique_ptr<Node>>& getChildren(void);\n");
    res.push("        std::pair<NodeKind&, NodeData&> getKind(void);\n");

    res.push("        size_t ccount(void) const noexcept;\n");
    res.push("        void cpush(std::unique_ptr<Node>&& newchild);\n\n");

    res.push("        void invert_children(void);\n\n");

    res.push("        void morph(NodeKind kind, NodeData data);\n\n");

    res.push("        std::unique_ptr<Node>& follow(size_t whre);\n");
    res.push("        std::unique_ptr<Node> kidnap(size_t which);\n\n");

    res.push("        void print_tree(int level = 0) const;\n\n");

    res.push("        static void transform(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t);\n");
    res.push("        static void transformPreorder(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t);\n");
    res.push("        static void transformDual(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&, bool)> t);\n");

    res.push("};\n");

    res.push(this.closeNamespace(options));

    res.push("#endif\n");

    return res.join('');
  }

  private nodeCpp(options: Options): string {
    let res: string[] = [];

    res.push("#include \"Node.h\"\n");
    res.push("\n");

    this.openNamespace(options);

    res.push("NodeKind Node::kind(void) const noexcept {\n");
    res.push("      return m_kind;\n");
    res.push("}\n");
    res.push("\n");
    res.push("const NodeData& Node::data(void) const noexcept {\n");
    res.push("      return m_data;\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::unique_ptr<Node> Node::from_terminal(Token* lex) {\n");
    res.push("      return std::make_unique<Node>(lex);\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::unique_ptr<Node> Node::from_nonterminal(NonTerm prod) {\n");
    res.push("      return std::make_unique<Node>(prod);\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::unique_ptr<Node> Node::from_semanticaction(int action, Token* actlex) {\n");
    res.push("      return std::make_unique<Node>(action, actlex);\n");
    res.push("}\n");
    res.push("\n");
    res.push("Token* Node::getActionLex(void) {\n");
    res.push("      return m_actionlex;\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::vector<std::unique_ptr<Node>>& Node::getChildren(void) {\n");
    res.push("      return m_children;\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::pair<NodeKind&, NodeData&> Node::getKind(void) {\n");
    res.push("      return {m_kind, m_data};\n");
    res.push("}\n");
    res.push("\n");
    res.push("size_t Node::ccount(void) const noexcept {\n");
    res.push("      return m_children.size();\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::cpush(std::unique_ptr<Node>&& newchild) {\n");
    res.push("      m_children.push_back(std::move(newchild));\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::invert_children(void) {\n");
    res.push("      std::reverse(m_children.begin(), m_children.end());\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::morph(NodeKind kind, NodeData data) {\n");
    res.push("  m_kind = kind;\n");
    res.push("  m_data = data;\n");
    res.push("}\n");
    res.push("\n");
    res.push("std::unique_ptr<Node>& Node::follow(size_t whre) {\n");
    res.push("      return m_children[whre];\n");
    res.push("}\n");
    res.push("std::unique_ptr<Node> Node::kidnap(size_t which) {\n");
    res.push("      auto removed = std::move(m_children[which]);\n");
    res.push("      m_children.erase(m_children.begin() + which);\n");
    res.push("      return removed;\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::print_tree(int level) const {\n");
    res.push("\n");
    res.push("      for (int i = 0; i < level; i++)\n");
    res.push("              std::cout << \"  \";\n");
    res.push("\n");
    res.push("      if (m_kind == NodeKind::Terminal) {\n");
    res.push("              auto l = std::get<Token*>(m_data);\n");
    res.push("              std::cout << (TOKEN_REFLECTION[l->getId()]) << \" \\\"\" << l->getLexeme() << \"\\\"\" << std::endl;\n");
    res.push("      } else if (m_kind == NodeKind::NonTerminal) {\n");
    res.push("              auto& p = std::get<NonTerm>(m_data);\n");
    res.push("              std::cout << \"<\" << (PRODUCTION_REFLECTION[((int)p) - FIRST_NON_TERMINAL]) << \">\" << std::endl;\n");
    res.push("      } else if (m_kind == NodeKind::SemanticAction) {\n");
    res.push("              auto& a = std::get<int>(m_data);\n");
    res.push("              std::cout << \"#\" << a << std::endl;\n");
    res.push("      } else {\n");
    res.push("              std::cout << \"CUSTOM\" << std::endl;\n");
    res.push("      }\n");
    res.push("\n");
    res.push("      for (const auto& c : m_children)\n");
    res.push("              c->print_tree(level + 1);\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::transform(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t)\n");
    res.push("{\n");
    res.push("      for (auto& c : self->m_children) Node::transform(c,t);\n");
    res.push("      t(self);\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::transformPreorder(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&)> t)\n");
    res.push("{\n");
    res.push("      t(self);\n");
    res.push("      for (auto& c : self->m_children) Node::transformPreorder(c,t);\n");
    res.push("}\n");
    res.push("\n");
    res.push("void Node::transformDual(std::unique_ptr<Node>& self, std::function<void(std::unique_ptr<Node>&, bool)> t)\n");
    res.push("{\n");
    res.push("      t(self, false);\n");
    res.push("      for (auto& c : self->m_children) Node::transformDual(c,t);\n");
    res.push("      t(self, true);\n");
    res.push("}\n");


    this.closeNamespace(options);

    return res.join('');
  }

  private semanticAnalyserH(options: Options): string {
    const classname: string = options.semanticName
    return (
      '#ifndef ' +
      classname.toUpperCase() +
      '_H\n' +
      '#define ' +
      classname.toUpperCase() +
      '_H\n' +
      '\n' +
      '#include "Token.h"\n' +
      '#include "SemanticError.h"\n' +
      '\n' +
      this.openNamespace(options) +
      'class ' +
      classname +
      '\n' +
      '{\n' +
      'public:\n' +
      '    void executeAction(int action, const Token *token);\n' + // throw (SemanticError );\n"+ // Verificar throw
      '};\n' +
      '\n' +
      this.closeNamespace(options) +
      '#endif\n' +
      ''
    )
  }

  private semanticAnalyserCpp(options: Options): string {
    const classname: string = options.semanticName

    return (
      '#include "' +
      classname +
      '.h"\n' +
      '#include "Constants.h"\n' +
      '\n' +
      '#include <iostream>\n' +
      '\n' +
      this.openNamespace(options) +
      'void ' +
      classname +
      '::executeAction(int action, const Token *token)\n' + //throw (SemanticError )\n"+
      '{\n' +
      '    std::cout << "Ação: " << action << ", Token: "  << token->getId() \n' +
      '              << ", Lexema: " << token->getLexeme() << std::endl;\n' +
      '}\n' +
      '\n' +
      this.closeNamespace(options) +
      ''
    )
  }

  private async parserH(g: Grammar, options: Options): Promise<string> {
    //throws NotLLException
    const scannerName: string = options.scannerName
    const parserName: string = options.parserName
    const semanticName: string = options.semanticName

    const type: number = options.parser

    const descendant: boolean = type == Options.PARSER_REC_DESC
    let recDescFuncs: string = ''

    if (descendant) {
      const tables = await new LLParser(g).generateTable()
      this.rd = new RecursiveDescendent(tables, g)
      let tmp = ''
      tmp += '    void match(int token);'
      for (let i = g.FIRST_NON_TERMINAL; i < g.FIRST_SEMANTIC_ACTION(); i++)
        tmp += '    void ' + this.rd.getSymbols(i) + '();\n'
      recDescFuncs = tmp.toString()
    }

    const parser =
      '#ifndef ' +
      parserName +
      '_H\n' +
      '#define ' +
      parserName +
      '_H\n' +
      '\n' +
      '#include "Constants.h"\n' +
      '#include "Token.h"\n' +
      '#include "' +
      scannerName +
      '.h"\n' +
      '#include "' +
      semanticName +
      '.h"\n' +
      '#include "SyntacticError.h"\n' +
      '\n' +
      (options.useASTLib ? '#include "Node.h"\n' : '') +
      (descendant ? '' : '#include <stack>\n' + '\n') +
      this.openNamespace(options) +
      'class ' +
      parserName +
      '\n' +
      '{\n' +
      'public:\n' +
      '    ' +
      parserName +
      '() : previousToken(0), currentToken(0) { }\n' +
      '\n' +
      '    ~' +
      parserName +
      '()\n' +
      '    {\n' +
      '        if (previousToken != 0 && previousToken != currentToken) delete previousToken;\n' +
      '        if (currentToken != 0)  delete currentToken;\n' +
      '    }\n' +
      '\n' +
      '    ' + (options.useASTLib ? 'std::unique_ptr<Node>' : 'void') + ' parse(' +
      scannerName +
      ' *scanner' +
      (
        options.useASTLib == false ?
        ', ' +
        semanticName +
        ' *semanticAnalyser'
        :
        ''
      ) +
      ');\n\n' +
      'private:\n' +
      (descendant ? '' : '    std::stack<int> stack;\n') +
      '    Token *previousToken;\n' +
      '    Token *currentToken;\n' +
      (options.useASTLib ? '    std::vector<std::unique_ptr<Node>> forest = {};\n': '') +
      (options.useASTLib && options.parser == Options.PARSER_LL ? '    std::vector<int> nodect = {};\n': '') +
      '    ' +
      scannerName +
      ' *scanner;\n' +
      '    ' +
      (options.useASTLib == false ?
        semanticName +
        ' *semanticAnalyser;\n' +
        '\n'
        :
        ''
      ) +
      (descendant
        ? recDescFuncs
        : '    bool step();\n' + // throw (AnalysisError);\n"+
          (type == Options.PARSER_LL
            ? '    bool pushProduction(int topStack, int tokenInput);\n' +
              '\n' +
              '    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }\n' +
              '    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }\n' +
              '    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }\n\n' +
              (options.useASTLib ? '    void depopulate_forest(std::unique_ptr<Node>&& nn);' : '')
            : '')) +
      '};\n' +
      '\n' +
      this.closeNamespace(options) +
      '#endif\n' +
      ''
    return parser
  }

  private async parserCpp(g: Grammar, options: Options): Promise<string> {
    switch (options.parser) {
      case Options.PARSER_REC_DESC:
        return await this.parserCppRecursiveDescendant(g, options)

      case Options.PARSER_LL:
        return this.parserCppLL(g, options)

      default: //slr, lalar, lr
        return this.parserCppLR(g, options)
    }
  }

  private async parserCppRecursiveDescendant(g: Grammar, options: Options): Promise<string> {
    const tables = await new LLParser(g).generateTable()
    const rd: RecursiveDescendent = new RecursiveDescendent(tables, g)

    if (rd == null) throw new SyntacticError('RecursiveDescendent é nulo.')

    const scannerName = options.scannerName
    const parserName = options.parserName
    const semanticName = options.semanticName

    const top =
      '#include "' +
      parserName +
      '.h"\n' +
      '\n' +
      this.openNamespace(options) +
      'void ' +
      parserName +
      '::parse(' +
      scannerName +
      ' *scanner, ' +
      semanticName +
      ' *semanticAnalyser)\n' +
      '{\n' +
      '    this->scanner = scanner;\n' +
      '    this->semanticAnalyser = semanticAnalyser;\n' +
      '\n' +
      '    if (previousToken != 0 && previousToken != currentToken)\n' +
      '        delete previousToken;\n' +
      '    previousToken = 0;\n' +
      '\n' +
      '    if (currentToken != 0)\n' +
      '        delete currentToken;\n' +
      '    currentToken = scanner->nextToken();\n' +
      '    if (currentToken == 0)\n' +
      '        currentToken = new Token(DOLLAR, "$", 0);\n' +
      '\n' +
      '    ' +
      rd.getStart() +
      '();\n' +
      '\n' +
      '    if (currentToken->getId() != DOLLAR)\n' +
      '        throw SyntacticError(PARSER_ERROR[DOLLAR], currentToken->getPosition());\n' +
      '}\n' +
      '\n' +
      'void ' +
      parserName +
      '::match(int token)\n' +
      '{\n' +
      '    if (currentToken->getId() == token)\n' +
      '    {\n' +
      '        if (previousToken != 0)\n' +
      '            delete previousToken;\n' +
      '        previousToken = currentToken;\n' +
      '        currentToken = scanner->nextToken();\n' +
      '        if (currentToken == 0)\n' +
      '        {\n' +
      '            int pos = 0;\n' +
      '            if (previousToken != 0)\n' +
      '                pos = previousToken->getPosition()+previousToken->getLexeme().size();\n' +
      '\n' +
      '            currentToken = new Token(DOLLAR, "$", pos);\n' +
      '        }\n' +
      '    }\n' +
      '    else\n' +
      '        throw SyntacticError(PARSER_ERROR[token], currentToken->getPosition());\n' +
      '}\n'

    let bfr = ''

    const funcs: Map<string, FunctionCustom> = rd.build()

    for (let symb = g.FIRST_NON_TERMINAL; symb < g.FIRST_SEMANTIC_ACTION(); symb++) {
      const name: string = rd.getSymbols(symb)
      const f: FunctionCustom | undefined = funcs.get(name)

      if (f == undefined) throw new SyntacticError('FunctionCustom é nulo')

      bfr +=
        '\n' +
        'void ' +
        parserName +
        '::' +
        name +
        '()\n' + // throw (AnalysisError)\n"+
        '{\n' +
        '    switch (currentToken->getId())\n' +
        '    {\n'

      const keys: number[] = Array.from(f.input.keys())
      let pushed: Set<number> = new Set()

      for (let i = 0; i < keys.length; i++) {
        const rhs: number[] | undefined = f.input.get(keys[i])
        let token = keys[i]

        if (pushed.has(token)) continue

        bfr += '        case ' + token + ': // ' + rd.getSymbols(token) + '\n'
        for (let j = i + 1; j < keys.length; j++) {
          const rhs2: number[] | undefined = f.input.get(keys[j])

          if (rhs == undefined || rhs2 == undefined) throw new SyntacticError('rhs é nulo')

          if (rhs2 === rhs) {
            token = keys[j]
            if (pushed.has(token)) continue
            bfr += '        case ' + token + ': // ' + rd.getSymbols(token) + '\n'
            keys.splice(j, 1)
            pushed.add(token)
          }
        }

        if (rhs?.length == 0) {
          bfr += '            // EPSILON\n'
        }

        if (rhs == undefined) throw new SyntacticError('rhs é nulo')

        for (let k = 0; k < rhs.length; k++) {
          const s = rhs[k]
          if (g.isTerminal(s)) {
            bfr += '            match(' + s + '); // ' + rd.getSymbols(s) + '\n'
          } else if (g.isNonTerminal(s)) {
            bfr += '            ' + rd.getSymbols(s) + '();\n'
          } //isSemanticAction(s)
          else {
            bfr +=
              '            semanticAnalyser->executeAction(' +
              (s - g.FIRST_SEMANTIC_ACTION()) +
              ', previousToken);\n'
          }
        }

        bfr += '            break;\n'
      }

      bfr +=
        '        default:\n' +
        '            throw SyntacticError(PARSER_ERROR[' +
        f.lhs +
        '], currentToken->getPosition());\n' +
        '    }\n' +
        '}\n'
    }

    const bottom = '\n' + this.closeNamespace(options) + ''

    return top + bfr.toString() + bottom
  }

  private parserCppLL(g: Grammar, options: Options): string {
    const scannerName = options.scannerName
    const parserName = options.parserName
    const semanticName = options.semanticName

    return (
      '#include "' +
      parserName +
      '.h"\n' +
      '\n' +
      this.openNamespace(options) +
      (options.useASTLib ? 'std::unique_ptr<Node> ' : 'void ') +
      parserName +
      '::parse(' +
      scannerName +
      ' *scanner' +
      (options.useASTLib == false ?
        ', ' +
        semanticName +
        ' *semanticAnalyser'
        :
        ''
      )+
      ')\n{\n' +
      '    this->scanner = scanner;\n' +
      (options.useASTLib == false ? '    this->semanticAnalyser = semanticAnalyser;\n' : '') +
      '\n' +
      '    //Limpa a pilha\n' +
      '    while (! stack.empty())\n' +
      '        stack.pop();\n' +
      '\n' +
      '    stack.push(DOLLAR);\n' +
      '    stack.push(START_SYMBOL);\n' +
      '\n' +
      (options.useASTLib ?
      '    forest.push_back(Node::from_terminal(new Token(TokenId::EPSILON, "", 0)));\n\n'
      :
      '    if (previousToken != 0 && previousToken != currentToken)\n' +
      '        delete previousToken;\n'
      ) +
      '    previousToken = 0;\n' +
      '\n' +
      (options.useASTLib ?
      ''
      :
      '    if (currentToken != 0)\n' +
      '        delete currentToken;\n') +
      '    currentToken = scanner->nextToken();\n' +
      '\n' +
      '    while ( ! step() )\n' +
      '        ;\n' +
      (options.useASTLib ?
      '    return std::move(forest[0]);'
      : '') +
      '}\n' +
      '\n' +
      'bool ' +
      parserName +
      '::step()\n' + // throw (AnalysisError)\n"+
      '{\n' +
      '    if (currentToken == 0) //Fim de Sentenca\n' +
      '    {\n' +
      '        int pos = 0;\n' +
      '        if (previousToken != 0)\n' +
      '            pos = previousToken->getPosition() + previousToken->getLexeme().size();\n' +
      '\n' +
      '        currentToken = new Token(DOLLAR, "$", pos);\n' +
      '    }\n' +
      '\n' +
      '    int a = currentToken->getId();\n' +
      '    int x = stack.top();\n' +
      '\n' +
      '    stack.pop();\n' +
      '\n' +
      '    if (x == EPSILON)\n' +
      '    {\n' +
      (options.useASTLib ? '        this->depopulate_forest(Node::from_terminal(new Token(TokenId::EPSILON, "", 0)));\n' : '')+
      '        return false;\n' +
      '    }\n' +
      '    else if (isTerminal(x))\n' +
      '    {\n' +
      (options.useASTLib ? '        this->depopulate_forest(Node::from_terminal(currentToken));\n' : '')+
      '        if (x == a)\n' +
      '        {\n' +
      '            if (stack.empty())\n' +
      '                return true;\n' +
      '            else\n' +
      '            {\n' +
      (options.useASTLib ?
      ''
      :
      '                if (previousToken != 0)\n' +
      '                    delete previousToken;\n'
      )+
      '                previousToken = currentToken;\n' +
      '                currentToken = scanner->nextToken();\n' +
      '                return false;\n' +
      '            }\n' +
      '        }\n' +
      '        else\n' +
      '        {\n' +
      '            throw SyntacticError(PARSER_ERROR[x], currentToken->getPosition());\n' +
      '        }\n' +
      '    }\n' +
      '    else if (isNonTerminal(x))\n' +
      '    {\n' +
      '        if (pushProduction(x, a))\n' +
      '            return false;\n' +
      '        else\n' +
      '            throw SyntacticError(PARSER_ERROR[x], currentToken->getPosition());\n' +
      '    }\n' +
      '    else // isSemanticAction(x)\n' +
      '    {\n' +
      (options.useASTLib ?
        '        this->depopulate_forest(Node::from_semanticaction(x - FIRST_SEMANTIC_ACTION - 1, previousToken));\n'
        :
        '        semanticAnalyser->executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);\n'
      ) +
      '        return false;\n' +
      '    }\n' +
      '}\n' +
      '\n' +
      'bool ' +
      parserName +
      '::pushProduction(int topStack, int tokenInput)\n' +
      '{\n' +
      '    int p = PARSER_TABLE[topStack-FIRST_NON_TERMINAL][tokenInput-1];\n' +
      '    if (p >= 0)\n' +
      '    {\n' +
      '        int *production = PRODUCTIONS[p];\n' +
      '        //empilha a produção em ordem reversa\n' +
      '        int length = production[0];\n' +
      '        for (int i=length; i>=1; i--)\n' +
      '        {\n' +
      '            stack.push( production[i] );\n' +
      '        }\n' +
      (options.useASTLib ?
      '        forest.push_back(Node::from_nonterminal((NonTerm) topStack));\n'+
      '        nodect.push_back(length);\n' : ''
      )+
      '        return true;\n' +
      '    }\n' +
      '    else\n' +
      '        return false;\n' +
      '}\n' +
      '\n' +
      (options.useASTLib ?
      'void ' +
      parserName +
      '::depopulate_forest(std::unique_ptr<Node>&& nn)\n'+
      '{\n'+
      '    forest.back()->cpush(std::move(nn));\n'+
      '    int itg = nodect.back(); nodect.pop_back();\n'+
      '    while (itg == 1) {\n'+
      '       auto node = std::move(forest.back()); forest.pop_back();\n'+
      '       forest.back()->cpush(std::move(node));\n'+
      '       if (nodect.size() > 0) {\n'+
      '           itg = nodect.back(); nodect.pop_back();\n'+
      '       } else {\n'+
      '           break;\n'+
      '       }\n'+
      '    }\n'+
      '    nodect.push_back((itg - 1) > 0 ? (itg - 1) : 0);\n'+
      '}\n'+
      '\n' : '') +
      this.closeNamespace(options) +
      ''
    )
  }

  private parserCppLR(g: Grammar, options: Options): string {
    const scannerName = options.scannerName
    const parserName = options.parserName
    const semanticName = options.semanticName

    return (
      '#include "' +
      parserName +
      '.h"\n' +
      '\n' +
      this.openNamespace(options) +
      (options.useASTLib ? 'std::unique_ptr<Node>'  : 'void ') +
      parserName +
      '::parse(' +
      scannerName +
      ' *scanner' +
      (options.useASTLib == false ?
        ' ,' +
        semanticName +
        ' *semanticAnalyser'
        :
        ''
      ) +
      ')\n{\n' +
      '    this->scanner = scanner;\n' +
      (options.useASTLib == false ? '    this->semanticAnalyser = semanticAnalyser;\n' : '') +
      '\n' +
      '    //Limpa a pilha\n' +
      '    while (! stack.empty())\n' +
      '        stack.pop();\n' +
      '\n' +
      '    stack.push(0);\n' +
      '\n' +
      (options.useASTLib ? '' :
      '    if (previousToken != 0 && previousToken != currentToken)\n' +
      '        delete previousToken;\n'
      ) +
      '    previousToken = 0;\n' +
      '\n' +
      (options.useASTLib ? '' :
      '    if (currentToken != 0)\n' +
      '        delete currentToken;\n'
      ) +
      '    currentToken = scanner->nextToken();\n' +
      '\n' +
      '    while ( ! step() )\n' +
      '        ;\n' +
      (options.useASTLib ? '    return std::move(forest[0]);\n': '') +
      '}\n' +
      '\n' +
      'bool ' +
      parserName +
      '::step()\n' + // throw (AnalysisError)\n"+
      '{\n' +
      '    if (currentToken == 0) //Fim de Sentença\n' +
      '    {\n' +
      '        int pos = 0;\n' +
      '        if (previousToken != 0)\n' +
      '            pos = previousToken->getPosition() + previousToken->getLexeme().size();\n' +
      '\n' +
      '        currentToken = new Token(DOLLAR, "$", pos);\n' +
      '    }\n' +
      '\n' +
      '    int token = currentToken->getId();\n' +
      '    int state = stack.top();\n' +
      '\n' +
      '    const int* cmd = PARSER_TABLE[state][token-1];\n' +
      '\n' +
      '    switch (cmd[0])\n' +
      '    {\n' +
      '        case SHIFT:\n' +
      '        {\n' +
      '            stack.push(cmd[1]);\n' +
      (options.useASTLib ?
      '            forest.push_back(Node::from_terminal(currentToken));\n'
      :
      '            if (previousToken != 0)\n' +
      '                delete previousToken;\n'
      ) +
      '            previousToken = currentToken;\n' +
      '            currentToken = scanner->nextToken();\n' +
      '            return false;\n' +
      '        }\n' +
      '        case REDUCE:\n' +
      '        {\n' +
      '            const int* prod = PRODUCTIONS[cmd[1]];\n' +
      '\n' +
      (options.useASTLib ?
      '            auto node = Node::from_nonterminal(NonTerm::EPSILON);\n\n' +
      '            for (int i=0; i<prod[1]; i++) {\n' +
      '                node->cpush(std::move(forest.back()));\n'+
      '                forest.pop_back();\n'+
      '                stack.pop();\n'+
      '            }\n'+
      '            node->invert_children();\n'
      :
      '            for (int i=0; i<prod[1]; i++)\n' +
      '                stack.pop();\n'
      ) +
      '\n' +
      '            int oldState = stack.top();\n' +
      '            stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);\n' +
      (options.useASTLib ?
      '\n' +
      '            node->morph(NodeKind::NonTerminal, (NonTerm) prod[0]);\n'+
      '            forest.push_back(std::move(node));\n'
      : '')+
      '            return false;\n' +
      '        }\n' +
      '        case ACTION:\n' +
      '        {\n' +
      '            int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;\n' +
      (options.useASTLib ?
      '            forest.push_back(Node::from_semanticaction(action, previousToken));\n'
      : '' ) +
      '            stack.push(PARSER_TABLE[state][action][1]);\n' +
      (options.useASTLib == false ?
      '            semanticAnalyser->executeAction(cmd[1], previousToken);\n'
      : '' ) +
      '            return false;\n' +
      '        }\n' +
      '        case ACCEPT:\n' +
      '            return true;\n' +
      '\n' +
      '        case ERROR:\n' +
      '            throw SyntacticError(PARSER_ERROR[state], currentToken->getPosition());\n' +
      '    }\n' +
      '    return false;\n' +
      '}\n' +
      '\n' +
      this.closeNamespace(options) +
      ''
    )
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
