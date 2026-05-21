import { OrderedIntegerSet, List } from "../../../DataStructures";
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

	protected initCaches() {
		/* deliberadamente vazio */
	}

	protected closure(items: List<LRItem>): List<LRItem> {
    	const result = new List<LRItem>();

		result.setItems(items.toArray());

    	for (let i=0; i<result.size(); i++) {
    		const it: LRItem = result.get(i);
    		
    		const p: Production = it.production;
    		if (it.position < p.get_rhs().length)
    		{
	    		const s: number = p.get_rhs()[it.position];
	    		if (this.g.isNonTerminal(s)) {
	    			const bs: OrderedIntegerSet = this.g.productionsFor(s);
	    			for (const iter of bs.list()) {
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
    
	protected goTo(items: List<LRItem>, s: number): List<LRItem> {
    	const result: List<LRItem> = new List<LRItem>();
    	
    	for (const item of items.toArray()) {
				const p: Production = item.production;
				
				if (item.position < p.get_rhs().length) {
					const symb = p.get_rhs()[item.position];
					
					if (symb == s) {
						result.add(new LRItem(item.production, item.position+1));
					}
				}
			}
		
			return this.closure(result);
    }
    
	protected computeItems(): List<List<LRItem>>
    {
        /* s é o estado inicial */
        const s: List<LRItem> = new List()

        const sp: OrderedIntegerSet = this.g.productionsFor(this.g.startSymbol)
        const f: number = sp.first();
        s.add(new LRItem(this.g.productions.get(f), 0))

        /* c é uma lista de estados (?) */
        const c: List<List<LRItem>> = new List()
        c.add(this.closure(s))

        let repeat = true

        while (repeat) {
            start: {

                repeat = false

                /* para estado  */
                for (const items of c.toArray()) {
                    /* para cada item no estado */
                    for (let i = 0; i < items.size(); i++) {

                        const m: LRItem = items.get(i)
                        const p: Production = m.production

                        /* A → a.Xb   len(A) > posição do ponto (implica ! A → aX.b com b != î)*/
                        if (p.get_rhs().length > m.position) {

                            /* T = GOTO(I, X) */
                            const gt: List<LRItem> = this.goTo(items, p.get_rhs()[m.position])

                            /* if T != ø && T ∉ c */
                            if (gt.size() != 0 && !this.containsList(c, gt)) {

                                /* C := C ∪ T */
                                c.add(gt)
                                repeat = true
                                break start

                            }
                        }
                    }
                }
            }
        }

        return c
    }


	private containsList(list: List<List<LRItem>>, item: List<LRItem>): boolean
	{

		// TODO Revisar comparador
		const itemArray = item.toArray();
		for(const pivot of list){


      // Ajustada - melhorar desempenho
			const pivotArray = pivot.toArray()
			if(pivotArray.length !== itemArray.length) {
				continue;
			}

			let contained = true;

			for(let i = 0; i < pivotArray.length; i++) {
				const pivotItem : LRItem = pivotArray[i];
				const it : LRItem = itemArray[i];
				if( !pivotItem.equals(it) ) {
					contained = false;
					break;
				}
			}

			if(contained) return true;

    }

		return false;
	}

    /**
     * Cria a tabale de parse SLR
     * */

	public async buildTable(): Promise<Command[][]>
	{

		const result: Map<number, Command>[][]  = [];

        /*
         * Para cada estado existente do autômato. Criar N entradas na tabela,
         * um para cada símbolo.
         */
    	for (let i=0; i< this.itemList.size(); i++)
    	{
			result[i] = [];
    		for (let j=0; j<this.g.symbols.length-1; j++)
    		{
    			result[i][j] = new Map<number, Command>();
    		}
    	}

    	/* Para cada estado do autômato (tabela) */
    	for (let i=0; i<result.length; i++)
    	{
            /* Estado */
    		const items: List<LRItem> = this.itemList.get(i);

            /* Para cada item deste estado */
    		for (let j=0; j<items.size(); j++)
    		{
                /* Item */
    			const item: LRItem = items.get(j);

    			const p: Production = item.production;
    			const rhs: number[] = p.get_rhs();

                /* A → a.Xb   len(A) > posição do ponto (implica ! A → aX.b com b != î) */
    			if (rhs.length > item.position)
    			{
    				const s: number = rhs[item.position];
    				const next: List<LRItem> = this.goTo(items, s);

                    /*
                     * 1. Se o estado `s` contiver um item da forma A → α.Xβ onde X é um
                     * terminal, e X for a marca seguinte na cadeia de entrada, então a ação
                     * é carregar a maca de entrada corrente para a pilha, e o novo estado a
                     * ser colocado na pilha é o estado que contém o item A → αX.β.
                     *
                     * C. Lounden, Kenneth. Compiladores: princípios e práticas. 1ed. ISBN: 85-221-0422-0
                     */
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
                        /*
                         * 2. Se o estado `s` contiver o item completo A → γ·, e a marca seguinte
                         * na cadeia de entrada estiver em FOLLOW(A), então a ação é reduzir pela
                         * regra A → γ· Uma redução pela regra S' → S, onde S é o estado inicial,
                         * é equivalente a aceitaçã; isso ocorrerá apenas se a marca de entrada
                         * seguinte for $. Em todos os outros casos, o novo estado é computado da
                         * maneira descrita a seguir.
                         *
                         * Remova a cadeia γ e todos os estados correspondentes da pilha de análise
                         * sintática. De forma correspondente, retorne no DFA para o estado do início
                         * da construção de γ. Por construção, esse estado deve conter um item da forma
                         * B → α·Bβ. Coloque A na pilha, e também coloque o estado que contém o item
                         * B → αB·β.
                         *
                         * C. Lounden, Kenneth. Compiladores: princípios e práticas. 1ed. ISBN: 85-221-0422-0
                         */
						const follow: OrderedIntegerSet = this.g.followSet[lhs];
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

		const resultSet: Set<Command>[][] = result.map(	row => row.map(map => new Set(map.values())));

    	return await this.resolveConflicts(resultSet);
    }

	private indexOfListLRItem(list: List<List<LRItem>>, item: List<LRItem>): number
	{
        // TODO Revisar comparador
        const itemArray = item.toArray()
        for (let i = 0; i < list.size(); i++) {

            // Ajustada - melhorar desempenho
            const pivotArray = list.get(i).toArray();
            if (pivotArray.length !== itemArray.length) {
                continue;
            }

            let contained = true

            for (let x = 0; x < pivotArray.length; x++) {
                const pivotItem: LRItem = pivotArray[x]
                const it: LRItem = itemArray[x]
                if (!pivotItem.equals(it)) {
                    contained = false
                    break
                }
            }

            if (contained) return i;
        }

        return -1
    }

}
