

/**
 * @author Carlos E. Gesser
 */

import { SyntacticError } from "../../analyser/SystemErros";
import { Production } from "../../util/Production";
import { FiniteAutomata, KeyValuePar } from "../FiniteAutomata";
import { Options } from "../Options";
import { Grammar } from "../parser/Grammar";
import { LLParser } from "../parser/ll/LLParser";
import { Command } from "../parser/lr/Command";
import { LRGeneratorFactory } from "../parser/lr/LRGeneratorFactory";

export class DelphiCommomGenerator
{
    lrTable: number[][][] | null = null;
	
    generate(fa: FiniteAutomata | null, g: Grammar | null, options: Options): Map<string, string> {

		if (fa === null || g === null) {
			throw new Error("FiniteAutomata and Grammar must not be null");
		}

        const result: Map<string, string> = new Map;
				
		result.set("UToken.pas", this.generateToken());
		result.set("UConstants.pas", this.generateConstants(fa, g, options));	

		result.set("UAnalysisError.pas", this.generateAnalysisError());
		result.set("ULexicalError.pas",  this.generateLexicalError());
		result.set("USyntacticError.pas", this.generateSyntacticError());
		result.set("USemanticError.pas", this.generateSemanticError());	
		
		return result;
	}
			
	private generateToken(): string
	{
		return "unit UToken;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UConstants;\n"+
			"\n"+
			"type\n"+
			"    TToken = class\n"+
			"    public\n"+
			"        constructor create(id:integer; lexeme:string; position:integer);\n"+
			"\n"+
			"        function getId : integer;\n"+
			"        function getLexeme : string;\n"+
			"        function getPosition : integer;\n"+
			"\n"+
			"    private\n"+
			"        id : integer;\n"+
			"        lexeme : string;\n"+
			"        position : integer\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor TToken.create(id:integer; lexeme:string; position:integer);\n"+
			"begin\n"+
			"    self.id := id;\n"+
			"    self.lexeme := lexeme;\n"+
			"    self.position := position;\n"+
			"end;\n"+
			"\n"+
			"function TToken.getId : integer;\n"+
			"begin\n"+
			"    result := id;\n"+
			"end;\n"+
			"\n"+
			"function TToken.getLexeme : string;\n"+
			"begin\n"+
			"    result := lexeme;\n"+
			"end;\n"+
			"\n"+
			"function TToken.getPosition : integer;\n"+
			"begin\n"+
			"    result := position;\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
	
	private generateAnalysisError(): string
	{
		return "unit UAnalysisError;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses sysutils;\n"+
			"\n"+
			"type\n"+
			"    EAnalysisError = class(Exception)\n"+
			"    public\n"+
			"        constructor create(message:string; position:integer); overload;\n"+
			"        constructor create(message:string); overload;\n"+
			"\n"+
			"        function getMessage : string;\n"+
			"        function getPosition : integer;\n"+
			"\n"+
			"    private\n"+
			"        position : integer\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor EAnalysisError.create(message:string; position:integer);\n"+
			"begin\n"+
			"    inherited create(message);\n"+
			"    self.position := position;\n"+
			"end;\n"+
			"\n"+
			"constructor EAnalysisError.create(message:string);\n"+
			"begin\n"+
			"    inherited create(message);\n"+
			"    self.position := -1;\n"+
			"end;\n"+
			"\n"+
			"function EAnalysisError.getMessage : string;\n"+
			"begin\n"+
			"    result := inherited Message;\n"+
			"end;\n"+
			"\n"+
			"function EAnalysisError.getPosition : integer;\n"+
			"begin\n"+
			"   result := position;\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
	
	private generateLexicalError(): string
	{
		return "unit ULexicalError;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UAnalysisError;\n"+
			"\n"+
			"type\n"+
			"    ELexicalError = class(EAnalysisError)\n"+
			"    public\n"+
			"        constructor create(message:string; position:integer); overload;\n"+
			"        constructor create(message:string); overload;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor ELexicalError.create(message:string; position:integer);\n"+
			"begin\n"+
			"    inherited create(message, position);\n"+
			"end;\n"+
			"\n"+
			"constructor ELexicalError.create(message:string);\n"+
			"begin\n"+
			"    inherited create(message);\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
	
	private generateSyntacticError(): string
	{
		return "unit USyntacticError;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UAnalysisError;\n"+
			"\n"+
			"type\n"+
			"    ESyntacticError = class(EAnalysisError)\n"+
			"    public\n"+
			"        constructor create(message:string; position:integer); overload;\n"+
			"        constructor create(message:string); overload;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor ESyntacticError.create(message:string; position:integer);\n"+
			"begin\n"+
			"    inherited create(message, position);\n"+
			"end;\n"+
			"\n"+
			"constructor ESyntacticError.Create(message:string);\n"+
			"begin\n"+
			"    inherited create(message);\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
	
	private generateSemanticError(): string
	{
		return "unit USemanticError;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"uses UAnalysisError;\n"+
			"\n"+
			"type\n"+
			"    ESemanticError = class(EAnalysisError)\n"+
			"    public\n"+
			"        constructor create(message:string; position:integer); overload;\n"+
			"        constructor create(message:string); overload;\n"+
			"    end;\n"+
			"\n"+
			"implementation\n"+
			"\n"+
			"constructor ESemanticError.Create(message:string; position:integer);\n"+
			"begin\n"+
			"    inherited create(message, position);\n"+
			"end;\n"+
			"\n"+
			"constructor ESemanticError.Create(message:string);\n"+
			"begin\n"+
			"    inherited create(message);\n"+
			"end;\n"+
			"\n"+
			"end.\n"+
			"";
	}
	
	private generateConstants(fa: FiniteAutomata, g: Grammar, options: Options): string //throws NotLLException
	{
		return "unit UConstants;\n"+
			"\n"+
			"interface\n"+
			"\n"+
			"const\n"+
			"\n"+
			this.constants(fa, g)+
			this.lexTables(fa, options)+
			this.syntTables(g, options)+
			"implementation\n"+
			"\n"+
			"end.\n"+
			"";
	}
			
	private constants(fa: FiniteAutomata, g: Grammar): string
	{
		let result = "";
		
		let tokens: string[] | null = null;
		
		if (fa != null)
			tokens = fa.tokens.toArray();
		else if (g != null)
			tokens = g.terminals;
		else
			throw new Error("Erro Interno");
		
		result += (
			"    EPSILON = 0;\n"+
			"    DOLLAR  = 1;\n"+
			"\n"
		);
		
		for (let i=0; i<tokens.length; i++)
		{
			const t: string = tokens[i];
			if (t.charAt(0) == '"')
				result += ("    t_TOKEN_"+(i+2)+" = "+(i+2)+"; "+"//"+t+"\n");
			else
				result += ("    t_"+t+" = "+(i+2)+";\n");
		}
		
		result += ("\n");
		
		return result.toString();
	}
	
	private lexTables(fa: FiniteAutomata, options: Options): string
	{
		if (fa == null)
			return "";
			
		return "    STATES_COUNT = "+fa.transitions.size()+";\n"+
			"\n"+
			this.mainLex(fa, options)+
			this.context(fa)+			
			(fa.specialCases.length>0 ?
            this.lookup(fa) : "")+
			this.scanner_error(fa)+
			"";
	}
	
	private context(fa: FiniteAutomata): string
	{
		if (!fa.hasContext())
			return "";
			
		let result = "";
		
		result += ("    SCANNER_CONTEXT : array[0..STATES_COUNT-1][0..1] of integer =\n"+
					  "    (\n");

		for (let i=0; i<fa.transitions.size(); i++)
		{
			result += ("        (");
			result += (fa.isContext(i)?"1":"0");
			result += (", ");
			result += (fa.getOrigin(i));
			result += ("),\n");
		}

		result = result.slice(0, -2);
		result += (
		"\n    );\n");

		return result.toString();
	}

	private scanner_error(fa: FiniteAutomata): string
	{
		let result = "";

		result += (
		"    SCANNER_ERROR : array[0..STATES_COUNT-1] of string =\n"+
		"    (\n");

		const count = fa.transitions.size();
		for (let i=0; i< count; i++)
		{
			result += ("        '");
			
			const error: string = fa.getError(i);
			for (let j=0; j<error.length; j++)
			{
				if (error.charAt(j) == '\'')
					result += ("''");
				else
					result += (error.charAt(j));
			}
			
			result += ("',\n");
		}
		result = result.slice(0, -2);
		result += (
		"\n    );\n");

		return result.toString();
	}

	private mainLex(fa: FiniteAutomata, options: Options): string
	{
		let result = "";
		
		let max;
		
		result += (this.scannerTable(fa, options));
		
		
		
		result += ("    TOKEN_STATE : array[0..STATES_COUNT-1] of integer =\n        ( ");
		const count = fa.transitions.size();
		max = count.toString().length;
		if (max == 1)
			max = 2; 
		
		for (let i=0; i<count; i++)
		{
			const fin = fa.tokenForState(i);
			const n = fin.toString();
			for (let j = n.length; j<max; j++)
				result += (" ");
			result += (n) + (", ");
		}
		result = result.slice(0, -2);		
		result += (" );\n\n");
		
		return result.toString();
	}

	private scannerTable(fa: FiniteAutomata, options: Options): string
	{
		if (options.scannerTable == Options.SCANNER_TABLE_HARDCODE)
				return "";
					
		let result = "";
		
		result += (
			"    SCANNER_TABLE : array[0..STATES_COUNT-1, char] of integer =\n"+
			"    ( \n"
		);
		
		const count = fa.transitions.size();
		let max = count.toString().length;
		if (max == 1)
			max = 2;
			
		for (let i=0; i<count; i++)
		{
			result += ("        ( ");
			for (let c = 0; c<256; c++)
			{
				const n: string = fa.nextState(String.fromCharCode(c), i).toString();
				for (let j = n.length; j<max; j++)
					result += (" ");
				result += (n) + (", ");
				
				if (c == 200)
					result += ("\n          ");
			}
			result = result.slice(0, -2);
			result += (" ),\n");
		}
		result = result.slice(0, -2);
		
		result += (
			"\n    );\n\n"
		);
		
		return result.toString();
	}
	
	private lookup(fa: FiniteAutomata): string
	{
		let result = "";
		
		const indexes: number[][] = fa.getSpecialCasesIndexes();
		
		result += (
			"    SPECIAL_CASES_INDEXES : array[0.."+indexes.length+"] of integer =\n"+
			"        ( "
		);
			
		let count = indexes.length;
		
		for (let i=0; i<indexes.length; i++)
		{
			result += (indexes[i][0]);
			result += (", ");
		}
		result += (indexes[count-1][1]);
		result += (" );\n\n");
		
		const sc: KeyValuePar[] = fa.specialCases;
		count = sc.length;
		
		result += (
			"    SPECIAL_CASES_KEYS : array[0.."+(count-1)+"] of string =\n"+
			"        (  "
		);
				
		for (let i=0; i<count; i++)
		{
			result += ("'");
			result += (sc[i].key);
			result += ("', ");
		}
		result = result.slice(0, -2);
		result += (" );\n\n");
		
		result += (
			"    SPECIAL_CASES_VALUES : array[0.."+(count-1)+"] of integer =\n"+
			"        (  "
		);
				
		for (let i=0; i<count; i++)
		{
			result += (sc[i].value);
			result += (", ");
		}
		result = result.slice(0, -2);
		result += (" );\n\n");
		
		return result.toString();
	}
	
	private syntTables(g: Grammar, options: Options): string //throws NotLLException
	{
		if (g == null)
			return "";
		
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				return this.errorLL(g);
			case Options.PARSER_LL:	
				return "    START_SYMBOL = "+g.startSymbol+";\n"+
					"\n"+
					"    FIRST_NON_TERMINAL    = "+g.FIRST_NON_TERMINAL+";\n"+
					"    FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
					"\n"+
					this.transTablesLL(new LLParser(g))+
					this.prodsLL(g)+
					this.errorLL(g)+
					"";
			case Options.PARSER_SLR:
			case Options.PARSER_LALR:
			case Options.PARSER_LR:
				return "    FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
					"\n"+		
					"    SHIFT  = 0;\n"+
					"    REDUCE = 1;\n"+
					"    ACTION = 2;\n"+
					"    ACCEPT = 3;\n"+
					"    GO_TO  = 4;\n"+
					"    ERROR  = 5;\n"+
					"\n"+
					this.transTablesLR(g)+
					"\n"+
					this.prodsLR(g)+
					"\n"+
					this.errorLR();
			default:
				return ""; // null
		}
	}

	private transTablesLR(g: Grammar): string
	{

		const generator = LRGeneratorFactory.createGenerator(g, Options.PARSER_SLR); // TODO Change based on Options

		if(generator == null) throw new SyntacticError("Gerador de Tabela é nulo.");

		this.lrTable = generator.buildIntTable();
		
		let result = "";
				
		result += ("    PARSER_TABLE : array[0.."+(this.lrTable.length-1)+", 0.."+(this.lrTable[0].length-1)+", 0..1] of integer =\n");
		result += ("    (\n");

		let max = this.lrTable.length;
		if (g.productions.size() > max)
			max = g.productions.size();
	
		max = (""+max).length;

		for (let i=0; i< this.lrTable.length; i++)
		{
			result += ("        (");
			for (let j=0; j<this.lrTable[i].length; j++)
			{
				result += (" (");
				result += (Command.CONSTANTS[this.lrTable[i][j][0]]);
				result += (", ");
				const str: string = ""+this.lrTable[i][j][1];
				for (let k=str.length; k<max; k++)
					result += (" ");
				result += (str) + ("),");
			}
			result = result.slice(0, -1);
			result += (" ),\n");
		}	
		result = result.slice(0, -2);
		result += ("\n    );\n");

		return result.toString();
	}
	
	private prodsLR(g: Grammar): string
	{
		let result = "";

		const prods: Production[] = g.productions.toArray();

		result += ("    PRODUCTIONS : array[0.."+(prods.length-1)+", 0..1] of Integer =\n");
		result += ("    (\n");

		for (let i=0; i<prods.length; i++)
		{
			result += ("        ( ");
			result += (prods[i].get_lhs());
			result += (", ");
			result += (prods[i].get_rhs().length);
			result += (" ),\n");
		}		
		result = result.slice(0, -2);
		result += ("\n    );\n");

		return result.toString();
	}

	private transTablesLL(g: LLParser): string
	{
		const tbl: number[][] = g.generateTable();
		const table: string[][] = [];// new String[tbl.length][tbl[0].length];
		
		let max = 0;
		for (let i = 0; i < tbl.length; i++)
		{
			for (let j = 0; j < table[i].length; j++)
			{
				const tmp = tbl[i][j].toString();
				table[i][j] = tmp;
				if (tmp.length > max)
					max = tmp.length;
			}
		}
		
		let bfr = "";
		bfr += ("    PARSER_TABLE : array[0.."+(table.length-1)+", 0.."+(table[0].length-1)+"] of integer =\n");
		bfr += ("    (\n");
		
		for (let i=0; i< table.length; i++)
		{
			bfr += ("        (");
			for (let j=0; j<table[i].length; j++)
			{
				bfr += (" ");
				for (let k = table[i][j].length; k<max; k++)
					bfr += (" ");
				bfr += (table[i][j]) + (",");
			}
			bfr = bfr.slice(0, -1);
	 		bfr += (" ),\n");
		}	
		bfr = bfr.slice(0, -2);
		bfr += ("\n    );\n\n");
		
		return bfr.toString();
	}
	
	private prodsLL(g: Grammar): string
	{
		const pl: Production[] = g.productions.toArray();
		const productions: string[][] = []; //new String[pl.size()][];
		let max = 0;
		let longest = 0;
		for (let i=0; i< pl.length; i++)
		{
			const rhs: number[] = pl[i].get_rhs();
			if (rhs.length > longest)
				longest = rhs.length;
			if (rhs.length > 0)
			{
				productions[i] = [];
				productions[i][0] = rhs.length.toString();
				for (let j=0; j<rhs.length+1; j++)
				{
					productions[i][j+1] = rhs[j].toString();
					if (productions[i][j+1].length > max)
						max = productions[i][j+1].length;
				}
			}
			else
			{
				productions[i] =  new Array(2);
				productions[i][0] = "1";
				productions[i][1] = "0";
			}
		}
		
		let bfr = "";
		
		bfr += ("    PRODUCTIONS : array[0.."+(pl.length-1)+", 0.."+longest+"] of integer =\n");
		bfr += ("    (\n");
		
		for (let i=0; i< productions.length; i++)
		{
			bfr += ("        (");
			for (let j=0; j<productions[i].length; j++)
			{
				bfr += (" ");
				for (let k = productions[i][j].length; k<max; k++)
					bfr += (" ");
				bfr += (productions[i][j]) + (",");
			}
			for (let j=productions[i].length; j<=longest; j++)
			{
				bfr += (" ");
				for (let k = 1; k<max; k++)
					bfr += (" ");
				bfr += ("0") + (",");
			}
			bfr = bfr.slice(0, -1);
	 		bfr += (" ),\n");
		}	
		bfr = bfr.slice(0, -2);
		bfr += ("\n    );\n\n");
		
		return bfr.toString();
	}
	
	private errorLL(g: Grammar): string
	{
		const symbs: string[] = g.symbols;
		let result = "";
		
		result += (
		"    PARSER_ERROR : array [0.."+(g.symbols.length-1)+"] of string =\n"+
		"    (\n"+
		"        '',\n"+
		"        'Era esperado fim de programa',\n");
		
		for (let i=2; i< g.FIRST_NON_TERMINAL; i++)
		{
			result += ("        'Era esperado ");
			for (let j=0; j<symbs[i].length; j++)
			{
				switch (symbs[i].charAt(j))
				{
					case '\'': result += ("''"); break;
					default: result += (symbs[i].charAt(j));				
				}
			}
			
			result += ("',\n");
		}
					
		for (let i=g.FIRST_NON_TERMINAL; i< symbs.length; i++)
			result += ("        '"+symbs[i]+" inválido',\n");
			
		result = result.slice(0, -2);
		result += (
		"\n    );\n\n");
		
		return result.toString();
	}
	
	//private errorLR(g: Grammar): string
	private errorLR(): string
	{

		if(this.lrTable  === null ) throw new SyntacticError("Tabela LR está nula.");

		let result = "";
	
		result += (
		"    PARSER_ERROR : array [0.."+(this.lrTable.length-1)+"] of string =\n"+
		"    (\n");
		
		for (let i=0; i< this.lrTable.length; i++)
		{
			result += ("        'Erro estado "+i+"',\n");
		}
				
		result = result.slice(0, -2);
		result += (
		"\n    );\n\n");
	
		return result.toString();
	}
}