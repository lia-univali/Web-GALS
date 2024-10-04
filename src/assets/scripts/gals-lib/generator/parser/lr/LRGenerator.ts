
/**
 * @author Gesser
 */

import { OrderedIntegerSet, List } from "../../../DataStructures";
import { HTMLDialog } from "../../../HTMLDialog";
import { Production } from "../../../util/Production";
import { Grammar } from "../Grammar";
import { Command } from "./Command";
import { LRConflictSolver } from "./LRConflictSolver";
import { LRItem } from "./LRItem";

export abstract class LRGenerator {
	protected g: Grammar;
	protected itemList: List<List<LRItem>>;
	protected semanticStart: number;
	protected firstSementicAction: number;

	constructor(g: Grammar) {
		this.semanticStart = g.FIRST_SEMANTIC_ACTION();
		this.firstSementicAction = g.FIRST_SEMANTIC_ACTION();// g.SEMANTIC_ACTION_COUNT;

		//console.log("semanticStart: " +this.semanticStart+ " | firstSementicAction: " + this.firstSementicAction);

		this.g = g.asNormalLR();

		this.itemList = this.computeItems();
	}



	public getErrors(table: Command[][]): List<string> {
		const result = new List<string>();

		for (let state = 0; state < table.length; state++) {
			const bs: OrderedIntegerSet = new OrderedIntegerSet();
			for (let j = 1; j < this.g.FIRST_NON_TERMINAL; j++) {
				if (table[state][j - 1].getType() != Command.ERROR)
					bs.add(j);
			}
			let bfr: string = "";
			const total: number = bs.size;
			let count: number = 0
			for (const i of bs.list()) {
				if (i == 1)//DOLAR
					bfr += "fim de sentença";
				else
					bfr += this.g.symbols[i];

				if (total - count == 2)
					bfr += " ou ";
				else if (total - count > 2)
					bfr += ", ";

				count++;
			}
			result.add(bfr.toString());
		}

		/*
			for (Iterator iter = itemList.iterator(); iter.hasNext();)
			{
				List items = (List) iter.next();
			
				BitSet first = new BitSet();			
				for (Iterator i = items.iterator(); i.hasNext(); )
				{
					LRItem item = (LRItem)i.next();
					Production p = item.getProduction();
				
					first.or(g.first(p.get_rhs(), item.getPosition()));
					if (first.get(0))
					{
						first.clear(0);
						if (item.getLookahead() != 0)
							first.set(item.getLookahead());
						else
							first.or(g.followSet[p.get_lhs()]);
					}
					
				}
				
				StringBuffer bfr = new StringBuffer();
				int total = first.cardinality();
				for (int i = first.nextSetBit(0), count = 0; i>=0; i = first.nextSetBit(i+1), ++count)
				{
					if (i == 1)//DOLAR
						bfr += "fim de sentença");
					else
						bfr += g.getSymbols()[i]);
						
					if (total - count == 2)
						bfr += " ou ");
					else if (total - count > 2)
					bfr += ", ");
				}
				result.add(bfr.toString());
			}*/

		return result;
	}

	public get grammar(): Grammar {
		return this.g;
	}

	public get firstSemanticAction(): number {
		return this.firstSementicAction;
	}

	protected abstract closure(items: List<LRItem>): List<LRItem>;
	protected abstract goTo(items: List<LRItem>, s: number): List<LRItem>;
	protected abstract computeItems(): List<List<LRItem>>;
	public abstract buildTable(): Command[][];

	public buildIntTable(): number[][][] {
		const commands: Command[][] = this.buildTable();

		const result: number[][][] = [];

		for (let i = 0; i < commands.length; i++) {
			result[i] = [];
			for (let j = 0; j < commands[i].length; j++) {
				result[i][j] = [];
				result[i][j][0] = commands[i][j].getType();
				result[i][j][1] = commands[i][j].getParameter();
			}
		}
		return result;
	}

	protected resolveConflicts(table: Set<Command>[][]): Command[][] {
		const result: Command[][] = [];

		const error: Command = Command.createError();
		for (let i = 0; i < table.length; i++) {
			result[i] = [];
			for (let j = 0; j < table[0].length; j++) {
				switch (table[i][j].size) {
					case 0:
						result[i][j] = error;
						break;
					case 1:
						result[i][j] = table[i][j].values().next()["value"] //.iterator().next();
						break;
					default:
						result[i][j] = this.solve(table[i][j], i, j);
						break;
				}
			}
		}

		return result;
	}

	private solve(set: Set<Command>, state: number, input: number): Command {
		const cmds: Command[] = [];
		let i = 0;
		//for (Iterator iter = set.iterator(); iter.hasNext();)
		for (const iter of set) {
			cmds[i] = iter; //TODO VERIFY MODIFICATION
			i++;
		}

		let equals = true;
		for (let j = 1; j < cmds.length; j++) {
			equals = equals && cmds[j - 1].equals(cmds[j]);
			if (!equals)
				break;
		}

		if (equals)
			return cmds[0];
		else {
			const lrConflictSolver: LRConflictSolver = new LRConflictSolver;
			lrConflictSolver.setup(cmds, state);
			return cmds[lrConflictSolver.resolve(this.g, input)];
		}
	}



