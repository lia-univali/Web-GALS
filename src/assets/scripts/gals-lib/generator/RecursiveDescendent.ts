import TreeMap from "ts-treemap";
import { Production } from "../util/Production";
import { Grammar } from "./parser/Grammar";


export class FunctionCustom
{
    public input: TreeMap<number, number[]> = new TreeMap();
    public lhs: number;
    
    public constructor(lhs: number)
    {
        this.lhs = lhs; 		
    }
}

export class RecursiveDescendent
{
	private _grammar: Grammar;
	private _llTable: number[][];
	private _symbols: string[];
	
	private _functions: Map<string, FunctionCustom> = new Map();
	
	public constructor(grammar: Grammar) //throws NotLLException
	{
		this._grammar = grammar;
		this._llTable = [] //new LLParser(grammar).generateTable();  TODO: Criar LLParser
		this._symbols = grammar.symbols;
		for (let i=0; i < this._symbols.length; i++)
			if (this._symbols[i].charAt(0) == '<')
                this._symbols[i] = this._symbols[i].substring(1, this._symbols[i].length-1);
				
		this.build();
	}
	
	public getSymbols(s: number): string
	{
		return this._symbols[s];
	}
	
	public getStart(): string
	{
		return this._symbols[this._grammar.startSymbol];
	}
	
	public build(): Map<string, FunctionCustom>
	{
		const prods: Production[] = this._grammar.productions.toArray();
		
		for (let i=0; i<this._llTable.length; i++)
		{
			const t = i+this._grammar.FIRST_NON_TERMINAL;
			
			const f: FunctionCustom = new FunctionCustom(t);			
			this._functions.set(this._symbols[t], f);		
			
			for (let j=0; j<this._llTable[0].length; j++)
			{
				const prod = this._llTable[i][j];
				if (prod >= 0)
				{
					const n = j+1;
					const p: Production = prods[prod];
					const rhs: number[] = p.get_rhs();
					f.input.set(n, rhs);					
				}
			}
		}
		
		return this._functions;
	}
}
