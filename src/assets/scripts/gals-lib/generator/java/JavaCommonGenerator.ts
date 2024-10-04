/* eslint-disable no-useless-escape */
import { List } from "../../DataStructures";
import { LexicalError, SyntaticError } from "../../analyser/SystemErros";
import { Production } from "../../util/Production";
import { FiniteAutomata, KeyValuePar } from "../FiniteAutomata";
import { Options } from "../Options";
import { Grammar } from "../parser/Grammar";
import { LLParser } from "../parser/ll/LLParser";
import { Command } from "../parser/lr/Command";
import { LRGeneratorFactory } from "../parser/lr/LRGeneratorFactory";

export class JavaCommonGenerator {

    lrTable: number[][][] | null = null;
  
    generate(fa: FiniteAutomata | null, g: Grammar | null, options: Options): Map<string, string> {
      const result: Map<string, string> = new Map;
  
      result.set('Token.java', this.generateToken(options));
      result.set('Constants.java', this.generateConstants(fa, g, options));
      if (fa !== null) {
        result.set('ScannerConstants.java', this.generateScannerConstants(fa, options));
      }
      if (g !== null) {
        result.set('ParserConstants.java', this.generateParserConstants(g, options));
      }
  
      result.set('AnalysisError.java', this.generateAnalysisError(options));
      result.set('LexicalError.java', this.generateLexicalError(options));
      result.set('SyntacticError.java', this.generateSyntacticError(options));
      result.set('SemanticError.java', this.generateSemanticError(options));
  
      return result;
    }

