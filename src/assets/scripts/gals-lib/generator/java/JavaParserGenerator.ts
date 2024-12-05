import { NotLLException, SyntacticError } from "../../analyser/SystemErros";
import { Options } from "../Options";
import { FunctionCustom, RecursiveDescendent } from "../RecursiveDescendent";
import { Grammar } from "../parser/Grammar";

export class JavaParserGenerator{

	public generate(g: Grammar, options: Options): Map<string, string> // throws NotLLException
	{
		const result: Map<string, string> = new Map();
		
		if (g != null)
		{		
			const classname: string = options.parserName;
			
			let parser: string | null;
			
			switch (options.parser)
			{
				case Options.PARSER_REC_DESC:
					parser = this.buildRecursiveDecendantParser(g, options);
					break;
				case Options.PARSER_LL:
					parser = this.buildLLParser(g, options);
					break;
				case Options.PARSER_SLR:
				case Options.PARSER_LALR:
				case Options.PARSER_LR:	
					parser = this.buildLRParser(g, options);
					break;
				default:
					parser = null;
			}
			
            if(parser === null) throw new SyntacticError("String do Parser é nulo.");

			result.set(classname+".java", parser);
			
			result.set(options.semanticName + ".java", this.generateSemanticAnalyser(options));
		}
		
		return result;
	}

    private buildRecursiveDecendantParser(g: Grammar, parserOptions: Options) : string //throws NotLLException
	{
        const result: string[] = [];
	
		const package_: string = parserOptions.pkgName;
	
		result.push(this.emitPackage(package_));
	
		result.push(this.emitRecursiveDecendantClass(g, parserOptions));
	
		return result.join("'");
	}

    
	private buildLLParser(g: Grammar , parserOptions: Options ): string
	{
		const result: string[] = [];
		
		const package_: string = parserOptions.pkgName;
		
		result.push(this.emitPackage(package_));
		
		result.push(this.emitImports());
		
		result.push(this.emitLLClass(g, parserOptions));
		
		return result.join("");
	}

	private buildLRParser(g: Grammar , parserOptions: Options ): string
	{
		const result: string[] = [];
	
		const package_: string = parserOptions.pkgName;
	
		result.push(this.emitPackage(package_));
	
		result.push(this.emitImports());
	
		result.push(this.emitLRClass(g, parserOptions));
	
		return result.join("");
	}

	private emitPackage(package_: string): string
	{
		if (package_ != null && !(package_ === ""))
			return "package " + package_ + ";\n";
		else
			return "";
	}

	private emitImports(): string
	{
		return(
			"import java.util.Stack;\n"+
			"\n");
	}

