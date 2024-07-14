interface IStack<T> {
  push(item: T): void
  pop(): T | undefined
  peek(): T | undefined
  size(): number
}

export class Stack<T> implements IStack<T> {

  private storage: T[] = []

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Stack has reached max capacity, you cannot add more items')
    }
    this.storage.push(item)
  }

  pop(): T | undefined {
    return this.storage.pop()
  }

  get(index: number): T | undefined {
    return this.storage[index]
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1]
  }

  size(): number {
    return this.storage.length
  }

  empty(): boolean{
    return this.storage.length == 0;
  }

  clear() {
    this.storage =[];
  }
}

export class List<T> {
  private items: Array<T>

  constructor(initialCapacity?: number) {
    if (initialCapacity != undefined) this.items = new Array<T>(initialCapacity)
    else this.items = new Array<T>()
  }

  size(): number {
    return this.items.length
  }

  set(i: number, value: T) {
    this.items[i] = value;
  }

  setItems(items: Array<T>){
    this.items = items;
  }

  add(value: T): void {
    this.items.push(value)
  }

  addAll(list: List<T>): void {
    this.items.concat(list.toArray());
  }

  get(index: number): T {
    return this.items[index]
  }

  remove(value: T): boolean {
    const index = this.items.indexOf(value)

    if (index == -1) return false

    this.items.splice(index, 1)

    return true
  }

  removeByIndex(index: number): T {
    const item = this.items[index];
    this.items.splice(index, 1);
    return item
  }

  contains(value: T): boolean {
    //return this.items.indexOf(valueToCheck) !== -1
    return this.items.includes(value)
  }


  indexOf(value: T): number {
    return this.items.indexOf(value)
  }

  toArray(): Array<T> {
    return this.items
  }

  clear() {
    this.items.splice(0, this.items.length)
  }

  toString(): string {

    // let result = "[";

    // if(Array.isArray(this.items[0])){
    
    //   for(let item of this.items){

    //     if(item instanceof List){
    //       result+= item.toString() + ", ";
    //     }
    //   }
    //   result += "]";
    //   return result;
    // }else
    //  return `[${this.items.toString().split(',').join(', ')}]` // Original
      return `[${this.items.toString()}]` // Simplificado
  }

  toJSON() {
    return { values: this.items }
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.items.values()
  }
}

export class OrderedIntegerSet {
  private _elements: Array<number>;

  [Symbol.toStringTag]: string = "OrderedIntegerSet";

  public constructor(data?: OrderedIntegerSet | number) {
    if (data === undefined) {
      this._elements = [];
    } else {
      if (data instanceof OrderedIntegerSet) {
        //        this._elements = data._elements.slice(); // Shallow Copy - apenas "number", então funciona como deep copy neste caso
        this._elements = [...data._elements]; // Spread operator - idem slice()
      } else {
        this._elements = [data];
      }
    }
  }

  public static fromArray(data: Array<number>): OrderedIntegerSet {
    const newObj = new OrderedIntegerSet();
    newObj.addAllArray(data);
    return newObj;
  }

  public clone(): OrderedIntegerSet {
    return new OrderedIntegerSet(this);
  }

  public get size(): number {
    return this._elements.length;
  }

  public isEmpty(): boolean {
    return this._elements.length === 0;
  }

