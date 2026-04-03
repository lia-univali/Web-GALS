import { SyntacticError } from "../../analyser/SystemErros";
import { Options } from "../Options";
import { FunctionCustom, RecursiveDescendent } from "../RecursiveDescendent";
import { Grammar } from "../parser/Grammar";

export class PythonParserGenerator
{
	private rd: RecursiveDescendent | undefined;
	
	public generate(g: Grammar, options: Options): Map<string, string> //throws NotLLException
	{
		const result: Map<string, string> = new Map();
		
		if (g != null)
		{
		
			const classname: string = options.parserName;
			
			result.set(classname+".py", this.parser(g, options));
			result.set(options.semanticName + ".py", this.semantic(options));
		}
		
		return result;
	}

	private semantic(options: Options): string
	{
		const classname: string = options.semanticName;
		return "from Token import Token\n\n"+

			`class ${classname}:\n\n`+

			"\tdef execute_action(self, action: int, token: Token):\n"+
			"\t\tprint(\"Ação: \", action, \"Token: \", token)";
	}
	
	private parser(g: Grammar, options: Options): string
	{
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				throw new SyntacticError("REC_DESC NOT SUPPORTED.");
						
			case Options.PARSER_LL:
				throw new SyntacticError("LL(1) NOT SUPPORTED.");
		
			default: //slr, lalr, lr
			{
				const parserName:  string = options.parserName;

				return "from Token import Token\n"+
					"from Constants import *\n"+
					"from Errors import SyntacticError\n\n"+

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
