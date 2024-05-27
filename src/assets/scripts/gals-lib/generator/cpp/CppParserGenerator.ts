import { SyntaticError } from "../../analyser/SystemErros";
import { Options } from "../Options";
import { FunctionCustom, RecursiveDescendent } from "../RecursiveDescendent";
import { Grammar } from "../parser/Grammar";

export class CppParserGenerator
{
	private rd: RecursiveDescendent | undefined;
	
	public generate(g: Grammar, options: Options): Map<string, string> //throws NotLLException
	{
		const result: Map<string, string> = new Map();
		
		if (g != null)
		{
		
			const classname: string = options.parserName;
			
			result.set(classname+".h", this.parserH(g, options));
			result.set(classname+".cpp", this.parserCpp(g, options));			
			
			result.set(options.semanticName + ".cpp", this.semanticAnalyserCpp(options));
			result.set(options.semanticName + ".h", this.semanticAnalyserH(options));
		}
		
		return result;
	}

	private openNamespace(options: Options): string
	{
		const namespace: string = options.pkgName;
		
		if (namespace != null && !(namespace === ""))
			return "namespace "+namespace+" {\n\n";
		else
			return "";
	}
	
	private closeNamespace(options: Options): string
	{
		const namespace: string = options.pkgName;
		
		if (namespace != null && !(namespace === ""))
			return "} //namespace "+namespace+"\n\n";
		else
			return "";
	}

	private semanticAnalyserH(options: Options): string
	{
		const classname: string = options.semanticName;
		return "#ifndef "+classname.toUpperCase()+"_H\n"+
			"#define "+classname.toUpperCase()+"_H\n"+
			"\n"+
			"#include \"Token.h\"\n"+
			"#include \"SemanticError.h\"\n"+
			"\n"+
			this.openNamespace(options)+
			"class "+classname+"\n"+
			"{\n"+
			"public:\n"+
			"    void executeAction(int action, const Token *token)\n"+ // throw (SemanticError );\n"+ // Verificar throw
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
	}

	private semanticAnalyserCpp(options: Options): string
	{
		const classname: string = options.semanticName;
		
		return "#include \""+classname+".h\"\n"+
			"#include \"Constants.h\"\n"+
			"\n"+
			"#include <iostream>\n"+
			"\n"+
			this.openNamespace(options)+
			"void "+classname+"::executeAction(int action, const Token *token)\n"+ //throw (SemanticError )\n"+
			"{\n"+
			"    std::cout << \"Ação: \" << action << \", Token: \"  << token->getId() \n"+
			"              << \", Lexema: \" << token->getLexeme() << std::endl;\n"+
			"}\n"+
			"\n"+
			this.closeNamespace(options)+
			"";
	}
	
	private parserH(g: Grammar, options: Options): string //throws NotLLException
	{
		const scannerName: string = options.scannerName;
		const parserName: string = options.parserName;
		const semanticName: string = options.semanticName;
		
		const type: number = options.parser;
		
		const descendant: boolean = type == Options.PARSER_REC_DESC;
		let recDescFuncs: string = "";
		
		if (descendant)
		{
			this.rd = new RecursiveDescendent(g);
			let tmp = "";
			tmp += ( "    void match(int token) throw (AnalysisError);");
			for (let i=g.FIRST_NON_TERMINAL; i<g.FIRST_SEMANTIC_ACTION(); i++)
				tmp += ("    void ") + (this.rd.getSymbols(i)) + ("() throw (AnalysisError);\n");
			recDescFuncs = tmp.toString();
		}
		
		const parser =  
			"#ifndef "+parserName+"_H\n"+
			"#define "+parserName+"_H\n"+
			"\n"+
			"#include \"Constants.h\"\n"+
			"#include \"Token.h\"\n"+
			"#include \""+scannerName+".h\"\n"+
			"#include \""+semanticName+".h\"\n"+
			"#include \"SyntaticError.h\"\n"+
			"\n"+
			(descendant ? "" :
			"#include <stack>\n"+
			"\n")+
			this.openNamespace(options)+
			"class "+parserName+"\n"+
			"{\n"+
			"public:\n"+
			"    "+parserName+"() : previousToken(0), currentToken(0) { }\n"+
			"\n"+
			"    ~"+parserName+"()\n"+
			"    {\n"+
			"        if (previousToken != 0 && previousToken != currentToken) delete previousToken;\n"+
			"        if (currentToken != 0)  delete currentToken;\n"+
			"    }\n"+
			"\n"+			
			"    void parse("+scannerName+" *scanner, "+semanticName+" *semanticAnalyser);\n"+ // throw (AnalysisError)
			"\n"+
			"private:\n"+
			(descendant ? "" :
			"    std::stack<int> stack;\n")+
			"    Token *currentToken;\n"+
			"    Token *previousToken;\n"+
			"    "+scannerName+" *scanner;\n"+
			"    "+semanticName+" *semanticAnalyser;\n"+
			"\n"+
			( descendant ? recDescFuncs :
			"    bool step()\n"+// throw (AnalysisError);\n"+
			(type == Options.PARSER_LL ?
			"    bool pushProduction(int topStack, int tokenInput);\n"+
			"\n"+
			"    static bool isTerminal(int x) { return x < FIRST_NON_TERMINAL; }\n"+
			"    static bool isNonTerminal(int x) { return x >= FIRST_NON_TERMINAL && x < FIRST_SEMANTIC_ACTION; }\n"+
			"    static bool isSemanticAction(int x) { return x >= FIRST_SEMANTIC_ACTION; }\n" : "") )+
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
		return parser;
	}
	
