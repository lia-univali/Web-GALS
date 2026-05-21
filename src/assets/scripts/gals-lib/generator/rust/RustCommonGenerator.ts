import { List } from "../../DataStructures";
import { SyntacticError } from "../../analyser/SystemErros";
import { Production } from "../../util/Production";
import { FiniteAutomata, KeyValuePar } from "../FiniteAutomata";
import { Options } from "../Options";
import { Grammar } from "../parser/Grammar";
import { LLParser } from "../parser/ll/LLParser";
import { Command } from "../parser/lr/Command";
import { LRGeneratorFactory } from "../parser/lr/LRGeneratorFactory";
import { installRPCHandler } from "@/workers/workerRPC";

export class RustCommonGenerator
{

    lrTable: number[][][] | null = null;
	
    async generate(fa: FiniteAutomata | null, g: Grammar | null, options: Options): Promise<Map<string, string>> {
        const result: Map<string, string> = new Map;

		if (fa === null || g === null) {
			throw new Error("FiniteAutomata and Grammar must not be null");
		}

		let pkgpath = options.pkgName !== "" ? options.pkgName + "/" : "";

		result.set("Cargo.toml",                       this.generateCargotoml());
		result.set("src/main.rs",                      this.mainfunc(options));
		result.set(`src/${pkgpath}token.rs`,           this.generateToken(options));
		result.set(`src/${pkgpath}errors.rs`,          this.generateErrors(options));
		result.set(`src/${pkgpath}constants.rs`, await this.generateConstants(fa, g, options));

		if (pkgpath !== "") {
			result.set(`src/${pkgpath}mod.rs`,   this.generateMod(options));
		}

		return result;
	}

	private generateMod(options: Options) {
		return ""+
`
pub mod token;
pub mod errors;
pub mod constants;
${options.generateScanner ? `pub mod scanner;` : "" }
${options.generateParser  ? `pub mod parser;`  : "" }
${options.generateParser  ? `pub mod codegen;` : "" }
`;
	}

	private mainfunc(options: Options): string
	{
		let scannername  = options.scannerName;
        let parsername   = options.parserName;
        let semanticname = options.semanticName;
		const pkgpath = options.pkgName !== "" ? options.pkgName + "::" : "";
		const stringmd: boolean = options.input == Options.INPUT_STRING;

		return ""+
`
#![allow(nonstandard_style)]

${stringmd ? "" : `use std::{fs::File, io::BufReader};`}

use crate::${pkgpath}{
    ${options.generateScanner ? `scanner::${scannername},` : "" }
    ${options.generateParser  ? `parser::${parsername},`   : "" }
    ${options.generateParser  ? `codegen::${semanticname}` : "" }
};
${
	options.pkgName === "" ?
`
mod constants;
mod errors;
mod token;
${options.generateScanner ? `mod scanner;` : "" }
${options.generateParser  ? `mod parser;`  : "" }
${options.generateParser  ? `mod codegen;` : "" }
`
	:
`
mod ${options.pkgName};
`

}
fn main() {
${options.generateScanner ?
`${stringmd ?
`    let lex = ${scannername}::new("".into());`
    :
`    let file = File::open("program.txt").expect("erro ao abrir arquivo");
    let lex = ${scannername}::new(BufReader::new(file));`
}` : ""
}
    ${options.generateParser ? `let sem = ${semanticname}::new();` : ""}
    ${options.generateParser ? `let syn = ${parsername}::new(lex, sem);` : ""}

    ${options.generateParser ? `if let Err(e) = syn.parse() {
        eprintln!("{e}");
    }` : ""}
}

`;
	}

	private generateCargotoml() {
		return ""+
`
[package]
name = "gals-compiler-output"
version = "0.1.0"
edition = "2024"

[dependencies]
num-derive = "0.4.2"
num-traits = "0.2.19"

`;
	}

