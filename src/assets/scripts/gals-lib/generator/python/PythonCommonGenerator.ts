import { List } from "../../DataStructures";
import { SyntacticError } from "../../analyser/SystemErros";
import { Production } from "../../util/Production";
import { FiniteAutomata, KeyValuePar } from "../FiniteAutomata";
import { Options } from "../Options";
import { Grammar } from "../parser/Grammar";
import { LLParser } from "../parser/ll/LLParser";
import { Command } from "../parser/lr/Command";
import { LRGeneratorFactory } from "../parser/lr/LRGeneratorFactory";

export class PythonCommonGenerator
{

    lrTable: number[][][] | null = null;
	
    generate(fa: FiniteAutomata | null, g: Grammar | null, options: Options): Map<string, string> {
        const result: Map<string, string> = new Map;

		if (fa === null || g === null) {
			throw new Error("FiniteAutomata and Grammar must not be null");
		}

		result.set("Token.py",     this.generateToken(options));
		result.set("Constants.py", this.generateConstants(fa, g, options));
		result.set("Errors.py",    this.generateErrors(options));

		return result;
	}

	mainfunc(options: Options): string
	{
		const pkgname: string = (options.pkgName !== "") ? options.pkgName + "." : "";
		return ""+
		(options.generateScanner? `from ${pkgname}${options.scannerName} import ${options.scannerName}\n` : "")+
		(options.generateParser ? `from ${pkgname}${options.parserName} import ${options.parserName}\n` : "")+
		(options.generateParser ? `from ${pkgname}${options.semanticName} import ${options.semanticName}\n` : "")+

		`from ${pkgname}Errors import AnalysisError\n\n`+

		(options.input == Options.INPUT_STREAM ? "from io import StringIO\n" : "")+

		this.mainfunc_lex(options) +
		(options.generateParser  ? `syn = ${options.parserName}()\n` : "") +
		(options.generateParser  ? `sem = ${options.semanticName}()\n` : "")+

		`\ntry:\n`+
		(options.generateParser && options.generateScanner ? "\tsyn.parse(lex, sem)\n" : "\t# syn.parse(lex, sem)\n") +
		`except AnalysisError as e:\n`+
		`\tprint(e)\n`;
	}

	private mainfunc_lex(options: Options): string
	{
		switch (options.input) {
			case Options.INPUT_STREAM:
			{
				return (options.generateScanner ? `stream = StringIO("")\n\nlex = ${options.scannerName}(stream)\n` : "")
			}
			break;
			case Options.INPUT_STRING:
			{
				return (options.generateScanner ? `lex = ${options.scannerName}("")\n`  : "");
			}
			break;
		}
		return "";
	}

	private generateToken(options: Options): string
	{	
		const pkgname: string = (options.pkgName !== "") ? options.pkgName + "." : "";
		return "\nfrom dataclasses import dataclass\n"+
			`from ${pkgname}Constants import TokenId\n\n`+

			"@dataclass(frozen=True)\n"+
			"class Token:\n"+
			"\ttkid:     TokenID = TokenId.EPSILON\n"+
			"\tlexeme:   str     = \"\"\n"+
			"\tposition: int     = -1\n";
	}

	private generateErrors(options: Options): string
	{
		return "from dataclasses import dataclass\n\n"+

			"@dataclass\n"+
			"class AnalysisError(Exception):\n"+
			"\tmessage:  str\n"+
			"\tposition: int = -1\n\n"+

			"# São funcionalmente idênticos ao AnalysisError\n"+
			"class SemanticError(AnalysisError):\n\tpass\n\n"+
			"class SyntacticError(AnalysisError):\n\tpass\n\n"+
			"class LexicalError(AnalysisError):\n\tpass\n";
	}
	
	private generateConstants(fa: FiniteAutomata, g: Grammar, options: Options): string {
		return "\nfrom enum import Enum\n\n"+

			"TOKEN_DEPENDENCY   = " + (fa.specialCases.length > 0 ? "True\n" : "False\n")+
			"CASE_INSENSITIVITY = " + (options.scannerCaseSensitive == true ? "False\n\n" : "True\n\n")+

			"class TokenId(Enum):\n"+
			"\tEPSILON = 0\n"+
			"\tDOLLAR  = 1\n"+
			this.constList(fa, g)+
			(options.generateScanner ? this.lexDecls(fa, options) : "")+
			(options.generateParser  ? this.syntDecls(g, options) : "");
	}

	private constList(fa: FiniteAutomata, g: Grammar): string
	{
		let result: string = "";

		let tokens: string[] | null = null;
		
		if (fa != null)
			tokens = fa.tokens.toArray();
		else if (g != null)
			tokens = g.terminals;
		else
			throw new Error("Erro Interno");
		
		for (let i=0; i<tokens.length; i++)
		{
			const t = tokens[i];
			if (t.charAt(0) == '"')
				result += ("\tt_TOKEN_"+(i+2)+" = "+(i+2)+" "+"//"+t+"\n");
			else
				result += ("\tt_"+t+" = "+(i+2)+"\n");
		}
		
		result += ("\n");
		
		return result.toString();
	}