	private parserCpp(g: Grammar, options: Options): string
	{
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				return this.parserCppRecursiveDescendant(g, options);
						
			case Options.PARSER_LL:
				return this.parserCppLL(g, options);
		
			default: //slr, lalar, lr
				return this.parserCppLR(g, options);
		}
	}
	
	private parserCppRecursiveDescendant(g: Grammar, options: Options): string
	{

		if(this.rd == null) throw new SyntaticError("RecursiveDescendent é nulo.");

		const scannerName  = options.scannerName;
		const parserName   = options.parserName;
		const semanticName = options.semanticName;

		const top =  
			"#include \""+parserName+".h\"\n"+			
			"\n"+
			this.openNamespace(options)+
			"void "+parserName+"::parse("+scannerName+" *scanner, "+semanticName+" *semanticAnalyser);\n"+// throw (AnalysisError)\n"+
			"{\n"+
			"    this->scanner = scanner;\n"+
			"    this->semanticAnalyser = semanticAnalyser;\n"+
			"\n"+
			"    if (previousToken != 0 && previousToken != currentToken)\n"+
			"        delete previousToken;\n"+
			"    previousToken = 0;\n"+
			"\n"+
			"    if (currentToken != 0)\n"+
			"        delete currentToken;\n"+
			"    currentToken = scanner->nextToken();\n"+
			"    if (currentToken == 0)\n" +
			"        currentToken = new Token(DOLLAR, \"$\", 0);\n"+
			"\n"+
			"    "+this.rd.getStart()+"();\n"+
			"\n"+
			"    if (currentToken->getId() != DOLLAR)\n"+
			"        throw SyntaticError(PARSER_ERROR[DOLLAR], currentToken->getPosition());\n"+
			"}\n"+
			"\n"+
			
			"void "+parserName+"::match(int token) throw (AnalysisError)\n"+
			"{\n"+
			"    if (currentToken->getId() == token)\n"+
			"    {\n"+
			"        if (previousToken != 0)\n"+
			"            delete previousToken;\n"+
			"        previousToken = currentToken;\n"+
			"        currentToken = scanner->nextToken();\n"+
			"        if (currentToken == 0)\n"+
			"        {\n"+
			"            int pos = 0;\n"+
			"            if (previousToken != 0)\n"+
			"                pos = previousToken->getPosition()+previousToken->getLexeme().size();\n"+
			"\n"+
			"            currentToken = new Token(DOLLAR, \"$\", pos);\n"+
			"        }\n"+
			"    }\n"+
			"    else\n"+
			"        throw SyntaticError(PARSER_ERROR[token], currentToken->getPosition());\n"+
			"}\n";
			
		let bfr = "";
			
		const funcs = this.rd.build();

		for (let symb=g.FIRST_NON_TERMINAL; symb<g.FIRST_SEMANTIC_ACTION(); symb++)
		{
			const name: string = this.rd.getSymbols(symb);
			const f: FunctionCustom | undefined = funcs.get(name); // TODO Vericiar o motivo de erro para tipagem
	
            if(f == undefined) throw new SyntaticError('FunctionCustom é nulo');

			bfr += (
						"\n"+
						"void "+parserName+"::"+name+"()\n"+ // throw (AnalysisError)\n"+
						"{\n"+
						"    switch (currentToken->getId())\n"+
						"    {\n" );

            const keys: number[] = Object.keys(f.input).map(Number); // TODO Verificar comportamento
			
			
			
			for (let i = 0; i<keys.length; i++)
			{
				const rhs: number[] | undefined =  f.input.get(keys[i]);
				let token = keys[i];

				bfr += (
						"        case "+token+": // "+this.rd.getSymbols(token)+"\n");
				for (let j=i+1; j<keys.length; j++)
				{
					const rhs2: number[] | undefined = f.input.get(keys[j]);
					
                    if(rhs == undefined || rhs2 == undefined) throw new SyntaticError('rhs é nulo');
                    
                    if (rhs.sort().toString() == rhs2.sort().toString() )
					{
						token = keys[j];
						bfr += (
						"        case "+token+": // "+this.rd.getSymbols(token)+"\n");
						keys.splice(j, 1)
						j--;
					}
				}
	
				if (rhs?.length == 0){
					bfr += ("            // EPSILON\n");
                }

                if(rhs == undefined) throw new SyntaticError('rhs é nulo');

				for (let k=0; k<rhs.length; k++)
				{
					const s = rhs[k];
					if (g.isTerminal(s))
					{
						bfr += (
						"            match("+s+"); // "+this.rd.getSymbols(s)+"\n");	
					}
					else if (g.isNonTerminal(s))
					{
						bfr += (
						"            "+this.rd.getSymbols(s)+"();\n");	
					}
					else //isSemanticAction(s)
					{
						bfr += (
						"            semanticAnalyser->executeAction("+(s-g.FIRST_SEMANTIC_ACTION())+", previousToken);\n");
					}
				}
	
				bfr += (
						"            break;\n");
			}

			bfr += (
						"        default:\n"+
						"            throw SyntaticError(PARSER_ERROR["+f.lhs+"], currentToken->getPosition());\n"+
						"    }\n"+
						"}\n" );
		}
			
			
		const bottom = 
			"\n"+
			this.closeNamespace(options)+
			"";
			
		return top + bfr.toString() + bottom;			
	}
	
	private parserCppLL(g: Grammar, options: Options): string
	{
		const scannerName  = options.scannerName;
		const parserName   = options.parserName;
		const semanticName = options.semanticName;
		
		return "#include \""+parserName+".h\"\n"+			
			"\n"+
			this.openNamespace(options)+
			"void "+parserName+"::parse("+scannerName+" *scanner, "+semanticName+" *semanticAnalyser);\n"+// throw (AnalysisError)\n"+
			"{\n"+
			"    this->scanner = scanner;\n"+
			"    this->semanticAnalyser = semanticAnalyser;\n"+
			"\n"+
			"    //Limpa a pilha\n"+
    		"    while (! stack.empty())\n"+
        	"        stack.pop();\n"+
        	"\n"+
			"    stack.push(DOLLAR);\n"+
			"    stack.push(START_SYMBOL);\n"+
			"\n"+
			"    if (previousToken != 0 && previousToken != currentToken)\n"+
			"        delete previousToken;\n"+
			"    previousToken = 0;\n"+
			"\n"+
			"    if (currentToken != 0)\n"+
			"        delete currentToken;\n"+
			"    currentToken = scanner->nextToken();\n"+
			"\n"+
			"    while ( ! step() )\n"+
			"        ;\n"+
			"}\n"+
			"\n"+
			"bool "+parserName+"::step()\n"+ // throw (AnalysisError)\n"+
			"{\n"+
			"    if (currentToken == 0) //Fim de Sentenca\n"+
			"    {\n"+
			"        int pos = 0;\n"+
			"        if (previousToken != 0)\n"+
			"            pos = previousToken->getPosition() + previousToken->getLexeme().size();\n"+
			"\n"+
			"        currentToken = new Token(DOLLAR, \"$\", pos);\n"+
			"    }\n"+
			"\n"+
			"    int a = currentToken->getId();\n"+
			"    int x = stack.top();\n"+
			"\n"+
			"    stack.pop();\n"+
			"\n"+
			"    if (x == EPSILON)\n"+
			"    {\n"+
			"        return false;\n"+
			"    }\n"+
			"    else if (isTerminal(x))\n"+
			"    {\n"+
			"        if (x == a)\n"+
			"        {\n"+
			"            if (stack.empty())\n"+
			"                return true;\n"+
			"            else\n"+
			"            {\n"+
			"                if (previousToken != 0)\n"+
			"                    delete previousToken;\n"+
			"                previousToken = currentToken;\n"+
			"                currentToken = scanner->nextToken();\n"+
			"                return false;\n"+
			"            }\n"+
			"        }\n"+
			"        else\n"+
			"        {\n"+
			"            throw SyntaticError(PARSER_ERROR[x], currentToken->getPosition());\n"+
			"        }\n"+
			"    }\n"+
			"    else if (isNonTerminal(x))\n"+
			"    {\n"+
			"        if (pushProduction(x, a))\n"+
			"            return false;\n"+
			"        else\n"+
			"            throw SyntaticError(PARSER_ERROR[x], currentToken->getPosition());\n"+
			"    }\n"+
			"    else // isSemanticAction(x)\n"+
			"    {\n"+
			"        semanticAnalyser->executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);\n"+
			"        return false;\n"+
			"    }\n"+
			"}\n"+
			"\n"+
			"bool "+parserName+"::pushProduction(int topStack, int tokenInput)\n"+
			"{\n"+
			"    int p = PARSER_TABLE[topStack-FIRST_NON_TERMINAL][tokenInput-1];\n"+
			"    if (p >= 0)\n"+
			"    {\n"+
			"        int *production = PRODUCTIONS[p];\n"+
			"        //empilha a produção em ordem reversa\n"+
			"        int length = production[0];\n"+
			"        for (int i=length; i>=1; i--)\n"+
			"        {\n"+
			"            stack.push( production[i] );\n"+
			"        }\n"+
			"        return true;\n"+
			"    }\n"+
			"    else\n"+
			"        return false;\n"+
			"}\n"+
			"\n"+
			this.closeNamespace(options)+
			"";
	}
	
	private parserCppLR(g: Grammar, options: Options): string
	{
		const scannerName  = options.scannerName;
		const parserName   = options.parserName;
		const semanticName = options.semanticName;

		return "#include \""+parserName+".h\"\n"+			
			"\n"+
			this.openNamespace(options)+
			"void "+parserName+"::parse("+scannerName+" *scanner, "+semanticName+" *semanticAnalyser)\n"+// throw (AnalysisError)\n"+
			"{\n"+
			"    this->scanner = scanner;\n"+
			"    this->semanticAnalyser = semanticAnalyser;\n"+
			"\n"+
			"    //Limpa a pilha\n"+
			"    while (! stack.empty())\n"+
			"        stack.pop();\n"+
			"\n"+
			"    stack.push(0);\n"+
			"\n"+
			"    if (previousToken != 0 && previousToken != currentToken)\n"+
			"        delete previousToken;\n"+
			"    previousToken = 0;\n"+
			"\n"+
			"    if (currentToken != 0)\n"+
			"        delete currentToken;\n"+
			"    currentToken = scanner->nextToken();\n"+
			"\n"+
			"    while ( ! step() )\n"+
			"        ;\n"+
			"}\n"+
			"\n"+
			"bool "+parserName+"::step()\n"+// throw (AnalysisError)\n"+
			"{\n"+
			"    if (currentToken == 0) //Fim de Sentensa\n"+
			"    {\n"+
			"        int pos = 0;\n"+
			"        if (previousToken != 0)\n"+
			"            pos = previousToken->getPosition() + previousToken->getLexeme().size();\n"+
			"\n"+
			"        currentToken = new Token(DOLLAR, \"$\", pos);\n"+
			"    }\n"+
			"\n"+
			
			"    int token = currentToken->getId();\n"+
			"    int state = stack.top();\n"+
			"\n"+
			"    const int* cmd = PARSER_TABLE[state][token-1];\n"+
			"\n"+
			"    switch (cmd[0])\n"+
			"    {\n"+
			"        case SHIFT:\n"+
			"        {\n"+
			"            stack.push(cmd[1]);\n"+
			
			"            if (previousToken != 0)\n"+
			"                delete previousToken;\n"+
			"            previousToken = currentToken;\n"+
			"            currentToken = scanner->nextToken();\n"+
			"            return false;\n"+
			"        }\n"+
			"        case REDUCE:\n"+
			"        {\n"+
			"            const int* prod = PRODUCTIONS[cmd[1]];\n"+
			"\n"+
			"            for (int i=0; i<prod[1]; i++)\n"+
			"                stack.pop();\n"+
			"\n"+
			"            int oldState = stack.top();\n"+
			"            stack.push(PARSER_TABLE[oldState][prod[0]-1][1]);\n"+
			"            return false;\n"+
			"        }\n"+
			"        case ACTION:\n"+
			"        {\n"+
			"            int action = FIRST_SEMANTIC_ACTION + cmd[1] - 1;\n"+
			"            stack.push(PARSER_TABLE[state][action][1]);\n"+
			"            semanticAnalyser->executeAction(cmd[1], previousToken);\n"+
			"            return false;\n"+
			"        }\n"+
			"        case ACCEPT:\n"+
			"            return true;\n"+
			"\n"+
			"        case ERROR:\n"+
			"            throw SyntaticError(PARSER_ERROR[state], currentToken->getPosition());\n"+
			"    }\n"+
			"    return false;\n"+
			"}\n"+
			"\n"+
			this.closeNamespace(options)+
			"";
	}
}