	private generateToken(options: Options): string
	{	
		let pkgpath = options.pkgName !== "" ? options.pkgName + "::" : "";
		return ""+
`
use crate::${pkgpath}constants::TokenId;

#[derive(Default, Debug)]
pub struct Token {
    id: TokenId,
    lexeme: String,
    position: usize,
}

impl Token {
    pub fn new(id: TokenId, lexeme: String, position: usize) -> Self {
        Token {
            id,
            lexeme,
            position,
        }
    }
    pub fn get_id(&self) -> TokenId {
        self.id
    }
    pub fn get_lexeme(&self) -> &String {
        &self.lexeme
    }
    pub fn get_position(&self) -> usize {
        self.position
    }
}

`;
	}

	private generateErrors(options: Options): string
	{
		return ""+
`
use std::{error::Error, fmt::Display};

#[allow(unused)]
#[derive(Debug, Clone, Copy)]
pub enum AnalysisErrorKind {
    Lexical,
    Syntatic,
    Semantic,
}

#[derive(Debug)]
pub struct AnalysisError {
    kind: AnalysisErrorKind,
    message: String,
    position: usize,
}

#[allow(unused)]
impl AnalysisError {
    pub fn new(message: String, position: usize, kind: AnalysisErrorKind) -> Self {
        AnalysisError {
            kind,
            message,
            position,
        }
    }
    pub fn lexical(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Lexical)
    }
    pub fn syntatic(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Syntatic)
    }
    pub fn semantic(message: String, position: usize) -> Self {
        AnalysisError::new(message, position, AnalysisErrorKind::Semantic)
    }
    pub fn get_message(&self) -> String {
        self.message.clone()
    }
    pub fn get_position(&self) -> usize {
        self.position
    }
    pub fn get_kind(&self) -> AnalysisErrorKind {
        self.kind
    }
}

impl Display for AnalysisError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        use AnalysisErrorKind::*;
        let which = match self.kind {
            Lexical => "léxica",
            Syntatic => "sintática",
            Semantic => "semântica",
        };
        write!(
            f,
            "Erro de analise {which} na posição {}: {} ",
            self.position, self.message
        )
    }
}

impl Error for AnalysisError {}

`
			;
	}
	
	private async generateConstants(fa: FiniteAutomata, g: Grammar, options: Options): Promise<string> {
		return "\nuse num_derive::FromPrimitive;\n\n"+

			"pub const CASE_INSENSITIVITY: bool  = " + (options.scannerCaseSensitive == true ? "false;\n\n" : "true;\n\n")+
			"pub const TOKEN_DEPENDENCY  : bool  = " + (fa.specialCases.length > 0 ? "true;\n" : "false;\n")+

			"#[allow(nonstandard_style)]\n"+
			"#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, FromPrimitive)]\n"+
			"pub enum TokenId {\n"+
			"\t#[default]\n"+
			"\tEPSILON = 0,\n"+
			"\tDOLLAR  = 1,\n"+
			this.constList(fa, g)+
			(options.generateScanner ?       this.lexDecls(fa, options) : "")+
			(options.generateParser  ? await this.syntDecls(g, options) : "");
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
				result += ("\tt_TOKEN_"+(i+2)+" = "+(i+2)+","+"//"+t+"\n");
			else
				result += ("\tt_"+t+" = "+(i+2)+",\n");
		}
		
		result += ("\n}\n");
		
