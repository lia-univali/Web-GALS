import { Grammar } from "../generator/parser/Grammar";


// TODO: ANOTAÇÕES
// TODO: TENTAR NUMERA AS REGRAS
// TODO: TENTAR NUMERA AS REGRAS

export class Production {
    private lhs: number;
    private rhs: number[]; //TODO: Gals está como uma classe IntList
    private grammar: Grammar | null;

	constructor(g: Grammar | null, lhs: number, rhs?: number[]) {
    	this.grammar = g;
        this.lhs = lhs;
        this.rhs = rhs === undefined? [] : rhs;
    }


    clone() : Production {
        return new Production(null,this.lhs, [...this.rhs] )
    }

    get_lhs(): number {
        return this.lhs;
    }

    clear_rhs(){
        this.rhs = [];
    }

    set_lhs(lhs: number): void {
        this.lhs = lhs;
    }

    get_rhs(): number[] {
        return this.rhs;
    }
   
    set_rhs(index: number, element: number): number
    {
		const oldValue = this.rhs[index];
		this.rhs[index] = element;
		return oldValue;
    }

    add_rhs( element: number): number
    {
		this.rhs.push( element);
		return element;
    }

    firstSymbol(): number {
        if(this.grammar == null) return -1;

        for (let i = 0; i < this.rhs.length; i++) {
            if (!this.grammar.isSemanticAction(this.rhs[i])) {
                return this.rhs[i];
            }
        }
        return 0;
    }

    setGrammar(grammar: Grammar): void {
        this.grammar = grammar;
    }

    getGrammar(): Grammar | null {
        return this.grammar;
    }

    toString(): string {
        if(this.grammar == null) return "error";

        const bfr: string[] = [];
        bfr.push(this.grammar.symbols[this.lhs] + " ::=");
        if (this.rhs.length === 0) {
            bfr.push(" " + Grammar.EPSILON_STR);
        } else {
            for (let j = 0; j < this.rhs.length; j++) {
                if (this.grammar.isSemanticAction(this.rhs[j])) {
                    bfr.push(" #" + (this.rhs[j] - this.grammar.FIRST_SEMANTIC_ACTION()));
                } else {
                    bfr.push(" " + this.grammar.symbols[this.rhs[j]]);
                }
            }
        }
        return bfr.join('');
    }

    equals(p: Production): boolean {
        
        if (this.lhs !== p.lhs) {
            return false;
        } else if (this.rhs.length !== p.rhs.length) {
            return false;
        } else {
            for (let i = 0; i < this.rhs.length; i++) {
                if (this.rhs[i] !== p.rhs[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    static compareTo(p1: Production, p2: Production): number {
        if(p1 === null) return -1;
        
        if (p1.lhs !== p2.lhs) {
            return p1.lhs - p2.lhs;
        } else {
            if(p1.grammar === null) return -1;
            const e1 = p1.grammar.isEpsilon(p1.rhs);
            const e2 = p1.grammar.isEpsilon(p2.rhs);
            if (e1 && e2) {
                return 0;
            } else if (e1) {
                return 1;
            } else if (e2) {
                return -1;
            } else {
                for (let i = 0; i < p1.rhs.length && i < p2.rhs.length; i++) {
                    if (p1.rhs[i] !== p2.rhs[i]) {
                        return p1.rhs[i] - p2.rhs[i];
                    }
                }
            }
            // If everything is equal so far, the larger one is the one with more symbols
            return p2.rhs.length - p1.rhs.length;
        }
    }
}