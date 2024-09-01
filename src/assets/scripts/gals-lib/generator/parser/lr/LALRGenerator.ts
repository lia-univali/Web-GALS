import { Grammar } from '../../../generator/parser/Grammar'
import { LRItem } from '../lr/LRItem'
import { List } from '../../../DataStructures'
import { LRCanonicGenerator } from '../../parser/lr/LRCanonicGenerator'


export class LALRGenerator extends LRCanonicGenerator
{

  private compress: boolean = false; // TODO Observar comportamento

  public constructor(g: Grammar)
  {
    super(g);
  }

  private core( state: LRItem[]): Set<LRItem>
  {
    const result = new Set<LRItem>();

    for (let i = 0; i < state.length; i++)
    {
      const item = state[i];
      const x = new LRItem(item.production, item.position);

      if (![...result].some(existingItem => existingItem.toString() === x.toString())) { // TODO Observar comportamento
        result.add(x);
      }
    }
    return result;
  }

  protected computeItems(): List<List<LRItem>>
  {
    const items: List<List<LRItem>> = super.computeItems();

    for (let i=0; i<items.size(); i++)
    {
      const state: List<LRItem> =  items.get(i);
      const core = this.core(state.toArray());

      for (let j=i+1; j<items.size(); j++)
      {
        const state2: List<LRItem> = items.get(j);
        const core2 = this.core(state2.toArray());

        if (this.equals(core, core2))
        {
          for (let k=0; k<state2.size(); k++)
          {
            const item: LRItem = state2.get(k);
            if (!state.contains(item))
              state.add(item);
          }
          items.removeByIndex(j);
          j--;
        }
      }
    }

    this.compress = true;
    return items;
  }

  protected goTo(items: List<LRItem>, s: number): List<LRItem>
  {
    const x: List<LRItem> = super.goTo(items, s);

    if (this.compress)
    {
      const core = this.core(x.toArray());

      for (let i=0; i < this.itemList.size(); i++)
      {
        const state: List<LRItem> = this.itemList.get(i);
        if (this.equals(core, this.core(state.toArray())))
          return state;
      }
      //se n achar... n deve acontecer
    }
    return x;
  }


  private equals(set1: Set<LRItem>, set2: Set<LRItem>): boolean {
  if (set1.size !== set2.size) {
    return false;
  }

  for (const item1 of set1) {
    let found = false;
    for (const item2 of set2) {
      if (item1.equals(item2)) {
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }

  return true;
}

}
