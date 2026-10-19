import { NotLLException, SyntacticError } from '../../analyser/SystemErros'
import { Options } from '../Options'
import { FunctionCustom, RecursiveDescendent } from '../RecursiveDescendent'
import { Grammar } from '../parser/Grammar'
import { LLParser } from '../parser/ll/LLParser'

export class JavaParserGenerator {
  public async generate(g: Grammar, options: Options): Promise<Map<string, string>> {
    // throws NotLLException
    const result: Map<string, string> = new Map()

    if (g != null) {
      const classname: string = options.parserName

      let parser: string | null

      switch (options.parser) {
        case Options.PARSER_REC_DESC:
          parser = await this.buildRecursiveDecendantParser(g, options)
          break
        case Options.PARSER_LL:
          parser = this.buildLLParser(g, options)
          break
        case Options.PARSER_SLR:
        case Options.PARSER_LALR:
        case Options.PARSER_LR:
          parser = this.buildLRParser(g, options)
          break
        default:
          parser = null
      }

      if (parser === null) throw new SyntacticError('String do Parser é nulo.')

      result.set(classname + '.java', parser)

      result.set(options.semanticName + '.java', this.generateSemanticAnalyser(options))

      if (options.useASTLib) {
        result.set('Node.java', this.generateNode(options));
        result.set('CstmNode.java', this.generateCstmNode(options));
      }
    }

    return result
  }

  private generateCstmNode(options: Options): string {
    let res: string[] = []

    const packageName = options.pkgName
    if (packageName && packageName !== '') {
      res.push(`package ${packageName};\n\n`)
    }

    res.push('public class CstmNode {\n')
    res.push('\n')
    res.push('	  @Override\n')
    res.push('	  public String toString() {\n')
    res.push('		    return "#CUSTOM";\n')
    res.push('	  }\n')
    res.push('\n')
    res.push('	  @Override\n')
    res.push('	  public boolean equals(Object o) {\n')
    res.push('		    return true;\n')
    res.push('	  }\n')
    res.push('\n')
    res.push('	  @Override\n')
    res.push('	  public int hashCode() {\n')
    res.push('		    return 0;\n')
    res.push('	  }\n')
    res.push('}\n')

    return res.join('')
  }

