import { OrderedIntegerSet } from "../../../DataStructures";
import { HTMLDialog } from "../../../HTMLDialog";
import { NotLLException, SyntaticError } from "../../../analyser/SystemErros";
import { Production } from "../../../util/Production";
import { Grammar } from "../Grammar";
import { LLConflictSolver } from "./LLConflictSolver";



/**
 * LL1Grammar representa a classe das gramáticas LL(1)
 * Esta classe possui um algorítimo de parsing preditivo.
 *
 * @author Carlos Eduardo Gesser
 */


export class LLParser
{
	private g: Grammar | undefined;

	constructor(g: Grammar) //throws NotLLException
	{
		if (! g.isFactored())
			throw new NotLLException("Gramática não Fatorada");
		if (g.hasLeftRecursion())
			throw new NotLLException("Gramática possui Recursão à Esquerda");

		this.g = g;
	}

	public getGrammar(): Grammar| undefined
	{
		return this.g;
	}

	/**
	 * @param p produção para se calcular o conjunto predict
	 *
	 * @return BitSet contendo os tokens do lookahead de p
	 */
	private lookahead(p: Production): OrderedIntegerSet
	{
		if(this.g == null) throw new SyntaticError("Gramatica é nula");
		// let result: OrderedIntegerSet = this.g.first(p.get_rhs());
		// if (result.get(Grammar.EPSILON))
		// {
		//     result.clear(Grammar.EPSILON);
		//     result.orBit(this.g.followSet[p.get_lhs()]);
		// }
		const result: OrderedIntegerSet = this.g.first(p.get_rhs());
		if (result.contains(0)) {
			result.delete(0);
			result.addAll(this.g.followSet[p.get_lhs()]);
		}
		return result;
	}

	public generateTable(): number[][]
	{
		if(this.g == null) throw new SyntaticError("Gramatica é nula");

		const symbols: string[] = this.g.symbols;
		const table: OrderedIntegerSet[][] = [];

		for (let i = 0; i < (symbols.length - this.g.FIRST_NON_TERMINAL); i++){
			table[i] = [];
			for (let j = 0; j < this.g.FIRST_NON_TERMINAL-1; j++)
				table[i][j] = new OrderedIntegerSet();
		}

		for (let i=0; i< this.g.productions.size(); i++)
		{
			const p: Production = this.g.productions.get(i);
			const pred: OrderedIntegerSet = this.lookahead(p);
			for (let j = 1; j < this.g.FIRST_NON_TERMINAL ; j++)
			{
				if (pred.contains(j))
				{
					table[p.get_lhs()- this.g.FIRST_NON_TERMINAL][j-1].add(i);
				}
			}
		}

		const conflict: LLConflictSolver = new LLConflictSolver();

		return this.resolveConflicts(table, conflict);
	}

	private resolveConflicts(table: OrderedIntegerSet[][], cs: LLConflictSolver): number[][]
	{

		if(this.g == null) throw new SyntaticError("Gramatica é nula");

		const result: number[][]  = [] //new int[table.length][table[0].length];


		for (let i=0; i<table.length; i++){
			result[i] = [];
			for (let j=0; j<table[i].length; j++)
			{
				switch (table[i][j].size)
				{
					case 0:
						result[i][j] = -1;
						break;
					case 1:
						result[i][j] = table[i][j].first();
						break;
					default:
						cs.setup(table[i][j], i);
						result[i][j] = cs.resolve(this.g, j);
						break;
				}
			}
		}
		return result;
	}

	public tableAsHTML(): string
	{

		if(this.g == null) throw new SyntaticError("Gramatica é nula");

		const tbl: number[][] = this.generateTable();
		let result = "";

		result +=(
			"<HTML>"+
			"<HEAD>"+
			"<TITLE>Tabela de Análise LL(1)</TITLE>"+
			"</HEAD>"+
			"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">"+
			"<TABLE border=1 cellspacing=0>");

		result +=(
			"<TR align=center>"+
			"<TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD>"+
			"<TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>");

		for (let i=Grammar.FIRST_TERMINAL; i<this.g.FIRST_NON_TERMINAL; i++)
		{
			result +=("<TD nowrap bgcolor=black><FONT color=white><B>"+HTMLDialog.translateString(this.g.symbols[i])+"</B></FONT></TD>");
		}

		result +=(
			"</TR>");

		for (let i=0; i<tbl.length; i++)
		{
			result +=(
				"<TR align=center>"+
				"<TD nowrap bgcolor=black><FONT color=white><B>"+HTMLDialog.translateString(this.g.symbols[i+this.g.FIRST_NON_TERMINAL])+"</B></FONT></TD>");

			for (let j=0; j<tbl[i].length; j++)
			{
				const val = tbl[i][j];

				if (val >= 0)
					result +=("<TD width=40 bgcolor=#F5F5F5>"+val+"</TD>");
				else
					result +=("<TD width=40 bgcolor=#F5F5F5>-</TD>");
			}

			result +=(
				"</TR>");
		}

		result +=("</TABLE>");

		result +=(
			"<BR></FONT><CODE><TABLE border=0>");

		for (let i=0;i<this.g.productions.size(); i++)
		{
			result +=("<TR>");

			result +=("<TD align=right nowrap>"+i+"&nbsp;-&nbsp;</TD>");
			result +=("<TD>"+HTMLDialog.translateString(this.g.productions.get(i).toString())+"</TD>");

			result +=("</TR>");
		}

		result +=(
			"</TABLE></CODE>"+
			"</BODY>"+
			"</HTML>");

		return result.toString();
	}
}