	private lexDecls(fa: FiniteAutomata, options: Options): string
	{
		if (fa == null)
			return "";

		let count;
		let max;
		let result = "\nSTATES_COUNT: int = " + fa.transitions.size() + "\n\n";

		result += this.scannerTable(fa, options) + "\n";
		result += "TOKEN_STATE = [";
		count   = fa.transitions.size();
		max     = count.toString().length;

		if (max == 1)
			max = 2;

		for (let i = 0; i < count; i++)
		{
			const fin: number = fa.tokenForState(i);
			const n: string = fin.toString();
			for (let j = n.length; j < max; j++)
				result += " ";
			result += (n + ", ")
		}
		result  = result.slice(0, -2);
		result += "]\n\n";

		result += this.context(fa);
		result += this.specialCases(fa);

		result += "SCANNER_ERRORS = [\n";
		count   = fa.transitions.size();

		for (let i=0; i< count; i++)
		{
			result += ("\t\"");

			const error: string = fa.getError(i);
			for (let j=0; j < error.length; j++)
			{
				if (error.charAt(j) == '"')
					result += ("\\\"");
				else
					result += (error.charAt(j));
			}

			result +=  ("\",\n");
		}

		result = result.slice(0, -2);
		result += "\n]\n\n";

		return result.toString();
	}
	
