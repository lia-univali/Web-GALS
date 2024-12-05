import { FiniteAutomata } from "../FiniteAutomata";
import { Options } from "../Options";

export class JavaScannerGenerator
{
	private sensitive = true;
	private lookup = true;
	
	public generate(fa: FiniteAutomata, options: Options): Map<string, string>
	{
    const result: Map<string, string> = new Map();
		
		const classname: string = options.scannerName;
		
		let scanner: string;
		if (fa != null)
		{
			this.sensitive = options.scannerCaseSensitive;
			this.lookup = fa.specialCases.length > 0;
		 	scanner = this.buildScanner(fa, options);
		}
		else
			scanner = this.buildEmptyScanner(options);
		
		result.set(classname+".java", scanner);
		
		return result;
	}

	private buildEmptyScanner(options: Options ): string
	{
		const result: string[] = [];
		
		const package_: string = options.pkgName;
		
		result.push(this.emitPackage(package_));
		
		const cls = 
		"public class "+options.scannerName+" implements Constants\n"+
		"{\n"+
		"    public Token nextToken() throws LexicalError\n"+
		"    {\n"+
		"        return null;\n"+
		"    }\n"+
		"}\n"+
		"";
		
		result.push(cls);
		
		return result.toString();
	}

	private buildScanner(fa: FiniteAutomata, options: Options ): string
	{
		let inType: string;
		let inInit: string;
		let inDef: string;
		if(options.input == Options.INPUT_STREAM)
		{
			inType = "java.io.Reader";
			inInit = 
			        "StringBuffer bfr = new StringBuffer();\n"+
			"        try\n"+
			"        {\n"+
			"            int c = input.read();\n"+			
			"            while (c != -1)\n"+
			"            {\n"+
			"                bfr.append((char)c);\n"+
			"                c = input.read();\n"+
			"            }\n"+
			"            this.input = bfr.toString();\n"+
			"        }\n"+
			"        catch (java.io.IOException e)\n"+
			"        {\n"+
			"            e.printStackTrace();\n"+
			"        }\n"+
			"";
			inDef = "this(new java.io.StringReader(\"\"));";
		}
		else if(options.input == Options.INPUT_STRING)
		{
			inType = "String";
			inInit = "this.input = input;";
			inDef = "this(\"\");";
		}
		else
		{
			//nunca acontece
			inType = "";
			inInit = "";
			inDef  = "";
		}
		
		const package_: string = options.pkgName;
		
		const cls = 
		this.emitPackage(package_)+
		"public class "+options.scannerName+" implements Constants\n"+
		"{\n"+
		"    private int position;\n"+
		"    private String input;\n"+
		"\n"+
		"    public "+options.scannerName+"()\n"+
		"    {\n"+
		"        "+inDef+"\n"+
		"    }\n"+
		"\n"+
		"    public "+options.scannerName+"("+inType+" input)\n"+
		"    {\n"+
		"        setInput(input);\n"+
		"    }\n"+
		"\n"+
		"    public void setInput("+inType+" input)\n"+
		"    {\n"+
		"        "+inInit+"\n"+
		"        setPosition(0);\n"+
		"    }\n"+
		"\n"+
		"    public void setPosition(int pos)\n"+
		"    {\n"+
		"        position = pos;\n"+	
		"    }\n\n"+
		
		this.mainDriver(fa)+
		"\n"+
		this.auxFuncions(fa, options)+
		
		"}\n"+
		"";
		
		return cls;
	}
	
	private emitPackage(package_: string): string
	{
		if (package_ != null && !(package_ === ""))
			return "package " + package_ + ";\n\n";
		else
			return "";
	}
	
	private mainDriver(fa: FiniteAutomata): string
	{
		return (
		"    public Token nextToken() throws LexicalError\n"+
		"    {\n"+
		"        if ( ! hasInput() )\n"+
		"            return null;\n"+
		"\n"+		
		"        int start = position;\n"+
		"\n"+		
		"        int state = 0;\n"+
		"        int lastState = 0;\n"+
		"        int endState = -1;\n"+
		"        int end = -1;\n"+
		(fa.hasContext() ?
		"        int ctxtState = -1;\n"+
		"        int ctxtEnd = -1;\n" : "")+
		"\n"+
		"        while (hasInput())\n"+
		"        {\n"+
		"            lastState = state;\n"+
		"            state = nextState(nextChar(), state);\n"+
		"\n"+
		"            if (state < 0)\n"+
		"                break;\n"+
		"\n"+
		"            else\n"+
		"            {\n"+
		"                if (tokenForState(state) >= 0)\n"+
		"                {\n"+
		"                    endState = state;\n"+
		"                    end = position;\n"+
		"                }\n"+
		(fa.hasContext() ? 
		"                if (SCANNER_CONTEXT[state][0] == 1)\n" +
		"                {\n" +
		"                    ctxtState = state;\n" +
		"                    ctxtEnd = position;\n" +
		"                }\n" : "")+
		"            }\n"+
		"        }\n"+
		"        if (endState < 0 || (endState != state && tokenForState(lastState) == -2))\n"+
		"            throw new LexicalError(SCANNER_ERROR[lastState], start);\n"+
		"\n"+
		(fa.hasContext() ? 
		"        if (ctxtState != -1 && SCANNER_CONTEXT[endState][1] == ctxtState)\n"+
		"            end = ctxtEnd;\n"+
		"\n" : "" )+
		"        position = end;\n"+
		"\n"+
		"        int token = tokenForState(endState);\n"+
		"\n"+
		"        if (token == 0)\n"+
		"            return nextToken();\n"+
		"        else\n"+
		"        {\n"+
		"            String lexeme = input.substring(start, end);\n"+
		(this.lookup ?
		"            token = lookupToken(token, lexeme);\n" : "")+
		"            return new Token(token, lexeme, start);\n"+
		"        }\n"+
		"    }\n"+
		"");
	}
	
