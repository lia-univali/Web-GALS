

/**
 * @author Carlos E. Gesser
 */

import type { FiniteAutomata } from "../FiniteAutomata";
import { Options } from "../Options";

export class DelphiScannerGenerator
{
	sensitive: boolean = true;
	lookup: boolean = true;
	
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
		
        result.set("U"+classname+".pas", scanner);
		
		return result;
	}

	private buildScanner(fa: FiniteAutomata, options: Options): string
	{
        const classname: string = options.scannerName;
		
		let inType: string;
		let inInit: string;
		let inDef: string;
		let inUses: string;
		if(options.input == Options.INPUT_STREAM)
		{
			inType = "TStream";
			inInit = 
			"var\n"+
			"    strStream: TStringStream;\n"+
			"begin\n"+
			"    strStream := TStringStream.Create('');\n"+
			"\n"+
			"    if input <>  nil then\n"+
			"        strStream.CopyFrom(input, input.Size);\n"+
			"\n"+
			"    self.input := strStream.DataString;\n"+
			"    setPosition(1);\n"+
			"    setEnd(Length(self.input));\n"+
			"\n"+
			"    strStream.Destroy;\n"+
			"end;\n"+
			"";
			inDef = "setInput(nil);";
			inUses = ", classes";
		}
		else if(options.input == Options.INPUT_STRING)
		{
			inType = "string";
			inInit = 
				"begin\n"+
				"    self.input := input;\n"+
				"    setPosition(1);\n"+
				"    setEnd(Length(input));\n"+
				"end;\n";
			inDef = "setInput('');";
			inUses = "";
		}
		else
		{
			//nunca acontece
			inType = "";
			inInit = "";
			inDef  = "";
			inUses = "";
		}
		
		return "" +
			"unit U"+classname+";\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UToken, ULexicalError, UConstants"+inUses+", SysUtils;\n"+
			"\n"+
			"type\n"+
			"    T"+classname+" = class\n"+
			"    public\n"+
			"        constructor create; overload;\n"+
			"        constructor create(input : "+inType+"); overload;\n"+
			"\n"+
			"        procedure setInput(input : "+inType+");\n"+
			"        procedure setPosition(pos : integer);\n"+
			"        procedure setEnd(endPos : integer);\n"+
			"        function nextToken : TToken; //raises ELexicalError\n"+
			"\n"+
			"    private\n"+
			"        input : string;\n"+
			"        position : integer;\n"+
			"        endPos : integer;\n"+
			"\n"+
			"        function nextState(c : char; state : integer) : integer;\n"+
			"        function tokenForState(state : integer) : integer;\n"+
			(this.lookup ?
			"        function lookupToken(base : integer; key : string) : integer;\n":"")+
			"\n"+
			"        function hasInput : boolean;\n"+
			"        function nextChar : char;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor T"+classname+".create;\n"+
			"begin\n"+
			"    "+inDef+"\n"+
			"end;\n"+
			"\n"+
			"constructor T"+classname+".create(input : "+inType+");\n"+
			"begin\n"+
			"    setInput(input);\n"+
			"end;\n"+
			"\n"+
			"procedure T"+classname+".setInput(input : "+inType+");\n"+
			inInit+
			"\n"+
			"function T"+classname+".nextToken : TToken;\n"+
			"var\n"+
			"    start,\n"+
			"    oldState,\n"+
			"    state,\n"+
			"    endState,\n"+
			"    endPos,\n"+
			(fa.hasContext() ?
			"    ctxtState;\n"+
			"    ctxtEnd;\n" : "")+
			"    token : integer;\n"+
			"    lexeme : string;\n"+
			"begin\n"+
			"    if not hasInput then\n"+
			"        result := nil\n"+
			"    else\n"+
			"    begin\n"+
			"        start := position;\n"+
			"\n"+
			"        state := 0;\n"+
			"        oldState := 0;\n"+
			"        endState := -1;\n"+
			"        endPos := -1;\n"+
			(fa.hasContext() ?
			"        ctxtState := -1;\n"+
			"        ctxtEnd := -1;\n" : "")+
			"\n"+
			"        while hasInput do\n"+
			"        begin\n"+
			"            oldState := state;\n"+
			"            state := nextState(nextChar, state);\n"+
			"\n"+
			"            if state < 0 then\n"+
			"                break\n"+
			"\n"+
			"            else\n"+
			"            begin\n"+
			"                if tokenForState(state) >= 0 then\n"+
			"                begin\n"+
			"                    endState := state;\n"+
			"                    endPos := position;\n"+
			"                end;\n"+
			(fa.hasContext() ? 
			"                if SCANNER_CONTEXT[state][0] = 1 then\n" +
			"                begin\n" +
			"                    ctxtState := state;\n" +
			"                    ctxtEnd := position;\n" +
			"                end\n" : "")+
			"            end;\n"+
			"        end;\n"+
			"        if (endState < 0) or ( (endState <> state) and (tokenForState(oldState) = -2) ) then\n"+
			"            raise ELexicalError.create(SCANNER_ERROR[oldState], start);\n"+
			"\n"+
			(fa.hasContext() ? 
			"        if (ctxtState <> -1) and (SCANNER_CONTEXT[endState][1] = ctxtState) then\n"+
			"            endPos := ctxtEnd;\n"+
			"\n" : "" )+
			"        position := endPos;\n"+
			"\n"+
			"        token := tokenForState(endState);\n"+
			"\n"+
			"        if token = 0 then\n"+
			"            result := nextToken\n"+
			"        else\n"+
			"        begin\n"+
			"            lexeme := Copy(input, start, endPos-start);\n"+
			(this.lookup ?
			"            token  := lookupToken(token, lexeme);\n" : "")+
			"            result := TToken.create(token, lexeme, start);\n"+
			"        end;\n"+
			"    end;\n"+
			"end;\n"+
			"\n"+
			"procedure T"+classname+".setPosition(pos : integer);\n"+
			"begin\n"+
			"    position := pos;\n"+
			"end;\n"+
			"\n"+
			"procedure T"+classname+".setEnd(endPos : integer);\n"+
			"begin\n"+
			"    self.endPos := endPos;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".nextState(c : char; state : integer) : integer;\n"+
			"begin\n"+
			this.nextStateImpl(fa, options)+
			"end;\n"+
			"\n"+
			"function T"+classname+".tokenForState(state : integer) : integer;\n"+
			"begin\n"+
			"    if (state >= 0) and (state < STATES_COUNT) then\n"+
			"        result := TOKEN_STATE[state]\n"+
			"    else\n"+
			"        result := -1;\n"+
			"end;\n"+
			"\n"+
			(this.lookup ? 
			"function T"+classname+".lookupToken(base : integer; key : string) : integer;\n"+
			"var\n"+
			"    start, end_, half : integer;\n"+
			"    str : string;\n"+
			"begin\n"+			
			"    result := base;\n"+
			"\n"+
			"    start := SPECIAL_CASES_INDEXES[base];\n"+
			"    end_  := SPECIAL_CASES_INDEXES[base+1]-1;\n"+			
			"\n"+
			(this.sensitive?"":
			"    key := UpperCase(key);\n"+
			"\n")+
			"    while start <= end_ do\n"+
			"    begin\n"+
			"        half := (start+end_) div 2;\n"+
			"        str := SPECIAL_CASES_KEYS[half];\n"+
			"\n"+
			"        if str = key then\n"+
			"        begin\n"+
			"            result := SPECIAL_CASES_VALUES[half];\n"+
			"            break;\n"+
			"        end\n"+
			"        else if str < key then\n"+
			"            start := half+1\n"+
			"        else  //str > key\n"+
			"            end_ := half-1;\n"+
			"    end;\n"+
			"end;\n"+
			"\n" : "" )+
			"function T"+classname+".hasInput : boolean;\n"+
			"begin\n"+
			"    result := position <= endPos;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".nextChar : char;\n"+
			"begin\n"+
			"    if hasInput then\n"+
			"    begin\n"+
			"        result := input[position];\n"+
			"        position := position + 1;\n"+
			"    end\n"+
			"    else\n"+
			"        result := char(0);\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}

	private nextStateImpl(fa: FiniteAutomata, opt: Options): string | null
	{
		switch (opt.scannerTable)
		{
			case Options.SCANNER_TABLE_FULL:
			case Options.SCANNER_TABLE_COMPACT:
				return "    result := SCANNER_TABLE[state][c];\n";
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
				"        "+i+": case integer(c) of\n");

                    for (const [key, value] of m.entries()) {
                        const ch: string = key;
                        const it: number = value;
						casesState.push(
				"            "+(ch.charCodeAt(0))+": result := "+it+";\n"); // TODO VALIDAR
					}

					casesState.push(
				"            else result := -1;\n"+
				"        end;\n");
				}

				return ""+
				"    case state of\n"+
				casesState.toString()+
				"        else result := -1;\n"+
				"    end;\n";
			}
			default:
				return null;
		}
	}


	private buildEmptyScanner(options: Options): string
	{
		const classname: string = options.scannerName;
		
		return ""+
			"unit U"+classname+";\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UToken, ULexicalError;\n"+
			"\n"+
			"type\n"+
			"    T"+classname+" = class\n"+
			"    public\n"+
			"        function nextToken : TToken; //raises ELexicalError\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"function T"+classname+".nextToken : TToken;\n"+
			"begin\n"+
			"    result := nil;\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
}
