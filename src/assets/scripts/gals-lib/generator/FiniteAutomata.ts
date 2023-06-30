import { SemanticError } from "../analyser/SystemErros";
import {List} from "../DataStructures"
import { FiniteAutomataSimulator } from "../simulator/FiniteAutomataSimulator";

/*
Missing to String and to HTML
*/

export class KeyValuePar{
	
    public key: string;
    public value: number;

    constructor(key: string, value: number){
        this.key = key;
        this.value =  value;
    }

    public toString(): string{
        return "[" + this.key + "->" + this.value + "]";
    }
};

export class FiniteAutomata{

    private _transitions: List<Map<string,number>>;
    private _finals: number[];
    private _context: number[][];
    private _alphabet: Set<number>;
    private _tokenNames: List<string>;
    private _errors: string[] = [];
    private _hasContext: boolean = false;
    private _specialCasesIndexes: number[][];
    private _specialCases: KeyValuePar[];



    constructor(alphabet:  Set<number>, transitions: List<Map<string,number>>,
        finals: number[], specialCasesIndexes: number[][], specialCases: KeyValuePar[], 
        context: number[][], tokenNames: List<string>, sensitive: boolean ){

        this._alphabet = alphabet;
        this._transitions = transitions;
        this._finals = finals;
        this._context = context;
        this._specialCasesIndexes = specialCasesIndexes;
        this._specialCases = specialCases;
        this._tokenNames = tokenNames;

        for(let ctx of context){
            if (ctx[0] == 1){
                this._hasContext = true;
				break;
            }
        }

		this.buildErrors();

		this.checkSpecialCases(sensitive);
    }

    private checkSpecialCases(sensitive: boolean){ // throws SemanticError

		let sim: FiniteAutomataSimulator = new FiniteAutomataSimulator(this, sensitive);

		for (let i = 0; i < this._specialCasesIndexes.length; i++){

			let index: number[] = this._specialCasesIndexes[i];

			for (let j = index[0]; j < index[1]; j++){

				if (sim.analyse(this._specialCases[j].key) != i)

					throw new SemanticError("O valor \"" + this._specialCases[j].key +
							"\" não é válido como caso especial de '" + this._tokenNames.get(i - 2) +
							"', na definição de '" + this._tokenNames.get(this._specialCases[j].value - 2) + "'");
			}
		}
    }

    public nextState( c: string, state: number): number {

		let inState: number | undefined = this._transitions.get(state).get(c);

		if (inState == undefined)
			return -1;
		else
			return inState;
	}

    public tokenForState(state: number): number{

		if (state < 0 || state >= this._finals.length)
			return -1;

		return this._finals[state];

	}

    //TODO Representation methods go here

    private getChar(c: string): string{

		switch (c){

		case '\n':
			return "\\n";
		case '\r':
			return "\\r";
		case '\t':
			return "\\t";
		case ' ':
			return "' '";
		case '"':
			return "&quot;";
		case '&':
			return "&amp;";
		case '<':
			return "&lt;";
		case '>':
			return "&gt;";
		default:

            let charNumber: number =  c.charCodeAt(0);

			if ((charNumber >= 32 && charNumber <= 126) || (charNumber >= 161 && charNumber <= 255))
				return "" + c;
			else
				return "" + charNumber;

		}

	}

	private finalStatesFromState(state: number): Set<number>{

		let visited: Set<number> = new Set<number>();

		visited.add(state);

		let changed: boolean = true;

		//TODO Testar os breaks
		loop: while (changed){
			changed = false;
			for (let st of visited){

				for (let v of this._alphabet){

					let c: string = String.fromCodePoint(v);

					let next: number = this.nextState(c, st);

					if (next != -1 && !visited.has(next) ){

						visited.add(next);
						changed = true;
						//continue loop;
						break;
					}
				}
				
				if(changed){
					break;
				}
			}
		}

		let result: Set<number> = new Set<number>();

		for (let i of visited){

			let token = this.tokenForState(i);

			if (token >= 0)
                result.add(i);
		}

		return result;
	}

    private tokensFromState(state: number): Set<number>{

		let visited: Set<number> = this.finalStatesFromState(state);

		let result: Set<number> = new Set<number>();

		for (let i of visited){

			let token: number = this.tokenForState(i);

			if (token >= 0)
				result.add(token);

		}

		return result;
	}

	private buildErrors(){

		this._errors = [];

		/*
		 * 
		 * if (tokenForState(0) >= 0)
		 * 
		 * errors[0] = "";
		 * 
		 * else
		 */

		this._errors[0] = "Caractere não esperado";

		for (let i = 1; i < this._transitions.size(); i++){

			if (this.tokenForState(i) >= 0)
				this._errors[i] = "";

			else{

				let tokens: Set<number> = this.tokensFromState(i);

				let bfr: string = "Erro identificando ";

				for (let t of tokens){

					if (t > 0)
						bfr += (this._tokenNames.get(t - 2));
					else
						bfr += "<ignorar>";

					bfr += " ou ";

				}

                //TODO Verify result
				//bfr.setLength(bfr.length() - 4);    
				bfr = bfr.substring(0, (bfr.length - 4));

				this._errors[i] = bfr.toString();

			}
		}
	}

    public get transitions() : List<Map<string,number>> {
        return this._transitions;
    }
    
    public get tokens() :List<string> {
        return this._tokenNames;
    }

    public get specialCases() : KeyValuePar[] {
        return this._specialCases;
    }

    public get errors() : string[] | null {
        return this._errors;
    }

    public getError(i: number) : string{
        let error: string | undefined = this._errors[i];
		
		if(error != undefined)
			return error;
		else
			throw Error("Sem erros");
    }

	public getSpecialCasesIndexes(): number[][]{
		return this._specialCasesIndexes;
	}

    public isContext(state: number): boolean{
        return this._context[state][0] == 1;
    }

    public getOrigin(state: number): number{
        return this._context[state][1];
    }

    public hasContext(): boolean{
        return this._hasContext;
    }

}