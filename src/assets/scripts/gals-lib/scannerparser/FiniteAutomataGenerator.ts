import { SemanticError} from '../analyser/SystemErros'
import { Node, MetaData } from './Node'
import { OrderedIntegerSet, List } from '../DataStructures'
import { FiniteAutomata, KeyValuePar } from '../generator/FiniteAutomata'
import { CHAR, CLOSURE, CLOSURE_OB, OPTIONAL, UNION } from './Constants'
import TreeMap from 'ts-treemap'
import HashMap from 'hashmap'

/* 
    Modifications:
    - constructor receives option for case scannerCaseSensitive via paramters
    - On Map put converted to set
    - Set addAll changed to for each
*/

export class FiniteAutomataGenerator {
  private _definitions: HashMap<string, Node> = new HashMap<string, Node>()
  private _expressions: HashMap<string, Node> = new HashMap<string, Node>()
  private _specialCases: HashMap<number, Map<string, number>> = new HashMap<
    number,
    Map<string, number>
  >()
  private _root: Node | null = null
  //private _alphabet : Set<number> = new Set<number>;
  private _alphabet: OrderedIntegerSet = new OrderedIntegerSet()
  private _lastPosition: number = -1
  private _tokenList: List<string> = new List<string>()
  private _sensitive: boolean = true
  private _contextCount: number = 0

  private _next: OrderedIntegerSet[] = [new OrderedIntegerSet()]
  //private _next : OrderedIntegerSet = new OrderedIntegerSet;
  private _nodes: Node[] = []

  constructor(scannerCaseSensitive: boolean) {
    this._sensitive = scannerCaseSensitive
  }

  public addDefinition(id: string, root: Node) {
    // throws SemanticError

    if (this._definitions.has(id)) {
      throw new SemanticError('Definição repetida: ' + id)
    }

    this._definitions.set(id, root)

    this._alphabet.addAll(root.alphabet)
  }

  public getDefinitionById(id: string): Node | undefined {
    return this._definitions.get(id)
  }

  public addExpression(id: string, root: Node, backtrack: boolean) {
    //throws SemanticError

    /*
            if (tokenList.contains(id))

                throw new SemanticError("Token '"+id+"' já definido");
		*/

    // root.alphabet.forEach(element => {
    //     this._alphabet.add(element);
    // });
    this._alphabet.addAll(root.alphabet)

    if (!this._tokenList.contains(id)) {
      this._tokenList.add(id)
    }

    const pos: number = this._tokenList.indexOf(id)

    const end: Node = Node.createEndNode(pos + 2, backtrack)

    root = Node.createConcatNode(root, end)

    let context: Node | null | undefined = root.left?.right // TODO Test results on the if above

    if (context != null) {
      context = context.deepestLeft()

      if (context != null && context.context >= 0) {
        this._contextCount++
        context.context = this._contextCount
        end.context = this._contextCount
      }
    }

    this._expressions.set(id, root)

    if (this._root == null) this._root = root
    else {
      this._root = Node.createUnionNode(this._root, root)
    }

    // if(context != null && context != undefined){

    //     context = context.deepestLeft();

    //     if(context != null &&  context.context >= 0){
    //         this._contextCount++;
    //         context.context = this._contextCount;
    //         end.context = this._contextCount;
    //     }

    //     this._expressions.set(id, root);

    //     if(this._root == null){
    //         this._root = root;
    //     }
    //     else{
    //         this._root = Node.createUnionNode(this._root, root);
    //     }
    // }
  }

  public addIgnore(root: Node, backtrack: boolean) {
    this._alphabet.addAll(root.alphabet)

    const end: Node = Node.createEndNode(0, backtrack)
    root = Node.createConcatNode(root, end)

    if (this._root == null) {
      this._root = root
    } else {
      this._root = Node.createUnionNode(this._root, root)
    }
  }

  public addSpecialCase(id: string, base: string, value: string) {
    //throws SemanticError

    if (!this._sensitive) {
      value = value.toLocaleUpperCase()
    }

    if (!this._expressions.has(base)) {
      throw new SemanticError("Token '" + base + "' não definido")
    }

    const b: number = this._tokenList.indexOf(base) + 2

    if (this._tokenList.contains(id)) {
      throw new SemanticError("Token '" + id + "' já definido")
    }

    const i: number = this._tokenList.size() + 2 //TODO verify changes

    let s: Map<string, number> | undefined = this._specialCases.get(b)

    if (s == undefined) {
      s = new TreeMap<string, number>()
      this._specialCases.set(b, s)
    } else if (s.get(value) != undefined) {
      throw new SemanticError(
        "Já houve a definição de um caso especial de '" + base + '\' com o valor"' + value + '"'
      )
    }

    s.set(value, i)

    this._tokenList.add(id)
  }

