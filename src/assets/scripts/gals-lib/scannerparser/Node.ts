import { OrderedIntegerSet } from '../DataStructures'
import { CHAR, CLOSURE, CLOSURE_OB, OPTIONAL, UNION } from './Constants'

export class MetaData {
  public position: number = -1

  public nullable: boolean = false

  public first: OrderedIntegerSet = new OrderedIntegerSet()

  public last: OrderedIntegerSet = new OrderedIntegerSet()
}

/* 
    Finished

    Modifications:
    - Just one constructor
    - StringBuffer converted to plain String
*/

export class Node {
  private _left: Node | null
  private _right: Node | null
  private _id: number = 0
  private _value: string = ''
  private _backtrack: boolean = true
  private _context: number = -1
  private _end: number = -1

  private _alphabet: OrderedIntegerSet = new OrderedIntegerSet()

  private _metaData: MetaData = new MetaData() // TODO

  constructor(id: number, left: Node | null, right: Node | null) {
    this._id = id

    this._left = left

    this._right = right

    if (left != null) this.alphabet.addAll(left.alphabet)

    if (right != null) this.alphabet.addAll(right.alphabet)

    // if (left != null){
    //     for(let value of left.alphabet){
    //         this._alphabet.add(value);
    //     }
    // }

    // if (right != null){
    //     for(let value of right.alphabet){
    //         this._alphabet.add(value);
    //     }
    // }
  }

  //Metods
  public deepestLeft(): Node | null {
    let node: Node = this

    while (true) {
      let nodePivo: Node | null = node.left

      if (nodePivo == null) {
        nodePivo = node.right
      }

      if (nodePivo == null) {
        break
      } else {
        node = nodePivo
      }
    }
    return node
  }

  public static createUnionNode(node1: Node, node2: Node): Node | null {
    const newNode: Node = new Node(UNION, node1, node2)

    newNode.value = '|'

    return newNode
  }

  public static createConcatNode(node1: Node, node2: Node): Node {
    const newNode: Node = new Node(-1, node1, node2)

    newNode.value = '&'

    return newNode
  }

  public static createContextNode(node1: Node, node2: Node): Node | null {
    /*
		Node x = new Node(CHAR);

		x.value = ""+(char)0;

		x.context = true;

		x.alphabet.set(0);


		Node nc2 = new Node(-1, x, n2);

		nc2.value = "&";


		Node nc1 = new Node(-1, n1, nc2);

		nc1.value = "&";

			
		return nc1;
		*/

    const pivotNode: Node | null = node2.deepestLeft()

    if (pivotNode == null) return null

    pivotNode.context = 0

    const newNode: Node = new Node(-1, node1, node2)

    newNode.value = '&'

    return newNode
  }

  public static createClosureNode(node: Node): Node {
    const newNode: Node = new Node(CLOSURE, node, null)

    newNode.value = '*'

    return newNode
  }

  public static createClosureObNode(node: Node): Node {
    const newNode: Node = new Node(CLOSURE_OB, node, null)

    newNode.value = '+'

    return newNode
  }

  public static createOptionalNode(node: Node): Node {
    const newNode: Node = new Node(OPTIONAL, node, null)

    newNode.value = '?'

    return newNode
  }

  public static createIntervalNode(char1: string, char2: string): Node {
    const newNode: Node = new Node(CHAR, null, null)

    for (let index = char1.charCodeAt(0); index <= char2.charCodeAt(0); index++) {
      newNode.alphabet.add(index)
    }

    let bfr = '['

    for (const value of newNode.alphabet) {
      bfr += String.fromCharCode(value)
    }

    bfr += ']'

    newNode.value = bfr

    return newNode
  }

