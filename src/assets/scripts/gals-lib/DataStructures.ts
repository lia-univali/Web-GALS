
interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}  

export class Stack<T> implements IStack<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Stack has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
  
    pop(): T | undefined {
      return this.storage.pop();
    }
  
    peek(): T | undefined {
      return this.storage[this.size() - 1];
    }
  
    size(): number {
      return this.storage.length;
    }
}

export class List<T> {
    
    private items: Array<T>;

    constructor(initialCapacity?: number ) {
        if(initialCapacity != undefined)
            this.items = new Array<T>(5);
        else
            this.items = new Array<T>;
    }  

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }

    remove(value: T): boolean {

      let index = this.items.indexOf(value);

      if(index == -1) return false;

      this.items.splice(index, 1);
      
      return true;
    }

    contains(value: T): boolean{
        return this.items.includes(value);
    }

    indexOf(value: T): number{
        return this.items.indexOf(value);
    }

    toArray(): Array<T>{
        return this.items;
    }

    clear(){
       this.items.splice(0,this.items.length);
    }

    toString() : string{
        return JSON.stringify(this);
    }

    [Symbol.iterator](): IterableIterator<T> {
      return this.items.values();
    }
}

export class IntegerSet {

    private _elements_set: Set<number>;
    private _elements: number;
  
    [Symbol.toStringTag]: string = 'IntegerSet';

    public constructor(data?: IntegerSet) {

        if(data instanceof IntegerSet){
          this._elements_set = data.getNumberSet();
          this._elements = data.getNumber();
          return;
        }
  
        this._elements = 0;
        this._elements_set = new Set<number>;
    }
  
    public clone(): IntegerSet {
      const obj = new IntegerSet();
      obj._elements = this._elements;

      obj._elements_set = this._elements_set;

      return obj;
    }
  
    private clearBit(bitPos: number): void {
      let operation = ~this._elements;
      let mask = 1;
      for (let i = 0; i < bitPos; i++) {
        mask <<= 1;
      }
      operation |= mask;
      this._elements = ~operation;
    }
  
    private setBit(bitPos: number): void {
      let mask = 1;
      for (let i = 0; i < bitPos; i++) {
        mask <<= 1;
      }
      this._elements = this._elements | mask;
    }
  
    private getBit(bitPos: number): boolean {
      let operation = this._elements;
      for (let i = 0; i < bitPos; i++) {
        operation >>= 1;
      }
      return operation & 1 ? true : false;
    }
  
    public get size(): number {
      let operation = this._elements;
      let cardinality = 0;
      while (operation > 0) {
        let mask = operation & 1;
        if (mask == 1) {
          cardinality++;
        }
        operation >>= 1;
      }
      return cardinality;
    }

    public isEmpty(): boolean{
        return this._elements_set.size === 0;
    }

    public add(i: number): this {
        this._elements_set.add(i);
      let added = !this.getBit(i);
      this.setBit(i);
      return this;
    }
  
    public first(): number {
      let operation = this._elements;
      for (let i = 0; i < 256; i++) {
        let mask = operation & 1;
        if (mask == 1) {
          return i;
        }
        operation >>= 1;
      }
      return -1;
    }
  
    public contains(i: number): boolean { // Contains
      return this.getBit(i);
    }

    public has(i: number): boolean { // Contains
        return this._elements_set.has(i);
    }
  
    public delete(i: number): boolean {
        this._elements_set.delete(i);
      let removed = this.getBit(i);
      this.clearBit(i);
      return removed;
    }
  
    public clear(): void {
      this._elements = 0;
      this._elements_set.clear();
    }
  
    public addAll(is: IntegerSet): boolean {
      let cardinality = this.size;
      this._elements = this._elements | is._elements;

      is._elements_set.forEach(element => this._elements_set.add(element));

      return cardinality != this.size;
    }
  
    public retainAll(is: IntegerSet): boolean {
      let cardinality = this.size;
      this._elements = this._elements & is._elements;
      return cardinality != this.size;
    }
  
    public getNumber(): number {
      return this._elements;
    }

    public getNumberSet(): Set<number> {
        return this._elements_set;
    }

    list(): Array<number>{
        // let aux = [...this._elements_set]
        let aux = Array.from(this._elements_set);
        return aux.sort((a, b) => a - b);
    }

    entries(): IterableIterator<[number, number]> {
        return this.list().entries();
    }

    keys(): IterableIterator<number> {
        return this.list().keys();
    }

    values(): IterableIterator<number> {
        return this.list().values();
    }

    forEach(callbackfn: (value: number, value2: number, set: Set<number>) => void, thisArg?: any): void {
        for (const element of this.list().values()) {
            callbackfn.call(thisArg, element, element, this);
        }
    }
    
    [Symbol.iterator](): IterableIterator<number> {
        return this.list().values();
    }

}