  private generateNode(options: Options): string {
    let res: string[] = []

    const packageName = options.pkgName
    if (packageName && packageName !== '') {
      res.push(`package ${packageName};\n\n`)
    }

    res.push("import java.util.function.Consumer;\n");
    res.push("import java.util.function.BiConsumer;\n");
    res.push("import java.util.List;\n");
    res.push("import java.util.ArrayList;\n");
    res.push("import java.util.Collections;\n");
    res.push("\n");
    res.push("public class Node\n");
    res.push("{\n");
    res.push("\n");
    res.push("    public sealed interface NodeKind\n");
    res.push("    {\n");
    res.push("        public record Terminal(Token lex) implements NodeKind {}\n");
    res.push("        public record NonTerminal(NonTerm nt) implements NodeKind {}\n");
    res.push("        public record SemanticAction(int action, Token lex) implements NodeKind {}\n");
    res.push("        public record CustomNode(CstmNode cn) implements NodeKind {}\n");
    res.push("    }\n");
    res.push("\n");
    res.push("	public static boolean isSimilar(NodeKind lhs, NodeKind rhs) {\n");
    res.push("		if (lhs instanceof NodeKind.Terminal a &&\n");
    res.push("			rhs instanceof NodeKind.Terminal b) {\n");
    res.push("			return a.lex().getId() == b.lex().getId();\n");
    res.push("		}\n");
    res.push("\n");
    res.push("		if (lhs instanceof NodeKind.NonTerminal a &&\n");
    res.push("			rhs instanceof NodeKind.NonTerminal b) {\n");
    res.push("			return a.nt() == b.nt();\n");
    res.push("		}\n");
    res.push("\n");
    res.push("		if (lhs instanceof NodeKind.SemanticAction a &&\n");
    res.push("			rhs instanceof NodeKind.SemanticAction b) {\n");
    res.push("			return a.action() == b.action();\n");
    res.push("		}\n");
    res.push("\n");
    res.push("		if (lhs instanceof NodeKind.CustomNode &&\n");
    res.push("			rhs instanceof NodeKind.CustomNode) {\n");
    res.push("			return lhs == rhs;\n");
    res.push("		}\n");
    res.push("\n");
    res.push("		return false;\n");
    res.push("	}\n");
    res.push("\n");
    res.push("	public boolean isSimilar(NodeKind rhs) {\n");
    res.push("		return Node.isSimilar(this.kind, rhs);\n");
    res.push("	}\n");
    res.push("\n");
    res.push("    private final ArrayList<Node> children = new ArrayList<Node>();\n");
    res.push("    private NodeKind kind;\n");
    res.push("\n");
    res.push("    public Node(Token tk) {\n");
    res.push("        this.kind = new NodeKind.Terminal(tk);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public Node(NonTerm nt) {\n");
    res.push("        this.kind = new NodeKind.NonTerminal(nt);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public Node(int action, Token actionlex) {\n");
    res.push("        this.kind = new NodeKind.SemanticAction(action, actionlex);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public Node(NodeKind kind) {\n");
    res.push("        this.kind = kind;\n");
    res.push("    }\n");
    res.push("\n");
    res.push("	public NodeKind getKind() {\n");
    res.push("        return this.kind;\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void setKind(NodeKind kind) {\n");
    res.push("        this.kind = kind;\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public List<Node> getChildren() {\n");
    res.push("        return this.children;\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public int ccount() {\n");
    res.push("        return this.children.size();\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public Node follow(int where) {\n");
    res.push("        return this.children.get(where);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void cpush(Node newchild) {\n");
    res.push("        this.children.add(newchild);\n");
    res.push("    }\n");
    res.push("    public void morph(NodeKind kd) {\n");
    res.push("        this.kind = kd;\n");
    res.push("    }\n");
    res.push("    public void invert_children() {\n");
    res.push("        Collections.reverse(this.children);\n");
    res.push("    }\n");
    res.push("    public Node kidnap(int which) {\n");
    res.push("        return this.children.remove(which);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void printTree(int level) {\n");
    res.push("        for (int i = 0; i < level; i++)\n");
    res.push("            System.out.print(\"  \");\n");
    res.push("\n");
    res.push("        if (kind instanceof NodeKind.Terminal t) {\n");
    res.push("            Token l = t.lex();\n");
    res.push("            System.out.println(Reflection.TOKENS.get(l.getId()) + \" \\\"\" + l.getLexeme() + \"\\\"\");\n");
    res.push("\n");
    res.push("        } else if (kind instanceof NodeKind.NonTerminal nt) {\n");
    res.push("            NonTerm p = nt.nt();\n");
    res.push("            System.out.println(\"<\" + Reflection.NONTERMS.get(p.index()) + \">\");\n");
    res.push("\n");
    res.push("        } else if (kind instanceof NodeKind.SemanticAction a) {\n");
    res.push("            System.out.println(\"#\" + a.action());\n");
    res.push("\n");
    res.push("        } else if (kind instanceof NodeKind.CustomNode cn) {\n");
    res.push("            System.out.println(cn.toString());\n");
    res.push("        }\n");
    res.push("\n");
    res.push("        for (Node c : children)\n");
    res.push("            c.printTree(level + 1);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    // ---\n");
    res.push("\n");
    res.push("	public void transform(Consumer<Node> t) {\n");
    res.push("        for (Node child : children)\n");
    res.push("            child.transform(t);\n");
    res.push("        t.accept(this);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void transformPreorder(Consumer<Node> t) {\n");
    res.push("        t.accept(this);\n");
    res.push("        for (Node child : children)\n");
    res.push("            child.transformPreorder(t);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void transformDual(BiConsumer<Node, Boolean> t) {\n");
    res.push("        t.accept(this, false);\n");
    res.push("        for (Node child : children)\n");
    res.push("            child.transformDual(t);\n");
    res.push("        t.accept(this, true);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    @FunctionalInterface\n");
    res.push("    public interface TransformWithError {\n");
    res.push("        void apply(Node node) throws AnalysisError;\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void tryTransform(TransformWithError t)\n");
    res.push("        throws AnalysisError\n");
    res.push("    {\n");
    res.push("        for (Node child : children)\n");
    res.push("            child.tryTransform(t);\n");
    res.push("\n");
    res.push("        t.apply(this);\n");
    res.push("    }\n");
    res.push("\n");
    res.push("	// --\n");
    res.push("\n");
    res.push("	public void assimilate(NodeKind newKind, List<NodeKind> similars) {\n");
    res.push("        transform(n -> {\n");
    res.push("            for (NodeKind similar : similars) {\n");
    res.push("                if (n.isSimilar(similar)) {\n");
    res.push("                    n.morph(newKind);\n");
    res.push("                    break;\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("\n");
    res.push("	public void squash(NodeKind target) {\n");
    res.push("        transform(n -> {\n");
    res.push("            if (n.isSimilar(target) && n.ccount() == 1) {\n");
    res.push("                Node child = n.follow(0);\n");
    res.push("\n");
    res.push("                if (child.isSimilar(n.getKind())) {\n");
    res.push("                    n.kind = child.kind;\n");
    res.push("                    n.children.clear();\n");
    res.push("                    n.children.addAll(child.children);\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void filter(NodeKind target, List<NodeKind> removelist) {\n");
    res.push("        transform(n -> {\n");
    res.push("            if (n.isSimilar(target)) {\n");
    res.push("                n.children.removeIf(node -> {\n");
    res.push("                    for (NodeKind remove : removelist) {\n");
    res.push("                        if (node.isSimilar(remove))\n");
    res.push("                            return true;\n");
    res.push("                    }\n");
    res.push("\n");
    res.push("                    return false;\n");
    res.push("                });\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void flatten(NodeKind target) {\n");
    res.push("        transform(n -> {\n");
    res.push("            ArrayList<Node> newChildren = new ArrayList<>();\n");
    res.push("\n");
    res.push("            for (Node child : n.children) {\n");
    res.push("                if (child.isSimilar(target)) {\n");
    res.push("                    newChildren.addAll(child.children);\n");
    res.push("                } else {\n");
    res.push("                    newChildren.add(child);\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("\n");
    res.push("            n.children.clear();\n");
    res.push("            n.children.addAll(newChildren);\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void enlistify(NodeKind target) {\n");
    res.push("        transform(n -> {\n");
    res.push("            if (n.isSimilar(target) && !n.children.isEmpty()) {\n");
    res.push("                Node last = n.children.get(n.children.size() - 1);\n");
    res.push("\n");
    res.push("                if (last.isSimilar(target)) {\n");
    res.push("                    ArrayList<Node> newChildren = new ArrayList<>();\n");
    res.push("\n");
    res.push("                    for (Node child : n.children) {\n");
    res.push("                        if (child.isSimilar(target)) {\n");
    res.push("                            newChildren.addAll(child.children);\n");
    res.push("                        } else {\n");
    res.push("                            newChildren.add(child);\n");
    res.push("                        }\n");
    res.push("                    }\n");
    res.push("\n");
    res.push("                    n.children.clear();\n");
    res.push("                    n.children.addAll(newChildren);\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("\n");
    res.push("    public void raise(NodeKind targetDest, NodeKind targetSrc) {\n");
    res.push("        transform(n -> {\n");
    res.push("            ArrayList<Node> newChildren = new ArrayList<>();\n");
    res.push("\n");
    res.push("            for (Node child : n.children) {\n");
    res.push("                if (child.isSimilar(targetDest)) {\n");
    res.push("                    ArrayList<Node> risen = new ArrayList<>();\n");
    res.push("                    ArrayList<Node> remaining = new ArrayList<>();\n");
    res.push("\n");
    res.push("                    for (Node k : child.children) {\n");
    res.push("                        if (k.isSimilar(targetSrc))\n");
    res.push("                            risen.add(k);\n");
    res.push("                        else\n");
    res.push("                            remaining.add(k);\n");
    res.push("                    }\n");
    res.push("\n");
    res.push("                    child.children.clear();\n");
    res.push("                    child.children.addAll(remaining);\n");
    res.push("\n");
    res.push("                    newChildren.add(child);\n");
    res.push("                    newChildren.addAll(risen);\n");
    res.push("                } else {\n");
    res.push("                    newChildren.add(child);\n");
    res.push("                }\n");
    res.push("            }\n");
    res.push("\n");
    res.push("            n.children.clear();\n");
    res.push("            n.children.addAll(newChildren);\n");
    res.push("        });\n");
    res.push("    }\n");
    res.push("}\n");

    return res.join('')
  }

  private async buildRecursiveDecendantParser(g: Grammar, parserOptions: Options): Promise<string> {
    //throws NotLLException
    const result: string[] = []

    const package_: string = parserOptions.pkgName

    result.push(this.emitPackage(package_))

    result.push(await this.emitRecursiveDecendantClass(g, parserOptions))

    return result.join('')
  }

  private buildLLParser(g: Grammar, parserOptions: Options): string {
    const result: string[] = []

    const package_: string = parserOptions.pkgName

    result.push(this.emitPackage(package_))

    result.push(this.emitImports())

    result.push(this.emitLLClass(g, parserOptions))

    return result.join('')
  }

  private buildLRParser(g: Grammar, parserOptions: Options): string {
    const result: string[] = []

    const package_: string = parserOptions.pkgName

    result.push(this.emitPackage(package_))

    result.push(this.emitImports())

    result.push(this.emitLRClass(g, parserOptions))

    return result.join('')
  }

  private emitPackage(package_: string): string {
    if (package_ != null && !(package_ === '')) return 'package ' + package_ + ';\n'
    else return ''
  }

  private emitImports(): string {
    return 'import java.util.Stack;\n' + '\n'
  }

  private emitLRClass(g: Grammar, parserOptions: Options): string {
    const result: string[] = []

    const classname: string = parserOptions.parserName
    result.push('public class ')
    result.push(classname)
    result.push(' implements Constants\n{\n')

    const scannerName: string = parserOptions.scannerName
    const semanName: string = parserOptions.semanticName

    const variables: string =
      '    private final Stack<Integer> stack = new Stack<Integer>();\n' +
      '    private Token currentToken;\n' +
      '    private Token previousToken;\n' +
      '    private ' +
      scannerName +
      ' scanner;\n' +
      (parserOptions.useASTLib ?
      ''
      :
      '    private ' + semanName + ' semanticAnalyser;\n'
      )

    result.push(variables)

    if (parserOptions.useASTLib) {
      result.push("    private final Stack<Node> forest = new Stack<Node>();\n")
    }

    result.push("\n");

    result.push(
      '    public ' + (parserOptions.useASTLib ? 'Node' : 'void')+ ' parse(' +
        scannerName +
        ' scanner' +
        (parserOptions.useASTLib ?
        ''
        :
        ', ' +
        semanName +
        ' semanticAnalyser'
        ) +
        ') throws LexicalError, SyntacticError, SemanticError\n' +
        '    {\n' +
        '        this.scanner = scanner;\n' +
        (parserOptions.useASTLib ? '' : '        this.semanticAnalyser = semanticAnalyser;\n') +
        '\n' +
        '        stack.clear();\n' +
        '        stack.push(0);\n' +
        '\n' +
        '        currentToken = scanner.nextToken();\n' +
        '\n' +
        '        while ( ! step() )\n' +
        '            ;\n' +
        (parserOptions.useASTLib ?
        '        return forest.pop();\n'
        :
        ''
        )+
        '    }\n' +
        '\n' +
        '    private boolean step() throws LexicalError, SyntacticError, SemanticError\n' +
        '    {\n' +
        '        if (currentToken == null)\n' +
        '        {\n' +
        '            int pos = 0;\n' +
        '            if (previousToken != null)\n' +
        '                pos = previousToken.getPosition()+previousToken.getLexeme().length();\n' +
        '\n' +
        '            currentToken = new Token(DOLLAR, "$", pos);\n' +
        '        }\n' +
        '\n' +
        '        int token = currentToken.getId();\n' +
        '        int state = stack.peek();\n' +
        '\n' +
        '        int[] cmd = PARSER_TABLE[state][token-1];\n' +
        '\n' +
        '        switch (cmd[0])\n' +
        '        {\n' +
        '            case SHIFT:\n' +
        '                stack.push(cmd[1]);\n' +
        (parserOptions.useASTLib ?
        '                forest.push(new Node(currentToken));\n'
        :
        ''
        ) +
        '                previousToken = currentToken;\n' +
        '                currentToken = scanner.nextToken();\n' +
        '                return false;\n' +
        '\n' +
        '            case REDUCE:\n' +
        '                int[] prod = PRODUCTIONS[cmd[1]];\n' +
        '\n' +
        (parserOptions.useASTLib ?
        '                var node = new Node(NonTerm.EPSILON);\n'+
        '                for (int i=0; i<prod[1]; i++) { \n' +
        '                    node.cpush(forest.pop());\n' +
        '                    stack.pop();\n' +
        '                }\n' +
        '                node.invert_children();\n'+
        '                int oldState = stack.peek();\n' +
        '                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);\n' +
        '                node.morph(new Node.NodeKind.NonTerminal(NonTerm.getNonTermFromIndex(prod[0])));\n' +
        '                forest.push(node);\n' +
        '                return false;\n'
        :
        '                for (int i=0; i<prod[1]; i++)\n' +
        '                    stack.pop();\n' +
        '\n' +
        '                int oldState = stack.peek();\n' +
        '                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);\n' +
        '                return false;\n'
        ) +
        '\n' +
        '            case ACTION:\n' +
        '                int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;\n' +
        (parserOptions.useASTLib
        ?
        '                forest.push(new Node(cmd[1], previousToken));\n'
        :
        ''
        ) +
        '                stack.push(PARSER_TABLE[state][action][1]);\n' +
        (parserOptions.useASTLib ?
        ''
        :
        '                semanticAnalyser.executeAction(cmd[1], previousToken);\n') +
        '                return false;\n' +
        '\n' +
        '            case ACCEPT:\n' +
        '                return true;\n' +
        '\n' +
        '            case ERROR:\n' +
        '                throw new SyntacticError(PARSER_ERROR[state], currentToken.getPosition());\n' +
        '        }\n' +
        '        return false;\n' +
        '    }\n' +
        '\n'
    )
    result.push('}\n')

    return result.join('')
  }

  private emitLLClass(g: Grammar, parserOptions: Options): string {
    const result: string[] = []

    const classname: string = parserOptions.parserName
    result.push('public class ')
    result.push(classname)
    result.push(' implements Constants\n{\n')

    const scannerName: string = parserOptions.scannerName
    const semanName: string = parserOptions.semanticName

    const variables =
      '    private final Stack<Integer> stack = new Stack<Integer>();\n' +
      '    private Token currentToken;\n' +
      '    private Token previousToken;\n' +
      '    private ' +
      scannerName +
      ' scanner;\n' +
      (parserOptions.useASTLib ?
      ''
      :
      '    private ' + semanName + ' semanticAnalyser;\n'
      ) +
      (parserOptions.useASTLib ?
      '    private final Stack<Node>    forest = new Stack<Node>();\n' +
      '    private final Stack<Integer> nodect = new Stack<Integer>();\n'
      :
      ''
      ) +
      '\n'

    result.push(variables)

    result.push(this.emitLLFunctions(parserOptions))

    result.push('}\n')

    return result.join('')
  }

  private emitLLFunctions(parserOptions: Options): string {
    const result: string[] = []

    result.push(this.emitTesters())

    result.push('\n')

    result.push(this.emitStep(parserOptions))

    result.push('\n')

    result.push(this.emitDriver(parserOptions))

    result.push('\n')

    result.push(this.emitDepopulator())

    return result.join('')
  }

  private emitDepopulator(): string {
    return (
      '    private void depopulateForest(Node nn) {\n' +
      '        this.forest.peek().cpush(nn);\n' +
      '        int itg = this.nodect.pop();\n' +
      '        while (itg == 1) {\n' +
      '            Node node = this.forest.pop();\n' +
      '            this.forest.peek().cpush(node);\n' +
      '            if (this.nodect.size() > 0) {\n' +
      '                itg = this.nodect.pop();\n' +
      '            } else {\n' +
      '                break;\n' +
      '            }\n' +
      '        }\n' +
      '        this.nodect.push((itg - 1) > 0 ? (itg - 1) : 0);\n' +
      '    }\n'
    );
  }

  private emitTesters(): string {
    return (
      '    private static final boolean isTerminal(int x)\n' +
      '    {\n' +
      '        return x < FIRST_NON_TERMINAL;\n' +
      '    }\n' +
      '\n' +
      '    private static final boolean isNonTerminal(int x)\n' +
      '    {\n' +
      '        return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION;\n' +
      '    }\n' +
      '\n' +
      '    private static final boolean isSemanticAction(int x)\n' +
      '    {\n' +
      '        return x >= FIRST_SEMANTIC_ACTION;\n' +
      '    }\n' +
      ''
    )
  }

  private emitDriver(parserOptions: Options): string {
    const scannerName: string = parserOptions.scannerName
    const semanName: string = parserOptions.semanticName

    return (
      (parserOptions.useASTLib ? '    public Node parse(' : '    public void parse(') +
      scannerName +
      ' scanner' +
      (parserOptions.useASTLib ?
      ''
      :
      ', ' +
      semanName +
      ' semanticAnalyser'
      ) +
      ') throws LexicalError, SyntacticError, SemanticError\n' +
      '    {\n' +
      '        this.scanner = scanner;\n' +
      (parserOptions.useASTLib ? '' : '        this.semanticAnalyser = semanticAnalyser;\n') +
      '\n' +
      '        stack.clear();\n' +
      '        stack.push(DOLLAR);\n' +
      '        stack.push(START_SYMBOL);\n' +
      (parserOptions.useASTLib ?
      '        this.forest.push(new Node(new Token(EPSILON, "", 0)));\n'
      :
      ''
      ) +
      '\n' +
      '        currentToken = scanner.nextToken();\n' +
      '\n' +
      '        while ( ! step() )\n' +
      '            ;\n' +
      (parserOptions.useASTLib ?
      '\n        return this.forest.pop().kidnap(0);\n'
      :
      '') +
      '    }\n' +
      ''
    )
  }

  private emitStep(options: Options): string {
    return (
      '    private boolean step() throws LexicalError, SyntacticError, SemanticError\n' +
      '    {\n' +
      '        if (currentToken == null)\n' +
      '        {\n' +
      '            int pos = 0;\n' +
      '            if (previousToken != null)\n' +
      '                pos = previousToken.getPosition()+previousToken.getLexeme().length();\n' +
      '\n' +
      '            currentToken = new Token(DOLLAR, "$", pos);\n' +
      '        }\n' +
      '\n' +
      '        int x = stack.pop();\n' +
      '        int a = currentToken.getId();\n' +
      '\n' +
      '        if (x == EPSILON)\n' +
      '        {\n' +
      (options.useASTLib ?
      '            this.depopulateForest(new Node(new Token(EPSILON, "", 0)));\n':'')+
      '            return false;\n' +
      '        }\n' +
      '        else if (isTerminal(x))\n' +
      '        {\n' +
      (options.useASTLib ?
      '            this.depopulateForest(new Node(currentToken));\n':'')+
      '            if (x == a)\n' +
      '            {\n' +
      '                if (stack.empty())\n' +
      '                    return true;\n' +
      '                else\n' +
      '                {\n' +
      '                    previousToken = currentToken;\n' +
      '                    currentToken = scanner.nextToken();\n' +
      '                    return false;\n' +
      '                }\n' +
      '            }\n' +
      '            else\n' +
      '            {\n' +
      '                throw new SyntacticError(PARSER_ERROR[x], currentToken.getPosition());\n' +
      '            }\n' +
      '        }\n' +
      '        else if (isNonTerminal(x))\n' +
      '        {\n' +
      '            if (pushProduction(x, a))\n' +
      '                return false;\n' +
      '            else\n' +
      '                throw new SyntacticError(PARSER_ERROR[x], currentToken.getPosition());\n' +
      '        }\n' +
      '        else // isSemanticAction(x)\n' +
      '        {\n' +
      (options.useASTLib ?
      '            this.depopulateForest(new Node(x - FIRST_SEMANTIC_ACTION, previousToken));\n'
      :
      '            semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);\n'
      )+
      '            return false;\n' +
      '        }\n' +
      '    }\n' +
      '\n' +
      '    private boolean pushProduction(int topStack, int tokenInput)\n' +
      '    {\n' +
      '        int p = PARSER_TABLE[topStack-FIRST_NON_TERMINAL][tokenInput-1];\n' +
      '        if (p >= 0)\n' +
      '        {\n' +
      '            int[] production = PRODUCTIONS[p];\n' +
      '            //empilha a produção em ordem reversa\n' +
      '            for (int i=production.length-1; i>=0; i--)\n' +
      '            {\n' +
      '                stack.push(production[i]);\n' +
      '            }\n' +
      (options.useASTLib ?
      '            this.forest.push(new Node(NonTerm.getNonTermFromIndex(topStack)));\n'+
      '            this.nodect.push(production.length);\n'
      :
      '')+
      '            return true;\n' +
      '        }\n' +
      '        else\n' +
      '            return false;\n' +
      '    }\n' +
      ''
    )
  }

  private async emitRecursiveDecendantClass(g: Grammar, parserOptions: Options): Promise<string> {
    // throws NotLLException
    const tables = await new LLParser(g).generateTable()
    const rd: RecursiveDescendent = new RecursiveDescendent(tables, g)

    const result: string[] = []

    const classname: string = parserOptions.parserName
    result.push('public class ')
    result.push(classname)
    result.push(' implements Constants\n{\n')

    const scannerName: string = parserOptions.scannerName
    const semanName: string = parserOptions.semanticName

    const variables =
      '    private Token currentToken;\n' +
      '    private Token previousToken;\n' +
      '    private ' +
      scannerName +
      ' scanner;\n' +
      '    private ' +
      semanName +
      ' semanticAnalyser;\n' +
      '\n'

    result.push(variables)

    result.push(
      '    public void parse(' +
        scannerName +
        ' scanner, ' +
        semanName +
        ' semanticAnalyser) throws AnalysisError\n' +
        '    {\n' +
        '        this.scanner = scanner;\n' +
        '        this.semanticAnalyser = semanticAnalyser;\n' +
        '\n' +
        '        currentToken = scanner.nextToken();\n' +
        '        if (currentToken == null)\n' +
        '            currentToken = new Token(DOLLAR, "$", 0);\n' +
        '\n' +
        '        ' +
        rd.getStart() +
        '();\n' +
        '\n' +
        '        if (currentToken.getId() != DOLLAR)\n' +
        '            throw new SyntacticError(PARSER_ERROR[DOLLAR], currentToken.getPosition());\n' +
        '    }\n' +
        '\n' +
        '    private void match(int token) throws AnalysisError\n' +
        '    {\n' +
        '        if (currentToken.getId() == token)\n' +
        '        {\n' +
        '            previousToken = currentToken;\n' +
        '            currentToken = scanner.nextToken();\n' +
        '            if (currentToken == null)\n' +
        '            {\n' +
        '                int pos = 0;\n' +
        '                if (previousToken != null)\n' +
        '                    pos = previousToken.getPosition()+previousToken.getLexeme().length();\n' +
        '\n' +
        '                currentToken = new Token(DOLLAR, "$", pos);\n' +
        '            }\n' +
        '        }\n' +
        '        else\n' +
        '            throw new SyntacticError(PARSER_ERROR[token], currentToken.getPosition());\n' +
        '    }\n' +
        '\n'
    )

    const funcs: Map<string, FunctionCustom> = rd.build()

    for (let symb = g.FIRST_NON_TERMINAL; symb < g.FIRST_SEMANTIC_ACTION(); symb++) {
      const name: string = rd.getSymbols(symb)
      const f: FunctionCustom | undefined = funcs.get(name)

      result.push(
        '    private void ' +
          name +
          '() throws AnalysisError\n' +
          '    {\n' +
          '        switch (currentToken.getId())\n' +
          '        {\n'
      )

      if (f == undefined) throw new NotLLException('Gramática não é LL.')

      const keys = Array.from(f.input.keys())
      let pushed: Set<number> = new Set()

      for (let i = 0; i < keys.length; i++) {
        const rhs = f.input.get(keys[i])
        let token = keys[i]

        if (pushed.has(token)) continue

        result.push('            case ' + token + ': // ' + rd.getSymbols(token) + '\n')

        pushed.add(token)

        for (let j = i + 1; j < keys.length; j++) {
          const rhs2 = f.input.get(keys[j])
          if (rhs2 === rhs) {
            token = keys[j]
            if (pushed.has(token)) continue
            result.push('            case ' + token + ': // ' + rd.getSymbols(token) + '\n')
            pushed.add(token)
          }
        }

        if (rhs === undefined) throw new NotLLException('Gramática não é LL.')

        if (rhs.length == 0) result.push('                // EPSILON\n')

        for (let k = 0; k < rhs.length; k++) {
          const s = rhs[k]
          if (g.isTerminal(s)) {
            result.push('                match(' + s + '); // ' + rd.getSymbols(s) + '\n')
          } else if (g.isNonTerminal(s)) {
            result.push('                ' + rd.getSymbols(s) + '();\n')
          } //isSemanticAction(s)
          else {
            result.push(
              '                semanticAnalyser.executeAction(' +
                (s - g.FIRST_SEMANTIC_ACTION()) +
                ', previousToken);\n'
            )
          }
        }

        result.push('                break;\n')
      }

      result.push(
        '            default:\n' +
          '                throw new SyntacticError(PARSER_ERROR[' +
          f.lhs +
          '], currentToken.getPosition());\n' +
          '        }\n' +
          '    }\n' +
          '\n'
      )
    }

    result.push('}\n')

    return result.join('')
  }

  private generateSemanticAnalyser(options: Options): string {
    const result: string[] = []

    const package_: string = options.pkgName
    if (package_ != null && !(package_ === '')) result.push('package ' + package_ + ';\n')

    const cls =
      'public class ' +
      options.semanticName +
      ' implements Constants\n' +
      '{\n' +
      '    public void executeAction(int action, Token token)	throws SemanticError\n' +
      '    {\n' +
      '        System.out.println("Ação #"+action+", Token: "+token);\n' +
      '    }	\n' +
      '}\n' +
      ''

    result.push(cls)

    return result.join('')
  }
}

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
