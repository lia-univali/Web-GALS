import { List } from "../../DataStructures";
import { FiniteAutomata } from "../FiniteAutomata";
import { Options } from "../Options";

/**
 * @author Vinícius
 */

export class PythonScannerGenerator
{
	public generate(fa: FiniteAutomata, options: Options): Map<string, string>
	{		
		const result: Map<string, string> = new Map();
		
		let scanner: string = "";
		const classname: string = options.scannerName;
		
		if (fa != null)
		{
		 	scanner = this.buildScanner(fa, options);
		}
		else
		{
			scanner = "";
		}
		
		result.set(classname+".py", scanner);
		
		return result;
	}

	private buildScanner(fa: FiniteAutomata, options: Options): string
	{
		const classname: string = options.scannerName;
		const pkgname: string = (options.pkgName !== "") ? options.pkgName + "." : "";

		let result = `from ${pkgname}Constants import *\n`+
			`from ${pkgname}Errors    import LexicalError\n`+
			`from ${pkgname}Token     import Token\n\n`+

			"class "+classname+":\n\n"+

			"\tdef __init__(self, input: str):\n"+
			"\t\tself.set_input(input)\n\n"+

			"\tdef set_input(self, input: str):\n"+
			"\t\tself.input    = input\n"+
			"\t\tself.position = 0\n\n"+

			"\tdef next_token(self):\n\n"+

			"\t\tif self.has_input() == False:\n"+
			"\t\t\treturn None\n\n"+

			"\t\tstart    = self.position\n"+
			"\t\tstate    = 0\n"+
			"\t\toldState = 0\n"+
			"\t\tendState = -1\n"+
			"\t\tend      = -1\n\n"+

			"\t\twhile self.has_input():\n\n"+

			"\t\t\toldState = state\n"+
			"\t\t\tstate    = self.next_state(self.next_char(), state)\n\n"+

			"\t\t\tif state < 0:\n"+
			"\t\t\t\tbreak\n\n"+

			"\t\t\telse:\n"+
			"\t\t\t\tif self.token_for_state(state) != None:\n"+
			"\t\t\t\t\tendState = state\n"+
			"\t\t\t\t\tend      = self.position\n\n"+

			"\t\tif endState < 0 or (endState != state and self.token_for_state(oldState) == -2):\n"+
			"\t\t\traise LexicalError(SCANNER_ERROR[oldState], start)\n\n"+

			"\t\tself.position = end\n\n"+

			"\t\ttoken = self.token_for_state(endState)\n\n"+

			"\t\tif token == 0:\n"+
			"\t\t\treturn self.next_token()\n"+
			"\t\telse:\n"+
			"\t\t\tlexeme = self.input[start:end]\n"+
			"\t\t\tif TOKEN_DEPENDENCY or CASE_INSENSITIVITY:\n"+
			"\t\t\t\ttoken = self.lookup_token(token, lexeme)\n"+
			"\t\t\treturn Token(TokenId(token), lexeme, start)\n\n"+

			"\tdef next_state(self, c: int, state: int):\n"+
			this.nextStateImpl(fa, options)+"\n"+

			"\tdef token_for_state(self, state: int):\n"+
			"\t\ttoken = -1\n\n"+

			"\t\tif state >= 0 and state < STATES_COUNT:\n"+
			"\t\t\ttoken = TOKEN_STATE[state]\n\n"+

			"\t\treturn token\n\n"+

			"\tdef lookup_token(self, base: int, key: str):\n"+
			"\t\tstart =  SPECIAL_CASES_INDEXES[base]\n"+
			"\t\tend   =  SPECIAL_CASES_INDEXES[base+1]-1\n\n"+

			"\t\tkey_u = key\n"+
			"\t\tif CASE_INSENSITIVITY:\n"+
			"\t\t\tkey_u = key.upper()\n\n"+

			"\t\twhile start <= end:\n"+
			"\t\t\thalf    = (start + end) // 2\n"+
			"\t\t\tcurrent = SPECIAL_CASES_KEYS[half]\n\n"+ // TODO: uppercase?

			"\t\t\tif current == key_u:\n"+
			"\t\t\t\treturn TokenId(SPECIAL_CASES_VALUES[half])\n"+
			"\t\t\telif current < key_u:\n"+
			"\t\t\t\tstart = half + 1\n"+
			"\t\t\telse:\n"+
			"\t\t\t\tend   = half - 1\n\n"+

			"\t\treturn base\n\n"+

			"\tdef has_input(self):\n"+
			"\t\treturn self.position < len(self.input)\n\n"+

			"\tdef next_char(self):\n"+
			"\t\tif self.has_input():\n"+
			"\t\t\tres = self.input[self.position]\n"+
			"\t\t\tself.position += 1\n"+
			"\t\t\treturn ord(res)\n"+
			"\t\telse:\n"+
			"\t\t\treturn -1\n\n";

		return result;
	}

	private nextStateImpl(fa: FiniteAutomata, opt: Options): string
	{
		switch (opt.scannerTable)
		{
			case Options.SCANNER_TABLE_FULL:
			case Options.SCANNER_TABLE_COMPACT:
				return "\t\treturn SCANNER_TABLE[state][c]\n";
			case Options.SCANNER_TABLE_HARDCODE:
			{
				const trans: List<Map<string, number>>  = fa.transitions;
				let casesState = "";
				for (let i=0; i<trans.size(); i++)
				{
					const m = trans.get(i);
					if (m.size == 0)
						continue;
						
					casesState +=
						"\t\t\tcase "+i+":\n"+
						"\t\t\t\tmatch c:\n";

                    for (const [key, value] of m.entries())
					{
                        const ch = key;
                        const it = value;
						casesState += `\t\t\t\t\tcase ${ch.charCodeAt(0)}:\n\t\t\t\t\t\treturn ${it};\n`;
                    }

					casesState += "\t\t\t\t\tcase _:\n\t\t\t\t\t\treturn -1\n";
				}

				return "\t\tmatch state:\n"+
				casesState.toString()+
				"\t\t\tcase _:\n\t\t\t\treturn -1\n";
			}
			default:
				return ""; // null;
		}
	}
}