  public add(data: number): boolean {
    // Operação de inserção ordenada
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] == data) {
        // Se o elemento já existe, não insere
        return false; // Inserção não ocorreu
      }

      if (this._elements[i] > data) {
        // Se a posição verificada tiver um número maior, insere nesta posição
        this._elements.splice(i, 0, data);
        return true; // Inserção realizada
      }
    }

    // Se passar por todas as posições e não encontrar nenhum valor maior
    this._elements.push(data); // Insere no final
    return true; // Inserção realizada
  }

  public first(): number {
    if (this._elements.length == 0) {
      return -1; // Não possui 1°
    }

    return this._elements[0]; // Retorna o primeiro elemento
  }

  public contains(data: number): boolean {
    return this._elements.includes(data);
  }

  public has(data: number): boolean {
    // Idem contains. TODO: Padronizar e usar apenas 1, contains ou has
    return this._elements.includes(data);
  }

  public delete(data: number): boolean {
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] === data) {
        this._elements.splice(i, 1);
        return true;
      }
    }

    return false; // Elemento não removido, pois não estava no set
  }

  public clear(): void {
    this._elements.length = 0; // VERIFICAR, pode ser feito: "this._elements.splice(0, this._elements.length);"
  }

  public addAll(data: OrderedIntegerSet): boolean {
    let sizeBefore: number = this._elements.length;
    if (this._elements[this._elements.length - 1] < data._elements[0]) {
      this._elements.push(...data._elements);
      return sizeBefore != this._elements.length;
    }

    // Estratégia de MERGE do MergeSort, mas respeitando a regra de conjunto: não permitir duplicatas
    let i: number = 0;
    let x: number = 0;
    let newArray = [];
    while (i < this._elements.length || x < data._elements.length) {
      if (i == this._elements.length) {
        while (x < data._elements.length) {
          newArray.push(data._elements[x++]);
        }
        break;
      }
      if (x == data._elements.length) {
        while (i < this._elements.length) {
          newArray.push(this._elements[i++]);
        }
        break;
      }

      if (this._elements[i] == data._elements[x]) {
        newArray.push(this._elements[i]);
        i++;
        x++;
      } else {
        if (this._elements[i] < data._elements[x]) {
          newArray.push(this._elements[i++]);
        } else {
          newArray.push(data._elements[x++]);
        }
      }
    }
    this._elements = newArray;
    return sizeBefore != this._elements.length;
  }

  public addAllArray(data: Array<number>): boolean {
    const sizeBefore: number = this._elements.length;
    data.forEach((element) => this.add(element));
    return sizeBefore != this._elements.length;
  }

  // retainAll é a operação de "intersecção" de conjuntos - não usada!
  public intersection(
    data: OrderedIntegerSet,
    inplace: boolean = true
  ): boolean | OrderedIntegerSet {
    const sizeBefore: number = this._elements.length;
    const newArray: Array<number> = [];
    for (const element of data._elements) {
      if (this.contains(element)) {
        newArray.push(element);
      }
    }
    if (inplace) {
      this._elements = newArray;
      return sizeBefore != this._elements.length;
    }
    return OrderedIntegerSet.fromArray(newArray);
  }

  list(): Array<number> {
    return this._elements;
  }

  length(): number {
    return this._elements.length;
  }

  entries(): IterableIterator<[number, number]> {
    return this._elements.entries();
  }

  keys(): IterableIterator<number> {
    return this._elements.keys();
  }

  values(): IterableIterator<number> {
    return this._elements.values();
  }

  equals(otherSet: OrderedIntegerSet): boolean {
    const otherList = otherSet._elements;
    const list = this._elements;

    if (list.length !== otherList.length) return false;

    return list.every((value, index) => value === otherList[index]);
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this._elements.values();
  }

  // Mantida igual
  toJSON() {
    return { values: this._elements };
  }

  // Simplificada
  toString(): string {
    return `(${this._elements.toString()})`;
  }
}

export class IntegerSet {
  private _elements_set: Set<number>
  private _elements: number; // TODO: Passar para Bigint

  [Symbol.toStringTag]: string = 'IntegerSet'

  public constructor(data?: IntegerSet | number) {
    if(data === undefined){
      this._elements = 0
      this._elements_set = new Set<number>()
    }else{
      if (data instanceof IntegerSet) {
        this._elements_set = data.getNumberSet()
        this._elements = data.getNumber()
      }else{ // Number
        this._elements = 0
        this._elements_set = new Set<number>()

        this.add(data);
      }
    }
  }

  public clone(): IntegerSet {
    const obj = new IntegerSet()
    obj._elements = this._elements

    obj._elements_set = this._elements_set

    return obj
  }

  private clearBit(bitPos: number): void {
    let operation = ~this._elements
    let mask = 1
    for (let i = 0; i < bitPos; i++) {
      mask <<= 1
    }
    operation |= mask
    this._elements = ~operation
  }

  private setBit(bitPos: number): void {
    let mask = 1
    for (let i = 0; i < bitPos; i++) {
      mask <<= 1
    }
    this._elements = this._elements | mask
  }