	private auxFuncions(fa: FiniteAutomata, options: Options ): string
	{		 
		let nextState: string | null;
		
		switch (options.scannerTable)
		{
			case Options.SCANNER_TABLE_FULL:
				nextState =
					"    private int nextState(char c, int state)\n"+
					"    {\n"+
					"        int next = SCANNER_TABLE[state][c];\n"+
					"        return next;\n"+
					"    }\n";
				break;
			case Options.SCANNER_TABLE_COMPACT:
				nextState =
					
					"    private int nextState(char c, int state)\n"+
					"    {\n"+
					"        int start = SCANNER_TABLE_INDEXES[state];\n"+
					"        int end   = SCANNER_TABLE_INDEXES[state+1]-1;\n"+
					"\n"+
					"        while (start <= end)\n"+
					"        {\n"+
					"            int half = (start+end)/2;\n"+
					"\n"+
					"            if (SCANNER_TABLE[half][0] == c)\n"+
					"                return SCANNER_TABLE[half][1];\n"+
					"            else if (SCANNER_TABLE[half][0] < c)\n"+
					"                start = half+1;\n"+
					"            else  //(SCANNER_TABLE[half][0] > c)\n"+
					"                end = half-1;\n"+
					"        }\n"+
					"\n"+
					"        return -1;\n"+
					"    }\n";
				break;
			case Options.SCANNER_TABLE_HARDCODE:
			{
				const trans = fa.transitions;
				const casesState: string[] = [];
				for (let i=0; i<trans.size(); i++)
				{
					const m: Map<string, number> = trans.get(i);
					if (m.size == 0)
						continue;
					
					casesState.push(
						"            case "+i+":\n"+
						"                switch (c)\n"+
						"                {\n");
					for (const [key, value] of m.entries()) {
							const ch: string = key;
							const it: number = value;
						casesState.push(
						"                    case "+(ch.charCodeAt(0))+": return "+it+';\n')
					}
				
					casesState.push(
				"                    default: return -1;\n"+
				"                }\n");
				}

				nextState = 
				"    private int nextState(char c, int state)\n"+
				"    {\n"+
				"        switch (state)\n"+
				"        {\n"+
				casesState.join("")+
				"            default: return -1;\n"+
				"        }\n"+
				"    }\n";
			}
				break;
			default:
				//nunca acontece
				nextState = null;
		}
		
		return ( 
		nextState+
		"\n"+
		"    private int tokenForState(int state)\n"+
		"    {\n"+
		"        if (state < 0 || state >= TOKEN_STATE.length)\n"+
		"            return -1;\n"+
		"\n"+
		"        return TOKEN_STATE[state];\n"+
		"    }\n"+
		"\n"+
		(this.lookup ?
		"    public int lookupToken(int base, String key)\n"+
		"    {\n"+
		"        int start = SPECIAL_CASES_INDEXES[base];\n"+
		"        int end   = SPECIAL_CASES_INDEXES[base+1]-1;\n"+
		"\n"+
		(this.sensitive?"":
		"        key = key.toUpperCase();\n"+
		"\n")+
		"        while (start <= end)\n"+
		"        {\n"+
		"            int half = (start+end)/2;\n"+
		"            int comp = SPECIAL_CASES_KEYS[half].compareTo(key);\n"+
		"\n"+
		"            if (comp == 0)\n"+
		"                return SPECIAL_CASES_VALUES[half];\n"+
		"            else if (comp < 0)\n"+
		"                start = half+1;\n"+
		"            else  //(comp > 0)\n"+
		"                end = half-1;\n"+
		"        }\n"+		
		"\n"+
		"        return base;\n"+
		"    }\n"+
		"\n":"")+
		"    private boolean hasInput()\n"+
		"    {\n"+
		"        return position < input.length();\n"+
		"    }\n"+
		"\n"+
		"    private char nextChar()\n"+
		"    {\n"+
		"        if (hasInput())\n"+
		"            return input.charAt(position++);\n"+
		"        else\n"+
		"            return (char) -1;\n"+
		"    }\n"+
		"");
	}
}
