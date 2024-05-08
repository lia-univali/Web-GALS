// import type { FiniteAutomata } from "../FiniteAutomata";
// import { Options } from "../Options";
// import type { Grammar } from "../parser/Grammar";

// /**
//  * 
//  * @author Gustavo
//  * @see gesser.gals.generator.java.JavaCommonGenerator
//  */
// export class CSharpCommonGenerator
// {
//     lrTable: number[][][] | null = null;
	
// 	public generate(fa: FiniteAutomata, g: Grammar, options: Options): Map<string, string> //throws NotLLException
// 	{
//         const result: Map<string, string> = new Map;
				
// 		result.set("Token.cs", this.generateToken(options));

// 		result.set("Constants.cs", this.generateConstants(fa, g, options));
// 		if (fa != null)
// 			result.set("ScannerConstants.cs", this.generateScannerConstants(fa, options));
// 		if (g != null)
// 			result.set("ParserConstants.cs", this.generateParserConstants(g, options));	
		
// 		result.set("AnalysisError.cs", this.generateAnalysisError(options));
// 		result.set("LexicalError.cs", this.generateLexicalError(options));
// 		result.set("SyntaticError.cs", this.generateSyntaticError(options));
// 		result.set("SemanticError.cs", this.generateSemanticError(options));	
		
// 		return result;
// 	}
	
// 	private generateToken(options: Options): string
// 	{
// 		let result = "";
// 		let cls = "    public class Token\n"
// 				+ "    {\n"
// 				+ "        public int Id { get; private set; }\n"
// 				+ "        public string Lexeme { get; private set; }\n"
// 				+ "        public int Position { get; private set; }\n"
// 				+ "\n"
// 				+ "        public Token(int id, string lexeme, int position)\n"
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
    	
// 		return result;
// 	}
	
// 	private generateAnalysisError(options: Options ): string
// 	{
// 		let result = "";
// 		let cls = 
// 		"    public class AnalysisError : System.Exception\n"
// 		+ "    {\n"
// 		+ "        public int Position { get; private set; }\n"
// 		+ "\n"
// 		+ "        public AnalysisError(string msg, int position) : base(msg) => Position = position;\n"
// 		+ "\n"
// 		+ "        public AnalysisError(string msg) : base(msg) { }\n"
// 		+ "\n"
// 		+ "        public override string ToString() => $\"{base.ToString()}, @ {Position}\";\n"
// 		+ "    }";
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}

// 	private generateLexicalError(options: Options ): string
// 	{
// 		let result = "";

// 		let cls = 
// 		"    public class LexicalError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public LexicalError(string msg, int position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public LexicalError(string msg): base(msg) { }\n"
// 		+ "    }";
		
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
	
// 	private generateSyntaticError(options: Options ): string
// 	{
// 		let result = "";
		
// 		let cls = 
// 		"    public class SyntaticError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public SyntaticError(string msg, int position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public SyntaticError(string msg) : base(msg) { }\n"
// 		+ "    }";
		
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
	
// 	private generateSemanticError(options: Options ): string
// 	{
// 		let result = "";
// 		let cls = 
// 		"    public class SemanticError : AnalysisError\n"
// 		+ "    {\n"
// 		+ "        public SemanticError(string msg, int position) : base(msg, position) { }\n"
// 		+ "\n"
// 		+ "        public SemanticError(string msg) : base(msg) { }\n"
// 		+ "    }";
// 		result += (cls);
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
	
// 	private generateConstants(fa: FiniteAutomata, g: Grammar, options: Options ): string //throws NotLLException
// 	{
// 		let result = "";
// 		result += (
// 		"    public static class Constants\n"+
// 		"    {\n"+
// 		"        public const int EPSILON  = 0;\n"+
// 		"        public const int DOLLAR   = 1;\n"+
// 		"\n"+
// 		this.constList(fa, g)+
// 		"\n" );
//     	result += ("    }");
    	
//     	this.colocarNamespace(result, options);
// 		return result;
// 	}
// 	public colocarNamespace(result: string, options: Options ) { // TODO STATIC VERIFY
// 		let package_: string = options.pkgName;
// 		let usePackage: boolean = package_ != null && !(package_ === (""));
		
// 		if (usePackage) {
// 			result = `namespace ${package_}\n{\n${result}`; // TODO insert
// 			result += ("\n}");
// 		}
// 	}
	
// 	public emitStaticImport( parserOptions: Options, path: string): string {
// 		let package_: string = parserOptions.pkgName;
// 		let usePackage: boolean = package_ != null && !(package_ === (""));
		
