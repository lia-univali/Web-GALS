import { List, Stack, TreeNode } from "../DataStructures";
import { SyntaticError } from "../analyser/SystemErros";
import { Token } from "../analyser/Token";
import { Grammar } from "../generator/parser/Grammar";
import { LLParser } from "../generator/parser/ll/LLParser";
import { Production } from "../util/Production";
import type { BasicScanner } from "./BasicScanner";

export class LL1ParserSimulator
{
	public static EPSILON = 0;
    public static DOLLAR = 1;
    public static FIRST_TERMINAL = 2;
    public FIRST_NON_TERMINAL: number;
    public FIRST_SEMANTIC_ACTION: number;
    public LAST_SEMANTIC_ACTION: number;
	
    public START_SYMBOL = 0;
    
    private grammar: Grammar;
	private scanner: BasicScanner | null = null;	
	
	private table: number[][];
	private productions: number[][];	
	
	private stack: Stack<number> = new Stack();
	private currentToken: Token | null = null;
	
	public symb: string[];
	public node: TreeNode<string> = new TreeNode(); //TODO Find initializer

    public nodeCount: Stack<any> = new Stack();
	
	public constructor(parser: LLParser) 
	{

		this.grammar = parser.getGrammar() || (() => { throw new Error('Grammar is undefined'); })();;
		this.table = parser.generateTable();
		this.FIRST_NON_TERMINAL = this.grammar.FIRST_NON_TERMINAL;
		this.FIRST_SEMANTIC_ACTION = this.grammar.FIRST_SEMANTIC_ACTION();
		this.LAST_SEMANTIC_ACTION = this.grammar.LAST_SEMANTIC_ACTION();
		this.START_SYMBOL = this.grammar.startSymbol;
		
		const p: List<Production> = this.grammar.productions;
		this.productions = [];
		for (let i=0; i< p.size(); i++)
		{
			const rhs: number[] = p.get(i).get_rhs();
			if (rhs.length > 0)
			{
				this.productions[i] = [];
				for (let j=0; j<rhs.length; j++)
					this.productions[i][j] = rhs[j];
			}
			else
                this.productions[i] = [0];

		}
		
		this.symb = this.grammar.symbols;
	}
	
	public step(): boolean //throws LexicalError, SyntaticError, SemanticError
	{		
		if (this.currentToken == null)
		{
			this.currentToken = new Token(LL1ParserSimulator.DOLLAR, "$", 0);
		}
		const x = this.stack.pop();
		const a = this.currentToken.id;
		
        if(x == undefined) throw new SyntaticError("Stack is not initialized");

		if (x == LL1ParserSimulator.EPSILON)
		{
			this.node.add(new TreeNode("EPSILON"));
			
			let itg: number = this.nodeCount.pop();
			while (itg == 1)
			{
				const parent = this.node.parent;
				if(parent === null) throw new SyntaticError("Null parent");
				this.node = parent;
				if ( this.nodeCount.size() > 0 )
					itg = this.nodeCount.pop();
				else
					break;
			}
			this.nodeCount.push(itg-1);			
			
			return false;
		}
		else if (this.isTerminal(x))
		{
			this.node.add(new TreeNode(this.symb[a]));
			
			let itg: number = this.nodeCount.pop();
			while (itg == 1)
			{
				const parent = this.node.parent;
				if(parent === null) throw new SyntaticError("Null parent");
				this.node = parent;
				if ( this.nodeCount.size() > 0 )
					itg = this.nodeCount.pop();
				else
					break;
			}
			this.nodeCount.push(itg-1);	
			
			if (x == a)
			{
				if (this.stack.empty())
					return true;
				else
				{
                    if(this.scanner == null) throw new SyntaticError("Scanner is NULL");
					this.currentToken = this.scanner.nextToken();
					return false;
				}
			}
			else
			{
				this.node.add(new TreeNode("ERRO SINTÁTICO: Era esperado "+this.symb[x]));
				throw new SyntaticError("Era esperado " + this.symb[x], this.currentToken.position);
			}
		}
		else if (this.isNonTerminal(x))
		{
			const p = this.table[x-this.FIRST_NON_TERMINAL][a-1] //this.table[x-FIRST_NON_TERMINAL][a-1];
			if (p != -1)
			{	
				const production: number[] = this.productions[p];
				//empilha a produção em ordem reversa
				for (let i = production.length - 1; i >= 0; i--)
				{
					this.stack.push(production[i]);
				}
				const n: TreeNode<string> = new TreeNode(this.symb[x]);
				this.node.add(n);
				this.node = n;
				this.nodeCount.push(production.length);
				return false;
			}
			else
			{
				this.node.add(new TreeNode("ERRO SINTÁTICO: " + this.symb[a] + " inesperado"));
				throw new SyntaticError(this.symb[a]+" inesperado", this.currentToken.position);
			}
		}
		else if (this.isSemanticAction(x))
		{
			this.node.add(new TreeNode("#"+(x-this.FIRST_SEMANTIC_ACTION)));
			
			let itg: number = this.nodeCount.pop();
			while (itg == 1)
			{
				const parent = this.node.parent;
				if(parent === null) throw new SyntaticError("Null parent");
				this.node = parent;
				if ( this.nodeCount.size() > 0 )
					itg = this.nodeCount.pop();
				else
					break;
			}
			this.nodeCount.push(itg-1);	
			
			return false;
		}
		else
		{
			//ERRO: impossivel
			//assert false : "Erro Impossivel";
			return false;
		}
	}
	
	public parse(scnr: BasicScanner, root: TreeNode<string>): TreeNode<string>  //throws LexicalError, SyntaticError, SemanticError
	{			
		this.scanner = scnr;
		this.node = root;
		this.nodeCount.clear();
		this.stack.clear();
		
		this.stack.push(LL1ParserSimulator.DOLLAR);
		this.stack.push(this.START_SYMBOL);
		
		this.currentToken = this.scanner.nextToken();
		
		while ( ! this.step() ); //faz nada

		return root
	}
	
	/**
     * @return TRUE se x eh um símbolo terminal
     */
    private isTerminal(x: number): boolean
    {
        return x >= 0 && x < this.FIRST_NON_TERMINAL;
    }

    /**
     * @return TRUE se x eh um símbolo não terminal
     */
    private isNonTerminal(x: number): boolean
    {
        return x >= this.FIRST_NON_TERMINAL && x < this.FIRST_SEMANTIC_ACTION;
    }
    
    /**
     * @return TRUE se x eh uma Ação Semântica
     */
    private isSemanticAction(x: number): boolean
    {
        return x >= this.FIRST_SEMANTIC_ACTION && x <= this.LAST_SEMANTIC_ACTION;
    }
}