		return result.toString();
	}

	private lexDecls(fa: FiniteAutomata, options: Options): string
	{
		if (fa == null)
			return "";

		let count = fa.transitions.size();
		let max;
		let result = `\npub const STATES_COUNT: usize = ${count};\n\n`;

		result += this.scannerTable(fa, options) + "\n";
		result += `pub const TOKEN_STATE: [i32; STATES_COUNT] = [`;
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

		result += "];\n\n";

		result += this.context(fa);
		result += this.specialCases(fa);

		result += "pub const SCANNER_ERRORS: [&str; STATES_COUNT] = [\n";
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

		result += "];\n\n";

		return result.toString();
	}
	
	private async syntDecls(g: Grammar, options: Options): Promise<string>
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
				return await this.syntTables(g, options) + this.syntErrorsLL(g);
			}
			default: //SLR, LALR, LR
			{
				const generator = LRGeneratorFactory.createGenerator(g, options.parser); // TODO Change based on Options

				if(generator == null) throw new SyntacticError("Gerador de Tabela é nulo.");

				this.lrTable = await generator.buildIntTable();

				let result = `pub const FIRST_SEMANTIC_ACTION: i32 = ${g.FIRST_SEMANTIC_ACTION()};\n`+
					"\n"+
					"#[allow(nonstandard_style)]\n"+
					"#[derive(Debug, Clone, Copy, FromPrimitive)]\n"+
					"pub enum SLRAction {\n"+
					"    SHIFT,\n"+
					"    REDUCE,\n"+
					"    ACTION,\n"+
					"    ACCEPT,\n"+
					"    GO_TO,\n"+
					"    ERROR,\n"+
					"}\n\n"+

					await this.syntTables(g, options);

				return result;
			}
		}
	}

	// TODO: Testar sistema de contexto
	private context(fa: FiniteAutomata): string
	{
		if (! fa.hasContext())
			return "";
		
		let result = "";
		
		result += `pub const SCANNER_CONTEXT: [(i32; i32); ${fa.transitions.size()}] = [\n`;
		
		for (let i = 0; i < fa.transitions.size(); i++)
		{
			result += ("\n(");
			result += (fa.isContext(i)?"1":"0");
			result += (", ");
			result += (fa.getOrigin(i));
			result += ("),\n");
		}
		
		result = result.slice(0, -2);
		result += (
		"\n];\n\n");
		
		return result.toString();
	}

	private scannerTable(fa: FiniteAutomata, options: Options): string
	{
		if (options.scannerTable == Options.SCANNER_TABLE_HARDCODE)
			return "";

		let result = "";

		result += "#[rustfmt::skip]\n";
		result += ("pub const SCANNER_TABLE: [[i32; 256]; STATES_COUNT] = [\n");

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
		result += ("\n];\n");
		return result.toString();
	}
	
	private specialCases(fa: FiniteAutomata): string
	{			
		if (fa.specialCases.length > 0)
		{
			const indexes: number[][]  = fa.getSpecialCasesIndexes();
			const sc: KeyValuePar[]  = fa.specialCases;
	
			let result = "";
	
			result += `pub const SPECIAL_CASES_INDEXES: [i32; ${fa.getSpecialCasesIndexes().length+1}] = [`;

			let count = indexes.length;
			for (let i = 0; i < count; i++)
			{
				result += `${indexes[i][0]}, `;
			}
			result += `${indexes[count-1][1]} ];\n`;
	
			count = sc.length;
			result += `pub const SPECIAL_CASES_KEYS: [&str; ${count}] = [ `;
						
			count = sc.length;
			for (let i = 0; i < count; i++)
			{
				result += ("\"") + (sc[i].key) + ("\", ");
			}
		
			result += " ];\n\n";
			
			result += `pub const SPECIAL_CASES_VALUES: [i32; ${count}] = [ `;
	
			for (let i = 0; i < count; i++)
			{
				result += (sc[i].value) + (", ");
			}
		
			result += (" ];\n\n");
	
			return result.toString();		
		}
		else
			return "";
	}

	private async syntTables(g: Grammar, options: Options): Promise<string> // TODO throws NotLLException
	{
		if (g == null)
			return "";
			
		switch (options.parser)
		{
			case Options.PARSER_REC_DESC:
				throw new SyntacticError("REC_DESC DOES NOT USE SYNTTABLES");
			case Options.PARSER_LL:
				return await this.genLLSyntTables(g);
			default: //slr, lalr, lr
				return  this.syntTransTable(g)+
					    this.productionsLR(g)+
					    this.syntErrorsLR();
		}
	}

	private async genLLSyntTables(g: Grammar): Promise<string>
	{
		const result: string[] = [];

		const start = g.startSymbol;
		const fnt   = g.FIRST_NON_TERMINAL;
		const fsa   = g.symbols.length;

		const syntConsts =
			`pub const START_SYMBOL: i32 = ${start};\n`+
			"\n"+
			`pub const FIRST_NON_TERMINAL: i32 = ${fnt};\n`+
			`pub const FIRST_SEMANTIC_ACTION: i32 = ${fsa};\n`;

		result.push(syntConsts);

		result.push("\n");

		result.push(await this.emitLLTable(g));

		result.push("\n");

		result.push(this.productionsLL(g));

		result.push("\n");

		return result.join("");
	}

	private async emitLLTable(g: Grammar): Promise<string>
	{
		let llp = new LLParser(g)
		let tbl: number[][] = await llp.generateTable();
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

		result.push(`pub const PARSER_TABLE: [[i32; ${g.FIRST_NON_TERMINAL-1}]; ${g.FIRST_SEMANTIC_ACTION() - g.FIRST_NON_TERMINAL}] = [\n`);

		for (let i=0; i< table.length; i++)
		{
			result.push("    [");
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
		result.push("\n];\n");

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

		result.push(`pub const PRODUCTIONS: [&[i32]; ${g.productions.size()}] = [\n`);

		for (let i=0; i< productions.length; i++)
		{
			result.push("    &[");
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
		result.push("\n];\n");

		return result.join("");
	}

	private productionsLR(g: Grammar): string
	{
		let result = "";

		const prods: Production[] = g.productions.toArray();

		result += `pub const PRODUCTIONS: [(i32, i32); ${prods.length}] = [\n`;

		for (let i = 0; i < prods.length; i++)
		{
			result += `    (${prods[i].get_lhs()}, ${prods[i].get_rhs().length}),\n`;
		}

		result += "];\n\n";

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

		result += `pub const PARSER_TABLE: [[(SLRAction, i32); ${this.lrTable[0].length}]; ${this.lrTable.length}] = [\n`;

		let max = this.lrTable.length;
		if (g.productions.size() > max)
			max = g.productions.size();
	
		max = (""+max).length;

		for (let i=0; i< this.lrTable.length; i++)
		{
			result += ("    [");
			for (let j=0; j<this.lrTable[i].length; j++)
			{
				result += (" (");
				result += "SLRAction::" + (Command.CONSTANTS[this.lrTable[i][j][0]]);
				result += (", ");
				const str = ""+this.lrTable[i][j][1];
				for (let k=str.length; k<max; k++)
					result += (" ");
				result += (str) + ("),");
			}
			result = result.slice(0, -1);
			result += ("    ],\n");
		}	
        result = result.slice(0, -2);
		result += ("\n];\n\n");

		return result.toString();
	}

	private syntErrorsLL(g: Grammar): string
	{
		const symbs: string[] = g.symbols;

		let total = 2;

		let result = "\npub const PARSER_ERROR: [&str; PARSER_ERROR_CT] = [\n"+
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
			total++;
		}

		for (let i = g.FIRST_NON_TERMINAL; i < symbs.length; i++)
		{
			result += `\t"${symbs[i]} inválido",\n`;
			total++;
		}

		result += "];\n\n";

		result += `const PARSER_ERROR_CT: usize = ${total};`;

		return result;
	}

	private syntErrorsLR(): string
	{

        if (this.lrTable  === null) throw new SyntacticError("Tabela LR está nula.");

		let result = "";
	
		result += `pub const PARSER_ERROR: [&str; ${this.lrTable.length}] = [\n`;
	
		for (let i = 0; i < this.lrTable.length; i++)
			result += ("    \"Erro estado "+i+"\",\n");
		
		result += "];\n\n";
	
		return result.toString();
	}
}