// 		if(usePackage) {
// 			return  "using static " + package_ + "."+ path +  ";\n";
// 		}
		
// 		return  "using static " + path + ";\n";
// 	}
// 	private generateScannerConstants( fa: FiniteAutomata, options: Options ): string
// 	{
// 		let result = "";
		
// 		result += (
// 		"    public static class ScannerConstants\n"+
// 		"    {\n");
		
// 		result += (this.genLexTables(fa, options));
			
// 		result += ("    }\n");
// 		this.colocarNamespace(result, options);
// 		return result;
// 	}
	
// 	private generateParserConstants(g: Grammar, options: Options ): string // throws NotLLException
// 	{
// 		let result = "";

// 		result += (
// 		"    public static class ParserConstants\n"+
// 		"    {\n");
		
// 		result += (this.genSyntTables(g, options));
			
// 		result += ("    }\n");

// 		this.colocarNamespace(result, options);
// 		return result;
// 	}

// 	private genLexTables( fa: FiniteAutomata, options: Options ): string
// 	{
// 		let lexTable: string | null;
		
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
			
// 		return lexTable+
// 			"\n"+
// 			this.token_state(fa)+
// 			(fa.hasContext() ? 
// 			"\n"+
// 			this.context(fa) : "")+
// 			"\n"+
// 			(fa.getSpecialCases().length > 0 ?
// 			this.special_cases(fa)+			
// 			"\n" : "")+
// 			this.scanner_error(fa)+
// 			"\n";
// 	}
	
// 	private context(fa: FiniteAutomata): string
// 	{
// 		let result = "";
		
// 		result += ("        public static readonly int[][] SCANNER_CONTEXT =\n"+
// 		              "        {\n");
		
// 		for (let i=0; i<fa.transitions.size(); i++)
// 		{
// 			result += ("            new[] {");
// 			result += (fa.isContext(i)?"1":"0");
// 			result += (", ");
// 			result += (fa.getOrigin(i));
// 			result += ("},\n");
// 		}
		
// 		result.setLength(result.length()-2);
// 		result += (
// 		"\n        };\n");
		
// 		return result;
// 	}

// 	private scanner_error(fa: FiniteAutomata): string
// 	{
// 		let result = "";

// 		result += (
// 		"        public static readonly string[] SCANNER_ERROR =\n"+
// 		"        {\n");

// 		int count = fa.getTransitions().size();
// 		for (int i=0; i< count; i++)
// 		{
// 			result += ("            \"");
			
// 			String error = fa.getError(i);
// 			for (int j=0; j<error.length(); j++)
// 			{
// 				if (error.charAt(j) == '"')
// 					result += ("\\\"");
// 				else
// 					result += (error.charAt(j));
// 			}
			
// 			result += ("\",\n");
// 		}
// 		result.setLength(result.length()-2);
// 		result += (
// 		"\n        };\n");

// 		return result;
// 	}
	
// 	private String genSyntTables(g: Grammar, options: Options ) throws NotLLException
// 	{
// 		switch (options.parser)
// 		{
// 			case RD:
// 			case LL:
// 				return genLLSyntTables(g, options.parser);
// 			case SLR:
// 			case LALR:
// 			case LR:
// 				return genLRSyntTables(g);
// 			default:
// 				return null;
// 		}
// 	}
	
// 	private String genLRSyntTables(g: Grammar)
// 	{
// 		lrTable = LRGeneratorFactory.createGenerator(g).buildIntTable();
		
// 		StringBuffer result = new StringBuffer(
// 			"        public const int FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
// 			"\n"+
// 			"        public const int SHIFT  = 0;\n"+
// 			"        public const int REDUCE = 1;\n"+
// 			"        public const int ACTION = 2;\n"+
// 			"        public const int ACCEPT = 3;\n"+
// 			"        public const int GO_TO  = 4;\n"+
// 			"        public const int ERROR  = 5;\n" );
		
// 		result += ("\n");
    	
// 		result += (emitLRTable(g));
		
// 		result += ("\n");

// 		result += (emitProductionsForLR(g));
		
// 		result += ("\n");

// 		result += (emitErrorTableLR());
		
// 		return result;
// 	}
// 	private Object emitProductionsForLR(g: Grammar)
// 	{
// 		let result = "";
		
// 		List<Production> prods = g.getProductions();
		
// 		result += ("        public static readonly int[][] PRODUCTIONS =\n");
// 		result += ("        {\n");
		