  public generateAutomata(): FiniteAutomata | null {
    // TODO throws SemanticError

    const states: List<OrderedIntegerSet> = new List<OrderedIntegerSet>()

    const context: Map<number, number> = new TreeMap<number, number>()

    const ctxMap: Map<number, number> = new TreeMap<number, number>()

    const trans: Map<number, Map<string, number>> = new TreeMap<number, Map<string, number>>()

    const finals: Map<number, number> = new TreeMap<number, number>()

    const back: Map<number, boolean> = new TreeMap<number, boolean>()

    if (this._root == null) {
      throw new SemanticError(
        'A Especificação Léxica deve conter a definição de pelo menos um Token'
      )
    }

    this.computeNext()

    states.add(this._root.metaData.first)

    for (let i = 0; i < states.size(); i++) {
      const T = states.get(i)

      for (const x of this._alphabet) {
        const c: string = String.fromCharCode(x)

        //let U: Set<number> = new Set<number>;
        const U: OrderedIntegerSet = new OrderedIntegerSet()

        for (const p of T) {
          const n: Node = this._nodes[p]

          if (n.end >= 0) {
            const intern: number = i

            if (!finals.has(intern)) {
              finals.set(intern, n.end)
              back.set(intern, n.backtrack)

              if (n.context > 0) {
                if (!context.has(intern)) {
                  const resut: number | undefined = ctxMap.get(n.context)

                  //TODO DEBUG: Comportamento
                  if (resut != undefined) {
                    context.set(intern, resut)
                  } else {
                    context.set(intern, 0)
                  }
                }
              }
            }
          }

          if (n.context >= 0) {
            if (!ctxMap.has(n.context)) {
              ctxMap.set(n.context, i)
            }
          }

          if (n.alphabet.has(c.charCodeAt(0))) {
            ////console.log("Letra Comparada: " + c)
            //this._next[p].forEach(element    => U.add(element));
            U.addAll(this._next[p])
          }
        }

        let pos: number = -1
        if (!U.isEmpty()) {
          //pos = states.indexOf(U);

          pos = this.getPositionStates(states, U)

          if (pos == -1) {
            states.add(U)
            pos = states.size() - 1
          }
        }

        if (!trans.has(i)) {
          trans.set(i, new Map<string, number>())
          //trans.set(i, new TreeMap<string, number>())
        }
        if (pos != -1) {
          const transPivot = trans.get(i)

          if (transPivot == null) return null

          transPivot.set(c, pos)
        }
      }
    }

    return this.makeAtomata(states, trans, finals, back, context)
  }

  public makeAtomata(
    states: List<OrderedIntegerSet>,
    trans: Map<number, Map<string, number>>,
    finals: Map<number, number>,
    back: Map<number, boolean>,
    context: Map<number, number>
  ): FiniteAutomata {
    //throws SemanticError

    const transitions: List<Map<string, number>> = new List()

    for (const t of trans) {
      transitions.add(t[1])
    }

    const fin: number[] = []
    fin.length = states.size() // similar int[] fin = new int[states.size()];

    for (let i = 0; i < fin.length; i++) {
      // verify if length does the same
      const expr: number | undefined = finals.get(i)

      if (expr != undefined) fin[i] = expr
      else fin[i] = -1
    }

    for (let i = 0; i < fin.length; i++) {
      const b: boolean | undefined = back.get(i)

      if (b != undefined && b == false) {
        const pre: Set<number> = this.computPrecedersOf(i, transitions)

        pre.forEach((state) => {
          if (fin[state] < 0) fin[state] = -2
        })
      }
    }

    const scList: Array<KeyValuePar> = [];

    //TODO Verify What it does
    //let scIndexes: number[][] =  Array.from({length: (this._tokenList.size() + 2)}, () => Array.from({length: 10}));
    const scIndexes: number[][] = Array(this._tokenList.size() + 2).fill(undefined)

    for (let i = 0; i < scIndexes.length; i++) {
      const m: Map<string, number> | undefined = this._specialCases.get(i)

      const start: number = scList.length

      if (m != undefined) {

        const entriesArray = new Map([...m.entries()].sort());

        for (const [key, value] of entriesArray.entries()) {
          scList.push(new KeyValuePar(key, value))
        }   
      }

      
      const end: number = scList.length

      scIndexes[i] = [start, end]
    }

    const clone = Object.assign([], scList)
    let sc: KeyValuePar[] = Object.setPrototypeOf(clone, KeyValuePar.prototype)
    //sc = cloneDeep(scList.toArray())//this one is the older clone

    const cont: number[][] = Array.from({ length: states.size() }, () => Array.from({ length: 2 }))

    for (let i = 0; i < cont.length; i++) {
      cont[i][0] = 0
      cont[i][1] = -1
    }

    for (const [key, value] of context.entries()) {
      cont[value][0] = 1

      cont[key][1] = value
    }

    return new FiniteAutomata(
      this._alphabet,
      transitions,
      fin,
      scIndexes,
      sc,
      cont,
      this._tokenList,
      this._sensitive
    )
  }

