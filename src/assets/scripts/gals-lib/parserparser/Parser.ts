import TreeMap from "ts-treemap";
import { List } from "../DataStructures";
import { Token } from "../analyser/Token";
import { Grammar } from "../generator/parser/Grammar";
import { Constants } from "./Constants";
import { SemanticAnalyser } from "./SemanticAnalyser";
import { Scanner } from "./Scanner";
import { LexicalError, SemanticError, SyntacticError } from "../analyser/SystemErros";
import { MetaException } from "../util/MetaException";
import { AnalysisError } from "../analyser/AnalysisError";


export class Parser
{	
	private stack: number[] = [];
	private currentToken: Token | null = null;
	private previousToken: Token | null = new Token(-1, "ERROR", -1);
	private scanner: Scanner = new Scanner;	
	private semanticAnalyser: SemanticAnalyser = new SemanticAnalyser(new Map);	
			
	public parse(t: List<string>, nt: List<string>, prods: string): Grammar // throws MetaException
	{
		const map: TreeMap<string, number> = new TreeMap();
        map.set(Grammar.EPSILON_STR, 0);
        
        let pos = 2;

        const scanner: Scanner = new Scanner();

		let lineCount = 0;
		
		let s: Set<string> = new Set();
		
		try
		{			
	        for (let i=0; i<t.size(); i++)
	        {
	        	const line: string = t.get(i);
	        	if (line == "\n")
	        	{
	        		lineCount++;
	        		t.removeByIndex(i);
	        		i--;
	        		continue;
	        	}
	        	
	        	scanner.setInput(line);
	        	let token: Token | null = scanner.nextToken();
	        	if (token == null)//linha vazia
	        	{
	        		t.removeByIndex(i);
	        		i--;
	        	}
	        	else
	        	{
	        		if (token.id != Constants.TERM)
	        			throw new SemanticError("Era esperada a declaração de um terminal", token.position);
	        		const str: string = token.lexeme;
	        		
					if (s.has(str))
						throw new SemanticError("Terminal repetido : "+str, token.position);
					else
						s.add(str);
	        		
	        		t.set(i, str); // TODO test if behavior is correct
	        		map.set(str, pos);
	        		pos++;
	        		if ((token=scanner.nextToken()) != null)// mais de um terminal por linha
	        		{
	        			throw new SemanticError("Cada linha deve conter a declaração de apenas um símbolo terminal", token.position);
	        		}
	        	}
	        }
			if (t.size() == 0)
				throw new SemanticError("Conjunto de Terminais não pode ser vazio", 0);
		}
		catch(e)
		{
			throw new MetaException(MetaException.Mode.TOKEN, lineCount, e as AnalysisError);
		}
        
        lineCount = 0;
        
        s = new Set();
        
        try
        {
	        for (let i=0; i<nt.size(); i++)
	        {
	        	const line: string = nt.get(i);
				if (line == "\n")
				{
					lineCount++;
					nt.removeByIndex(i);
					i--;
					continue;
				}
	        	scanner.setInput(line);
	        	let token: Token | null = scanner.nextToken();
	        	if (token == null)//linha vazia
	        	{
	        		nt.removeByIndex(i);
	        		i--;
	        	}
	        	else
	        	{
	        		if (token.id != Constants.NON_TERM)
	        			throw new SemanticError("Era esperada a declaração de um não-terminal", token.position);
					const str: string = token.lexeme;
					
					if (s.has(str))
						throw new SemanticError("Não-terminal repetido : "+str, token.position);
					else
						s.add(str);
					
	        		nt.set(i, str);
	        		map.set(str, pos);
	        		pos++;
	        		if ((token=scanner.nextToken()) != null)// mais de um terminal por linha
	        		{
	        			throw new SemanticError("Cada linha deve conter a declaração de apenas um símbolo não-terminal", token.position);
	        		}
	        	}
	        }
        	if (nt.size() == 0)
        		throw new SemanticError("Conjunto de Não-Terminais não pode ser vazio", 0);
	    }
		catch(e)
		{
			throw new MetaException(MetaException.Mode.NON_TERMINAL, lineCount, e as AnalysisError);
		}

		try
		{
			this.parseByMap(prods, map);
		}
		catch(e)
		{
			throw new MetaException(MetaException.Mode.GRAMMAR, -1, e as AnalysisError);
		}
		
		const prodList = this.semanticAnalyser.getPoductions();
		
		const start = 2 + t.size();
        return new Grammar(t.toArray(), nt.toArray(), prodList, start);
	}
	
	public parseByMap(input: string, symbols: Map<string, number>)
		//throws LexicalError, SyntacticError, SemanticError
	{
		this.scanner = new Scanner(input);
		this.semanticAnalyser = new SemanticAnalyser(symbols);
		
		this.stack.push(Constants.DOLLAR);
		this.stack.push(Constants.START_SYMBOL);
		
		this.currentToken = this.scanner.nextToken();
		
		while ( ! this.step() ); //faz nada
	}
	
	public step(): boolean // throws LexicalError, SyntacticError, SemanticError
	{			
		const x = this.stack.pop();
        if(x === undefined) return false;
		let a: number;
		
		if (this.currentToken == null)
			a = Constants.DOLLAR;
		else
			a = this.currentToken.id;
				
		if (x == Constants.EPSILON)
		{
			return false;
		}
		else if (this.isTerminal(x))
		{
				if (x == a)
				{
					if (this.stack.length == 0)
						return true;
					else
					{
						this.previousToken = this.currentToken;
						this.currentToken = this.scanner.nextToken();
						return false;
					}
				}
				else
				{
					throw new SyntacticError("Era esperado "+ Constants.EXPECTED_MESSAGE[x], this.scanner.getPosition());
				}
		}
		else if (this.isNonTerminal(x))
		{
			const p: number = Constants.TABLE[ x - Constants.FIRST_NON_TERMINAL][a-1];
			if (p >= 0 )
			{
				const production = Constants.PRODUCTIONS[p];
				if(production === undefined) throw new SyntacticError("Produção não definida");
				//empilha a produção em ordem reversa
				for (let i = production.length - 1; i>=0; i--)
				{
					this.stack.push(production[i]);
				}
				return false;
			}
			else
			{
				throw new SyntacticError(Constants.PARSER_ERROR[x-Constants.FIRST_NON_TERMINAL], this.scanner.getPosition());
			}
		}
		else if (this.isSemanticAction(x))
		{
			if(this.previousToken === null) throw new LexicalError("Token anterior é Nulo")
			this.semanticAnalyser.executeAction(x-Constants.FIRST_SEMANTIC_ACTION, this.previousToken);
			return false;
		}
		else
		{
			//ERRO: impossivel
			//assert false : "Erro Impossivel";
			return false;
		}
	}
	
	/**
     * @return TRUE se x eh um símbolo terminal
     */
    private isTerminal(x: number): boolean
    {
        return x >= 0 && x < Constants.FIRST_NON_TERMINAL;
    }

    /**
     * @return TRUE se x eh um símbolo não terminal
     */
    private isNonTerminal(x: number): boolean
    {
        return x >= Constants.FIRST_NON_TERMINAL && x < Constants.FIRST_SEMANTIC_ACTION;
    }
    
    /**
     * @return TRUE se x eh uma Ação Semântica
     */
    private isSemanticAction(x: number): boolean
    {
        return x >= Constants.FIRST_SEMANTIC_ACTION && x <= Constants.LAST_SEMANTIC_ACTION;
    }
}
