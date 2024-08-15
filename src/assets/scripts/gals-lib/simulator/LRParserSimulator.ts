/* eslint-disable no-case-declarations */
import { List, Stack, TreeNode } from "../DataStructures";
import { SyntaticError } from "../analyser/SystemErros";
import { Token } from "../analyser/Token";
import { Command } from "../generator/parser/lr/Command";
import { LRGenerator } from "../generator/parser/lr/LRGenerator";
import { Production } from "../util/Production";
import type { BasicScanner } from "./BasicScanner";

export class LRParserSimulator
{
	private stack: Stack<number> = new Stack();
	
	private scanner: BasicScanner | null = null;
	private currentToken: Token | null = null;
	private previousToken: Token | null = null;
	
	private table: Command[][];
	private productions: number[][] ;
	private semanticStart: number;
	
	private symbols: string[] ;
	private nodeStack: Stack<TreeNode<string>> = new Stack();
	
	private errors: List<string>;
	
	public static DOLLAR = 1;
	
	public constructor(parser: LRGenerator)
	{
		this.table = parser.buildTable();
		this.semanticStart = parser.firstSemanticAction;
		const pl: List<Production> = parser.grammar.productions;
		this.productions = []; //int[pl.size()][2];
		
		this.symbols = parser.grammar.symbols;
		
		for (let i=0; i<pl.size(); i++)
		{
			this.productions[i] = [];
			this.productions[i][0] = pl.get(i).get_lhs();
			this.productions[i][1] = pl.get(i).get_rhs().length;
		}
		
		this.errors = parser.getErrors(this.table);
	}
	
	public parse(scanner: BasicScanner, root: TreeNode<string>): TreeNode<string>  //throws SemanticError, SyntaticError, SyntaticError, LexicalError
	{
		this.scanner = scanner;

		this.nodeStack.clear();

		this.stack.clear();
		this.stack.push(0);
		
		this.currentToken = scanner.nextToken();
		
		try
		{
			while ( ! this.step() ); //faz nada
            
            const node = this.nodeStack.pop();
            if(node === undefined) throw new SyntaticError("Node is Null");
			root.add(node);
		}
		catch(e) // AnalysisError
		{

			for (let i=0; i< this.nodeStack.size(); i++){
                const node = this.nodeStack.get(i);
                if(node === undefined) throw new SyntaticError("Node is Null");
                root.add(node);
            }

			root.add(new TreeNode<string>((e as Error).message ));
			console.log(e)
		}
		return root;	
	}
	
	private step(): boolean //throws SyntaticError, SemanticError, LexicalError
	{
		const state = this.stack.peek();
		
		if (this.currentToken == null)
		{
			let pos = 0;
			if (this.previousToken != null)
				pos = this.previousToken.position + this.previousToken.lexeme.length;

			this.currentToken = new Token(LRParserSimulator.DOLLAR, "$", pos);
		}
		
    	const token = this.currentToken.id;
		
        if(state === undefined) throw new SyntaticError("State is undefined");

		const cmd: Command = this.table[state][token-1];
		
		switch (cmd.getType())
		{
			case Command.SHIFT:
				this.stack.push(cmd.getParameter());
				this.nodeStack.push(new TreeNode(this.symbols[this.currentToken.id]));
				this.previousToken = this.currentToken;
				if(this.scanner === null) throw new SyntaticError("Scanner is Null");
				this.currentToken = this.scanner.nextToken();
				return false;

			case Command.REDUCE:				
				const prod = this.productions[cmd.getParameter()];

				const tmp: Stack<TreeNode<string>> = new Stack();

				for (let i = 0; i < prod[1]; i++) {
					this.stack.pop();
					const node = this.nodeStack.pop();
					if(node === undefined) throw new SyntaticError("Node is Null");
					tmp.push(node);
				}
				const oldState = this.stack.peek();
				if(oldState === undefined) throw new SyntaticError("Old State is Null");
				this.stack.push(this.table[oldState][prod[0] - 1].getParameter());
		
				const node = new TreeNode(this.symbols[prod[0]]);
				while (tmp.size() > 0) {
					const pivot = tmp.pop();
					if(pivot === undefined) throw new SyntaticError("Pivot is Null");
					node.add(pivot);
				}
				this.nodeStack.push(node);
				return false;
				
			case Command.ACTION:
				const action = this.semanticStart + cmd.getParameter() - 1;
				this.stack.push(this.table[state][action].getParameter());
				this.nodeStack.push(new TreeNode("#" + cmd.getParameter()));
				// this.semanticAnalyser.executeAction(cmd.getParameter(), this.previousToken);
				return false;
			/*	
			case Command.GOTO:
				break;
			*/	
			case Command.ACCEPT:
				return true;
				
			case Command.ERROR:
				throw new SyntaticError("Era esperado: "+this.errors.get(state), this.currentToken.position);
		}
		return false;
	}
}