	private emitLRClass(g: Grammar , parserOptions: Options ): string
	{
		const result: string[] = [];
	
		const classname: string = parserOptions.parserName;
		result.push("public class ");
        result.push(classname);
        result.push(" implements Constants\n{\n");
	
		const scannerName: string = parserOptions.scannerName;
		const semanName: string = parserOptions.semanticName;
	
		const variables: string = 
		"    private final Stack<Integer> stack = new Stack<Integer>();\n"+
		"    private Token currentToken;\n"+
		"    private Token previousToken;\n"+
		"    private "+scannerName+" scanner;\n"+
		"    private "+semanName+" semanticAnalyser;\n"+
		"\n";
		
		result.push(variables);
			
		result.push(
      '    public void parse(' +
        scannerName +
        ' scanner, ' +
        semanName +
        ' semanticAnalyser) throws LexicalError, SyntacticError, SemanticError\n' +
        '    {\n' +
        '        this.scanner = scanner;\n' +
        '        this.semanticAnalyser = semanticAnalyser;\n' +
        '\n' +
        '        stack.clear();\n' +
//        '        stack.push(new Integer(0));\n' + // JDK Antigo - deprecated
        '        stack.push(0);\n' +
        '\n' +
        '        currentToken = scanner.nextToken();\n' +
        '\n' +
        '        while ( ! step() )\n' +
        '            ;\n' +
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
        //'                stack.push(new Integer(cmd[1]));\n' + // JDK Antigo - deprecated
        '                stack.push(cmd[1]);\n' +
        '                previousToken = currentToken;\n' +
        '                currentToken = scanner.nextToken();\n' +
        '                return false;\n' +
        '\n' +
        '            case REDUCE:\n' +
        '                int[] prod = PRODUCTIONS[cmd[1]];\n' +
        '\n' +
        '                for (int i=0; i<prod[1]; i++)\n' +
        '                    stack.pop();\n' +
        '\n' +
        '                int oldState = stack.peek();\n' +
//        '                stack.push(new Integer(PARSER_TABLE[oldState][prod[0]-1][1]));\n' + // JDK Antigo - deprecated
        '                stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);\n' +
        '                return false;\n' +
        '\n' +
        '            case ACTION:\n' +
        '                int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;\n' +
//        '                stack.push(new Integer(PARSER_TABLE[state][action][1]));\n' + // JDK Antigo - deprecated
        '                stack.push(PARSER_TABLE[state][action][1]);\n' +
        '                semanticAnalyser.executeAction(cmd[1], previousToken);\n' +
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
		result.push("}\n");

		return result.join("");
	}

	private emitLLClass(g: Grammar , parserOptions: Options ): string
	{
		const result: string[] = [];
		
		const classname: string = parserOptions.parserName;
		result.push("public class ");
        result.push(classname);
        result.push(" implements Constants\n{\n");
		
		const scannerName: string = parserOptions.scannerName;
		const semanName: string = parserOptions.semanticName;
		
		const variables = 
		"    private final Stack<Integer> stack = new Stack<Integer>();\n"+
		"    private Token currentToken;\n"+
		"    private Token previousToken;\n"+
		"    private "+scannerName+" scanner;\n"+
		"    private "+semanName+" semanticAnalyser;\n"+
		"\n";
		
		result.push(variables);
				
		result.push(this.emitLLFunctions(parserOptions));
		
		result.push("}\n");

		return result.join("");
	}

	private emitLLFunctions(parserOptions: Options ): string
	{
		const result: string[] = [];
		
		result.push(this.emitTesters());
		
		result.push("\n");
		
		result.push(this.emitStep());
		
		result.push("\n");
		
		result.push(this.emitDriver(parserOptions));
		
		
		return	result.join("");
	}

	private emitTesters(): string
	{
		return (
		"    private static final boolean isTerminal(int x)\n"+
		"    {\n"+
		"        return x < FIRST_NON_TERMINAL;\n"+
		"    }\n"+
		"\n"+
		"    private static final boolean isNonTerminal(int x)\n"+
		"    {\n"+
		"        return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION;\n"+
		"    }\n"+
		"\n"+
		"    private static final boolean isSemanticAction(int x)\n"+
		"    {\n"+
		"        return x >= FIRST_SEMANTIC_ACTION;\n"+
		"    }\n"+
		"");
	}
	
	private emitDriver(parserOptions: Options ): string
	{
		const scannerName: string = parserOptions.scannerName;
		const semanName: string   = parserOptions.semanticName;
				
		return (
      '    public void parse(' +
      scannerName +
      ' scanner, ' +
      semanName +
      ' semanticAnalyser) throws LexicalError, SyntacticError, SemanticError\n' +
      '    {\n' +
      '        this.scanner = scanner;\n' +
      '        this.semanticAnalyser = semanticAnalyser;\n' +
      '\n' +
      '        stack.clear();\n' +
//      '        stack.push(new Integer(DOLLAR));\n' + // JDK Antigo - deprecated
//      '        stack.push(new Integer(START_SYMBOL));\n' + // JDK Antigo - deprecated
      '        stack.push(DOLLAR);\n' +
      '        stack.push(START_SYMBOL);\n' +
      '\n' +
      '        currentToken = scanner.nextToken();\n' +
      '\n' +
      '        while ( ! step() )\n' +
      '            ;\n' +
      '    }\n' +
      ''
    )
	}

	private emitStep(): string
	{
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
      '            return false;\n' +
      '        }\n' +
      '        else if (isTerminal(x))\n' +
      '        {\n' +
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
      '            semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);\n' +
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
//      '                stack.push(new Integer(production[i]));\n' + // JDK Antigo - deprecated
      '                stack.push(production[i]);\n' +
      '            }\n' +
      '            return true;\n' +
      '        }\n' +
      '        else\n' +
      '            return false;\n' +
      '    }\n' +
      ''
    )
	}
	