// 		for (int i=0; i<prods.size(); i++)
// 		{
// 			result += ("            new[] { ");
// 			result += (prods.get(i).get_lhs());
// 			result += (", ");
// 			result += (prods.get(i).get_rhs().size());
// 			result += (" },\n");
// 		}		
// 		result.setLength(result.length()-2);
// 		result += ("\n        };\n");
		
// 		return result;
// 	}
	
// 	private String emitLRTable(g: Grammar)
// 	{
// 		let result = "";
				
// 		int[][][] tbl = lrTable;
		
// 		result += ("        public static readonly int[][][] PARSER_TABLE =\n");
// 		result += ("        {\n");
		
// 		int max = tbl.length;
// 		if (g.getProductions().size() > max)
// 			max = g.getProductions().size();
			
// 		max = (""+max).length();
// 		for (int i=0; i< tbl.length; i++)
// 		{
// 			result += ("            new[]\n"+
// 			              "            {");
// 			for (int j=0; j<tbl[i].length; j++)
// 			{
// 				if(j%5 == 0)
// 					result += ("\n               ");
				
// 				result += (" new[] { ");
// 				result += (Command.CONSTANTS[tbl[i][j][0]]);
// 				result += (", ");
// 				String str = ""+tbl[i][j][1];
// 				for (int k=str.length(); k<max; k++)
// 					result += (" ");
// 				result += (str) += ("},");
// 			}
// 			result.setLength(result.length()-1);
// 			result += ("\n            },\n");
// 		}	
// 		result.setLength(result.length()-2);
// 		result += ("\n        };\n");
		
// 		return result;
// 	}
	
// 	private String genLLSyntTables(g: Grammar, Options.Parser type ) throws NotLLException
// 	{
		
		
// 		let result = "";
		
// 		if (type == LL)
// 		{	
// 			int start = g.getStartSymbol();
// 			int fnt = g.FIRST_NON_TERMINAL;
// 			int fsa = g.getSymbols().length;
			
// 			String syntConsts = 
// 			"        public const int START_SYMBOL = "+start+";\n"+
// 			"\n"+
// 			"        public const int FIRST_NON_TERMINAL    = "+fnt+";\n"+
// 	    	"        public const int FIRST_SEMANTIC_ACTION = "+fsa+";\n";
	    	
// 	    	result += (syntConsts);
	    	
// 	    	result += ("\n");
	    	
// 	    	result += (emitLLTable(new LLParser(g)));
				
// 			result += ("\n");
			
// 			result += (emitProductionsForLL(g));
				
// 			result += ("\n");
				
// 			result += (emitErrorTableLL(g));
			
// 			return result;
// 		}
// 		else if (type == RD)
// 			return emitErrorTableLL(g);
// 		else
// 			return null;
// 	}
	
// 	private String constList(fa: FiniteAutomata, g: Grammar)
// 	{
// 		let result = "";
		
// 		List<String> tokens = null;
		
// 		if (fa != null)
// 			tokens = fa.getTokens();
// 		else if (g != null)
// 			tokens = Arrays.asList(g.getTerminals());
// 		else
// 			throw new RuntimeException("Erro Interno");
		
// 		for (int i=0; i<tokens.size(); i++)
// 		{
// 			String t = tokens.get(i);
// 			if (t.charAt(0) == '\"')
// 				result += ("        public const int t_TOKEN_"+(i+2)+" = "+(i+2)+"; "+"//"+t+"\n");
// 			else
// 				result += ("        public const int t_"+t+" = "+(i+2)+";\n");
// 		}
		
// 		return result;
// 	}
	
// 	private String lex_table_compress(fa: FiniteAutomata)
// 	{
// 		let result = "";
		
// 		List<Map<Character, Integer>> trans = fa.getTransitions();
		
// 		int[] sti = new int[trans.size()+1];
// 		int count = 0;
// 		for (int i=0; i<trans.size(); i++)
// 		{
// 			sti[i] = count;
// 			count += trans.get(i).size();
// 		}
// 		sti[sti.length-1] = count;
		
// 		int[][] st = new int[count][2];
		
// 		count = 0;
// 		for (int i=0; i<trans.size(); i++)
// 		{
// 			for (Map.Entry<Character, Integer> entry : trans.get(i).entrySet())
// 			{
// 				Character ch = entry.getKey();
// 				Integer itg =  entry.getValue(); 
				
// 				st[count][0] = ch.charValue();
// 				st[count][1] = itg.intValue();
				
// 				count++;
// 			}
// 		}
		
