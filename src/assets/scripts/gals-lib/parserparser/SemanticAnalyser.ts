import { List } from "../DataStructures";
import { SemanticError } from "../analyser/SystemErros";
import { Token } from "../analyser/Token";
import { Production } from "../util/Production";
import { Constants } from "./Constants";

export class SemanticAnalyser
{	
	private symbols: Map<string, number>;
	private actionCount = 0;
	private lhs: number;
	private rhs: number[];
	private productions: List<Production>;
    private token: Token;
	
	constructor(symbols: Map<string, number>)
	{
		this.symbols = symbols;
        this.lhs = 0;
        this.rhs = []
        this.productions = new List();
        this.token = new Token(-1, "ERROR", -1);
	}
	
	public getPoductions(): List<Production>
	{
		return this.productions;
	}
	
	public executeAction(action: number, currentToken: Token)
		//throws SemanticError
	{
		this.token = currentToken;
		switch (action)
		{
			case 0:
				this.action0();
				break;
			case 1:
				this.action1();
				break;
			case 2:
				this.action2();
				break;
			case 3:
				this.action3();
				break;
			case 4:
				this.action4();
				break;
			case 5:
				this.action5();
				break;
		}
	}

	private action0()
	{
		let lexeme = this.symbols.get(this.token.lexeme);
		if(lexeme === undefined) throw new SemanticError("Lexema não pode ser nulo");
		this.lhs = lexeme;
	}
	
	private action1()
	{
		let p: Production = new Production(null, this.lhs);
		for (let i=0; i< this.rhs.length; i++)
			p.add_rhs(this.rhs[i]); //TODO validate
			
		this.productions.add(p);
		
		this.rhs = [];
	}
	
	private action2()
	{
		let lexeme = this.symbols.get(this.token.lexeme);
		if(lexeme === undefined) throw new SemanticError("Lexema não pode ser nulo");
		let s: number = lexeme;
		
		if (s != Constants.EPSILON)		
			this.rhs.push(s);
	}
	
	private action3()
	{		
		let action: number = this.token.lexeme.charCodeAt(0);	
		
		this.rhs.push(this.symbols.size + action + 1); //falta $ em symbols
	}
	
	private action4()// throws SemanticError
	{
		if (! this.symbols.has(this.token.lexeme)) // TODO Validate
			throw new SemanticError("Símbolo " + this.token.lexeme + " não declarado", this.token.position);
	}
	
	private action5()
	{
		let action: number = this.token.lexeme.charCodeAt(0);
		
		if (this.actionCount < action)
			this.actionCount = action;
	}
}
