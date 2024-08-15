import { SyntaticError } from "../../../analyser/SystemErros";
import { Production } from "../../../util/Production";
import { Grammar } from "../Grammar";


export class LRItem //implements Comparable
{
	private _production: Production;
	private _position: number;
	private _lookahead: number;
	private _g: Grammar | null;
	
	public constructor(production: Production, position: number, lookahead?: number)
	{
        this._production = production;
        this._position = position;
        this._lookahead = (lookahead === undefined)? 0 : lookahead;
        this._g = production.getGrammar();
    
	}
	
	public get position(): number
	{
		return this._position;
	}
	
	public get lookahead(): number
	{
		return this._lookahead;
	}

	public get production(): Production
	{
		return this._production;
	}
	
	public equals(obj: LRItem): boolean
	{
		try
		{
			//return obj.production 	== this._production
			return obj.production.equals(this._production)
				   && obj.position   	== this._position 	
				   && this._lookahead == obj.lookahead 
//					 	&& obj._g 			== this._g;
		}
		catch (e)
		{
			console.warn(e);
			return false;
		}
	}

	public toString(): string
	{
		let bfr = "";

        if(this._g == null) throw new SyntaticError("Grammar to string is null");

		bfr += this._g.symbols[this._production.get_lhs()] + " ::= ";
		
		for (let i=0; i<this._production.get_rhs().length && i<this._position; i++)
		{
			const s: number = this._production.get_rhs()[i];
			if (this._g.isSemanticAction(s))
				bfr += "#"  + (s-this._g.FIRST_SEMANTIC_ACTION()) + " ";
			else
				bfr += this._g.symbols[s] + " ";
		}
		
		bfr += "o ";
		
		for (let i=this._position; i<this._production.get_rhs().length; i++)
		{
			const s = this._production.get_rhs()[i];
			if (this._g.isSemanticAction(s))
				bfr += ("#" + (s-this._g.FIRST_SEMANTIC_ACTION()) + " " );
			else
				bfr += this._g?.symbols[s] + " ";
		}
		
		if (this._lookahead != 0)
		{
			bfr += ", ";
			bfr += this._g?.symbols[this._lookahead];
		}
		
		return bfr.toString();
	}
	
	protected clone() //throws CloneNotSupportedException
	{
		return new LRItem(this._production, this._position, this._lookahead);
	}

	public compareTo(it: LRItem): number
	{
		let cmp: number = Production.compareTo(this._production, it.production); //TODO VERIFY
		if (cmp != 0)
			return cmp;
		else
		{
			cmp = this._position - it.position;
			if (cmp != 0)
				return cmp;
			else
				return this._lookahead - it.lookahead;
		}
	}

}
