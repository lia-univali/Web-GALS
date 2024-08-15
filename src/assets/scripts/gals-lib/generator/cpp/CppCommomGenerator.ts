import { SyntaticError } from "../../analyser/SystemErros";
import { Production } from "../../util/Production";
import { FiniteAutomata, KeyValuePar } from "../FiniteAutomata";
import { Options } from "../Options";
import { Grammar } from "../parser/Grammar";
import { LLParser } from "../parser/ll/LLParser";
import { Command } from "../parser/lr/Command";
import { LRGeneratorFactory } from "../parser/lr/LRGeneratorFactory";

export class CppCommomGenerator
{

    lrTable: number[][][] | null = null;
	
    generate(fa: FiniteAutomata | null, g: Grammar | null, options: Options): Map<string, string> {
        const result: Map<string, string> = new Map;
		
		if (fa === null || g === null) {
			throw new Error("FiniteAutomata and Grammar must not be null");
		}
				
		result.set("Token.h", this.generateToken(options));
		result.set("Constants.h", this.generateConstantsH(fa, g, options));
		result.set("Constants.cpp", this.generateConstantsCpp(fa, g, options));
				
		result.set("AnalysisError.h", this.generateAnalysisError(options));
		result.set("LexicalError.h", this.generateLexicalError(options));
		result.set("SyntaticError.h", this.generateSyntaticError(options));
		result.set("SemanticError.h", this.generateSemanticError(options));	
		
		return result;
	}

	private openNamespace(options: Options): string
	{
		const namespace: string = options.pkgName;
		
		if (namespace != null && !(namespace === ""))
			return "namespace "+namespace+" {\n\n";
		else
			return "";
	}
	
	private closeNamespace(options: Options): string
	{
		const namespace: string = options.pkgName;
		
		if (namespace != null && !(namespace === ""))
			return "} //namespace "+namespace+"\n\n";
		else
			return "";
	}

	private generateToken(options: Options): string
	{	
		return "#ifndef TOKEN_H\n"+
			"#define TOKEN_H\n"+
			"\n"+
			"#include \"Constants.h\"\n"+
			"\n"+
			"#include <string>\n"+
			"\n"+
			this.openNamespace(options)+
			"class Token\n"+
			"{\n"+
			"public:\n"+
			"    Token(TokenId id, const std::string &lexeme, int position)\n"+
			"      : id(id), lexeme(lexeme), position(position) { }\n"+
			"\n"+
			"    TokenId getId() const { return id; }\n"+
			"    const std::string &getLexeme() const { return lexeme; }\n"+
			"    int getPosition() const { return position; }\n"+
			"\n"+
			"private:\n"+
			"    TokenId id;\n"+
			"    std::string lexeme;\n"+
			"    int position;\n"+
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
	}

	private generateAnalysisError(options: Options): string
	{
		return "#ifndef ANALYSIS_ERROR_H\n"+
			"#define ANALYSIS_ERROR_H\n"+
			"\n"+
			"#include <string>\n"+
			"\n"+
			this.openNamespace(options)+
			"class AnalysisError\n"+
			"{\n"+
			"public:\n"+
			"\n"+
			"    AnalysisError(const std::string &msg, int position = -1)\n"+
			"      : message(msg), position(position) { }\n"+
			"\n"+
			"    const char *getMessage() const { return message.c_str(); }\n"+
			"    int getPosition() const { return position; }\n"+
			"\n"+
			"private:\n"+
			"    std::string message;\n"+
			"    int position;\n"+
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+			
			"";
	}
	
	private generateLexicalError(options: Options): string
	{
		return "#ifndef LEXICAL_ERROR_H\n"+
			"#define LEXICAL_ERROR_H\n"+
			"\n"+
			"#include \"AnalysisError.h\"\n"+
			"\n"+
			"#include <string>\n"+
			"\n"+
			this.openNamespace(options)+
			"class LexicalError : public AnalysisError\n"+
			"{\n"+
			"public:\n"+
			"\n"+
			"    LexicalError(const std::string &msg, int position = -1)\n"+
			"      : AnalysisError(msg, position) { }\n"+
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
	}
	
