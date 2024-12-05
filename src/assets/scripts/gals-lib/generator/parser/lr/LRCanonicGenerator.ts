import { LRGenerator } from '../../../generator/parser/lr/LRGenerator'
import { Grammar } from '../../../generator/parser/Grammar'
import { LRItem } from '../../../generator/parser/lr/LRItem'
import { Production } from '../../../util/Production'
import { OrderedIntegerSet, List } from '../../../DataStructures'
import { Command } from './../lr/Command'


export class LRCanonicGenerator extends LRGenerator
{

  constructor(g: Grammar)
  {
    super(g);
  }

  protected  closure(items:  List<LRItem>): List<LRItem> {
    let added: boolean = false;

    const itemsArray: LRItem[] = items.toArray();

    do
      start:
      {
        added = false;
        for (const item of items) {

          const p: Production = item.production;
          if (item.position < p.get_rhs().length)
          {
            const B: number = p.get_rhs()[item.position];
            if (this.g.isNonTerminal(B))
            {
              const prods: OrderedIntegerSet = this.g.productionsFor(B);
              for (const bsi of prods.list()){
                const p2: Production = this.g.productions.get(bsi);
                const tmp: number[] = [];
                for (let i=item.position + 1; i<p.get_rhs().length; i++){
                  tmp.push(p.get_rhs()[i]);
                }
                tmp.push(item.lookahead);
                const first: OrderedIntegerSet = this.g.first(tmp);
                for (const bsi2 of first.list()) {
                  const ni: LRItem = new LRItem(p2, 0, bsi2);
                  if (!this.contains(itemsArray, ni))
                  {
                    itemsArray.push(ni);
                    added = true;
                    break start;
                  }
                }
              }
            }
          }
        }
      }
    while (added);

    items.setItems(itemsArray);

    return items;
  }

  protected goTo(items: List<LRItem>, s: number): List<LRItem>
  {
    const result: LRItem[] =  [];

    for (const item of items.toArray())
    {
      const p: Production = item.production;

      if (item.position < p.get_rhs().length)
      {
        const symb: number = p.get_rhs()[item.position];

        if (symb == s)
        {
          result.push(new LRItem(item.production, item.position+1, item.lookahead));
        }
      }
    }

    const resultList = new List<LRItem>();
    resultList.setItems(result)

    return this.closure(resultList);
  }

  protected computeItems(): List<List<LRItem>>
  {
    const s: List<LRItem> = new List();
    const sp: OrderedIntegerSet = this.g.productionsFor(this.g.startSymbol);
    const f: number =  sp.list()[0]; // int f = new BitSetIterator(sp).nextInt();

    s.add(new LRItem(this.g.productions.get(f), 0, Grammar.DOLLAR));
    const c: List<List<LRItem>> = new List();
    c.add(this.closure(s));

    let repeat = true;

    while (repeat)
    {
      start:
      {
        repeat = false;

        for (const items of c.toArray())
        {
          // List items = (List) it.next();

          for (let i=0; i<items.size(); i++)
          {
            const m: LRItem = items.get(i);

            const p: Production = m.production;
            if (p.get_rhs().length > m.position)
            {
              const gt: List<LRItem> = this.goTo(items, p.get_rhs()[m.position]);
              if (gt.size() != 0 && ! this.containsList(c, gt))
              {
                c.add(gt);
                repeat = true;
                break start;
              }
            }
          }
        }
      }
    }
    return c;
  }

	protected contains(list: Array<LRItem>, item: LRItem): boolean
	{
		for(const pivot of list){
			if(item.equals(pivot))
				return true;
		}

		return false;
	}

	protected containsList(list: List<List<LRItem>>, item: List<LRItem>): boolean
	{

		// TODO Revisar comparador
		const itemArray = item.toArray();
		for(const pivot of list){
      // Com String - implementação inicial
			/*
      const item1String = pivot.toString()
      const item2String = item.toString()
      if (item1String === item2String) {
        return true
      }
			*/
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


  /* (non-Javadoc)
   * @see gesser.gals.generator.parser.lr.LRGenerator#buildTable()
   */
  public buildTable(): Command[][] {
    // Command[][] result = new Command[itemList.size()][g.getSymbols().length-1]; // Estava no Java
    // Set[][] result = new Set[itemList.size()][g.getSymbols().length-1];

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
            const cmd = Command.createShift(this.getIndexFromList(this.itemList, next));
            result[i][s-1].set( cmd.hashCode(), cmd);
          }
          else //nonTerminal
          {
            const cmd = Command.createGoTo((this.getIndexFromList(this.itemList, next)))
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
            const a: number = item.lookahead;
            let cmd: Command;
            if (lhs < this.semanticStart)
              cmd = Command.createReduce(this.g.productions.indexOf(p));
            else
              cmd = Command.createAction(lhs-this.semanticStart);

            result[i][a-1].set(cmd.hashCode(), cmd);
          }
        }
      }
    }

    const resultSet: Set<Command>[][] = result.map(	row => row.map(map => new Set(map.values())));

    return this.resolveConflicts(resultSet);
  }

}