// 		result += ("        public static readonly int[] SCANNER_TABLE_INDEXES = \n");
// 		result += ("        {");
// 		for (int i=0; i<sti.length; i++)
// 		{
// 			if(i%32 == 0)
// 				result += ("\n            ");
// 			result += (sti[i]) += (", ");
// 		}		
		
// 		result.setLength(result.length()-2);
// 		result += ("\n        };\n\n");	
		
// 		result += ("        public static readonly int[][] SCANNER_TABLE = \n");
// 		result += ("        {");
// 		for (int i=0; i<st.length; i++)
// 		{
// 			if(i%6 == 0)
// 				result += ("\n            ");
// 			result += ("new[] {")
// 			       += (st[i][0])
// 			       += (", ")
// 			       += (st[i][1])
// 			       += ("}, ");
// 		}		

// 		result.setLength(result.length()-2);
// 		result += ("\n        };\n");	
		
// 		return result;
// 	}
	
// 	private String lex_table(fa: FiniteAutomata)
// 	{
// 		let result = "";
// 		result += ("        public static readonly int[][] SCANNER_TABLE =\n");
// 		result += ("        {\n");
// 		int count = fa.getTransitions().size();
// 		int max = String.valueOf(count).length();
// 		if (max == 1)
// 			max = 2;
// 		int indent = 0;	
		
// 		for (int i=0; i<count; i++)
// 		{
// 			result += ("            new[]\n");
// 			result += ("            {\n");
// 			result += ("                ");
// 			for (char c = 0; c<256; c++)
// 			{
// 				String n = String.valueOf(fa.nextState(c, i));
// 				for (int j = n.length(); j<max; j++)
// 					result += (" ");
// 				result += (n) += (", ");
// 				if(++indent%16 == 0 && c<255)
// 					result += ("\n                ");
// 			}
// 			result.setLength(result.length()-2);
// 			result += ("\n			},\n");
// 		}
// 		result.setLength(result.length()-2);
		
// 		result += ("\n        };\n");
		
// 		return result;
// 	}
	
// 	private String token_state(fa: FiniteAutomata)
// 	{
// 		let result = "";
		
// 		result += ("        public static readonly int[] TOKEN_STATE =\n");
// 		result += ("        {\n");
// 		result += ("            ");
// 		int count = fa.getTransitions().size();
// 		int max = String.valueOf(count).length();
// 		if (max == 1)
// 			max = 2; 
		
// 		for (int i=0; i<count; i++)
// 		{
// 			int fin = fa.tokenForState(i);
// 			String n = String.valueOf(fin);
// 			for (int j = n.length(); j<max; j++)
// 				result += (" ");
// 			result += (n) += (", ");
// 		}
// 		result.setLength(result.length()-2);		
// 		result += ("\n        };\n");
		
// 		return result;
// 	}
	
// 	private String special_cases(fa: FiniteAutomata)
// 	{
// 		int[][] indexes = fa.getSpecialCasesIndexes();
// 		FiniteAutomata.KeyValuePar[] sc = fa.getSpecialCases();
		
// 		let result = "";
		
// 		int count = sc.length;
							
// 		result += (
// 			"        public static readonly int[] SPECIAL_CASES_INDEXES =\n"+
// 			"        {\n"+
// 			"            ");
		
// 		count = indexes.length;
// 		for (int i=0; i<count; i++)
// 		{
// 			result += (indexes[i][0]) += (", ");
// 		}
// 		result += (indexes[count-1][1]);
// 		result += ("\n        };\n\n");
				
// 		result += (
// 					"        public static readonly string[] SPECIAL_CASES_KEYS =\n"+
// 					"        {\n"+
// 					"            ");
// 		count = sc.length;
// 		for (int i=0; i<count; i++)
// 		{
// 			result += ("\"") += (sc[i].key) += ("\", ");
// 		}
// 		result.setLength(result.length()-2);
				
// 		result += ("\n        };\n\n");
		
// 		result += (
// 					"        public static readonly int[] SPECIAL_CASES_VALUES =\n"+
// 					"        {\n"+
// 					"            ");
// 		count = sc.length;
// 		for (int i=0; i<count; i++)
// 		{
// 			result += (sc[i].value) += (", ");
// 		}
// 		result.setLength(result.length()-2);
				
// 		result += ("\n        };\n");
		
// 		return result;
// 	}
	
// 	private emitProductionsForLL(g: Grammar): String
// 	{
		
