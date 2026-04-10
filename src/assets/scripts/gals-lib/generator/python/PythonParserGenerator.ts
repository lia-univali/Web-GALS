import { NotLLException, SyntacticError } from "../../analyser/SystemErros";
import { Options } from "../Options";
import { FunctionCustom, RecursiveDescendent } from "../RecursiveDescendent";
import { Grammar } from "../parser/Grammar";

export class PythonParserGenerator
{
//	private rd: RecursiveDescendent | undefined;
	
	public generate(g: Grammar, options: Options): Map<string, string> //throws NotLLException
	{
		const result: Map<string, string> = new Map();
		
		if (options.generateParser == true)
		{
			if (g != null)
			{

				const classname: string = options.parserName;

				result.set(classname+".py", this.parser(g, options));
				result.set(options.semanticName + ".py", this.semantic(options));
			}
		}
		
		return result;
	}

	private semantic(options: Options): string
	{
		const classname: string = options.semanticName;
		const pkgname: string = (options.pkgName !== "") ? options.pkgName + "." : "";
		return `from ${pkgname}Token import Token\n\n`+

			`class ${classname}:\n\n`+

			"\tdef execute_action(self, action: int, token: Token):\n"+
			"\t\tprint(\"Ação: \", action, \"Token: \", token)";
	}

	private redDecParser(g: Grammar, options: Options): string
	{
		const rd: RecursiveDescendent = new RecursiveDescendent(g);

		const pkg = options.pkgName !== "" ? options.pkgName + "." : "";
		const prs = options.parserName;

		let result = ""+
			`from ${pkg}Token     import Token\n`+
			`from ${pkg}Constants import *\n`+
			`from ${pkg}Errors    import SyntacticError\n\n`+

			`class ${prs}:\n\n`+

			"\tdef __init__(self):\n"+
			"\t\tself.previous_token = None\n"+
			"\t\tself.current_token  = None\n\n"+

			"\tdef parse(self, scanner, semantic):\n"+
			"\t\tself.scanner  = scanner\n"+
			"\t\tself.semantic = semantic\n\n"+

			"\t\tself.current_token = self.scanner.next_token()\n"+
			"\t\tif self.current_token == None:\n"+
			`\t\t\tself.current_token = Token(TokenId.DOLLAR, "$", 0)\n\n`+

			`\t\tself._${rd.getStart()}()\n`+

			"\t\tif self.current_token.tkid != TokenId.DOLLAR:\n"+
			"\t\t\traise SyntacticError(PARSER_ERROR[TokenId.DOLLAR.value], self.current_token.position)\n\n"+

			"\tdef matchr(self, tknum):\n\n"+

			"\t\tif self.current_token.tkid.value == tknum:\n"+
			"\t\t\tself.previous_token = self.current_token\n"+
			"\t\t\tself.current_token  = self.scanner.next_token()\n\n"+

			"\t\t\tif self.current_token == None:\n"+
			"\t\t\t\tpos = 0\n"+
			"\t\t\t\tif self.previous_token == None:\n"+
			"\t\t\t\t\tpos = self.previous_token.position + len(self.previous_token.lexeme)\n"+
			`\t\t\t\tself.current_token = Token(TokenId.DOLLAR, "$")\n`+
			"\t\telse:\n"+
			"\t\t\traise SyntacticError(PARSER_ERROR[tknum], self.current_token.position)\n\n";

		const funcs: Map<string, FunctionCustom> = rd.build();

		for (let symb = g.FIRST_NON_TERMINAL; symb < g.FIRST_SEMANTIC_ACTION(); symb++)
		{
			const name: string = rd.getSymbols(symb);
			const f: FunctionCustom | undefined = funcs.get(name);

			result += ""+
				`\tdef _${name}(self):\n`+
				"\t\tmatch self.current_token.tkid:\n";

			if (f == undefined)
				throw new NotLLException("Gramática não é LL.");

			const keys = Array.from(f.input.keys());
			let pushed: Set<number> = new Set();

			for (let i = 0; i < keys.length; i++)
			{
				const rhs = f.input.get(keys[i]);
				let token = keys[i];

				if (pushed.has(token))
					continue;

				let sym = rd.getSymbols(token);
				result += `\t\t\tcase TokenId.${sym === '$' ? "DOLLAR" : 't_' + sym}`;

				pushed.add(token);

				for (let j = i + 1; j < keys.length; j++)
				{
					const rhs2 = f.input.get(keys[j]);
					if (rhs2 === rhs)
					{
						token = keys[j];
						if (pushed.has(token))
							continue;
						let sym = rd.getSymbols(token);
						result += ` | TokenId.${sym === '$' ? "DOLLAR" : 't_' + sym}`;
						pushed.add(token);
					}
				}

				result += ":\n";

				if (rhs == undefined)
					throw new NotLLException("Gramática não é LL.");

				if (rhs.length == 0)
					result += "\t\t\t\tpass # EPSILON\n";

				for (let k = 0; k < rhs.length; k++)
				{
					const s = rhs[k];
					if (g.isTerminal(s))
					{
						result += `\t\t\t\tself.matchr(${s}) # ${rd.getSymbols(s)}\n`;
					}
					else if (g.isNonTerminal(s))
					{
						result += `\t\t\t\tself._${rd.getSymbols(s)}()\n`;
					}
					else
					{
						result += `\t\t\t\tself.semantic.execute_action(${(s-g.FIRST_SEMANTIC_ACTION())}, self.previous_token)\n`;
					}
				}
			}
			result += `\t\t\tcase _:\n\t\t\t\traise SyntacticError(PARSER_ERROR[${f.lhs}], self.current_token.position)\n`;
		}

		return result;
	}
	
