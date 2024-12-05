import { NotLLException, SyntacticError } from "../../analyser/SystemErros";
import { Options } from "../Options";
import type { Grammar } from "../parser/Grammar";
import { FunctionCustom, RecursiveDescendent } from "../RecursiveDescendent";

export class DelphiParserGenerator
{
	generate(g: Grammar, options: Options): Map<string, string> // throws NotLLException
	{
		const result: Map<string, string> = new Map();
		
		if (g != null)
		{
		
			const classname: string = options.parserName;
			
			let parser: string | null;
			
			switch(options.parser)
			{
				case Options.PARSER_REC_DESC:
					parser = this.buildRecursiveDescendantParser(g, options);
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
					//nunca acontece
					parser = null;
			}
            if(parser === null) throw new SyntacticError("String do Parser é nulo.");
            
			result.set("U"+classname+".pas", parser);
			
			result.set("U"+options.semanticName + ".pas", this.generateSemanticAnalyser(options));
		}
		
		return result;
	}
	
	private buildRecursiveDescendantParser(g: Grammar, options: Options): string // throws NotLLException
	{
		const classname: string = options.parserName;
		const scanner: string = options.scannerName;
		const semantic: string = options.semanticName;

		const rd: RecursiveDescendent = new RecursiveDescendent(g);
		const funcs: Map<string, FunctionCustom> = rd.build();

		let bfr = "";
		for (let i=g.FIRST_NON_TERMINAL; i<g.FIRST_SEMANTIC_ACTION(); i++)
			bfr += ("        procedure ") + (rd.getSymbols(i)) + (";\n");
			
		const funcsDcl = bfr;
		
		bfr = "";
		for (let symb=g.FIRST_NON_TERMINAL; symb<g.FIRST_SEMANTIC_ACTION(); symb++)
		{
			const name: string = rd.getSymbols(symb);
			const f: FunctionCustom | undefined  = funcs.get(name);

			bfr += (
						"\n"+
						"procedure T"+classname+"."+name+";\n"+
						"begin\n"+
						"    case currentToken.getId of\n");

            if(f == undefined) throw new NotLLException("Gramática não é LL.");

			const keys: number[] = Array.from(f.input.keys()); // new LinkedList(f.input.keySet());
					
			for (let i = 0; i<keys.length; i++)
			{
				const rhs = f.input.get(keys[i]);
                let token = keys[i];

				bfr += (
						"        "+token+" (* "+rd.getSymbols(token)+" *)");

				for (let j=i+1; j<keys.length; j++)
				{
					const rhs2 = f.input.get(keys[j]);
					if (rhs2 === rhs)
					{
						token = keys[j];
						bfr += (",\n"+
						"        "+token+" (* "+rd.getSymbols(token)+" *)");
						keys.slice(j, j);
						j--;
					}
				}

                if(rhs === undefined) throw new NotLLException("Gramática não é LL.");

				bfr += (	      " : \n"+
						"        begin\n");

				if (rhs.length == 0)
					bfr += (
						"            // EPSILON\n");

				for (let k=0; k<rhs.length; k++)
				{
					const s = rhs[k];
					if (g.isTerminal(s))
					{
						bfr += (
						"            match("+s+"); // "+rd.getSymbols(s)+"\n");	
					}
					else if (g.isNonTerminal(s))
					{
						bfr += (
						"            "+rd.getSymbols(s)+";\n");	
					}
					else //isSemanticAction(s)
					{
						bfr += (
						"            semanticAnalyser.executeAction("+(s-g.FIRST_SEMANTIC_ACTION())+", previousToken);\n");
					}
				}

				bfr += (
						"        end;\n");
			}

			bfr += (
						"        else\n"+
						"            raise ESyntacticError.create(PARSER_ERROR["+f.lhs+"], currentToken.getPosition());\n"+
						"    end;\n"+
						"end;\n" );
		}
        
		const funcsImpl = bfr;

		return "unit U"+classname+";\n"+
                "\n"+
                "interface\n"+
                "\n"+
                "uses UConstants, UToken, U"+scanner+", U"+semantic+", USyntacticError, UAnalysisError;\n"+
                "\n"+
                "type\n"+
                "    T"+classname+" = class\n"+
                "    public\n"+
                "        constructor create;\n"+
                "        destructor destroy; override;\n"+
                "\n"+
                "        procedure parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+"); //raises EAnaliserError\n"+
                "\n"+
                "    private\n"+
                "        currentToken : TToken;\n"+
                "        previousToken : TToken;\n"+
                "        scanner : T"+scanner+";\n"+
                "        semanticAnalyser : T"+semantic+";\n"+
                "\n"+
                "        procedure match(token : integer);\n"+
                "\n"+
                funcsDcl+
                "    end;\n"+
                "\n"+
                "implementation\n"+
                "\n"+
                "constructor T"+classname+".create;\n"+
                "begin\n"+
                "    currentToken := nil;\n"+
                "    previousToken := nil;\n"+
                "end;\n"+
                "\n"+
                "destructor T"+classname+".destroy;\n"+
                "begin\n"+
                "    if (currentToken <> nil) and (currentToken <> previousToken) then\n"+
                "        currentToken.destroy;\n"+
                "    if previousToken <> nil then\n"+
                "        previousToken.destroy;\n"+
                "end;\n"+
                "\n"+
                "procedure T"+classname+".parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+");\n"+
                "begin\n"+
                "    self.scanner := scanner;\n"+
                "    self.semanticAnalyser := semanticAnalyser;\n"+
                "\n"+
                "    if (previousToken <> nil) and (previousToken <> currentToken) then\n"+
                "        previousToken.destroy;\n"+
                "    previousToken := nil;\n"+
                "\n"+
                "    if currentToken <> nil then\n"+
                "        currentToken.destroy;\n"+
                "    currentToken := scanner.nextToken;\n"+
                "    if currentToken = nil then\n" +
                "        currentToken := TToken.create(DOLLAR, '$', 0);\n"+
                "\n"+
                "    "+rd.getStart()+";\n"+
                "\n"+
                "    if currentToken.getId <> DOLLAR then\n"+
                "        raise ESyntacticError.create(PARSER_ERROR[DOLLAR], currentToken.getPosition);\n"+
                "end;\n"+
                "\n"+
                "procedure T"+classname+".match(token : integer);\n"+
                "var pos : integer;\n"+
                "begin\n"+
                "    if currentToken.getId() = token then\n"+
                "    begin\n"+
                "        if previousToken <> nil then\n"+
                "            previousToken.destroy;\n"+
                "        previousToken := currentToken;\n"+
                "        currentToken := scanner.nextToken;\n"+
                "        if currentToken = nil then\n"+
                "        begin\n"+
                "            pos := 0;\n"+
                "            if previousToken <> nil then\n"+
                "                pos := previousToken.getPosition+Length(previousToken.getLexeme);\n"+
                "\n"+
                "            currentToken := TToken.create(DOLLAR, '$', pos);\n"+
                "        end;\n"+
                "    end\n"+
                "    else\n"+
                "        raise ESyntacticError.create(PARSER_ERROR[token], currentToken.getPosition);\n"+
                "end;\n"+
                funcsImpl+
                "\n"+
                "end.\n"+
                "";
	}

	private buildLLParser(g: Grammar, options: Options): string
	{
		const classname: string = options.parserName;
		const scanner: string = options.scannerName;
		const semantic: string = options.semanticName;
		
		return "" +
            "unit U"+classname+";\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UConstants, UToken, U"+scanner+", U"+semantic+", USyntacticError, UAnalysisError, classes;\n"+
			"\n"+
			"type\n"+
			"    T"+classname+" = class\n"+
			"    public\n"+
			"        constructor create;\n"+
			"        destructor destroy; override;\n"+
			"\n"+
			"        procedure parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+"); //raises EAnaliserError\n"+
			"\n"+
			"    private\n"+
			"        stack : TList;\n"+
			"        currentToken : TToken;\n"+
			"        previousToken : TToken;\n"+
			"        scanner : T"+scanner+";\n"+
			"        semanticAnalyser : T"+semantic+";\n"+
			"\n"+
			"        function step : boolean;\n"+
			"        function pushProduction(topStack, tokenInput : integer) : boolean;\n"+
			"\n"+
			"        function isTerminal(x : integer) : boolean;\n"+
			"        function isNonTerminal(x : integer) : boolean;\n"+
			"        function isSemanticAction(x : integer) : boolean;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor T"+classname+".create;\n"+
			"begin\n"+
			"    currentToken := nil;\n"+
			"    previousToken := nil;\n"+
			"    stack := TList.create;\n"+
			"end;\n"+
			"\n"+
			"destructor T"+classname+".destroy;\n"+
			"begin\n"+
			"    if (currentToken <> nil) and (currentToken <> previousToken) then\n"+
			"        currentToken.destroy;\n"+
			"    if previousToken <> nil then\n"+
			"        previousToken.destroy;\n"+
			"    stack.destroy;\n"+
			"end;\n"+
			"\n"+
			"procedure T"+classname+".parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+");\n"+
			"begin\n"+
			"    self.scanner := scanner;\n"+
			"    self.semanticAnalyser := semanticAnalyser;\n"+
			"\n"+
			"    stack.clear;\n"+
			"    stack.add(Pointer(DOLLAR));\n"+
			"    stack.add(Pointer(START_SYMBOL));\n"+
			"\n"+
			"    if (previousToken <> nil) and (previousToken <> currentToken) then\n"+
			"        previousToken.destroy;\n"+
			"    previousToken := nil;\n"+
			"\n"+
			"    if currentToken <> nil then\n"+
			"        currentToken.destroy;\n"+
			"    currentToken := scanner.nextToken;\n"+
			"\n"+
			"    while not step do\n"+
			"        ;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".step : boolean;\n"+
			"var\n"+
			"    a, x, pos : integer;\n"+
			"begin\n"+
			"    if currentToken = nil then //Fim de Sentenca\n"+
			"    begin\n"+
			"        pos := 0;\n"+
			"        if previousToken <> nil then\n"+
			"            pos := previousToken.getPosition + Length(previousToken.getLexeme);\n"+
			"\n"+
			"        currentToken := TToken.create(DOLLAR, '$', pos);\n"+
			"    end;\n"+
			"\n"+
			"    a := currentToken.getId;\n"+
			"    x := Integer(stack.Last);\n"+
			"    stack.Delete(stack.Count-1);\n"+
			"\n"+
			"    if x = EPSILON then\n"+
			"    begin\n"+
			"        result := false;\n"+
			"    end\n"+
			"    else if isTerminal(x) then\n"+
			"    begin\n"+
			"        if x = a then\n"+
			"        begin\n"+
			"            if stack.Count = 0 then\n"+
			"                result := true\n"+
			"            else\n"+
			"            begin\n"+
			"                if previousToken <> nil then\n"+
			"                    previousToken.destroy;\n"+
			"                previousToken := currentToken;\n"+
			"                currentToken := scanner.nextToken;\n"+
			"                result := false;\n"+
			"            end;\n"+
			"        end\n"+
			"        else\n"+
			"            raise ESyntacticError.create(PARSER_ERROR[x], currentToken.getPosition);\n"+
			"    end\n"+
			"    else if isNonTerminal(x) then\n"+
			"    begin\n"+
			"        if pushProduction(x, a) then\n"+
			"            result := false\n"+
			"        else\n"+
			"            raise ESyntacticError.create(PARSER_ERROR[x], currentToken.getPosition);\n"+
			"    end\n"+
			"    else // isSemanticAction(x)\n"+
			"    begin\n"+
			"        semanticAnalyser.executeAction(x-FIRST_SEMANTIC_ACTION, previousToken);\n"+
			"        result := false;\n"+
			"    end;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".pushProduction(topStack, tokenInput : integer) : boolean;\n"+
			"var\n"+
			"    i, p, length : integer;\n"+
			"begin\n"+
			"    p := PARSER_TABLE[topStack-FIRST_NON_TERMINAL, tokenInput-1];\n"+
			"    if p >= 0 then\n"+
			"    begin\n"+
			"        //empilha a produção em ordem reversa\n"+
			"        length := PRODUCTIONS[p, 0];\n"+
			"        for i := length downto 1 do\n"+
			"            stack.add( Pointer( PRODUCTIONS[p, i] ) );\n"+
			"\n"+
			"        result := true;\n"+
			"    end\n"+
			"    else\n"+
			"        result := false;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".isTerminal(x : integer) : boolean;\n"+
			"begin\n"+
			"    result := x < FIRST_NON_TERMINAL;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".isNonTerminal(x : integer) : boolean;\n"+
			"begin\n"+
			"    result := (x >= FIRST_NON_TERMINAL) and (x < FIRST_SEMANTIC_ACTION);\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".isSemanticAction(x : integer) : boolean;\n"+
			"begin\n"+
			"    result := x >= FIRST_SEMANTIC_ACTION;\n"+
			"end;\n"+
			"\n"+
			"end.\n"+

			"";
	}

	private buildLRParser(g: Grammar, options: Options): string
	{
		const classname: string = options.parserName;
		const scanner: string = options.scannerName;
		const semantic: string = options.semanticName;
	
		return "" +
			"unit U"+classname+";\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UConstants, UToken, U"+scanner+", U"+semantic+", USyntacticError, UAnalysisError, classes;\n"+
			"\n"+
			"type\n"+
			"    T"+classname+" = class\n"+
			"    public\n"+
			"        constructor create;\n"+
			"        destructor destroy; override;\n"+
			"\n"+
			"        procedure parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+"); //raises EAnaliserError\n"+
			"\n"+
			"    private\n"+
			"        stack : TList;\n"+
			"        currentToken : TToken;\n"+
			"        previousToken : TToken;\n"+
			"        scanner : T"+scanner+";\n"+
			"        semanticAnalyser : T"+semantic+";\n"+
			"\n"+
			"        function step : boolean;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor T"+classname+".create;\n"+
			"begin\n"+
			"    currentToken := nil;\n"+
			"    previousToken := nil;\n"+
			"    stack := TList.create;\n"+
			"end;\n"+
			"\n"+
			"destructor T"+classname+".destroy;\n"+
			"begin\n"+
			"    if (currentToken <> nil) and (currentToken <> previousToken) then\n"+
			"        currentToken.destroy;\n"+
			"    if previousToken <> nil then\n"+
			"        previousToken.destroy;\n"+
			"    stack.destroy;\n"+
			"end;\n"+
			"\n"+
			"procedure T"+classname+".parse(scanner : T"+scanner+"; semanticAnalyser : T"+semantic+");\n"+
			"begin\n"+
			"    self.scanner := scanner;\n"+
			"    self.semanticAnalyser := semanticAnalyser;\n"+
			"\n"+
			"    stack.clear;\n"+
			"    stack.add(Pointer(0));\n"+
			"\n"+
			"    if (previousToken <> nil) and (previousToken <> currentToken) then\n"+
			"        previousToken.destroy;\n"+
			"    previousToken := nil;\n"+
			"\n"+
			"    if currentToken <> nil then\n"+
			"        previousToken.destroy;\n"+
			"    currentToken := scanner.nextToken;\n"+
			"\n"+
			"    while not step do\n"+
			"        ;\n"+
			"end;\n"+
			"\n"+
			"function T"+classname+".step : boolean;\n"+
			"var\n"+
			"    state, oldState, pos, token, act, i : integer;\n"+
			"    cmd, prod : array[0..1] of integer;\n"+
			"begin\n"+
			"    if currentToken = nil then //Fim de Sentensa\n"+
			"    begin\n"+
			"        pos := 0;\n"+
			"        if previousToken <> nil then\n"+
			"            pos := previousToken.getPosition + Length(previousToken.getLexeme);\n"+
			"\n"+
			"        currentToken := TToken.create(DOLLAR, '$', pos);\n"+
			"    end;\n"+
			"\n"+
			"    token := currentToken.getId;\n"+
			"    state := Integer(stack.Last);\n"+
			"\n"+
			"    cmd[0] := PARSER_TABLE[state, token-1, 0];\n"+
			"    cmd[1] := PARSER_TABLE[state, token-1, 1];\n"+	
			"\n"+
			"    case cmd[0] of\n"+
			"        SHIFT:\n"+
			"            begin\n"+
			"                stack.Add(Pointer(cmd[1]));\n"+
			"                if previousToken <> nil then\n"+
			"                    previousToken.destroy;\n"+
			"                previousToken := currentToken;\n"+
			"                currentToken := scanner.nextToken;\n"+
			"                result := false;\n"+
			"            end;\n"+
			"\n"+
			"        REDUCE:\n"+
			"            begin\n"+
			"                prod[0] := PRODUCTIONS[cmd[1], 0];\n"+
			"                prod[1] := PRODUCTIONS[cmd[1], 1];\n"+
			"\n"+
			"                for i :=0 to prod[1]-1 do\n"+
			"                    stack.Delete(stack.Count-1);\n"+
			"\n"+
			"                oldState := Integer(stack.Last);\n"+
			"                stack.Add(Pointer(PARSER_TABLE[oldState, prod[0]-1, 1]));\n"+
			"                result := false;\n"+
			"            end;\n"+
			"\n"+
			"        ACTION:\n"+
			"            begin\n"+
			"                act := FIRST_SEMANTIC_ACTION + cmd[1] - 1;\n"+
			"                stack.Add(Pointer(PARSER_TABLE[state, act, 1]));\n"+
			"                semanticAnalyser.executeAction(cmd[1], previousToken);\n"+
			"                result := false;\n"+
			"            end;\n"+
			"\n"+
			"        ACCEPT:\n"+
			"            result := true;\n"+
			"\n"+
			"        ERROR:\n"+
			"            raise ESyntacticError.create(PARSER_ERROR[state], currentToken.getPosition);\n"+
			"    end;\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}

	private generateSemanticAnalyser(options: Options): string
	{
		const classname: string = options.semanticName;
		
		return "" +
			"unit U"+classname+";\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UToken, USemanticError;\n"+
			"\n"+
			"type\n"+
			"    T"+classname+" = class\n"+
			"    public\n"+
			"        procedure executeAction(action : integer; const token : TToken); //raises ESemanticError\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"procedure T"+classname+".executeAction(action : integer; const token : TToken);\n"+
			"begin\n"+
			"\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}

}