	private syntDecls(g: Grammar, options: Options): string
	{
		if (g == null)
			return "";
		
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
			{
				return this.syntErrorsLL(g);
			}
			case Options.PARSER_LL:
			{
				return this.syntTables(g, options) + this.syntErrorsLL(g);
			}
			default: //SLR, LALR, LR
			{
				const generator = LRGeneratorFactory.createGenerator(g, options.parser); // TODO Change based on Options

				if(generator == null) throw new SyntacticError("Gerador de Tabela é nulo.");

				this.lrTable = generator.buildIntTable();

				let result = "FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+"\n"+
					"\n"+
					"class SLRAction:\n"+
					"\tSHIFT  = 0\n"+
					"\tREDUCE = 1\n"+
					"\tACTION = 2\n"+
					"\tACCEPT = 3\n"+
					"\tGO_TO  = 4\n"+
					"\tERROR  = 5\n\n"+

					this.syntTables(g, options);

				return result;
			}
		}
	}

	// TODO: Pesquisar do que se trata este context()
	private context(fa: FiniteAutomata): string
	{
		if (! fa.hasContext())
			return "";
		
		let result = "";
		
		result += "SCANNER_CONTEXT = [\n";
		
		for (let i = 0; i < fa.transitions.size(); i++)
		{
			result += ("\n[");
			result += (fa.isContext(i)?"1":"0");
			result += (", ");
			result += (fa.getOrigin(i));
			result += ("],\n");
		}
		
		result = result.slice(0, -2);
		result += (
		"\n]\n\n");
		
		return result.toString();
	}

	private scannerTable(fa: FiniteAutomata, options: Options): string
	{
		if (options.scannerTable == Options.SCANNER_TABLE_HARDCODE)
			return "";

		let result = "";

		result += ("SCANNER_TABLE = [\n");

		const count = fa.transitions.size();
		let max = count.toString().length;
		if (max == 1)
			max = 2;

		for (let i = 0; i < count; i++)
		{
			result += ("\t[ ");
			for (let c = 0; c < 256; c++)
			{
				const n = fa.nextState(String.fromCharCode(c), i).toString();
				for (let j = n.length; j<max; j++)
					result += (" ");
				result += (n) + (", ");
			}
			result = result.slice(0, -2);
			result += (" ],\n");
		}

		result = result.slice(0, -2);
		result += ("]\n");
		return result.toString();
	}
	
	private specialCases(fa: FiniteAutomata): string
	{			
		if (fa.specialCases.length > 0)
		{
			const indexes: number[][]  = fa.getSpecialCasesIndexes();
			const sc: KeyValuePar[]  = fa.specialCases;
	
			let result = "";
	
			result += `SPECIAL_CASES_INDEXES = [0 for i in range(0, ${indexes.length+1})]\n`;

			let count = indexes.length;
			for (let i = 0; i < count; i++)
			{
				result += `SPECIAL_CASES_INDEXES[${i}] = ${indexes[i][0]}\n`;
			}
			result += `SPECIAL_CASES_INDEXES[${count}] = ${indexes[count-1][1]}\n`;
	
			count = sc.length;
			result += "SPECIAL_CASES_KEYS = [ ";
						
			count = sc.length;
			for (let i = 0; i < count; i++)
			{
				result += ("\"") + (sc[i].key) + ("\", ");
			}
			result = result.slice(0, -2);
		
			result += " ]\n\n";
			
			result += "SPECIAL_CASES_VALUES = [ ";
	
			for (let i = 0; i < count; i++)
			{
				result += (sc[i].value) + (", ");
			}
			result = result.slice(0, -2);
		
			result += (" ]\n\n");
	
			return result.toString();		
		}
		else
			return "";
	}

	private syntTables(g: Grammar, options: Options): string // TODO throws NotLLException
	{
		if (g == null)
			return "";
			
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				throw new SyntacticError("REC_DESC DOES NOT USE SYNTTABLES");
			case Options.PARSER_LL:
				return this.genLLSyntTables(g);
			default: //slr, lalr, lr
				return  this.syntTransTable(g)+
					    this.productionsLR(g)+
					    this.syntErrorsLR();
		}
	}

	private genLLSyntTables(g: Grammar): string
	{
		const result: string[] = [];

		const start = g.startSymbol;
		const fnt   = g.FIRST_NON_TERMINAL;
		const fsa   = g.symbols.length;

		const syntConsts =
			`START_SYMBOL = ${start};\n`+
			"\n"+
			`FIRST_NON_TERMINAL    = ${fnt};\n`+
			`FIRST_SEMANTIC_ACTION = ${fsa};\n`;

		result.push(syntConsts);

		result.push("\n");

		result.push(this.emitLLTable(new LLParser(g)));

		result.push("\n");

		result.push(this.productionsLL(g));

		result.push("\n");

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

		result.push("PARSER_TABLE = [\n");

		for (let i=0; i< table.length; i++)
		{
			result.push("\t[");
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
            result.push(" ],\n");
		}
		result.pop();
		result.push(" ],");
		result.push("\n]\n");

		return result.join("");
	}

	private productionsLL(g: Grammar): string
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

		result.push("PRODUCTIONS = [\n");

		for (let i=0; i< productions.length; i++)
		{
			result.push("\t[");
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
            result.push(" ],\n");
		}
		result.pop();
		result.push(" ]\n");
		result.push("\n]\n");

		return result.join("");
	}

	private productionsLR(g: Grammar): string
	{
		let result = "";
		
		const prods: Production[] = g.productions.toArray();

		result += "PRODUCTIONS = [\n";

		for (let i=0; i<prods.length; i++)
		{
			result += ("\t[ ");
			result += (prods[i].get_lhs());
			result += (", ");
			result += (prods[i].get_rhs().length);
			result += (" ],\n");
		}		
		result = result.slice(0, -2);
		result += "\n]\n";

		return result.toString();
	}
	
	private syntTransTable(g: Grammar | LLParser){

		if(g instanceof Grammar){
			return this.syntTransTableGrammar(g);
		}else{
			throw new SyntacticError("LL(1) NOT SUPPORTED (transtable)");
		}
	}

	private syntTransTableGrammar(g: Grammar): string
	{
		if(this.lrTable  === null ) throw new SyntacticError("Tabela LR está nula.");

		let result = "";

		result += "PARSER_TABLE = [\n";

		let max = this.lrTable.length;
		if (g.productions.size() > max)
			max = g.productions.size();
	
		max = (""+max).length;

		for (let i=0; i< this.lrTable.length; i++)
		{
			result += ("\t[");
			for (let j=0; j<this.lrTable[i].length; j++)
			{
				result += (" [");
				result += "SLRAction." + (Command.CONSTANTS[this.lrTable[i][j][0]]);
				result += (", ");
				const str = ""+this.lrTable[i][j][1];
				for (let k=str.length; k<max; k++)
					result += (" ");
				result += (str) + ("],");
			}
			result = result.slice(0, -1);
			result += (" ],\n");
		}	
        result = result.slice(0, -2);
		result += ("\n];\n");

		return result.toString();
	}

	private syntErrorsLL(g: Grammar): string
	{
		const symbs: string[] = g.symbols;

		let result = "\nPARSER_ERROR = [\n"+
			`\t"",\n`+
			`\t"Era esperado fim de programa",\n`;

		for (let i = 2; i < g.FIRST_NON_TERMINAL; i++)
		{
			result += `\t"Era esperado `;
			for (let j = 0; j < symbs[i].length; j++)
			{
				switch (symbs[i].charAt(j))
				{
					case '\"': result += ("\\\""); break;
					case '\\': result += ("\\\\"); break;
					default:   result += (symbs[i].charAt(j));
				}
			}
			result += `",\n`;
		}

		for (let i = g.FIRST_NON_TERMINAL; i < symbs.length; i++)
		{
			result += `\t"${symbs[i]} inválido",\n`;
		}

		result += "]";

		return result;
	}

	private syntErrorsLR(): string
	{

        if(this.lrTable  === null ) throw new SyntacticError("Tabela LR está nula.");

		let result = "";
	
		result += "PARSER_ERROR = [\n";
	
		for (let i = 0; i < this.lrTable.length; i++)
			result += ("\t\"Erro estado "+i+"\",\n");
		
		result = result.slice(0, -2);
		result += "\n]\n\n";
	
		return result.toString();
	}
}