	private emitRecursiveDecendantClass(g: Grammar , parserOptions: Options ): string // throws NotLLException
	{
		const rd: RecursiveDescendent = new RecursiveDescendent(g);
		
		const result: string[] = [];

		const classname: string = parserOptions.parserName;
		result.push("public class ");
        result.push(classname);
        result.push(" implements Constants\n{\n");

		const scannerName: string = parserOptions.scannerName;
		const semanName: string = parserOptions.semanticName;

		const variables = 
		"    private Token currentToken;\n"+
		"    private Token previousToken;\n"+
		"    private "+scannerName+" scanner;\n"+
		"    private "+semanName+" semanticAnalyser;\n"+
		"\n";
	
		result.push(variables);
		
		result.push(	
		"    public void parse("+scannerName+" scanner, "+semanName+" semanticAnalyser) throws AnalysisError\n"+
		"    {\n"+
		"        this.scanner = scanner;\n"+
		"        this.semanticAnalyser = semanticAnalyser;\n"+
		"\n"+
		"        currentToken = scanner.nextToken();\n"+
		"        if (currentToken == null)\n"+
		"            currentToken = new Token(DOLLAR, \"$\", 0);\n"+
		"\n"+
		"        "+rd.getStart()+"();\n"+
		"\n"+
		"        if (currentToken.getId() != DOLLAR)\n"+
		"            throw new SyntacticError(PARSER_ERROR[DOLLAR], currentToken.getPosition());\n"+
		"    }\n"+		
		"\n"+
		"    private void match(int token) throws AnalysisError\n"+
		"    {\n"+
		"        if (currentToken.getId() == token)\n"+
		"        {\n"+
		"            previousToken = currentToken;\n"+
		"            currentToken = scanner.nextToken();\n"+
		"            if (currentToken == null)\n"+
		"            {\n"+
		"                int pos = 0;\n"+
		"                if (previousToken != null)\n"+
		"                    pos = previousToken.getPosition()+previousToken.getLexeme().length();\n"+
		"\n"+
		"                currentToken = new Token(DOLLAR, \"$\", pos);\n"+
		"            }\n"+
		"        }\n"+
		"        else\n"+
		"            throw new SyntacticError(PARSER_ERROR[token], currentToken.getPosition());\n"+
		"    }\n"+
		"\n");

		const funcs: Map<string, FunctionCustom> = rd.build();

		for (let symb=g.FIRST_NON_TERMINAL; symb<g.FIRST_SEMANTIC_ACTION(); symb++)
		{
			const name: string = rd.getSymbols(symb);
			const f: FunctionCustom | undefined = funcs.get(name);
			
			result.push(
						"    private void "+name+"() throws AnalysisError\n"+
						"    {\n"+
						"        switch (currentToken.getId())\n"+
						"        {\n" );

			if(f == undefined) throw new NotLLException("Gramática não é LL.");

			const keys = Array.from(f.input.keys());
					
			for (let i = 0; i<keys.length; i++)
			{
				const rhs = f.input.get(keys[i]);
				let token = keys[i];
	
				result.push(
						"            case "+token+": // "+rd.getSymbols(token)+"\n");
				for (let j=i+1; j<keys.length; j++)
				{
					const rhs2 = f.input.get(keys[j]);
					if (rhs2 === rhs)
					{
						token = keys[j];
						result.push(
						"            case "+token+": // "+rd.getSymbols(token)+"\n");
						keys.slice(j, j);
						j--;
					}
				}
				
        if(rhs === undefined) throw new NotLLException("Gramática não é LL.");

				if (rhs.length == 0)
					result.push(
						"                // EPSILON\n");	
			
                        
				for (let k=0; k< rhs.length; k++)
				{
					const s = rhs[k];
					if (g.isTerminal(s))
					{
						result.push(
						"                match("+s+"); // "+rd.getSymbols(s)+"\n");	
					}
					else if (g.isNonTerminal(s))
					{
						result.push(
						"                "+rd.getSymbols(s)+"();\n");	
					}
					else //isSemanticAction(s)
					{
						result.push(
						"                semanticAnalyser.executeAction("+(s-g.FIRST_SEMANTIC_ACTION())+", previousToken);\n");
					}
				}
			
				result.push(
						"                break;\n");
			}

			result.push(
						"            default:\n"+
						"                throw new SyntacticError(PARSER_ERROR["+f.lhs+"], currentToken.getPosition());\n"+
						"        }\n"+
						"    }\n"+
						"\n");
		}
		
		result.push("}\n");

		return result.join("");
	}
	
	private generateSemanticAnalyser(options: Options): string
	{
		const result: string[] = [];
		
		const package_: string = options.pkgName;
		if (package_ != null && !(package_ === ("")))
			result.push("package " + package_ + ";\n");
			
		const cls = 
		"public class "+options.semanticName+" implements Constants\n"+
		"{\n"+
		"    public void executeAction(int action, Token token)	throws SemanticError\n"+
		"    {\n"+
		"        System.out.println(\"Ação #\"+action+\", Token: \"+token);\n"+
		"    }	\n"+
		"}\n"+
		"";
		
		result.push(cls);
		
		return result.join("");
	}

}