  public getBit(bitPos: number): boolean {
    let operation = this._elements
    for (let i = 0; i < bitPos; i++) {
      operation >>= 1
    }
    return operation & 1 ? true : false
  }

  public get size(): number {
    let operation = this._elements
    let cardinality = 0
    while (operation > 0) {
      const mask = operation & 1
      if (mask == 1) {
        cardinality++
      }
      operation >>= 1
    }
    return cardinality
  }

  public isEmpty(): boolean {
    return this._elements_set.size === 0
  }

  public add(i: number): boolean {
    this._elements_set.add(i)
    const added = !this.getBit(i)
    this.setBit(i)
    return added;
  }

  public first(): number {
    let operation = this._elements
    for (let i = 0; i < 256; i++) {
      const mask = operation & 1
      if (mask == 1) {
        return i
      }
      operation >>= 1
    }
    return -1
  }

  public contains(i: number): boolean {
    // Contains
    return this.getBit(i)
  }

  public has(i: number): boolean {
  // Contains
    return this._elements_set.has(i)
  }

  public delete(i: number): boolean {
    this._elements_set.delete(i)
    const removed = this.getBit(i)
    this.clearBit(i)
    return removed
  }

  public clear(): void {
    this._elements = 0
    this._elements_set.clear()
  }

  public addAll(is: IntegerSet): boolean {
    const cardinality = this.size
    this._elements = this._elements | is._elements

    is._elements_set.forEach((element) => this._elements_set.add(element))

    return cardinality != this.size
  }

  public addAllArray(is: Array<number>): boolean { // TODO: Validar
    const cardinality = this.size
    // this._elements = this._elements | is._elements

    is.forEach((element) => this.add(element))

    return cardinality != this.size
  }

  public retainAll(is: IntegerSet): boolean {
    const cardinality = this.size
    this._elements = this._elements & is._elements

    for (const bit of this._elements_set) {
      if (!is._elements_set.has(bit)) {
        this._elements_set.delete(bit);
      }
    }

    return cardinality != this.size
  }

  public getNumber(): number {
    return this._elements
  }

  public getNumberSet(): Set<number> {
    return this._elements_set
  }

  list(): Array<number> {
    // let aux = [...this._elements_set]
    const aux = Array.from(this._elements_set)
    return aux.sort((a, b) => a - b)
  }

  length(): number {
    return this._elements_set.size
  }


  entries(): IterableIterator<[number, number]> {
    return this.list().entries()
  }

  keys(): IterableIterator<number> {
    return this.list().keys()
  }

  values(): IterableIterator<number> {
    return this.list().values()
  }

  equals(otherSet: IntegerSet): boolean {
    const otherList = otherSet.list();
    const list = this.list();

    if (list.length !== otherList.length) return false;
    
    return list.every((value, index) => value === otherList[index]);
  }

  // forEach(
  //   callbackfn: (value: number, value2: number, set: Set<number>) => void,
  //   thisArg?: any
  // ): void {
  //   for (const element of this.list().values()) {
  //     callbackfn.call(thisArg, element, element, this)
  //   }
  // }

  [Symbol.iterator](): IterableIterator<number> {
    return this.list().values()
  }

  toJSON() {
    return { values: this._elements_set }
  }
  
  toString() : string { return `{${this.list().toString().split(',').join(', ')}}`; }
}

export class TreeNode<T> {

  private _value: T | null;
  private _parent: TreeNode<T> | null;
  private _children: TreeNode<T>[];

  constructor(value?: T, parent?: TreeNode<T>) {
    this._value = (value === undefined? null : value);
    this._parent = (parent === undefined? null : parent);
    this._children = [];
  }

  add(child: TreeNode<T>): TreeNode<T> {
    child.parent = this;
    this._children.push(child);
    return child;
  }

  get value(): T | null {
    return this._value;
  }

  get parent(): TreeNode<T> | null{
    return this._parent;
  }

  get children(): TreeNode<T>[]{
    return this._children;
  }

  set value(value: T | null) {
    this._value = value;
  }

  set parent(parent: TreeNode<T> | null){
    this._parent = parent;
  }

  set children(children: TreeNode<T>[]){
    this._children = children;
  }

  toJSON() {
    return { 
      "value": this.value,
      "children": this.children
    }
  }
}