	private generateSyntaticError(options: Options): string
	{
		return "#ifndef SYNTATIC_ERROR_H\n"+
        "#define SYNTATIC_ERROR_H\n"+
        "\n"+
        "#include \"AnalysisError.h\"\n"+
        "\n"+
        "#include <string>\n"+
        "\n"+
        this.openNamespace(options)+
        "class SyntaticError : public AnalysisError\n"+
        "{\n"+
        "public:\n"+
        "\n"+
        "    SyntaticError(const std::string &msg, int position = -1)\n"+
        "      : AnalysisError(msg, position) { }\n"+
        "};\n"+
        "\n"+
        this.closeNamespace(options)+
        "#endif\n"+
        "";
	}
	
	private generateSemanticError(options: Options): string
	{
		return "#ifndef SEMANTIC_ERROR_H\n"+
			"#define SEMANTIC_ERROR_H\n"+
			"\n"+
			"#include \"AnalysisError.h\"\n"+
			"\n"+
			"#include <string>\n"+
			"\n"+
			this.openNamespace(options)+
			"class SemanticError : public AnalysisError\n"+
			"{\n"+
			"public:\n"+
			"\n"+
			"    SemanticError(const std::string &msg, int position = -1)\n"+
			"      : AnalysisError(msg, position) { }\n"+
			"};\n"+
			"\n"+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
	}
	
	private generateConstantsH(fa: FiniteAutomata, g: Grammar, options: Options): string
	{
		return "#ifndef CONSTANTS_H\n"+
			"#define CONSTANTS_H\n"+
			"\n"+
			this.openNamespace(options)+
			"enum TokenId \n"+
			"{\n"+
			"    EPSILON  = 0,\n"+
			"    DOLLAR   = 1,\n"+
			this.constList(fa, g)+
			"};\n"+
			"\n"+
			this.lexDecls(fa, options)+			
			this.syntDecls(g, options)+
			this.closeNamespace(options)+
			"#endif\n"+
			"";
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
				result += ("    t_TOKEN_"+(i+2)+" = "+(i+2)+", "+"//"+t+"\n");
			else
				result += ("    t_"+t+" = "+(i+2)+",\n");
		}
		
		result = result.slice(0, -2);
		result += ("\n");
		
