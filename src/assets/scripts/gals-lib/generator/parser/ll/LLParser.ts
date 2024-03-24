
// import { IntegerSet } from "../../../DataStructures";
// import { NotLLException } from "../../../analyser/SystemErros";
// import { Production } from "../../../util/Production";
// import { ConflictSolver } from "../ConflictSolver";
// import { Grammar } from "../Grammar";
// import { LLConflictSolver } from "./LLConflictSolver";



// /**
//  * LL1Grammar representa a classe das gramáticas LL(1)
//  * Esta classe possui um algorítimo de parsing preditivo.
//  *
//  * @author Carlos Eduardo Gesser
//  */


// export class LLParser
// {	
// 	private g: Grammar | undefined;

//     public LLParser(g: Grammar) //throws NotLLException
//     {
//     	if (! g.isFactored())
//     		throw new NotLLException("Gramática não Fatorada");
//     	if (g.hasLeftRecursion())
// 			throw new NotLLException("Gramática possui Recursão à Esquerda");
    	
//     	this.g = g;    	
//     }
    
//     public getGrammar(): Grammar| undefined
//     {
//     	return this.g;
//     }

//     /**
//      * @param p produção para se calcular o conjunto predict
//      *
//      * @return BitSet contendo os tokens do lookahead de p
//      */
//     private lookahead(p: Production): IntegerSet
//     {
//         // let result: IntegerSet = this.g.first(p.get_rhs());
//         // if (result.get(Grammar.EPSILON))
//         // {
//         //     result.clear(Grammar.EPSILON);
//         //     result.orBit(this.g.followSet[p.get_lhs()]);
//         // }
//         let result: IntegerSet = this.g.first(p.get_rhs());
//         if (result.contains(0)) {
//             result.delete(0);
//             result.addAll(this.g.followSet[p.get_lhs()]);
//         }
//         return result;
//     }

//     public generateTable(): number[][]
//     {
//     	let symbols: string[] = this.g.symbols;
//         let table: IntegerSet[][] = [];

//         for (let i = 0; i < (symbols.length - this.g.FIRST_NON_TERMINAL); i++){
//             table[i] = [];
//             for (let j = 0; j < this.g.FIRST_NON_TERMINAL-1; j++)
//                 table[i][j] = new IntegerSet();
//         }

//         for (let i=0; i< this.g.productions.size(); i++)
//         {
//             let p: Production = this.g.productions.get(i);
//             let pred: IntegerSet = this.lookahead(p);
//             for (let j = 1; j < this.g.FIRST_NON_TERMINAL ; j++)
//             {
//             	if (pred.contains(j))
//             	{
//                 	table[p.get_lhs()- this.g.FIRST_NON_TERMINAL][j-1].add(i);
//             	}
//             }
//         }

// 		let conflict: LLConflictSolver = new LLConflictSolver();

// 		return this.resolveConflicts(table, conflict);
//     }

// 	private resolveConflicts(table: IntegerSet[][], cs: LLConflictSolver): number[][]
// 	{
// 		let result: number[][]  = [] //new int[table.length][table[0].length];
		

// 		for (let i=0; i<table.length; i++)
// 			for (let j=0; j<table[i].length; j++)
//             {
//                 switch (table[i][j].size)
//                 {
//                     case 0:
//                         result[i][j] = -1;
//                         break;        
//                     case 1:
//                         result[i][j] = table[i][j].first();
//                         break;
//                     default:
// 						cs.setup(table[i][j], i);
//                         result[i][j] = cs.resolve(this.g, j);
//                         break;
//                 }
//             }
			
// 		return result;
// 	}    
	
// 	public tableAsHTML(): string
// 	{
// 		let tbl: number[][] = this.generateTable();
// 		let result = "";

// 		result +=(
// 			"<HTML>"+
// 			"<HEAD>"+
// 			"<TITLE>Tabela de Análise LL(1)</TITLE>"+
// 			"</HEAD>"+
// 			"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">"+
// 			"<TABLE border=1 cellspacing=0>");
			
// 		result +=(
// 			"<TR align=center>"+
// 			"<TD bgcolor=black><FONT color=white><B>&nbsp;</B></FONT></TD>"+
// 			"<TD bgcolor=black><FONT color=white><B>$</B></FONT></TD>");
		
// 		for (let i=Grammar.FIRST_TERMINAL; i<this.g.FIRST_NON_TERMINAL; i++)
// 		{
// 			result +=("<TD nowrap bgcolor=black><FONT color=white><B>"+HTMLDialog.translateString(g.getSymbols()[i])+"</B></FONT></TD>");
// 		}
		
// 		result +=(
// 			"</TR>");
		
// 		for (let i=0; i<tbl.length; i++)
// 		{
// 			result +=(
// 				"<TR align=center>"+
// 				"<TD nowrap bgcolor=black><FONT color=white><B>"+HTMLDialog.translateString(g.getSymbols()[i+g.FIRST_NON_TERMINAL])+"</B></FONT></TD>");
			
// 			for (let j=0; j<tbl[i].length; j++)
// 			{
// 				let val = tbl[i][j];
				
// 				if (val >= 0)					
// 					result +=("<TD width=40 bgcolor=#F5F5F5>"+val+"</TD>");
// 				else
// 					result +=("<TD width=40 bgcolor=#F5F5F5>-</TD>");
// 			}
				
// 			result +=(
// 				"</TR>");
// 		}
		
// 		result +=("</TABLE>");
			
// 		result +=(			
// 			"<BR></FONT><CODE><TABLE border=0>");
			
// 		for (let i=0;i<this.g.productions.size(); i++)
// 		{
// 			result +=("<TR>");
			
// 			result +=("<TD align=right nowrap>"+i+"&nbsp;-&nbsp;</TD>");
// 			result +=("<TD>"+HTMLDialog.translateString(g.getProductions().get(i).toString())+"</TD>");
			
// 			result +=("</TR>");
// 		}
			
// 		result +=(
// 			"</TABLE></CODE>"+
// 			"</BODY>"+
// 			"</HTML>");
				
// 		return result.toString();
// 	}	
// }
