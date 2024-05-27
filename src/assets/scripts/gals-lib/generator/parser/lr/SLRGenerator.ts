import { IntegerSet, List } from "../../../DataStructures";
import { Production } from "../../../util/Production";
import { Grammar } from "../Grammar";
import { Command } from "./Command";
import { LRGenerator } from "./LRGenerator";
import { LRItem } from "./LRItem";

export class SLRGenerator extends LRGenerator
{
	public constructor(g: Grammar)
	{	
		super(g);
	}
	
	protected closure(items: List<LRItem>): List<LRItem>
    {
    	const result = new List<LRItem>();
    	items.toArray().forEach(i => result.add(i));

    	for (let i=0; i<result.size(); i++)
    	{
    		const it: LRItem = result.get(i);
    		
    		const p: Production = it.production;
    		if (it.position < p.get_rhs().length)
    		{
	    		const s: number = p.get_rhs()[it.position];
	    		if (this.g.isNonTerminal(s))
	    		{
	    			const bs: IntegerSet = this.g.productionsFor(s);
	    			for (const iter of bs.list())
	    			{
		    			const n = new LRItem(this.g.productions.get(iter), 0);

		    			if ( ! this.contains(result, n) )
		    				result.add(n);
	    			}
	    		}
    		}
    	}
    	
    	return result;
    }

	private contains(list: List<LRItem>, item: LRItem): boolean
	{
		for(const pivot of list){
			if(item.equals(pivot))
				return true;
		}

		return false;
	}
    
	protected goTo(items: List<LRItem>, s: number): List<LRItem>
    {
    	const result: List<LRItem> = new List<LRItem>();
    	
    	for (const i of items.toArray())
		{
			const item: LRItem = i;
			const p: Production = item.production;
			
			if (item.position < p.get_rhs().length)
			{
				const symb = p.get_rhs()[item.position];
				
				if (symb == s)
				{
					result.add(new LRItem(item.production, item.position+1));
				}
			}
		}
		
		return this.closure(result);
    }
    
    /**
     * Calcula os itens LR
     * @return List
     */
	protected computeItems(): List<List<LRItem>>
    {
		// //console.log("_____________Compute Items SLR___________");
    	const s: List<LRItem> = new List();
    	const sp: IntegerSet = this.g.productionsFor(this.g.startSymbol);
    	const f: number =  sp.list()[0];//new BitSetIterator(sp).nextInt();
    	s.add(new LRItem(this.g.productions.get(f), 0));
    	const c: List<List<LRItem>> = new List();
    	c.add(this.closure(s));
    	
    	let repeat = true;
    	//let teste = 0;
    	while (repeat)
    	{
    		start:
			{
	    		repeat = false;
	    	
				////console.log("Teste Start ___________________");
				
	    		for (const items of c.toArray())
	    		{
	    			// let items: List<LRItem> = it.get(0);
	    			
	    			for (let i=0; i<items.size(); i++)
	    			{
	    				const m: LRItem = items.get(i);
	    				// //console.log("i: " + i + " item size: " + items.size());
	    				const p: Production = m.production;
	    				if (p.get_rhs().length > m.position)
	    				{
							// //console.log(p.get_rhs().length +" > " + m.position);
							////console.log("indice: " + teste++);
							////console.log("items: " + items.toString() + "  |  p.get_rhs: " + p.get_rhs()[m.position]);
	    					const gt: List<LRItem> = this.goTo(items, p.get_rhs()[m.position]);
							////console.log("gt: " + gt.toString());
		    				//if (gt.size() != 0 && ! c.contains(gt))
							//teste++;
							// //console.log("gt.size(): " + gt.size() +" | containsList: " + this.containsList(c, gt));
							if (gt.size() != 0 && ! this.containsList(c, gt))
		    				{
		    					c.add(gt);
		    					repeat = true;
								////console.log("Final Saida Start ___________________")
		    					break start;
		    				}
	    				}
	    			}
	    		}
			}
			//if(teste == 10) break;
    	}

		// //console.log("teste: " + teste);

    	return c;
    }


