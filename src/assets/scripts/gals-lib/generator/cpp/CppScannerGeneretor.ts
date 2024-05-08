import { List } from "../../DataStructures";
import { FiniteAutomata } from "../FiniteAutomata";
import { Options } from "../Options";

/**
 * @author Gesser
 */

export class CppScannerGeneretor
{
	private sensitive = true;
	private lookup = true;
	
	public generate(fa: FiniteAutomata, options: Options): Map<string, string>
	{		
        const result: Map<string, string> = new Map();
		
		const classname: string = options.scannerName;
		
		let scannerH: string;
		let scannerCpp: string;
		
		if (fa != null)
		{
			this.sensitive = options.scannerCaseSensitive;
			this.lookup = fa.specialCases.length > 0;
		 	scannerH = this.buildScannerH(fa, options);
		 	scannerCpp = this.buildScannerCpp(fa, options);
		}
		else
		{
			scannerH = this.buildEmptyScannerH(options);
			scannerCpp = this.buildEmptyScannerCpp(options);
		}
		
		result.set(classname+".h", scannerH);
		result.set(classname+".cpp", scannerCpp);
		
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
	
	private buildScannerH(fa: FiniteAutomata, options: Options): string
	{
		let result = "";
		
		const classname: string = options.scannerName;
		
		let inType:string | null;
		let inInc:string | null;
		let constr:string | null;
		
		if(options.input == Options.INPUT_STREAM)
		{
			inType = "std::istream &";
			inInc = "#include <iostream>\n";
			constr = 
				"    "+classname+"("+inType+"input) { setInput(input); }\n"+
				"    "+classname+"() : input(\"\"), position(0) { }\n";
		}
		else if(options.input == Options.INPUT_STRING)
		{
			inType = "const char *";
			inInc = "";
			constr = 
				"    "+classname+"("+inType+"input = \"\") { setInput(input); }\n";
		}
		else
		{
			inType = null;
			inInc = null;
			constr = null;
		}
		
		result += ("#ifndef ") + (classname.toUpperCase()) + ("_H\n");
		result += ("#define ") + (classname.toUpperCase()) + ("_H\n");

		result += (
			"\n"+
			"#include \"Token.h\"\n"+
			"#include \"LexicalError.h\"\n"+
			"\n"+
			"#include <string>\n"+
			inInc+
			"\n" );
			
		result += (this.openNamespace(options));
		
		const cls = 
			"class "+classname+"\n"+
			"{\n"+
			"public:\n"+
			constr+
			"\n"+
			"    void setInput("+inType+"input);\n"+
			"    void setPosition(unsigned pos) { position = pos; }\n"+
			"    Token *nextToken() throw (LexicalError);\n"+
			"\n"+
    		"private:\n"+
			"    unsigned position;\n"+
			"    std::string input;\n"+
			"\n"+
			"    int nextState(unsigned char c, int state) const;\n"+
			"    TokenId tokenForState(int state) const;\n"+
		    (this.lookup?
			"    TokenId lookupToken(TokenId base, const std::string &key);\n":"")+
    		"\n"+
			"    bool hasInput() const { return position < input.size(); }\n"+
			"    char nextChar() { return hasInput() ? input[position++] : (char) -1; }\n"+
			"};\n"+

			"\n";
			
		result += (cls);
			
		result += (this.closeNamespace(options));
		
		result += ("#endif\n");
				
		return result.toString();
	}

	private buildScannerCpp(fa: FiniteAutomata, options: Options): string
	{
		let result = "";
		
		const classname: string = options.scannerName;
		
		result += ("#include \""+classname+".h\"\n\n");
		
		if (!this.sensitive)
			result += ("#include <cctype>\n\n");
		
		result += (this.openNamespace(options));
		
		let inType: string | null;
		let inInit: string | null;
		if(options.input == Options.INPUT_STREAM)
		{
			inType = "std::istream &";
			inInit = 
			"    std::istreambuf_iterator<char> in(input);\n"+
			"    std::istreambuf_iterator<char> eof;\n"+
			"\n"+
			"    this->input.assign(in, eof);\n"+
			"\n"+
			"";
		}
		else if(options.input == Options.INPUT_STRING)
		{
			inType = "const char *";
			inInit = "    this->input = input;\n";
		}
		else
		{
			inType = null;
			inInit = null;
		}
		
		const funcs = 
			"void "+classname+"::setInput("+inType+"input)\n"+
			"{\n"+
			inInit+
			"    setPosition(0);\n"+
			"}\n"+
			"\n"+
			"Token *"+classname+"::nextToken() throw (LexicalError)\n"+
			"{\n"+
			"    if ( ! hasInput() )\n"+
			"        return 0;\n"+
			"\n"+
			"    unsigned start = position;\n"+
			"\n"+
			"    int state = 0;\n"+
			"    int oldState = 0;\n"+
			"    int endState = -1;\n"+
			"    int end = -1;\n"+
			(fa.hasContext() ?
			"    int ctxtState = -1;\n"+
			"    int ctxtEnd = -1;\n" : "")+
			"\n"+
			"    while (hasInput())\n"+
			"    {\n"+
			"        oldState = state;\n"+
			"        state = nextState(nextChar(), state);\n"+
			"\n"+
			"        if (state < 0)\n"+
			"            break;\n"+
			"\n"+
			"        else\n"+
			"        {\n"+
			"            if (tokenForState(state) >= 0)\n"+
			"            {\n"+
			"                endState = state;\n"+
			"                end = position;\n"+
			"            }\n"+
			(fa.hasContext() ? 
			"            if (SCANNER_CONTEXT[state][0] == 1)\n" +
			"            {\n" +
			"                ctxtState = state;\n" +
			"                ctxtEnd = position;\n" +
			"            }\n" : "")+
			"        }\n"+
			"    }\n"+
			"    if (endState < 0 || (endState != state && tokenForState(oldState) == -2))\n"+
			"        throw LexicalError(SCANNER_ERROR[oldState], start);\n"+
			"\n"+
			(fa.hasContext() ? 
			"    if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)\n"+
			"        end = ctxtEnd;\n"+
			"\n" : "" )+
			"    position = end;\n"+
			"\n"+
			"    TokenId token = tokenForState(endState);\n"+
			"\n"+
			"    if (token == 0)\n"+
			"        return nextToken();\n"+
			"    else\n"+
			"    {\n"+
			"            std::string lexeme = input.substr(start, end-start);\n"+
			(this.lookup?
			"            token = lookupToken(token, lexeme);\n":"")+
			"            return new Token(token, lexeme, start);\n"+
			"    }\n"+
			"}\n"+
			"\n"+
			"int "+classname+"::nextState(unsigned char c, int state) const\n"+
			"{\n"+
			this.nextStateImpl(fa, options)+
			"}\n"+
			"\n"+
			"TokenId "+classname+"::tokenForState(int state) const\n"+
			"{\n"+
			"    int token = -1;\n"+
			"\n"+
			"    if (state >= 0 && state < STATES_COUNT)\n"+
			"        token = TOKEN_STATE[state];\n"+
			"\n"+
			"    return static_cast<TokenId>(token);\n"+
			"}\n"+
			"\n"+
			(this.lookup ? 
			"TokenId "+classname+"::lookupToken(TokenId base, const std::string &key)\n"+
			"{\n"+			
			"    int start = SPECIAL_CASES_INDEXES[base];\n"+
			"    int end   = SPECIAL_CASES_INDEXES[base+1]-1;\n"+			
			"\n"+
			(this.sensitive?"":
			"    std::string key_u = key;\n"+
			"    for (int i=0; i<key.size(); i++)\n"+
			"        key_u[i] = std::toupper(key_u[i]);\n"+
			"\n")+
			"    while (start <= end)\n"+
			"    {\n"+
			"        int half = (start+end)/2;\n"+
			"        const std::string current = SPECIAL_CASES_KEYS[half];\n"+      
			"\n"+
			(this.sensitive ?
			"        if (current == key)\n" :
			"        if (current == key_u)\n")+
			"            return static_cast<TokenId>(SPECIAL_CASES_VALUES[half]);\n"+
			(this.sensitive ?
			"        else if (current < key)\n" :
			"        else if (current < key_u)\n" )+
			"            start = half+1;\n"+
			"        else  //(current > key)\n"+
			"            end = half-1;\n"+
			"    }\n"+
			"\n"+
			"    return base;\n"+
			"}\n"+
			"\n" : "");
			
		result += (funcs);
			
		result += (this.closeNamespace(options));
		
		return result.toString();
	}

	private nextStateImpl(fa: FiniteAutomata, opt: Options): string
	{
		switch (opt.scannerTable)
		{
			case Options.SCANNER_TABLE_FULL:
			case Options.SCANNER_TABLE_COMPACT:
				return "    int next = SCANNER_TABLE[state][c];\n"+
					"    return next;\n";
			case Options.SCANNER_TABLE_HARDCODE:
			{
				const trans: List<Map<string, number>>  = fa.transitions;
				let casesState = "";
				for (let i=0; i<trans.size(); i++)
				{
					const m = trans.get(i);
					if (m.size == 0)
						continue;
						
					casesState += (
				"        case "+i+":\n"+
				"            switch (c)\n"+
				"            {\n");

                    for (const [key, value] of m.entries()) {
                        const ch = key;
                        const it = value;
                        casesState += `                case ${ch.charCodeAt(0)}: return ${it};\n`;                    
                    }

					casesState += (
				"                default: return -1;\n"+
				"            }\n");
				}

				return "    switch (state)\n"+
				"    {\n"+
				casesState.toString()+
				"        default: return -1;\n"+
				"    }\n";
			}
			default:
				return ""; // null;
		}
	}
	
	private buildEmptyScannerH(options: Options): string
	{
		let result = "";
		
		const classname: string = options.scannerName;
		
		
		result += ("#ifndef ") + (classname.toUpperCase()) + ("_H\n");
		result += ("#define ") + (classname.toUpperCase()) + ("_H\n");

		result += (
			"\n"+
			"#include \"Token.h\"\n"+
			"#include \"LexicalError.h\"\n"+
			"\n" );
			
		result += (this.openNamespace(options));
		
		const cls = 
			"class "+classname+"\n"+
			"{\n"+
			"public:\n"+
			"\n"+
			"    Token *nextToken() throw (LexicalError);\n"+
			"\n"+
    		"};\n"+
			"\n";
			
		result += (cls);
			
		result += (this.closeNamespace(options));
		
		result += ("#endif\n");
				
		return result.toString();
	}
	
	private buildEmptyScannerCpp(options: Options): string
	{
		let result = "";
		
		const classname: string = options.scannerName;
		
		result += ("#include \""+classname+".h\"\n\n");
		
		result += (this.openNamespace(options));
		
		const funcs = 
			"Token *"+classname+"::nextToken() throw (LexicalError)\n"+
			"{\n"+
			"    return 0;\n"+
			"}\n"+
			"\n";
			
		result += (funcs);
			
		result += (this.closeNamespace(options));
		
		return result.toString();
	}
}