	private parser(g: Grammar, options: Options): string
	{
		const pkgname: string = (options.pkgName !== "") ? options.pkgName + "." : "";
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				return this.redDecParser(g, options);
						
			case Options.PARSER_LL:
				throw new SyntacticError("LL(1) NOT SUPPORTED.");
		
			default: //slr, lalr, lr
			{
				const parserName:  string = options.parserName;

				return `from ${pkgname}Token import Token\n`+
					`from ${pkgname}Constants import *\n`+
					`from ${pkgname}Errors import SyntacticError\n\n`+

					"class "+parserName+":\n\n"+

					"\tdef __init__(self):\n"+
					"\t\tself.previous_token = None\n"+
					"\t\tself.current_token  = None\n"+
					"\t\tself.stack          = []\n\n"+

					"\tdef parse(self, scanner, semantic):\n"+
					"\t\tself.scanner  = scanner\n"+
					"\t\tself.semantic = semantic\n\n"+

					"\t\tself.stack.clear()\n\n"+

					"\t\tself.stack.append(0)\n"+
					"\t\tself.previous_token = None\n\n"+

					"\t\tself.current_token = self.scanner.next_token()\n\n"+

					"\t\twhile True:\n"+
					"\t\t\tif self.step() != False:\n"+
					"\t\t\t\tbreak\n\n"+

					"\tdef step(self):\n\n"+

					"\t\tif self.current_token == None:\n"+
					"\t\t\tpos = 0\n"+
					"\t\t\tif self.previous_token != None:\n"+
					"\t\t\t\tpos = self.previous_token.position + len(self.previous_token.lexeme)\n"+
					"\t\t\tself.current_token = Token(TokenId.DOLLAR, \"$\", pos)\n\n"+

					"\t\ttoken = self.current_token.tkid.value\n"+
					"\t\tstate = self.stack[-1]\n\n"+

					"\t\tcmd = PARSER_TABLE[state][token-1]\n\n"+

					"\t\tmatch cmd[0]:\n"+
					"\t\t\tcase SLRAction.SHIFT:\n"+
					"\t\t\t\tself.stack.append(cmd[1])\n"+
					"\t\t\t\tself.previous_token = self.current_token\n"+
					"\t\t\t\tself.current_token = self.scanner.next_token()\n"+
					"\t\t\t\treturn False\n"+
					"\t\t\tcase SLRAction.REDUCE:\n"+
					"\t\t\t\tprod = PRODUCTIONS[cmd[1]]\n\n"+

					"\t\t\t\tfor i in range(0, prod[1]):\n"+
					"\t\t\t\t\tself.stack.pop()\n\n"+

					"\t\t\t\toldstate = self.stack[-1]\n\n"+

					"\t\t\t\tself.stack.append(PARSER_TABLE[oldstate][prod[0]-1][1])\n\n"+

					"\t\t\t\treturn False\n"+

					"\t\t\tcase SLRAction.ACTION:\n"+
					"\t\t\t\taction = FIRST_SEMANTIC_ACTION + cmd[1] - 1\n"+
					"\t\t\t\tself.stack.append(PARSER_TABLE[state][action][1])\n"+
					"\t\t\t\tself.semantic.execute_action(cmd[1], self.previous_token)\n"+
					"\t\t\t\treturn False\n"+
					"\t\t\tcase SLRAction.ACCEPT:\n"+
					"\t\t\t\treturn True\n"+
					"\t\t\tcase SLRAction.ERROR:\n"+
					"\t\t\t\traise SyntacticError(PARSER_ERROR[state], self.current_token.position)\n"+
					"\t\t\tcase _:\n"+
					"\t\t\t\traise RuntimeError('Invalid Command')\n\n"+
					"\t\treturn False\n";
			}
			break;
		}
	}
}
