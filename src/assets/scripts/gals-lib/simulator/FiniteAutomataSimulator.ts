import { Token } from "../analyser/Token";
import type { BasicScanner } from "./BasicScanner";
import { FiniteAutomata } from '../generator/FiniteAutomata';
import { LexicalError } from '../analyser/SystemErros';

/* 
    Modifications:
    - constructor receive sensitive flag
    TODO Mover de lugar compareValues
*/

export class FiniteAutomataSimulator implements BasicScanner{

    private _fa: FiniteAutomata;
    private _input: string =  "";
    private _position: number = 0;
    private _sensitive: boolean = true;

    constructor(fa: FiniteAutomata , sensitive: boolean){
        this._fa = fa;
        this._sensitive = sensitive
    }

	public analyse(str: string): number {
		let state: number = 0;
		
		for (let i = 0; i < str.length; i++){
			state = this._fa.nextState(str.charAt(i), state);
			
			if (state <= 0)
				return -1;
		}
		return this._fa.tokenForState(state);
	}

    setInput(text: string): void {
        this._input = text;
		this._position = 0;
    }

    nextToken(): Token | null {// throws LexicalError
		if ( ! this.hasInput() )
			return null;
		
		let start: number = this._position;
		
		let state : number= 0;
		let lastState : number = 0;
		let endState : number = -1;
		let end : number = -1;
		let ctxtState : number = -1;
		let ctxtEnd : number = -1;
		
		while (this.hasInput()){	
			lastState = state;	
			state = this._fa.nextState(this.nextChar(), state);
			
			if (state < 0)
			{
				break;				
			}
			else
			{
				let tfs: number = this._fa.tokenForState(state);
				if (tfs >= 0){
					endState = state;
					end = this._position;
				}
				if (this._fa.isContext(state)){
					ctxtState = state;
					ctxtEnd = this._position;
				}
			}
		}
				
		if (endState < 0 || (endState != state && this._fa.tokenForState(lastState) == -2))
			throw new LexicalError( this._fa.getError(lastState), start);
		
		if (ctxtState != -1 && this._fa.getOrigin(endState) == ctxtState)
			end = ctxtEnd;
		this._position = end;
		
		let token: number = this._fa.tokenForState(endState);
		
		if (token == 0)
			return this.nextToken();
		else
		{
			let lexeme: string = this._input.substring(start, end);
			token = this.lookupToken(token, lexeme);
			return new Token(token, lexeme, start);
		}
    }

	public lookupToken(base: number, key: string): number{
		let start: number = this._fa.getSpecialCasesIndexes()[base][0];
		let end: number   = this._fa.getSpecialCasesIndexes()[base][1]-1;

		if (!this._sensitive)
			key = key.toUpperCase();

		while (start <= end){
            
			let half: number = (start+end)/2;
			let comp: number = this.compareValues(this._fa.specialCases[half].key, (key));

			if (comp == 0)
				return this._fa.specialCases[half].value;
			else if (comp < 0)
				start = half+1;
			else  //(comp > 0)
				end = half-1;
		}		

		return base;
	}

    private hasInput(): boolean {
		return this._position < this._input.length;
	}
	
    private nextChar(): string{
		if (this.hasInput())
			return this._input.charAt(this._position++);
		else
			return String.fromCharCode(-1);
	}

    private compareValues( str1: string ,str2: string): number {
        let lim: number = Math.min(str1.length, str2.length);
        for (let k = 0; k < lim; k++) {
            let c1: number = str1.charCodeAt(k);
            let c2: number = str2.charCodeAt(k);
            if (c1 != c2) {
                return c1 - c2;
            }
        }
        return str1.length - str2.length;
    }
    
}