    private generateToken(options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n\n`);
        }
      
		result.push(
		"public class Token\n"+
		"{\n"+
		"    private int id;\n"+
		"    private String lexeme;\n"+
		"    private int position;\n"+
		"\n"+
		"    public Token(int id, String lexeme, int position)\n"+
		"    {\n"+
		"        this.id = id;\n"+
		"        this.lexeme = lexeme;\n"+
		"        this.position = position;\n"+
		"    }\n"+
		"\n"+	
		"    public final int getId()\n"+
		"    {\n"+
		"        return id;\n"+
		"    }\n"+
		"\n"+
		"    public final String getLexeme()\n"+
		"    {\n"+
		"        return lexeme;\n"+
		"    }\n"+
		"\n"+
		"    public final int getPosition()\n"+
		"    {\n"+
		"        return position;\n"+
		"    }\n"+
		"\n"+
		"    public String toString()\n"+
		"    {\n"+
		"        return id+\" ( \"+lexeme+\" ) @ \"+position;\n"+
		"    };\n"+
		"}\n"+
		"");
      
        return result.join('\n');
    }

    private generateAnalysisError(options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n`);
        }
      
		 result.push( 
		"public class AnalysisError extends Exception\n"+
		"{\n"+	
		"    private int position;\n"+
		"\n"+
		"    public AnalysisError(String msg, int position)\n"+
		"    {\n"+
		"        super(msg);\n"+
		"        this.position = position;\n"+
		"    }\n"+
		"\n"+	
		"    public AnalysisError(String msg)\n"+
		"    {\n"+
		"        super(msg);\n"+
		"        this.position = -1;\n"+
	    "    }\n"+
		"\n"+
		"    public int getPosition()\n"+
		"    {\n"+
		"        return position;\n"+
	    "    }\n"+
		"\n"+
		"    public String toString()\n"+
		"    {\n"+
		"        return super.toString() + \", @ \"+position;\n"+
		"    }\n"+
		"}\n"+
		"");
      
        return result.join('\n');
    }

    private generateLexicalError(options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n`);
        }
      
		result.push( 
		"public class LexicalError extends AnalysisError\n"+
		"{\n"+
		"    public LexicalError(String msg, int position)\n"+
		"	 {\n"+
		"        super(msg, position);\n"+
		"    }\n"+
		"\n"+
		"    public LexicalError(String msg)\n"+
		"    {\n"+
		"        super(msg);\n"+
		"    }\n"+
		"}\n"+
		"");
      
        return result.join('\n');
    }

    private generateSyntacticError(options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n\n`);
        }
      
		result.push(
		"public class SyntaticError extends AnalysisError\n"+
		"{\n"+
		"    public SyntaticError(String msg, int position)\n"+
		"	 {\n"+
		"        super(msg, position);\n"+
		"    }\n"+
		"\n"+
		"    public SyntaticError(String msg)\n"+
		"    {\n"+
		"        super(msg);\n"+
		"    }\n"+
		"}\n"+
		"");
      
        return result.join('\n');
      }
    

    private generateSemanticError(options: Options): string {
        const result: string[] = [];

        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
        result.push(`package ${packageName};\n\n`);
        }

		result.push(
		"public class SemanticError extends AnalysisError\n"+
		"{\n"+
		"    public SemanticError(String msg, int position)\n"+
		"	 {\n"+
		"        super(msg, position);\n"+
		"    }\n"+
		"\n"+
		"    public SemanticError(String msg)\n"+
		"    {\n"+
		"        super(msg);\n"+
		"    }\n"+
		"}\n"+
		"");

        return result.join('\n');
    }

    private generateConstants(fa: FiniteAutomata | null, g: Grammar | null, options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n`);
        }
      
        let extInter: string | null = null;
        if (fa === null) {
          extInter = "ParserConstants";
        } else if (g === null) {
          extInter = "ScannerConstants";
        } else {
          extInter = "ScannerConstants, ParserConstants";
        }
      
        if(fa === null) throw new LexicalError("Automato Finito é nulo")
        if(g === null) throw new SyntaticError("Gramatica é nulo")

		result.push(
        "public interface Constants extends "+extInter+"\n"+
        "{\n"+
        "    int EPSILON  = 0;\n"+
        "    int DOLLAR   = 1;\n"+
        "\n"+
        this.constList(fa, g)+
        "\n}\n");
      
        return result.join('\n');
    }
      
    private generateScannerConstants(fa: FiniteAutomata | null, options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n\n`);
        }
      
		result.push(
        "public interface ScannerConstants\n"+
        "{\n");
        
        if(fa == null) throw new LexicalError("Automato Finito é nulo.");
        
        result.push(this.genLexTables(fa, options));
            
        result.push("}\n");

        return result.join('\n');//TODO verificar comportamento
    }

    private generateParserConstants(g: Grammar | null, options: Options): string {
        const result: string[] = [];
      
        const packageName = options.pkgName;
        if (packageName && packageName !== "") {
          result.push(`package ${packageName};\n`);
        }
      
		result.push(
		"public interface ParserConstants\n"+
		"{");

        if(g === null) throw new SyntaticError("Gramatica é nulo")

        const table = this.genSyntTables(g, options)

        if(table === null) throw new SyntaticError("Tabela Sintatica é nula")

        result.push(table);
			
		result.push("}");
      
        return result.join('\n');//TODO verificar comportamento
    }

    
    private genLexTables(fa: FiniteAutomata, options: Options): string {
        let lexTable: string;
    
        switch (options.scannerTable) {
        case Options.SCANNER_TABLE_FULL:
            lexTable = this.lex_table(fa);
            break;
        case Options.SCANNER_TABLE_COMPACT:
            lexTable = this.lex_table_compress(fa);
            break;
        case Options.SCANNER_TABLE_HARDCODE:
            lexTable = '';
            break;
        default:
            // This should not happen
            lexTable = '';
            break;
        }
    
        return (
			lexTable+
			"\n"+
			this.token_state(fa)+
			(fa.hasContext() ? 
			"\n"+
			this.context(fa) : "")+
			"\n"+
			(fa.specialCases.length > 0 ?
			this.special_cases(fa)+			
			"\n" : "")+
			this.scanner_error(fa)+
			"\n"
        );
    }

    private context(fa: FiniteAutomata): string {
        const result: string[] = [];
      
		result.push("    int[][] SCANNER_CONTEXT =\n"+
		            "    {\n");
      
        for (let i=0; i<fa.transitions.size(); i++)
        {
            result.push("        {");
            result.push(fa.isContext(i)?"1":"0");
            result.push(", ");
            result.push(fa.getOrigin(i).toString());
            result.push("},\n");
        }

        result.pop(); // Remove the trailing comma from the last line TODO: verificar comportamento
		result.push("\n    };\n");

        return result.join('');
    }

    private scanner_error(fa: FiniteAutomata): string {
        const result: string[] = [];
      
		result.push(
            "    String[] SCANNER_ERROR =\n"+
            "    {\n");
      
        const count = fa.transitions.size();

        for (let i = 0; i < count; i++) {
			result.push("        \"");
			
			const error = fa.getError(i);
			for (let j=0; j<error.length; j++)
			{
				if (error.charAt(j) == '"')
					result.push("\\\"");
				else
					result.push(error.charAt(j));
			}
			
			result.push("\",\n");
        }
      
        result.pop();
		result.push("\"");
		result.push(
            "\n    };\n");
      
        return result.join('');
    }

    
	private genSyntTables(g: Grammar , options: Options): string | null 
	{
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
			case Options.PARSER_LL:
				return this.genLLSyntTables(g, options.parser);
			case Options.PARSER_SLR:
			case Options.PARSER_LALR:
			case Options.PARSER_LR:
				return this.genLRSyntTables(g, options.parser);
			default:
				return null;
		}
	}

    private genLRSyntTables(g: Grammar,  lrParserOption: number): string
	{
        const generator = LRGeneratorFactory.createGenerator(g, lrParserOption);

        if(generator == null) throw new SyntaticError("Gerador de Tabela é nulo.");

		this.lrTable = generator.buildIntTable();

        const result: string[] = [];

		result.push(
			"    int FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
			"\n"+
			"    int SHIFT  = 0;\n"+
			"    int REDUCE = 1;\n"+
			"    int ACTION = 2;\n"+
			"    int ACCEPT = 3;\n"+
			"    int GO_TO  = 4;\n"+
			"    int ERROR  = 5;\n" );
		
		result.push("\n");
    	
		result.push(this.emitLRTable(g));
		
		result.push("\n");

		result.push(this.emitProductionsForLR(g));
		
		result.push("\n");

		result.push(this.emitErrorTableLR());
		
		return result.join("");
	}

	private emitProductionsForLR(g: Grammar): string
	{
        const result: string[] = [];
		
		const prods = g.productions;
		
		result.push("    int[][] PRODUCTIONS =\n");
		result.push("    {\n");
		
		for (let i=0; i<prods.size(); i++)
		{
			result.push("        { ");
			result.push((prods.get(i).get_lhs()).toString());
			result.push(", ");
			result.push((prods.get(i).get_rhs().length).toString());
			result.push(" },\n");
		}		
		result.pop();
		result.push(" }");
		result.push("\n    };\n");
		
		return result.join("");
	}

    
	private emitLRTable(g: Grammar): string
	{
        const result: string[] = [];
		if(this.lrTable  === null ) throw new SyntaticError("Tabela LR está nula.");
		const tbl: number[][][] = this.lrTable;
		// //console.log(this.lrTable);
		result.push("    int[][][] PARSER_TABLE =\n");
		result.push("    {\n");
		
		let max = tbl.length;
		if (g.productions.size() > max)
			max = g.productions.size();
			
		max = (""+max).length;
		
		for (let i=0; i< tbl.length; i++)
		{
			result.push("        {");

			for (let j=0; j<tbl[i].length; j++)
			{
				result.push(" {");
				result.push(Command.CONSTANTS[tbl[i][j][0]]);
				result.push(", ");
				const str: string = ""+tbl[i][j][1];

				for (let k=str.length; k<max; k++)
					result.push(" ");

				result.push(str);
                result.push("},");
			}

			result.pop();
			result.push("}");
			result.push(" },\n");
		}	
		result.pop();
		result.push(" }");
		result.push("\n    };\n");
		
		return result.join("");
	}

    private genLLSyntTables(g: Grammar, type: number)
	{
        const result: string[] = [];
		
		if (type == Options.PARSER_LL)
		{	
			const start = g.startSymbol;
			const fnt = g.FIRST_NON_TERMINAL;
			const fsa = g.symbols.length;
			
			const syntConsts = 
			"    int START_SYMBOL = "+start+";\n"+
			"\n"+
			"    int FIRST_NON_TERMINAL    = "+fnt+";\n"+
	    	"    int FIRST_SEMANTIC_ACTION = "+fsa+";\n";
	    	
	    	result.push(syntConsts);
	    	
	    	result.push("\n");
	    	
	    	result.push(this.emitLLTable(new LLParser(g)));
				
			result.push("\n");
			
			result.push(this.emitProductionsForLL(g));
				
			result.push("\n");
				
			result.push(this.emitErrorTableLL(g));
			
			return result.join("");
		}
		else if (type == Options.PARSER_REC_DESC)
			return null //this.emitErrorTableLL(g);
		else
			return null;
	}

    
	private constList(fa: FiniteAutomata, g: Grammar): string
	{
        const result: string[] = [];
		
		let tokens: string[] = [];
		
		if (fa != null)
			tokens = fa.tokens.toArray();
		else if (g != null)
			tokens = g.terminals;
		else
			throw new Error("Erro Interno");
		
		for (let i=0; i<tokens.length; i++)
		{
			const t: string = tokens[i];
			if (t.charAt(0) == '\"')
				result.push("    int t_TOKEN_"+(i+2)+" = "+(i+2)+"; "+"//"+t+"\n");
			else
				result.push("    int t_"+t+" = "+(i+2)+";\n");
		}
		
		return result.join("");
	}
    

	private lex_table_compress(fa: FiniteAutomata): string
	{
        const result: string[] = [];
		
		const trans: List<Map<string, number>> = fa.transitions;
		
        const sti: number[] = new Array(trans.size() + 1).fill(-1);

		let count = 0;

		for (let i=0; i<trans.size(); i++)
		{
			sti[i] = count;
			count += trans.get(i).size;
		}
		sti[sti.length-1] = count;
		
        const st: number[][] = new Array(count).fill(0).map(() => new Array(2).fill(0));
		
		count = 0;
        //TODO: Verify Change
        for (let i = 0; i < trans.size(); i++) {
            for (const [ch, itg] of trans.get(i).entries()) {
              st[count][0] = ch.charCodeAt(0);
              st[count][1] = itg;
          
              count++;
            }
        }
		
		result.push("    int[] SCANNER_TABLE_INDEXES = \n");
		result.push("    {\n");
		
		for (let i=0; i<sti.length; i++)
		{
			result.push("        ");
            result.push(sti[i].toString());
            result.push(",\n");
		}		
		
        result.pop();
		result.push("\n    };\n\n");	
		
		result.push("    int[][] SCANNER_TABLE = \n");
		result.push("    {\n");

		for (let i=0; i<st.length; i++)
		{
			result.push("        {");
            result.push(st[i][0].toString());
            result.push(", ");
            result.push(st[i][1].toString());
            result.push("},\n");
		}		

		result.pop();
		result.push("}");
		result.push("\n    };\n");	
		
		return result.join("");
	}
	

	private lex_table(fa: FiniteAutomata): string
	{
        const result: string[] = [];
		
		result.push("    int[][] SCANNER_TABLE = \n");
		result.push("    {\n");
		
		const count = fa.transitions.size();
		let max = count.toString().length; 
		if (max == 1)
			max = 2;
			
		for (let i=0; i<count; i++)
		{
			result.push("        { ");
			for (let c = 0; c<256; c++)
			{
				const n = fa.nextState(String.fromCharCode(c), i).toString();
				for (let j = n.length; j<max; j++)
					result.push(" ");
				result.push(n);
                result.push(", ");
			}
			result.pop();
			result.push(" },\n");
		}

		result.pop()
		result.push(" }");
		result.push("\n    };\n");
		
		return result.join("");
	}

    private token_state(fa: FiniteAutomata): string
	{
        const result: string[] = [];
		
		result.push("    int[] TOKEN_STATE = {");
		const count = fa.transitions.size();
		let max = count.toString().length;
		if (max == 1) max = 2; 
		
		for (let i=0; i<count; i++)
		{
			const fin = fa.tokenForState(i);
			const n = fin.toString();
			for (let j = n.length; j<max; j++)
				result.push(" ");
			result.push(n);
            result.push(", ");
		}
		
		result.pop();	
		result.push(" };\n");
		
		return result.join("");
	}

	private special_cases(fa: FiniteAutomata): string
	{
		const indexes: number[][] = fa.getSpecialCasesIndexes();
		const sc: KeyValuePar[]  = fa.specialCases;
		
        const result: string[] = [];
		
		let count = sc.length;
							
		result.push(
			"    int[] SPECIAL_CASES_INDEXES =\n"+
			"        { ");
		
		count = indexes.length;
		for (let i=0; i<count; i++)
		{
			result.push(indexes[i][0].toString());
            result.push(", ");
		}
		result.push(indexes[count-1][1].toString());
		result.push(" };\n\n");
				
		result.push(
					"    String[] SPECIAL_CASES_KEYS =\n"+
					"        {  ");
		count = sc.length;
		for (let i=0; i<count; i++)
		{
			result.push("\"");
            result.push(sc[i].key);
            result.push("\", ");
		}
		result.pop();
		result.push("\"");
				
		result.push(" };\n\n");
		
		result.push(
					"    int[] SPECIAL_CASES_VALUES =\n"+
					"        {  ");
		count = sc.length;
		for (let i=0; i<count; i++)
		{
			result.push(sc[i].value.toString());
            result.push(", ");
		}
		result.pop();
				
		result.push(" };\n");
		
		return result.join("");
	}

    
	private emitProductionsForLL( g: Grammar): string
	{
		
		const pl: List<Production> = g.productions;
		const productions: string[][] = new Array(pl.size()).fill([]) as string[][];
		let max = 0;
		for (let i=0; i< pl.size(); i++)
		{
			const rhs: number[] = pl.get(i).get_rhs();
			if (rhs.length > 0)
			{
				productions[i] =[];
				for (let j=0; j< rhs.length; j++)
				{
					productions[i][j] = rhs[j].toString();
					if (productions[i][j].length > max)
						max = productions[i][j].length;
				}
			}
			else
			{
                productions[i] = new Array<string>(1);
				productions[i][0] = "0";
			}
		}

        const result: string[] = [];
		
		result.push("    int[][] PRODUCTIONS = \n");
		result.push("    {\n");
		
		for (let i=0; i< productions.length; i++)
		{
			result.push("        {");
			for (let j=0; j<productions[i].length; j++)
			{
				result.push(" ");
				for (let k = productions[i][j].length; k<max; k++){
					result.push(" ");
                }
				result.push(productions[i][j]);
                result.push(",");
			}
			result.pop();
            result.push(" },\n");
		}	
		result.pop();
		result.push(" }\n");
		result.push("\n    };\n");
		
		return result.join("");
	}

    private emitLLTable(g: LLParser): string
	{
	    let tbl: number[][] = g.generateTable();
        let table: string[][] = new Array(tbl.length).fill([]).map(() => new Array(tbl[0].length));

		let max = 0;
		for (let i = 0; i < table.length; i++)
		{
			for (let j = 0; j < table[i].length; j++)
			{
				let tmp: string = tbl[i][j].toString();
				table[i][j] = tmp;
				if (tmp.length > max)
					max = tmp.length;
			}
		}
		
        const result: string[] = [];
		
		result.push("    int[][] PARSER_TABLE =\n");
		result.push("    {\n");
		
		for (let i=0; i< table.length; i++)
		{
			result.push("        {");
			for (let j=0; j<table[i].length; j++)
			{
				result.push(" ");
				for (let k = table[i][j].length; k<max; k++){
					result.push(" ");
                }
				result.push(table[i][j]);
                result.push(",");
			}
            result.pop();
            result.push(" },\n");
		}	
		result.pop();
		result.push("\n    };\n");
		
		return result.join("");
	}

	private emitErrorTableLR(): string
	{

        if(this.lrTable == null) throw new SyntaticError("Tabela LR está nula.");
        
		const count = this.lrTable.length;
		// //console.log(count)
        const result: string[] = [];
	
		result.push(
		"    String[] PARSER_ERROR =\n"+
		"    {\n");
		
		for (let i=0; i< count; i++)
		{
			result.push("        \"Erro estado "+i);
			result.push("\",\n");
		}
		
		result.pop();
		result.push("\"");
		result.push(
		"\n    };\n");
	
		return result.join("");
	}

    private emitErrorTableLL(g: Grammar): string
	{
		const symbs: string[]  = g.symbols;
        const result: string[] = [];
		
		result.push(
		"    String[] PARSER_ERROR =\n"+
		"    {\n"+
		"        \"\",\n"+
		"        \"Era esperado fim de programa\",\n");
		
		for (let i=2; i< g.FIRST_NON_TERMINAL; i++)
		{
			result.push("        \"Era esperado ");
			for (let j=0; j<symbs[i].length; j++)
			{
				switch (symbs[i].charAt(j))
				{
					case '\"': result.push("\\\""); break;
					case '\\': result.push("\\\\"); break;
					default: result.push(symbs[i].charAt(j));				
				}
			}
			
			result.push("\",\n");
		}
					
		for (let i=g.FIRST_NON_TERMINAL; i< symbs.length; i++)
			result.push("        \""+symbs[i]+" inválido");
			result.push("\",\n");
			
		result.pop();
		result.push("\"");
		result.push(
		"\n    };\n");
		
		return result.join("");
	}

}