	private containsList(list: List<List<LRItem>>, item: List<LRItem>): boolean
	{

		// TODO Revisar comparador

		for(const pivot of list){

			const item1String = pivot.toString();
			const item2String = item.toString();

			if(item1String === item2String){
				return true;
			}
		}

		return false;
	}




	// private containsList(list: List<List<LRItem>>, item: List<LRItem>): boolean
	// {
	// 	for(let pivot of list){

	// 		let item1: LRItem[] = pivot.toArray();;
	// 		let item2: LRItem[] = item.toArray();
		
	// 		if (item1.length !== item2.length) return false;
			
	// 		return item1.every((value, index) => value.equals(item2[index]));
	// 	}

	// 	return false;
	// }
	
    
    /**
     * Cria a tabale de parse SLR
     * 
     * */

	public buildTable(): Command[][] 
	{

    	//Command[][] result = new Command[itemList.size()][g.getSymbols().length-1];
		const result: Map<number, Command>[][]  = [];
    	
    	for (let i=0; i< this.itemList.size(); i++)
    	{
			result[i] = [];
    		for (let j=0; j<this.g.symbols.length-1; j++)
    		{
    			result[i][j] = new Map<number, Command>();
    		}
    	}
    	
    	for (let i=0; i<result.length; i++)
    	{
    		const items: List<LRItem> = this.itemList.get(i);
    		
    		for (let j=0; j<items.size(); j++)
    		{
    			const item: LRItem = items.get(j);
    			
    			const p: Production = item.production;
    			const rhs: number[] = p.get_rhs();
    			
    			if (rhs.length > item.position)
    			{
    				const s: number = rhs[item.position];
    				const next: List<LRItem> = this.goTo(items, s);
    				
    				if (this.g.isTerminal(s))        
    				{
						const cmd = Command.createShift(this.indexOfListLRItem(this.itemList, next));
    					result[i][s-1].set( cmd.hashCode(), cmd);
    				}
    				else //nonTerminal
    				{
						const cmd = Command.createGoTo((this.indexOfListLRItem(this.itemList, next)))
    					result[i][s-1].set( cmd.hashCode(), cmd);
    				}
    			}
    			else
    			{
    				const lhs = p.get_lhs();
    				
    				if (lhs == this.g.startSymbol)
    				{
						const cmd = Command.createAccept();
    					result[i][0].set( cmd.hashCode(), cmd);
    				}
    				else
    				{
						const follow: IntegerSet = this.g.followSet[lhs];
	    				for (const a of follow.list() )
	    				{
	    					let cmd: Command;
	    					if (lhs < this.semanticStart)
	    						cmd = Command.createReduce(this.g.productions.indexOf(p));
	    					else
	    						cmd = Command.createAction(lhs-this.semanticStart);		

	    					result[i][a-1].set(cmd.hashCode(),cmd);
	    				}
    				}
    			}
    		}
    	}
    	
		//Print Table
		// //console.log("_______________buildTable_______________");

		// for (let i = 0; i < result.length; i++) {
		// 	for (let j = 0; j < result[i].length; j++) {
		// 	  	//console.log("I: " + i + " | J: " + j);
		// 		result[i][j].forEach(item => //console.log(item.toString()));
		// 	}
		// }

		const resultSet: Set<Command>[][] = result.map(	row => row.map(map => new Set(map.values())));

    	return this.resolveConflicts(resultSet);
    }

	private indexOfListLRItem(list: List<List<LRItem>>, item: List<LRItem>): number
	{

		// TODO Revisar comparador
		let index = 0;
		for(const pivot of list){

			const item1String = pivot.toString();
			const item2String = item.toString();

			if(item1String === item2String){
				return index;
			}
			index++;
		}

		return -1;
	}

}
