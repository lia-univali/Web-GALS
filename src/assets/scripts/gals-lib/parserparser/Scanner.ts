import { LexicalError } from "../analyser/SystemErros";
import { Token } from "../analyser/Token";
import type { BasicScanner } from "../simulator/BasicScanner";
import { Constants } from "./Constants";

export class Scanner implements BasicScanner
{	

	private input: string;
	private pos: number;
	private returnComents: boolean = false;
	private endPosition: number;
	
	constructor(str?: string)
	{
		if(str == undefined){
			this.input = "";
			this.pos = -1;
			this.endPosition =-1;
		}
		else{
			this.input = str;
			this.pos = 0;
			this.endPosition = str.length;
		}
	}
	
	public setReturnComents(rc: boolean)
	{
		this.returnComents = rc;
	}
	
	public setInput(input: string)
	{
		this.input = input;
		this.pos = 0;
		this.endPosition = input.length; 
	}
	
	public nextToken(): Token | null // throws LexicalError
	{	
		while (this.hasMoreChars())
		{			
			let start = this.pos;
			let c = this.nextChar();
			
			switch (c)
			{
				case ' ':
				case '\n':
				case '\r':
				case '\t':
					continue;				
					
				case ':':
					return this.analyseDerives();
					
				case '|':
					return new Token(Constants.PIPE, "|", start);
				
				case ';':
					return new Token(Constants.SEMICOLON, ";", start);
		
				case '#':
					return this.analyseAction();
					
				case '<':
					return this.analyseNonTerminal();
					
				case '_':
				case '\"':
					return this.analyseTerminal(c);
					
				case '/':
				{
					let t: Token = this.analyseComent();
					if (this.returnComents)
						return t;
					else
						continue;
				}
					
				default:
					if (this.isLetter(c))
					{
						return this.analyseTerminal(c);
					}
					throw new LexicalError("Caracter Inválido: '"+c+"'", start);
			}						
		}
		return null;
	}

	private isLetter(char: string): boolean {
		return /^[a-zA-Z]$/.test(char);
	}
	  

	private analyseComent(): Token // throws LexicalError
	{
		let start = this.pos - 1;
		if ( ! this.hasMoreChars() )
			throw new LexicalError("Caracter Inválido: '/'", start);
			
		let c = this.nextChar();
		
		if (c != '/')
		{
			this.pushChar();
			throw new LexicalError("Caracter Inválido: '/'", start);	
		}
		
		let result: string = "//";
		while (this.hasMoreChars())
		{
			c = this.nextChar();
			
			if (c == '\n')
			{
				this.pushChar();
				break;
			}
			result += c;
		}
		return new Token(-1, result.toString(), start);
	}

	private analyseDerives(): Token // throws LexicalError
	{
		let start: number = this.pos - 1;

		if ( this.input.length - start >= 3 )
		{
			let c = this.nextChar();
			if (c == ':')
			{
				c = this.nextChar();
				if (c == '=')
					return new Token(Constants.DERIVES, "::=", start);
			}
		}
		throw new LexicalError("Símbolo Inválido", start);
	}
	
	public getPosition(): number
	{
		return this.pos;
	}
	
	public setPosition(pos: number)
	{
		this.pos = pos;
	}
		
	public setEnd(end: number)
	{
		this.endPosition = end;
	}
	
	public setRange(start: number, end: number)
	{
		this.setPosition(start);
		this.setEnd(end);
	}
	
	private analyseTerminal(c:string): Token // throws LexicalError
	{
		let start = this.pos - 1;
		let bfr = "";
		bfr += c;
		if (c == '\"')
		{			
			let close = false;			
			while (this.hasMoreChars())
			{
				c = this.nextChar();
				bfr += c;
				if (c == '\"')
				{
					if (this.hasMoreChars())
					{
						c = this.nextChar();
						if (c == '\"')
							bfr += c;
						else
						{
							this.pushChar();
							close = true;
							break;
						}
					}
					else
						close = true;
				}
				else if (c == '\n')
					throw new LexicalError("Terminal inválido", start);
			}
			if (bfr.length == 0 || !close)
				throw new LexicalError("Terminal inválido", start);
		}
		else
		{			
			while (this.hasMoreChars())
			{
				c = this.nextChar();
				if (c != '_' && ! this.isLetterOrDigit(c))
				{
					this.pushChar();
					break;					
				}
				bfr += c;
			}			
		}
		return new Token(Constants.TERM, bfr.toString(), start);
	}

	private isLetterOrDigit(char: string): boolean {
		return /^[a-zA-Z0-9]$/.test(char);
	}

	private analyseNonTerminal(): Token //throws LexicalError
	{
		let start = this.pos-1;
		let bfr = "";	
		let c = '<';
		while (this.hasMoreChars())
		{
			c = this.nextChar();
			if (c == '>')
				break;
			else if (!this.isLetterOrDigit(c) && c != '_')
				throw new LexicalError("Não-Terminal inválido", start);
			bfr += c;
		}		
		if (bfr.length == 0 || c != '>')
			throw new LexicalError("Não-Terminal inválido", start);
		else 
			return new Token(Constants.NON_TERM, "<"+bfr+">", start);
	}
	
	private analyseAction(): Token //throws LexicalError
	{
		let start = this.pos-1;
		
		let bfr = ""; 		
		while (this.hasMoreChars())
		{
			let c = this.nextChar();
			
			if (! this.isDigit(c) )
			{
				this.pushChar();
				break;
			}
			bfr += c;	
		}
		
		if (bfr.length == 0)
			throw new LexicalError("Ação Semântica inválida", start);
		else
			return new Token(Constants.ACTION, bfr.toString(), start);
	}

	private isDigit(char: string): boolean {
		return !isNaN(Number(char)) && !isNaN(parseInt(char));
	}
	
	private hasMoreChars(): boolean
	{
		return this.pos < this.endPosition;
	}
	
	private nextChar()
	{		
		if (this.hasMoreChars())
			return this.input.charAt(this.pos++);
		else
			return String.fromCharCode(-1);
	}
	
	private pushChar()
	{
		this.pos--;
	}
}
