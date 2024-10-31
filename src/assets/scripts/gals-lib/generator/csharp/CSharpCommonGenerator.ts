// import { type FiniteAutomata, KeyValuePar } from '../FiniteAutomata'
// import { Options } from "../Options";
// import type { Grammar } from "../parser/Grammar";
// import { LRGeneratorFactory } from '@/assets/scripts/gals-lib/generator/parser/lr/LRGeneratorFactory'
// import { SyntaticError } from '@/assets/scripts/gals-lib/analyser/SystemErros'
// import { Command } from '@/assets/scripts/gals-lib/generator/parser/lr/Command'
// import { LLParser } from '@/assets/scripts/gals-lib/generator/parser/ll/LLParser'
// import type { List } from '@/assets/scripts/gals-lib/DataStructures'
// import type { Production } from '@/assets/scripts/gals-lib/util/Production'
//
// /**
//  *
//  * @author Gustavo
//  * @see gesser.gals.generator.java.JavaCommonGenerator
//  */
// export class CSharpCommonGenerator
// {
//
//   lrTable: number[][][] | null = null;
//
// 	public generate(fa: FiniteAutomata, g: Grammar, options: Options): Map<string, string> //throws NotLLException
// 	{
//         const result: Map<string, string> = new Map;
//
// 		result.set("Token.cs", this.generateToken(options));
//
// 		result.set("Constants.cs", this.generateConstants(fa, g, options));
// 		if (fa != null)
// 			result.set("ScannerConstants.cs", this.generateScannerConstants(fa, options));
// 		if (g != null)
// 			result.set("ParserConstants.cs", this.generateParserConstants(g, options));
//
// 		result.set("AnalysisError.cs", this.generateAnalysisError(options));
// 		result.set("LexicalError.cs", this.generateLexicalError(options));
// 		result.set("SyntaticError.cs", this.generateSyntaticError(options));
// 		result.set("SemanticError.cs", this.generateSemanticError(options));
//
// 		return result;
// 	}
//
// 	private generateToken(options: Options): string
// 	{
// 		let result = "";
// 		let cls = "    public class Token\n"
// 				+ "    {\n"
// 				+ "        public let Id { get; private set; }\n"
// 				+ "        public string Lexeme { get; private set; }\n"
// 				+ "        public let Position { get; private set; }\n"
// 				+ "\n"
// 				+ "        public Token(let id, string lexeme, let position)\n"
// 				+ "        {\n"
// 				+ "            Id = id;\n"
// 				+ "            Lexeme = lexeme;\n"
// 				+ "            Position = position;\n"
// 				+ "        }\n"
// 				+ "\n"
// 				+ "        public override string ToString() => $\"{Id} ( {Lexeme} ) @ {Position}\";\n"
// 				+ "\n"
// 				+ "    }";
// 		result += (cls);
//     	this.colocarNamespace(result, options);
//
// 		return result;
// 	}
//
// 	private generateAnalysisError(options: Options ): string
// 	{
// 		let result = "";
// 		let cls =
// 		"    public class AnalysisError : System.Exception\n"
// 		+ "    {\n"
// 		+ "        public let Position { get; private set; }\n"
// 		+ "\n"
// 		+ "        public AnalysisError(string msg, let position) : base(msg) => Position = position;\n"
// 		+ "\n"
// 		+ "        public AnalysisError(string msg) : base(msg) { }\n"
// 		+ "\n"
// 		+ "        public override string ToString() => $\"{base.ToString()}, @ {Position}\";\n"
// 		+ "    }";
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
// 	private generateLexicalError(options: Options ): string
// 	{
// 		let result = "";
//
// 		let cls =
// 		"    public class LexicalError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public LexicalError(string msg, let position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public LexicalError(string msg): base(msg) { }\n"
// 		+ "    }";
//
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
// 	private generateSyntaticError(options: Options ): string
// 	{
// 		let result = "";
//
// 		let cls =
// 		"    public class SyntaticError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public SyntaticError(string msg, let position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public SyntaticError(string msg) : base(msg) { }\n"
// 		+ "    }";
//
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
// 	private generateSemanticError(options: Options ): string
// 	{
// 		let result = "";
// 		let cls =
// 		"    public class SemanticError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public SemanticError(string msg, let position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public SemanticError(string msg) : base(msg) { }\n"
// 		+ "    }";
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
//   private generateConstants(fa: FiniteAutomata, g: Grammar, options: Options): string {// throws NotLLException
//     let result = ''
//     result += "    public static class Constants\n    {\n        public const let EPSILON  = 0;\n        public const let DOLLAR   = 1;\n\n" + this.constList(fa, g) + "\n"
//     result += "    }"
//     this.colocarNamespace(result, options);
//     return result.toString();
//   }
//
// 	public colocarNamespace(result: string, options: Options ) { // TODO STATIC VERIFY
// 		let package_: string = options.pkgName;
// 		let usePackage: boolean = package_ != null && !(package_ === (""));
//
// 		if (usePackage) {
// 			result = `namespace ${package_}\n{\n${result}`; // TODO insert
// 			result += ("\n}");
// 		}
// 	}
//
// 	public emitStaticImport( parserOptions: Options, path: string): string {
// 		let package_: string = parserOptions.pkgName;
// 		let usePackage: boolean = package_ != null && !(package_ === (""));
//
// 		if(usePackage) {
// 			return  "using static " + package_ + "."+ path +  ";\n";
// 		}
//
// 		return  "using static " + path + ";\n";
// 	}
// 	private generateScannerConstants( fa: FiniteAutomata, options: Options ): string
// 	{
// 		let result = "";
//
// 		result += (
// 		"    public static class ScannerConstants\n"+
// 		"    {\n");
//
// 		result += (this.genLexTables(fa, options));
//
// 		result += ("    }\n");
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
// 	private generateParserConstants(g: Grammar, options: Options ): string // throws NotLLException
// 	{
// 		let result = "";
//
// 		result += (
// 		"    public static class ParserConstants\n"+
// 		"    {\n");
//
// 		result += (this.genSyntTables(g, options));
//
// 		result += ("    }\n");
//
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
//
// 	private genLexTables( fa: FiniteAutomata, options: Options ): string
// 	{
// 		let lexTable: string | null;
//
// 		switch (options.scannerTable)
// 		{
// 			case Options.SCANNER_TABLE_FULL:
// 				lexTable = this.lex_table(fa);
// 				break;
// 			case Options.SCANNER_TABLE_COMPACT:
// 				lexTable = this.lex_table_compress(fa);
// 				break;
// 			case Options.SCANNER_TABLE_HARDCODE:
// 				lexTable = "";
// 				break;
// 			default:
// 				//nunca acontece
// 				lexTable = null;
// 				break;
// 		}
//
// 		return lexTable+
// 			"\n"+
// 			this.token_state(fa)+
// 			(fa.hasContext() ?
// 			"\n"+
// 			this.context(fa) : "")+
// 			"\n"+
// 			(fa.specialCases.length > 0 ?
// 			this.special_cases(fa)+
// 			"\n" : "")+
// 			this.scanner_error(fa)+
// 			"\n";
// 	}
//
// 	private context(fa: FiniteAutomata): string
// 	{
// 		let result = "";
//
// 		result += ("        public static readonly int[][] SCANNER_CONTEXT =\n"+
// 		              "        {\n");
//
// 		for (let i=0; i<fa.transitions.size(); i++)
// 		{
// 			result += ("            new[] {");
// 			result += (fa.isContext(i)?"1":"0");
// 			result += (", ");
// 			result += (fa.getOrigin(i));
// 			result += ("},\n");
// 		}
//
//     result = result.slice(0, -2)
// 		result += (
// 		"\n        };\n");
//
// 		return result;
// 	}
//
// 	private scanner_error(fa: FiniteAutomata): string
// 	{
// 		let result = "";
//
// 		result += (
// 		"        public static readonly string[] SCANNER_ERROR =\n"+
// 		"        {\n");
//
// 		let count = fa.transitions.size();
// 		for (let i=0; i< count; i++)
// 		{
// 			result += ("            \"");
//
// 			let error = fa.getError(i);
// 			for (let j=0; j<error.length; j++)
// 			{
// 				if (error.charAt(j) == '"')
// 					result += ("\\\"");
// 				else
// 					result += (error.charAt(j));
// 			}
//
// 			result += ("\",\n");
// 		}
// 		result = result.slice(0, -2);
//     result += (
// 		"\n        };\n");
//
// 		return result;
// 	}
//
// 	private genSyntTables(g: Grammar, options: Options ): string | null //throws NotLLException
// 	{
// 		switch (options.parser)
// 		{
// 			case RD:
// 			case LL:
// 				return this.genLLSyntTables(g, options.parser);
// 			case SLR:
// 			case LALR:
// 			case LR:
// 				return this.genLRSyntTables(g);
// 			default:
// 				return null;
// 		}
// 	}
//
// 	private genLRSyntTables(g: Grammar): string
// 	{
// 		let lrTable = LRGeneratorFactory.createGenerator(g).buildIntTable();
//
// 		let result =
// 			"        public const let FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
// 			"\n"+
// 			"        public const let SHIFT  = 0;\n"+
// 			"        public const let REDUCE = 1;\n"+
// 			"        public const let ACTION = 2;\n"+
// 			"        public const let ACCEPT = 3;\n"+
// 			"        public const let GO_TO  = 4;\n"+
// 			"        public const let ERROR  = 5;\n"
//
// 		result += "\n";
//
// 		result += (this.emitLRTable(g));
//
// 		result += ("\n");
//
// 		result += (this.emitProductionsForLR(g));
//
// 		result += ("\n");
//
// 		result += (this.emitErrorTableLR());
//
// 		return result;
// 	}
// 	private emitProductionsForLR(g: Grammar): Object
// 	{
// 		let result = "";
//
//     let prods = g.productions;
//
//
//     result += ("        public static readonly int[][] PRODUCTIONS =\n");
// 		result += ("        {\n");
//
// 		for (let i=0; i<prods.size(); i++)
// 		{
// 			result += ("            new[] { ");
// 			result += (prods.get(i).get_lhs());
// 			result += (", ");
// 			result += (prods.get(i).get_rhs().length);
// 			result += (" },\n");
// 		}
//     result = result.slice(0, -2)
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private emitLRTable(g: Grammar): string
// 	{
// 		let result = "";
//
// 		let tbl = this.lrTable;
//
// 		result += ("        public static readonly int[][][] PARSER_TABLE =\n");
// 		result += ("        {\n");
//
//     if(tbl == null) throw new SyntaticError("Tabela LR está nula.");
//
// 		let max = tbl.length;
// 		if (g.productions.size() > max)
// 			max = g.productions.size();
//
// 		max = (""+max).length;
// 		for (let i=0; i< tbl.length; i++)
// 		{
// 			result += ("            new[]\n"+
// 			              "            {");
// 			for (let j=0; j<tbl[i].length; j++)
// 			{
// 				if(j%5 == 0)
// 					result += ("\n               ");
//
// 				result += (" new[] { ");
// 				result += (Command.CONSTANTS[tbl[i][j][0]]);
// 				result += (", ");
// 				let str = ""+tbl[i][j][1];
// 				for (let k=str.length; k<max; k++)
// 					result += (" ");
// 				result += (str) += ("},");
// 			}
//       result = result.slice(0, -1)
// 			result += ("\n            },\n");
// 		}
//     result = result.slice(0, -2)
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private genLLSyntTables(g: Grammar, type: Options.Parser ): string | null //throws NotLLException
// 	{
//
// 		let result = "";
//
// 		if (type == LL)
// 		{
// 			let start = g.startSymbol;
//       let fnt = g.FIRST_NON_TERMINAL;
//       let fsa = g.symbols.length;
//
// 			let syntConsts =
// 			"        public const int START_SYMBOL = "+start+";\n"+
// 			"\n"+
// 			"        public const int FIRST_NON_TERMINAL    = "+fnt+";\n"+
// 	    	"        public const int FIRST_SEMANTIC_ACTION = "+fsa+";\n";
//
// 	    	result += (syntConsts);
//
// 	    	result += ("\n");
//
// 	    	result += (this.emitLLTable(new LLParser(g)));
//
// 			result += ("\n");
//
// 			result += (this.emitProductionsForLL(g));
//
// 			result += ("\n");
//
// 			result += (this.emitErrorTableLL(g));
//
// 			return result;
// 		}
// 		else if (type == RD)
// 			return this.emitErrorTableLL(g);
// 		else
// 			return null;
// 	}
//
// 	private constList(fa: FiniteAutomata, g: Grammar): string
// 	{
// 		let result = "";
//
// 		//List<String> tokens = null;
//
//     let tokens: string[] | null = null;
//
//     if (fa != null)
// 			tokens = fa.tokens.toArray();
// 		else if (g != null)
// 			tokens = g.terminals;
// 		else
// 			throw new Error("Erro Interno");
//
// 		for (let i=0; i<tokens.length; i++)
// 		{
// 			let t = tokens[i];
// 			if (t.charAt(0) == '\"')
// 				result += ("        public const let t_TOKEN_"+(i+2)+" = "+(i+2)+"; "+"//"+t+"\n");
// 			else
// 				result += ("        public const let t_"+t+" = "+(i+2)+";\n");
// 		}
//
// 		return result;
// 	}
//
// 	private lex_table_compress(fa: FiniteAutomata): string
// 	{
// 		let result = "";
//
// 		//List<Map<Character, Integer>> trans = fa.transitions;
//
//     let trans = fa.transitions;
//
//
//     //let sti = new int[trans.size()+1];
//     let sti: number[] = new Array(trans.size() + 1).fill(0);
//
//     let count = 0;
// 		for (let i=0; i<trans.size(); i++)
// 		{
// 			sti[i] = count;
// 			count += trans.get(i).size;
// 		}
// 		sti[sti.length-1] = count;
//
// 		//int[][] st = new int[count][2];
//     let st: number[][] = Array.from({ length: count }, () => new Array(2).fill(0));
//
// 		count = 0;
// 		for (let i=0; i<trans.size(); i++)
// 		{
// 			// for (Map.Entry<Character, Integer> entry : trans.get(i).entrySet())
// 			// {
// 			// 	Character ch = entry.getKey();
// 			// 	Integer itg =  entry.getValue();
// 			//
// 			// 	st[count][0] = ch.charValue();
// 			// 	st[count][1] = itg.intValue();
// 			//
// 			// 	count++;
// 			// }
//
//       for (const [ch, itg] of trans.get(i).entries()) {
//         st[count][0] = ch.charCodeAt(0);
//         st[count][1] = itg;
//
//         count++;
//       }
//
// 		}
//
// 		result += ("        public static readonly int[] SCANNER_TABLE_INDEXES = \n");
// 		result += ("        {");
// 		for (let i=0; i<sti.length; i++)
// 		{
// 			if(i%32 == 0)
// 				result += ("\n            ");
// 			result += (sti[i]) + (", ");
// 		}
//
//     result = result.slice(0, -2)
// 		result += ("\n        };\n\n");
//
// 		result += ("        public static readonly int[][] SCANNER_TABLE = \n");
// 		result += ("        {");
// 		for (let i=0; i<st.length; i++)
// 		{
// 			if(i%6 == 0)
// 				result += ("\n            ");
// 			result += ("new[] {")
// 			       + (st[i][0])
// 			       + (", ")
// 			       + (st[i][1])
// 			       + ("}, ");
// 		}
//
// 		result = result.slice(0, -2)
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private lex_table(fa: FiniteAutomata): string
// 	{
// 		let result = "";
// 		result += ("        public static readonly int[][] SCANNER_TABLE =\n");
// 		result += ("        {\n");
// 		let count = fa.transitions.size();
// 		let max = count.toString().length;
// 		if (max == 1)
// 			max = 2;
// 		let indent = 0;
//
// 		for (let i=0; i<count; i++)
// 		{
// 			result += ("            new[]\n");
// 			result += ("            {\n");
// 			result += ("                ");
// 			for (char c = 0; c<256; c++)
// 			{
// 				let n = fa.nextState(c, i).toString();
// 				for (let j = n.length; j<max; j++)
// 					result += (" ");
// 				result += (n) += (", ");
// 				if(++indent%16 == 0 && c<255)
// 					result += ("\n                ");
// 			}
// 			result = result.slice(0, -2)
// 			result += ("\n			},\n");
// 		}
// 		result = result.slice(0, -2)
//
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private token_state(fa: FiniteAutomata): string
// 	{
// 		let result = "";
//
// 		result += ("        public static readonly int[] TOKEN_STATE =\n");
// 		result += ("        {\n");
// 		result += ("            ");
// 		let count = fa.transitions.size();
//     let max = count.toString().length;
// 		if (max == 1)
// 			max = 2;
//
// 		for (let i=0; i<count; i++)
// 		{
// 			let fin = fa.tokenForState(i);
//       let n = fin.toString();
// 			for (let j = n.length; j<max; j++)
// 				result += (" ");
// 			result += (n) += (", ");
// 		}
// 		result = result.slice(0, -2)
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private special_cases(fa: FiniteAutomata): string
// 	{
// 		let indexes = fa.getSpecialCasesIndexes();
// 		let sc: KeyValuePar[] = fa.specialCases;
//
// 		let result = "";
//
// 		let count = sc.length;
//
// 		result += (
// 			"        public static readonly int[] SPECIAL_CASES_INDEXES =\n"+
// 			"        {\n"+
// 			"            ");
//
// 		count = indexes.length;
// 		for (let i=0; i<count; i++)
// 		{
// 			result += (indexes[i][0]) + (", ");
// 		}
// 		result += (indexes[count-1][1]);
// 		result += ("\n        };\n\n");
//
// 		result += (
// 					"        public static readonly string[] SPECIAL_CASES_KEYS =\n"+
// 					"        {\n"+
// 					"            ");
// 		count = sc.length;
// 		for (let i=0; i<count; i++)
// 		{
// 			result += ("\"") + (sc[i].key) + ("\", ");
// 		}
// 		result = result.slice(0, -2)
//
// 		result += ("\n        };\n\n");
//
// 		result += (
// 					"        public static readonly int[] SPECIAL_CASES_VALUES =\n"+
// 					"        {\n"+
// 					"            ");
// 		count = sc.length;
// 		for (let i=0; i<count; i++)
// 		{
// 			result += (sc[i].value) + (", ");
// 		}
// 		result = result.slice(0, -2)
//
// 		result += ("\n        };\n");
//
// 		return result;
// 	}
//
// 	private emitProductionsForLL(g: Grammar): String
// 	{
//
// 		let pl: List<Production> = g.productions;
// 		//let productions = new String[pl.size()][];
//     let productions: string[][] = new Array(pl.size());
// 		let max = 0;
// 		for (let i=0; i< pl.size(); i++)
// 		{
// 			let rhs = pl.get(i).get_rhs();
// 			if (rhs.length > 0)
// 			{
//         productions[i] = new Array(rhs.length).fill('');
// 				for (let j=0; j<rhs.length; j++)
// 				{
// 					productions[i][j] = rhs[j].toString();
// 					if (productions[i][j].length > max)
// 						max = productions[i][j].length;
// 				}
// 			}
// 			else
// 			{
//         productions[i] = new Array(1).fill('');
// 				productions[i][0] = "0";
// 			}
// 		}
//
// 		let bfr = '';
//
// 		bfr += ("        public static readonly int[][] PRODUCTIONS = \n");
// 		bfr += ("        {\n");
//
// 		for (let i=0; i< productions.length; i++)
// 		{
// 			bfr += ("            new[] {");
// 			for (let j=0; j<productions[i].length; j++)
// 			{
// 				bfr += (" ");
// 				for (let k = productions[i][j].length; k<max; k++)
// 					bfr += (" ");
// 				bfr += (productions[i][j]) += (",");
// 			}
// 			bfr = bfr.slice(0, -1)
// 	 		bfr += (" },\n");
// 		}
// 		bfr = bfr.slice(0, -2)
// 		bfr += ("\n        };\n");
//
// 		return bfr.toString();
// 	}
//
// 	private emitLLTable(g: LLParser): string
// 	{
// 		let tbl = g.generateTable();
// 		//let table = new String[tbl.length][tbl[0].length];
//     let table: string[][] = Array.from({ length: tbl.length }, () => new Array(tbl[0].length).fill(''));
//
// 		let max = 0;
// 		for (let i = 0; i < table.length; i++)
// 		{
// 			for (let j = 0; j < table[i].length; j++)
// 			{
// 				let tmp = tbl[i][j].toString();
// 				table[i][j] = tmp;
// 				if (tmp.length > max)
// 					max = tmp.length;
// 			}
// 		}
//
// 		let bfr = '';
//
// 		bfr += ("        public static readonly int[][] PARSER_TABLE =\n");
// 		bfr += ("        {\n");
//
// 		for (let i=0; i< table.length; i++)
// 		{
// 			bfr += ("            new[] {");
// 			for (let j=0; j<table[i].length; j++)
// 			{
// 				bfr += (" ");
// 				for (let k = table[i][j].length; k<max; k++)
// 					bfr += (" ");
// 				bfr += (table[i][j]) += (",");
// 			}
// 			bfr = bfr.slice(0, -1)
// 	 		bfr += ("\n            },\n");
// 		}
// 		bfr = bfr.slice(0, -2)
// 		bfr += ("\n        };\n");
//
// 		return bfr.toString();
// 	}
//
// 	private emitErrorTableLR(): string
// 	{
//
//     if(this.lrTable == null) throw new SyntaticError("Tabela LR está nula.");
//
// 		let count = this.lrTable.length;
//
// 		let result = "";
//
// 		result += (
// 		"        public static readonly string[] PARSER_ERROR =\n"+
// 		"        {\n");
//
// 		for (let i=0; i< count; i++)
// 		{
// 			result += ("            \"Erro estado "+i+"\",\n");
// 		}
//
// 		result = result.slice(0, -2)
// 		result += (
// 		"\n        };\n");
//
// 		return result;
// 	}
//
// 	private emitErrorTableLL(g: Grammar): string
// 	{
// 		let symbs = g.symbols;
// 		let result = "";
//
// 		result += (
// 		"        public static readonly string[] PARSER_ERROR =\n"+
// 		"        {\n"+
// 		"            \"\",\n"+
// 		"            \"Era esperado fim de programa\",\n");
//
// 		for (let i=2; i< g.FIRST_NON_TERMINAL; i++)
// 		{
// 			result += ("            \"Era esperado ");
// 			for (let j=0; j<symbs[i].length; j++)
// 			{
// 				switch (symbs[i].charAt(j))
// 				{
// 					case '\"': result += ("\\\""); break;
// 					case '\\': result += ("\\\\"); break;
// 					default: result += (symbs[i].charAt(j));
// 				}
// 			}
//
// 			result += ("\",\n");
// 		}
//
// 		for (let i=g.FIRST_NON_TERMINAL; i< symbs.length; i++)
// 			result += ("            \""+symbs[i]+" inválido\",\n");
//
// 		result = result.slice(0, -2)
// 		result += (
// 		"\n        };\n");
//
// 		return result;
// 	}
// }