		return result.toString();
	}

	private lexDecls(fa: FiniteAutomata, options: Options): string
	{
		if (fa == null)
			return "";
			
		return "const int STATES_COUNT = "+fa.transitions.size()+";\n"+
			(options.scannerTable == Options.SCANNER_TABLE_HARDCODE ? "" :
			"\n"+
			"extern int SCANNER_TABLE[STATES_COUNT][256];\n")+
			"\n"+
			"extern int TOKEN_STATE[STATES_COUNT];\n"+
			"\n"+	
			(fa.hasContext() ? 
			"extern int SCANNER_CONTEXT[STATES_COUNT][2];\n"+
			"\n" : ""
			)+		
			(fa.specialCases.length > 0 ?
			"extern int SPECIAL_CASES_INDEXES["+(fa.getSpecialCasesIndexes().length+1)+"];\n"+
			"\n"+
			"extern const char *SPECIAL_CASES_KEYS["+fa.specialCases.length+"];\n"+
			"\n"+
			"extern int SPECIAL_CASES_VALUES["+fa.specialCases.length+"];\n"+
			"\n" : "")+
			"extern const char *SCANNER_ERROR[STATES_COUNT];\n"+
			"\n";
	}
	
	private syntDecls(g: Grammar, options: Options): string
	{
		if (g == null)
			return "";
			
		
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
			{
				const numNT: number = g.FIRST_SEMANTIC_ACTION()-g.FIRST_NON_TERMINAL;
				
				return "extern const char *PARSER_ERROR["+(g.FIRST_NON_TERMINAL+numNT)+"];\n"+"\n";
			}
			case Options.PARSER_LL:
			{		
				let maxProd = 0;
				for (let i=0; i<g.productions.size(); i++)
				{
					const size = g.productions.get(i).get_rhs().length;
					if (size > maxProd)
						maxProd = size;
				}
				
				const numNT = g.FIRST_SEMANTIC_ACTION()-g.FIRST_NON_TERMINAL;
					
				return "const int START_SYMBOL = "+g.startSymbol+";\n"+
					"\n"+
					"const int FIRST_NON_TERMINAL    = "+g.FIRST_NON_TERMINAL+";\n"+
					"const int FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
					"\n"+
					"extern int PARSER_TABLE["+numNT+"]["+(g.FIRST_NON_TERMINAL-1)+"];\n"+
					"\n"+
					"extern int PRODUCTIONS["+g.productions.size()+"]["+(maxProd+1)+"];\n"+
					"\n"+
					"extern const char *PARSER_ERROR["+(g.FIRST_NON_TERMINAL+numNT)+"];\n"+
					"\n";
			}
			default: //SLR, LALR, LR
			{

                const generator = LRGeneratorFactory.createGenerator(g, Options.PARSER_SLR); // TODO Change based on Options

                if(generator == null) throw new SyntaticError("Gerador de Tabela é nulo.");

				this.lrTable = generator.buildIntTable();

				return "const int FIRST_SEMANTIC_ACTION = "+g.FIRST_SEMANTIC_ACTION()+";\n"+
					"\n"+
					"const int SHIFT  = 0;\n"+
					"const int REDUCE = 1;\n"+
					"const int ACTION = 2;\n"+
					"const int ACCEPT = 3;\n"+
					"const int GO_TO  = 4;\n"+
					"const int ERROR  = 5;\n"+
					"\n"+
					"extern const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+"][2];\n"+
					"\n"+
					"extern const int PRODUCTIONS["+g.productions.size()+"][2];\n"+
					"\n"+
					"extern const char *PARSER_ERROR["+this.lrTable.length+"];\n"+
					"\n";
			}
		}
	}
	
	private generateConstantsCpp(
		fa: FiniteAutomata,
		g: Grammar,
		options: Options): string // TODO throws NotLLException
	{
		return "#include \"Constants.h\"\n"+
			"\n"+
			this.openNamespace(options)+
			this.lexTables(fa, options)+
			this.syntTables(g, options)+
			this.closeNamespace(options)+
			"";
	}

	private lexTables(fa: FiniteAutomata, options: Options): string
	{
		if (fa == null)
			return "";
			
		let count;
		let max;
		let result = "";
		
		result += (this.scannerTable(fa, options) + "\n");
		
		result += ("int TOKEN_STATE[STATES_COUNT] = {");
		count = fa.transitions.size();
		max = count.toString().length;
		if (max == 1)
			max = 2; 
		
		for (let i=0; i<count; i++)
		{
			const fin: number = fa.tokenForState(i);
			const n: string = fin.toString();
			for (let j = n.length; j<max; j++)
				result += " ";
			result += (n + ", ");
		}
		result = result.slice(0, -2);		
		result += (" };\n\n");
		
		result += (this.context(fa));
		
		result += (this.specialCases(fa));
		
		result += (
		"const char *SCANNER_ERROR[STATES_COUNT] =\n"+
		"{\n");

		count = fa.transitions.size();
		for (let i=0; i< count; i++)
		{
			result += ("        \"");
	
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
		result += (
		"\n};\n\n");
		
		return result.toString();
	}

	private context(fa: FiniteAutomata): string
	{
		if (! fa.hasContext())
			return "";
		
		let result = "";
		
		result += ("int SCANNER_CONTEXT[STATES_COUNT][2] =\n"+
					  "{\n");
		
		for (let i=0; i<fa.transitions.size(); i++)
		{
			result += ("    {");
			result += (fa.isContext(i)?"1":"0");
			result += (", ");
			result += (fa.getOrigin(i));
			result += ("},\n");
		}
		
		result = result.slice(0, -2);
		result += (
		"\n};\n\n");
		
		return result.toString();
	}

	private scannerTable(fa: FiniteAutomata, options: Options): string
	{
		if (options.scannerTable == Options.SCANNER_TABLE_HARDCODE)
			return "";
		
		let result = "";
		
		result += ("int SCANNER_TABLE[STATES_COUNT][256] = \n");
		result += ("{\n");
		
		const count = fa.transitions.size();
		let max = count.toString().length;
		if (max == 1)
			max = 2;
			
		for (let i=0; i<count; i++)
		{
			result += ("    { ");
			for (let c = 0; c<256; c++)
			{
				const n = fa.nextState(String.fromCharCode(c), i).toString();
				for (let j = n.length; j<max; j++)
					result += (" ");					
				result += (n) + (", ");
				if (c == 200)
					result += ("\n      ");
			}
			result = result.slice(0, -2);
			result += (" },\n");
		}
		result = result.slice(0, -2);
		
		result += ("\n};\n");
		
		return result.toString();
	}
	
	private specialCases(fa: FiniteAutomata): string
	{			
		if (fa.specialCases.length > 0)
		{
			const indexes: number[][]  = fa.getSpecialCasesIndexes();
			const sc: KeyValuePar[]  = fa.specialCases;
	
			let result = "";
	
			let count = sc.length;
	
			result += (
				"int SPECIAL_CASES_INDEXES["+(indexes.length+1)+"] =\n"+
				"    { ");
	
			count = indexes.length;
			for (let i=0; i<count; i++)
			{
				result += (indexes[i][0]) + (", ");
			}
			result += (indexes[count-1][1]);
			result = result.slice(0, -2);
			result += (" };\n\n");
	
			count = sc.length;
			result += (
						"const char *SPECIAL_CASES_KEYS["+count+"] =\n"+
						"    { ");
						
			count = sc.length;
			for (let i=0; i<count; i++)
			{
				result += ("\"") + (sc[i].key) + ("\", ");
			}
			result = result.slice(0, -2);
		
			result += (" };\n\n");
			
			result += (
				"int SPECIAL_CASES_VALUES["+count+"] =\n"+
				"    { ");	
	
			for (let i=0; i<count; i++)
			{
				result += (sc[i].value) + (", ");
			}
			result = result.slice(0, -2);
		
			result += (" };\n\n");
	
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
				return this.syntErrorsLL(g);	
			case Options.PARSER_LL:
				return  this.syntTransTable(new LLParser(g))+
					    this.productionsLL(g)+
					    this.syntErrorsLL(g);	
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

		result += ("const int PRODUCTIONS["+prods.length+"][2] =\n");
		result += ("{\n");

		for (let i=0; i<prods.length; i++)
		{
			result += ("    { ");
			result += (prods[i].get_lhs());
			result += (", ");
			result += (prods[i].get_rhs().length);
			result += (" },\n");
		}		
		result = result.slice(0, -2);
		result += ("\n};\n");

		return result.toString();
	}
	
	private syntTransTable(g: Grammar | LLParser){

		if(g instanceof Grammar){
			return this.syntTransTableGrammar(g);
		}else{
			return this.syntTransTableLL(g);
		}
	}

	private syntTransTableGrammar(g: Grammar): string
	{
		if(this.lrTable  === null ) throw new SyntaticError("Tabela LR está nula.");

		let result = "";

		result += ("const int PARSER_TABLE["+this.lrTable.length+"]["+this.lrTable[0].length+"][2] =\n");
		result += ("{\n");

		let max = this.lrTable.length;
		if (g.productions.size() > max)
			max = g.productions.size();
	
		max = (""+max).length;

		for (let i=0; i< this.lrTable.length; i++)
		{
			result += ("    {");
			for (let j=0; j<this.lrTable[i].length; j++)
			{
				result += (" {");
				result += (Command.CONSTANTS[this.lrTable[i][j][0]]);
				result += (", ");
				const str = ""+this.lrTable[i][j][1];
				for (let k=str.length; k<max; k++)
					result += (" ");
				result += (str) + ("},");
			}
			result = result.slice(0, -1);
			result += (" },\n");
		}	
        result = result.slice(0, -2);
		result += ("\n};\n");

		return result.toString();
	}

	private syntTransTableLL(g: LLParser): string
	{
		const tbl: number[][] = g.generateTable();
		const table: string[][] = []//new String[tbl.length][tbl[0].length];
		
		let max = 0;
		for (let i = 0; i < table.length; i++)
		{
			table[i] = [];
			for (let j = 0; j < table[i].length; j++)
			{
				const tmp = tbl[i][j].toString();
				table[i][j] = tmp;
				if (tmp.length > max)
					max = tmp.length;
			}
		}
		
		let bfr = "";
		
		bfr += ("int PARSER_TABLE["+table.length+"]["+table[0].length+"] =\n");
		bfr += ("{\n");
		
		for (let i=0; i< table.length; i++)
		{
			bfr += ("    {");
			for (let j=0; j<table[i].length; j++)
			{
				bfr += (" ");
				for (let k = table[i][j].length; k<max; k++)
					bfr += (" ");
				bfr += (table[i][j]) + (",");
			}
			bfr = bfr.slice(0, -1);
	 		bfr += (" },\n");
		}	
		bfr= bfr.slice(0, -2);
		bfr += ("\n};\n\n");
		
		return bfr.toString();
	}

	private productionsLL(g: Grammar): string
	{
		const pl: Production[] = g.productions.toArray();
		const productions: string[][] = []//new String[pl.size()][]; TODO LEMBRAR DE INICIALIZAR CORRETAMENTE A MATRIZ
		let max = 0;
		let longest = 0;
		for (let i=0; i< pl.length; i++)
		{
			const rhs: number[] = pl[i].get_rhs();
			if (rhs.length > longest)
				longest = rhs.length;
			if (rhs.length > 0)
			{
				productions[i] =  [];
				productions[i][0] = rhs.length.toString();
				for (let j=0; j<rhs.length; j++)
				{
					productions[i][j+1] = rhs[j].toString();
					if (productions[i][j+1].length > max)
						max = productions[i][j+1].length;
				}
			}
			else
			{
				productions[i] = [];
				productions[i][0] = "1";
				productions[i][1] = "0";
			}
		}
		
		let bfr = "";
		
		bfr += ("int PRODUCTIONS["+pl.length+"]["+(longest+1)+"] = \n");
		bfr += ("{\n");
		
		for (let i=0; i< productions.length; i++)
		{
			bfr += ("    {");
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
			bfr= bfr.slice(0, -1);
	 		bfr += (" },\n");
		}	
		bfr= bfr.slice(0, -2);
		bfr += ("\n};\n\n");
		
		return bfr.toString();
	}


	private syntErrorsLL(g: Grammar): string
	{
		const symbs: string[] = g.symbols;
		let result = "";
		
		result += (
		"const char *PARSER_ERROR["+g.FIRST_SEMANTIC_ACTION()+"] =\n"+
		"{\n"+
		"    \"\",\n"+
		"    \"Era esperado fim de programa\",\n");
		
		for (let i=2; i< g.FIRST_NON_TERMINAL; i++)
		{
			result += ("    \"Era esperado ");
			for (let j=0; j<symbs[i].length; j++)
			{
				switch (symbs[i].charAt(j))
				{
					case '"': result += ("\\\""); break;
					case '\\': result += ("\\\\"); break;
					default: result += (symbs[i].charAt(j));				
				}
			}
			
			result += ("\",\n");
		}
		
		for (let i=g.FIRST_NON_TERMINAL; i< symbs.length; i++)
			result += ("    \""+symbs[i]+" inválido\",\n");
			
		result = result.slice(0, -2);
		result += (
		"\n};\n\n");
		
		return result.toString();
	}

	//private syntErrorsLR(g: Grammar): string
	private syntErrorsLR(): string
	{

        if(this.lrTable  === null ) throw new SyntaticError("Tabela LR está nula.");

		let result = "";
	
		result += (
		"const char *PARSER_ERROR["+this.lrTable.length+"] =\n"+
		"{\n");
	
			for (let i=0; i< this.lrTable.length; i++)
				result += ("    \"Erro estado "+i+"\",\n");
		
		result = result.slice(0, -2);
		result += (
		"\n};\n\n");
	
		return result.toString();
	}
}