  public static createComplementNode(node: Node): Node {
    const newNode: Node = new Node(CHAR, null, null)

    if (!node.alphabet.has('\t'.charCodeAt(0))) {
      newNode.alphabet.add('\t'.charCodeAt(0))
    }

    if (!node.alphabet.has('\n'.charCodeAt(0))) newNode.alphabet.add('\n'.charCodeAt(0))

    if (!node.alphabet.has('\r'.charCodeAt(0))) newNode.alphabet.add('\r'.charCodeAt(0))

    if (!node.alphabet.has(' '.charCodeAt(0))) newNode.alphabet.add(' '.charCodeAt(0))

    for (let c = 32; c <= 126; c++) {
      if (!node.alphabet.has(c)) newNode.alphabet.add(c)
    }

    for (let c = 161; c <= 255; c++) {
      if (!node.alphabet.has(c)) newNode.alphabet.add(c)
    }

    let bfr = '['

    for (const value of newNode.alphabet) {
      bfr += String.fromCharCode(value)
    }

    bfr += ']'

    newNode.value = bfr

    return newNode
  }

  public static createCharNode(char: string): Node {
    const newNode: Node = new Node(CHAR, null, null)

    newNode.value = char

    newNode.alphabet.add(char.charCodeAt(0))

    return newNode
  }

  public static createAllNode(): Node {
    const newNode: Node = new Node(CHAR, null, null)

    newNode.alphabet.add('\t'.charCodeAt(0))

    //newNode.alphabet.set('\n'.charCodeAt(0));

    //newNode.alphabet.set('\r'.charCodeAt(0));

    for (let c = 32; c <= 126; c++) {
      newNode.alphabet.add(c)
    }

    for (let c = 161; c <= 255; c++) {
      newNode.alphabet.add(c)
    }

    let bfr = '['

    newNode.alphabet.list().forEach((value) => {
      bfr += String.fromCharCode(value)
    })

    bfr += ']'

    newNode.value = bfr

    return newNode
  }

  public static createEndNode(tokenId: number, back: boolean): Node {
    const newNode: Node = new Node(CHAR, null, null)

    newNode.end = tokenId
    newNode.backtrack = back
    newNode.value = '#' + newNode.end // TODO Verify behavior

    return newNode
  }

  public clone(): Node {
    // TODO add Try catch as the source code

    const newNode: Node = structuredClone(this)
    newNode.alphabet = new OrderedIntegerSet(this._alphabet)
    newNode.metaData = new MetaData()
    newNode.backtrack = true
    newNode.context = -1
    newNode.end = -1

    if (this._left != null) {
      newNode.left = this._left.clone()
    }
    if (this._right != null) {
      newNode.right = this._right.clone()
    }

    return newNode
  }

  //Getter & Setter
  public get left(): Node | null {
    return this._left
  }

  public set left(value: Node | null) {
    this._left = value
  }

  public get right(): Node | null {
    return this._right
  }
  public set right(value: Node | null) {
    this._right = value
  }

  public get id(): number {
    return this._id
  }
  public set id(value: number) {
    this._id = value
  }

  public get value(): string {
    return this._value
  }
  public set value(valueNew: string) {
    this._value = valueNew
  }

  public doBacktrack(): boolean {
    return this._backtrack
  }

  public set backtrack(value: boolean) {
    this._backtrack = value
  }

  public get backtrack(): boolean {
    return this._backtrack
  }

  public get context(): number {
    return this._context
  }
  public set context(value: number) {
    this._context = value
  }

  public get end(): number {
    return this._end
  }
  public set end(value: number) {
    this._end = value
  }

  public get alphabet(): OrderedIntegerSet {
    return this._alphabet
  }
  public set alphabet(value: OrderedIntegerSet) {
    this._alphabet = value
  }

  public get metaData(): MetaData {
    return this._metaData
  }
  public set metaData(value: MetaData) {
    this._metaData = value
  }

  //To String
  public toString(): string {
    return String(0)
  }

  public toStringLevel(level: number): string {
    let bfr = ''

    for (let i = 0; i < level - 2; i++) {
      bfr += ' '
    }

    if (level > 2) {
      bfr += '\\-'
    }

    bfr += 'value\n'

    if (this._left != null) {
      bfr += String(this._left?.toStringLevel(level + 2))
    }

    if (this._right != null) {
      bfr += String(this._right?.toStringLevel(level + 2))
    }

    return bfr
  }
}