// 		List<Production> pl = g.getProductions();
// 		String[][] productions = new String[pl.size()][];
// 		int max = 0;
// 		for (int i=0; i< pl.size(); i++)
// 		{
// 			IntList rhs = pl.get(i).get_rhs();
// 			if (rhs.size() > 0)
// 			{
// 				productions[i] = new String[rhs.size()];
// 				for (int j=0; j<rhs.size(); j++)
// 				{
// 					productions[i][j] = String.valueOf(rhs.get(j));
// 					if (productions[i][j].length() > max)
// 						max = productions[i][j].length();
// 				}
// 			}
// 			else
// 			{
// 				productions[i] = new String[1];
// 				productions[i][0] = "0";
// 			}
// 		}
		
// 		StringBuffer bfr = new StringBuffer();
		
// 		bfr += ("        public static readonly int[][] PRODUCTIONS = \n");
// 		bfr += ("        {\n");
		
// 		for (int i=0; i< productions.length; i++)
// 		{
// 			bfr += ("            new[] {");
// 			for (int j=0; j<productions[i].length; j++)
// 			{
// 				bfr += (" ");
// 				for (int k = productions[i][j].length(); k<max; k++)
// 					bfr += (" ");
// 				bfr += (productions[i][j]) += (",");
// 			}
// 			bfr.setLength(bfr.length()-1);
// 	 		bfr += (" },\n");
// 		}	
// 		bfr.setLength(bfr.length()-2);
// 		bfr += ("\n        };\n");
		
// 		return bfr.toString();
// 	}
	
// 	private emitLLTable(g: LLParser): string
// 	{
// 		int[][] tbl = g.generateTable();
// 		String[][] table = new String[tbl.length][tbl[0].length];
		
// 		int max = 0;
// 		for (int i = 0; i < table.length; i++)
// 		{
// 			for (int j = 0; j < table[i].length; j++)
// 			{
// 				String tmp = String.valueOf(tbl[i][j]);
// 				table[i][j] = tmp;
// 				if (tmp.length() > max)
// 					max = tmp.length();
// 			}
// 		}
		
// 		StringBuffer bfr = new StringBuffer();
		
// 		bfr += ("        public static readonly int[][] PARSER_TABLE =\n");
// 		bfr += ("        {\n");
		
// 		for (int i=0; i< table.length; i++)
// 		{
// 			bfr += ("            new[] {");
// 			for (int j=0; j<table[i].length; j++)
// 			{
// 				bfr += (" ");
// 				for (int k = table[i][j].length(); k<max; k++)
// 					bfr += (" ");
// 				bfr += (table[i][j]) += (",");
// 			}
// 			bfr.setLength(bfr.length()-1);
// 	 		bfr += ("\n            },\n");
// 		}	
// 		bfr.setLength(bfr.length()-2);
// 		bfr += ("\n        };\n");
		
// 		return bfr.toString();
// 	}
	
// 	private emitErrorTableLR(): string
// 	{
// 		int count = lrTable.length;
		
// 		let result = "";
	
// 		result += (
// 		"        public static readonly string[] PARSER_ERROR =\n"+
// 		"        {\n");
		
// 		for (int i=0; i< count; i++)
// 		{
// 			result += ("            \"Erro estado "+i+"\",\n");
// 		}
		
// 		result.setLength(result.length()-2);
// 		result += (
// 		"\n        };\n");
	
// 		return result;
// 	}
	
// 	private emitErrorTableLL(g: Grammar): string
// 	{
// 		String[] symbs = g.getSymbols();
// 		let result = "";
		
// 		result += (
// 		"        public static readonly string[] PARSER_ERROR =\n"+
// 		"        {\n"+
// 		"            \"\",\n"+
// 		"            \"Era esperado fim de programa\",\n");
		
// 		for (let i=2; i< g.FIRST_NON_TERMINAL; i++)
// 		{
// 			result += ("            \"Era esperado ");
// 			for (let j=0; j<symbs[i].length(); j++)
// 			{
// 				switch (symbs[i].charAt(j))
// 				{
// 					case '\"': result += ("\\\""); break;
// 					case '\\': result += ("\\\\"); break;
// 					default: result += (symbs[i].charAt(j));				
// 				}
// 			}
			
// 			result += ("\",\n");
// 		}
					
// 		for (let i=g.FIRST_NON_TERMINAL; i< symbs.length; i++)
// 			result += ("            \""+symbs[i]+" inválido\",\n");
			
// 		result.setLength(result.length()-2);
// 		result += (
// 		"\n        };\n");
		
// 		return result;
// 	}
// }