	public tableAsHTML(): string {
		let result = "";

		result +=
			"<HTML>" +
			"<HEAD>" +
			"<TITLE>Tabela SLR(1)</TITLE>" +
			"</HEAD>" +
			"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">" +
			"<TABLE border=1 cellspacing=0>";

		const table: Command[][] = this.buildTable();

		result += "<TR>";
		result += "<TD  align=center rowspan=2 bgcolor=black nowrap><FONT color=white><B>ESTADO</B></FONT></TD>";
		result += "<TD  align=center colspan=" + (this.g.FIRST_NON_TERMINAL - 1) + " bgcolor=black nowrap><FONT color=white><B>AÇÃO</B></FONT></TD>";
		result += "<TD  align=center colspan=" + (this.g.FIRST_SEMANTIC_ACTION() - this.g.FIRST_NON_TERMINAL) + " bgcolor=black nowrap><FONT color=white><B>DESVIO</B></FONT></TD>";
		result += "</TR>";

		result += "<TR>";
		//result += "<TD  align=center bgcolor=black>&nbsp;</TD>");
		for (let i = 0; i < table[0].length - 1; i++) {
			result += "<TD  align=center bgcolor=black nowrap><FONT color=white><B>" + HTMLDialog.translateString(this.g.symbols[i + 1]) + "</B></FONT></TD>";
		}
		result += "</TR>";

		for (let i = 0; i < table.length; i++) {
			const line: Command[] = table[i];

			result += "<TR>";

			result += "<TD bgcolor=black align=right nowrap><FONT color=white><B>" + i + "</B></FONT></TD>";

			for (let j = 0; j < line.length - 1; j++) {
				const cmd: Command = line[j];
				let value = "";

				if (cmd != null)
					value = cmd.toString();

				const color: string = j + 1 < this.g.FIRST_NON_TERMINAL ? "#F5F5F5" : "#E6E6E6";

				result += "<TD bgcolor=" + color + " align=center nowrap>" + value + "</TD>";
			}
			result += "</TR>";
		}

		result +=
			"</TABLE>" +
			"</FONT></BODY>" +
			"</HTML>";

		return result.toString();
	}

	public itemsAsHTML(): string {
		let result = "";

		result +=
			"<HTML>" +
			"<HEAD>" +
			"<TITLE>Itens SLR(1)</TITLE>" +
			"</HEAD>" +
			"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">" +
			"<TABLE border=1 cellspacing=0>";

		const l: List<List<LRItem>> = this.itemList;

		result += "<TR>";
		result += "<TD  align=center bgcolor=black><FONT color=white><B>Estado</B></FONT></TD>";
		result += "<TD  align=center bgcolor=black><FONT color=white><B>Itens</B></FONT></TD>";
		result += "<TD  align=center bgcolor=black><FONT color=white><B>Desvio</B></FONT></TD>";
		result += "</TR>";

		for (let i = 0; i < l.size(); i++) {
			const color: string = i % 2 == 0 ? "#F5F5F5" : "#E6E6E6";

			const item: List<LRItem> = l.get(i);

			result += "<TR>";
			result += "<TD bgcolor=" + color + " align=right rowspan=" + item.size() + ">" + i + "</TD>";
			//result += "<TD bgcolor="+color+" nowrap>"+item.get(0).toString()+"</TD>";
			result += "<TD bgcolor=" + color + " nowrap>" + HTMLDialog.translateString(item.get(0).toString()) + "</TD>";

			let it: LRItem = item.get(0);
			let p: Production = it.production;
			if (p.get_rhs().length > it.position) {
				const x: number = p.get_rhs()[it.position];
				const next: List<LRItem> = this.goTo(item, x);
				const pos: number = this.getIndexFromList(l, next);
				result += "<TD bgcolor=" + color + " align=right>" + pos + "</TD>";
			}
			else
				result += "<TD bgcolor=" + color + " align=right>" + "&nbsp" + "</TD>";
			result += "</TR>";

			for (let j = 1; j < item.size(); j++) {
				result += "<TR>";
				result += "<TD bgcolor=" + color + " nowrap>" + HTMLDialog.translateString(item.get(j).toString()) + "</TD>";

				it = item.get(j);
				p = it.production;
				if (p.get_rhs().length > it.position) {
					const x: number = p.get_rhs()[it.position];
					const next: List<LRItem> = this.goTo(item, x);
					const pos: number = this.getIndexFromList(l, next);
					result += "<TD bgcolor=" + color + " align=right>" + pos + "</TD>";
				}
				else
					result += "<TD bgcolor=" + color + " align=right>" + "&nbsp" + "</TD>";
				result += "</TR>";
			}

			result += "</TR>";
		}

		result +=
			"</TABLE>" +
			"</FONT></BODY>" +
			"</HTML>";

		return result.toString();
	}


	protected getIndexFromList(list: List<List<LRItem>>, item:  List<LRItem>): number
	{
		const listArray : List<LRItem>[] = list.toArray();

		const itemArray : LRItem[] = item.toArray()

		for(let i = 0; i < listArray.length; i++){
			const pivot = listArray[i];
			
			if (pivot.size() !== item.size()) {
				continue
			}
			
			const pivotArray = pivot.toArray()
			let contained = true

			for (let x = 0; x < pivotArray.length; x++) {
				const pivotItem: LRItem = pivotArray[x]
				const it: LRItem = itemArray[x]
				if (!pivotItem.equals(it)) {
					contained = false
					break
				}
			}

			if (contained) return i
		}

		return -1;
	}

	// private indexOfLRItem(: List<LRItem>): number{

	// 	return -1;
	// }

}