  private getPositionStates(states: List<OrderedIntegerSet>, setParam: OrderedIntegerSet): number {
    let pos = 0
    for (const set of states) {
      const setOrdered: Array<number> = set.list()
      const setParamOrdered: Array<number> = setParam.list()

      const equal: boolean =
        setOrdered.length === setParamOrdered.length &&
        setOrdered.every((element, index) => element === setParamOrdered[index])

      //if(set.getNumber() == setParam.getNumber()) return pos;

      if (equal) return pos

      pos++
    }

    return -1
  }

  private computPrecedersOf(state: number, transitions: List<Map<string, number>>): Set<number> {
    const result: Set<number> = new Set<number>()

    result.add(state)

    let contin: boolean

    do {
      contin = false

      for (const st of result)
        gathering: {
          for (let i = 0; i < transitions.size(); i++) {
            for (const next of transitions.get(i).values()) {
              if (result.has(next) && next == st) {
                if (!result.has(i)) {
                  result.add(i)

                  contin = true

                  break gathering
                }
              }
            }
          }
        }
    } while (contin)

    return result
  }

  // public computeNext(root?: Node | null){

  //     if(root == undefined){
  //         this.computeNextFromNone();
  //     }
  //     else{
  //         this.computeNextFromNode(root);
  //     }
  // }

  private computeNext() {
    // is computeNext() in Java

    this.computeMetaData(this._root)

    this._next = new Array(this._lastPosition + 1)

    this._nodes = new Array(this._lastPosition + 1)

    for (let i = 0; i < this._lastPosition + 1; i++) {
      this._next[i] = new OrderedIntegerSet()
    }

    this.computeNextNode(this._root)
  }

  private computeNextNode(root: Node | null) {
    if (root === null) {
      throw Error('error')
    }

    let leftNode: Node | null

    switch (root.id) {
      case -1: //concat
        leftNode = root.left

        if (leftNode != null) {
          for (const i of leftNode.metaData.last) {
            //leftNode.metaData.first.forEach(item => this._next[i].add(item));

            if (root.right == null) throw new Error('Node direita vazio')

            this._next[i].addAll(root.right.metaData.first)
          }
        }
        break

      case CLOSURE:
      case CLOSURE_OB:
        // leftNode = root.left;

        // if(leftNode != null){
        //     for (let i of leftNode.metaData.last) {

        //         let rightNode: Node | null = root.right;

        //         if(rightNode != null){
        //             rightNode.metaData.first.forEach(item => this._next[i].add(item));
        //         }
        //     }
        // }

        if (root.left == null) throw new Error('Node direita vazio')

        for (const i of root.left.metaData.last) {
          this._next[i].addAll(root.left.metaData.first)
        }

        break

      case CHAR:
        this._nodes[root.metaData.position] = root
        break
      default:
        break
    }

    if (root.left != null) this.computeNextNode(root.left)

    if (root.right != null) this.computeNextNode(root.right)
  }

  private computeMetaData(root: Node | null) {
    if (root == null) return

    if (root.left != null) {
      this.computeMetaData(root.left)
    }

    if (root.right != null) {
      this.computeMetaData(root.right)
    }

    const n: MetaData = root.metaData

    const l: Node | null = root.left

    const r: Node | null = root.right

    switch (root.id) {
      case CHAR:
        this._lastPosition++

        n.position = this._lastPosition
        n.nullable = false
        n.first.add(this._lastPosition)
        n.last.add(this._lastPosition)

        break

      case OPTIONAL:
      case CLOSURE:
        n.nullable = true

        if (l != null) {
          l.metaData.first.list().forEach((item) => n.first.add(item))
          l.metaData.last.list().forEach((item) => n.last.add(item))
        }

        break

      case CLOSURE_OB:
        n.nullable = false

        if (l != null) {
          l.metaData.first.list().forEach((item) => n.first.add(item))
          l.metaData.last.list().forEach((item) => n.last.add(item))
        }

        break

      case UNION:
        if (l == null || r == null) return

        n.nullable = l.metaData.nullable || r.metaData.nullable

        l.metaData.first.list().forEach((item) => n.first.add(item))
        r.metaData.first.list().forEach((item) => n.first.add(item))

        l.metaData.last.list().forEach((item) => n.last.add(item))
        r.metaData.last.list().forEach((item) => n.last.add(item))

        break

      case -1:
        if (l == null || r == null) return

        n.nullable = l.metaData.nullable && r.metaData.nullable

        l.metaData.first.list().forEach((item) => n.first.add(item))

        if (l.metaData.nullable) {
          r.metaData.first.list().forEach((item) => n.first.add(item))
        }

        r.metaData.last.list().forEach((item) => n.last.add(item))

        if (r.metaData.nullable) {
          l.metaData.last.list().forEach((item) => n.last.add(item))
        }

        break

      default:
        break
    }
  }

  //TODO toString
}
