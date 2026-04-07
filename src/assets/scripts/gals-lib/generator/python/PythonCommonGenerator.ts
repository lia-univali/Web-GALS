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
		(options.generateScanner? `from ${pkgname}Lexico import Lexico\n` : "")+
		(options.generateParser ? `from ${pkgname}Sintatico import Sintatico\n` : "")+
		(options.generateParser ? `from ${pkgname}Semantico import Semantico\n` : "")+

		`from ${pkgname}Errors import AnalysisError\n\n`+

		(options.generateScanner ? `lex = Lexico("")\n`  : "") +
		(options.generateParser  ? `syn = Sintatico()\n` : "") +
		(options.generateParser  ? `sem = Semantico()\n` : "")+

		`\ntry:\n`+
		(options.generateParser && options.generateScanner ? "\tsyn.parse(lex, sem)\n" : "\t# syn.parse(lex, sem)\n") +
		`except AnalysisError as e:\n`+
		`\tprint(e)\n`;
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
				throw new SyntacticError("REC_DESC NOT SUPPORTED");
			}
			case Options.PARSER_LL:
			{
				throw new SyntacticError("LL(1) NOT SUPPORTED");
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
		result += ("\n]\n");
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
				throw new SyntacticError("REC_DESC NOT SUPPORTED");
			case Options.PARSER_LL:
				throw new SyntacticError("LL(1) NOT SUPPORTED");
			default: //slr, lalr, lr
				return  this.syntTransTable(g)+
					    this.productionsLR(g)+
					    this.syntErrorsLR();
		}
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
