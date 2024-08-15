import { OrderedIntegerSet, List } from "../../DataStructures";
import { HTMLDialog } from "../../HTMLDialog";
import { Production } from "../../util/Production";
//import { cloneDeep } from "lodash";
// import { List<Production> } from "../../util/ProfuctionList";

export class Grammar {

    public static EPSILON = 0;
    public static DOLLAR = 1;
    public static FIRST_TERMINAL = this.EPSILON + 2;
    public static EPSILON_STR = "î";

    private _symbols: string[] = [];
    public FIRST_NON_TERMINAL: number = 0;
    public FIRST_SEMANTIC_ACTION(): number { return this._symbols.length; }
    public LAST_SEMANTIC_ACTION(): number { return this.FIRST_SEMANTIC_ACTION() + this.SEMANTIC_ACTION_COUNT; }
    public SEMANTIC_ACTION_COUNT: number = 0;
    protected _startSymbol: number = 0;

    public firstSet: OrderedIntegerSet[] = []; // TODO: Estava como BitSet. Validar comportamento
    public followSet: OrderedIntegerSet[] = [];

    private normalLR: boolean = false;

    protected _productions: List<Production> = new List<Production>();

    /**
     * Contrói um objeto do tipo Grammar
     *
     * @param terminals símbolos terminais
     * @param nonTerminals símbolos não terminais
     * @param productions produções
     * @param startSymbol símbolo inicial da gramática
     */
    constructor(terminals: string[], nonTerminals: string[], productions: List<Production>, startSymbol: number) { 

        //const terminalsCopy       = cloneDeep(terminals);
        const terminalsCopy        = [...terminals]
        //const nonTerminalsCopy    = cloneDeep(nonTerminals);
        const nonTerminalsCopy    = [...nonTerminals]
        //const productionsCopy     = cloneDeep(productions);
        const productionsCopy     = new List<Production>();
        productions.toArray().forEach( x => productionsCopy.add(x.clone()) )
        //const startSymbolCopy     = cloneDeep(startSymbol);
        const startSymbolCopy     = startSymbol

        this.setSymbols(terminalsCopy, nonTerminalsCopy, startSymbolCopy);
        this.setProductions(productionsCopy);
        this.fillFirstSet();
        //console.log("fillFirstSet: " + this.firstSet.toString());
        this.fillFollowSet();
        //console.log("fillFollowSet: " + this.followSet.toString());
    }

    /**
     * Preenche os símbolos e inicializa arrays;
     *
     * @param terminals símbolos terminais
     * @param nonTerminals símbolos não terminais
     */
    private setSymbols(terminals: string[], nonTerminals: string[], startSymbol: number) {
        this._symbols = [];
        this.FIRST_NON_TERMINAL = terminals.length + 2;
        this._symbols[Grammar.EPSILON] = Grammar.EPSILON_STR;
        this._symbols[Grammar.DOLLAR] = "$";
        for (let i = 0, j = Grammar.FIRST_TERMINAL; i < terminals.length; i++, j++)
            this._symbols[j] = terminals[i];

        for (let i = 0, j = this.FIRST_NON_TERMINAL; i < nonTerminals.length; i++, j++)
            this._symbols[j] = nonTerminals[i];

        this._startSymbol = startSymbol;
    }

    /**
     * @param productions produções
     */
    private setProductions(productions: List<Production>) {
        
        productions.toArray().forEach(p => this._productions.add(p));
        
        let max = 0;
        for (let i = 0 ; i < this._productions.size(); i++) {
        	this._productions.get(i).setGrammar(this);
        	for (let j = 0 ; j < this._productions.get(i).get_rhs().length ; j++)
        		if (this._productions.get(i).get_rhs()[j] > max)
        			max = this._productions.get(i).get_rhs()[j];
        }
        this.SEMANTIC_ACTION_COUNT = max - this.FIRST_SEMANTIC_ACTION();
    }

    /**
     * @return TRUE se symbol eh um símbolo terminal
     */
    public isTerminal(symbol: number): boolean {
        return symbol < this.FIRST_NON_TERMINAL;
    }

    /**
     * @return TRUE se symbol eh um símbolo não terminal
     */
    public isNonTerminal(symbol: number): boolean{
        return symbol >= this.FIRST_NON_TERMINAL && symbol < this.FIRST_SEMANTIC_ACTION();
    }

    public isSemanticAction(symbol: number): boolean {
        ////console.log("Semantic x: "+ symbol + " | FIRST: " + this.FIRST_SEMANTIC_ACTION());
        return symbol >= this.FIRST_SEMANTIC_ACTION();
    }

    get productions(): List<Production> {
		return this._productions;
	}

    get symbols(): string[] {
        return this._symbols;
    }

    get terminals(): string[] {
        //return cloneDeep(this.symbols.slice(2, this.FIRST_NON_TERMINAL));
        return this.symbols.slice(2, this.FIRST_NON_TERMINAL)
    }
	
    get nonTerminals(): string[] {
        //return cloneDeep(this.symbols.slice(this.FIRST_NON_TERMINAL, this.FIRST_SEMANTIC_ACTION()));
        return this.symbols.slice(this.FIRST_NON_TERMINAL, this.FIRST_SEMANTIC_ACTION())
    }

    get startSymbol(): number {
		return this._startSymbol;
	}

    public asNormalLR(): Grammar {
		if (this.normalLR)
			return this;
			
		const terminals: string[] = this.terminals;
		const newSymbols: number =  2 + this.SEMANTIC_ACTION_COUNT;

        const nonTerminalOld: string[] = this.nonTerminals;
        //const nonTerminalNew: string[] = cloneDeep([...nonTerminalOld, ...new Array(newSymbols)]);
        const nonTerminalNew: string[] = [...nonTerminalOld, ...new Array(newSymbols)]

//		const productionList: List<Production> = new List<Production>();
//        this._productions.toArray().forEach( i => productionList.add(i))

        const productionList: List<Production> = new List<Production>(0)
        //productionList.addAll(this._productions); // addAll com problema.
        productionList.setItems(this._productions.toArray());

		for (let i = 0 ; i < this.SEMANTIC_ACTION_COUNT + 1; i++) {
			nonTerminalNew[nonTerminalOld.length+i] = "<#"+i+">";
            productionList.add(new Production(null, this.FIRST_SEMANTIC_ACTION() + i, []));// TODO: Validar tipo de entrada
		}

		nonTerminalNew[nonTerminalNew.length - 1] = "<-START->";
        const production: Production =  new Production(null, this.FIRST_SEMANTIC_ACTION() + newSymbols - 1,  [this.startSymbol]);       
		productionList.add(production);

		const grammar: Grammar = new Grammar(terminals, nonTerminalNew, productionList, this.FIRST_SEMANTIC_ACTION() + newSymbols - 1);
		
		grammar.normalLR = true;
		
		return grammar;
	}

    /**
     * Cria uma nova produção. Se a produção criada já existe na gramática,
     * null é retornado.
     * 
     * @param lhs lado esquerdo da produção
     * @param rhs? lado direito da produção
     * 
     * @return produção gerada, ou null se esta já existir
     * */
    public createProduction(lhs: number, rhs?: number[]): Production | null {
        
        if(rhs === undefined) return new Production(this, lhs, []);
        
        const p: Production = new Production(this, lhs, rhs);
        for (let i = 0; i < this._productions.size(); i++)
            if (this._productions.get(i).equals( p ))
                return null;
                
        return p;
    }

    public isEpsilon(x: number[], start?: number): boolean {
		
        if(start === undefined) start = 0;
        
        for (let i = start ; i < x.length; i++)
			if (!this.isSemanticAction(x[i]))
				return false;
		return true;
	}


	/**
     * @return BitSet indicando os symbolos que derivam Epsilon
     */
    private markEpsilon(): OrderedIntegerSet {
        const result: OrderedIntegerSet = new OrderedIntegerSet();

        for (let i = 0; i < this._productions.size(); i++)
        {
            const production: Production = this._productions.get(i);
            if (this.isEpsilon(production.get_rhs()))
                result.add(production.get_lhs());
        }
        for (let i = this.FIRST_SEMANTIC_ACTION(); i <= this.LAST_SEMANTIC_ACTION(); i++)
        	result.add(i);
        	
        let change = true;
        while (change) {
            change = false;
            let derivesEpsilon: boolean;
            for (let i = 0; i < this._productions.size(); i++)
            {
                const P = this._productions.get(i);
                derivesEpsilon = true;
                for (let j = 0; j < P.get_rhs().length; j++)
                {
                    derivesEpsilon = derivesEpsilon && result.has(P.get_rhs()[j]);
                }
                if (derivesEpsilon && !result.has(P.get_lhs()))
                {
                    change = true;
                    result.add(P.get_lhs());
                }
            }
        }
        return result;
    }

    private static EMPTY_SET: OrderedIntegerSet = new OrderedIntegerSet(Grammar.EPSILON);
	
    public first(x: number[] | number, start?: number): OrderedIntegerSet {

        if(!Array.isArray(x)){
            if (this.isSemanticAction(x))
                return Grammar.EMPTY_SET;
            else
                return this.firstSet[x];
        }
        
        if(start === undefined) start = 0;

		const result: OrderedIntegerSet = new OrderedIntegerSet();

        //console.log("x: " + x + " | start: " +  start);
		
		if (x.length - start == 1 && x[start] == Grammar.DOLLAR){
            result.add(Grammar.DOLLAR);
            //console.log("DOLLAR");
        }
		if (this.isEpsilon(x, start)){
			result.add(Grammar.EPSILON);
            //console.log("EPSILON");
        }
		else {
			const k: number = x.length;
			while (this.isSemanticAction(x[start]))
				start++;
				
            //console.log("k: " + k + " | start: " + start);

			//let f: OrderedIntegerSet = cloneDeep(this.first(x[start]));
            let f: OrderedIntegerSet = this.first( x[start] ).clone()
            f.delete(Grammar.EPSILON);

            //console.log("f: " + f.toString());

            result.addAll(f);

            //console.log("result: " + result.toString());

            let i = start;
            while (i < k-1 && this.first(x[i]).has(Grammar.EPSILON))
            {
                i++;
                //f =  cloneDeep(this.first(x[i]));
                f = this.first(x[i]).clone();
                f.delete(Grammar.EPSILON);
                result.addAll(f);

                //console.log("loop result: " + result.toString());

            }
            if (i == k-1 && this.first(x[i]).has(Grammar.EPSILON)){
                result.add(Grammar.EPSILON);
                //console.log("EPSILON END");
            }
		}
        //console.log("END result: " + result.toString());
		return result;
	}

    /**
     * Calcula os conjuntos FIRST de todos os símbolos de Gramática
     */
    private fillFirstSet() {
        const derivesEpsilon: OrderedIntegerSet = this.markEpsilon();
        this.firstSet =  new Array<OrderedIntegerSet>();
        for (let i = 0; i < this._symbols.length; i++) {
            this.firstSet[i] = new OrderedIntegerSet();
        }

        //console.log("Tamnaho: " + this.firstSet.length);
        //console.log("Set: " +  this.firstSet.toString());

        for (let A = this.FIRST_NON_TERMINAL; A < this.FIRST_SEMANTIC_ACTION(); A++)
        {
            if (derivesEpsilon.has(A))
                this.firstSet[A].add(Grammar.EPSILON);
        }

        //console.log("Epsilon: " + this.firstSet.toString());

        for (let a = Grammar.FIRST_TERMINAL; a < this.FIRST_NON_TERMINAL; a++) {
            this.firstSet[a].add(a);
            for (let A = this.FIRST_NON_TERMINAL; A < this.FIRST_SEMANTIC_ACTION(); A++) {
                let exists: boolean = false;
                for (let i = 0; i < this._productions.size(); i++) {
                    const P: Production = this._productions.get(i);
                    if (P.get_lhs() == A && !this.isEpsilon(P.get_rhs()) && P.firstSymbol() == a) {
                        exists = true;
                        break;
                    }
                }
                if (exists)
                    this.firstSet[A].add(a);
            }
        }

        //console.log("For: " + this.firstSet.toString());

        let changed: boolean;
        do {
            changed = false;
            // for (let i = 0; i < this._productions.size(); i++)
            // {
            //     let P: Production = this._productions.get(i);
            //     let old: OrderedIntegerSet =  cloneDeep(this.firstSet[P.get_lhs()]);
            //     let testeFirst = this.first(P.get_rhs());
            //     //console.log("Index: " + i + " | fist: " + testeFirst.toString())
            //     this.firstSet[P.get_lhs()].addAll(testeFirst);
            //     if (!changed && ! (old.equals(this.first(P.get_lhs()))))
            //         changed = true;
            // }

            for (let i = 0; i < this._productions.size(); i++) {
                const P = this._productions.get(i);
                //const old = cloneDeep(this.firstSet[P.get_lhs()]);
                const old = this.firstSet[P.get_lhs()].clone();
                const testeFirst = this.first(P.get_rhs());
                //console.log(`Index: ${i} | fist: ${testeFirst.toString()}`);
                this.firstSet[P.get_lhs()].addAll(testeFirst);
                if (!changed){
                    if(!old.equals(this.first(P.get_lhs()))){
                        changed = true;
                        //console.log("changed: " + changed);
                    }
                }
            }

        }
        while (changed);
        //console.log("End: " + this.firstSet.toString());
    }
        
	/**
     * Calcula os conjuntos FOLLOW de todos os símbolos não terminais de Gramática
     */
    private fillFollowSet() {
        //console.log("_________________START followSet_____________________")
        this.followSet = new Array<OrderedIntegerSet>();

        for (let i = 0; i < this._symbols.length; i++) {
            this.followSet[i] = new OrderedIntegerSet();
        }

        this.followSet[this._startSymbol].add(Grammar.DOLLAR); // TODO Validar comportamento FIRST_SEMANTIC_ACTION
        let changes: boolean;
        
        //console.log("DOLLAR: " + this.followSet.toString());

        do {
            changes = false;
            for (let i = 0; i <this._productions.size(); i++)
            {
                const P: Production = this._productions.get(i);
                for (let j = 0 ; j < P.get_rhs().length; j++)
                {

                    //console.log("Index i: " + i + " Limit:" + this._productions.size() + " | Index j: " +  j + " Limit:" + P.get_rhs().length);

                    if (this.isNonTerminal(P.get_rhs()[j])) {
                        
                    	const s: OrderedIntegerSet = this.first(P.get_rhs(), j + 1);
                        const deriveEpsilon: boolean = s.has(Grammar.EPSILON);

                        //console.log("S: " + s.toString());
                        //console.log("deriveEpsilon: " + deriveEpsilon);

                        if( P.get_rhs().length > j+1 ) {
                            s.delete(Grammar.EPSILON);
                            //const old: OrderedIntegerSet = cloneDeep(this.followSet[P.get_rhs()[j]]);
                            const old: OrderedIntegerSet = this.followSet[P.get_rhs()[j]].clone();
                            this.followSet[P.get_rhs()[j]].addAll(s);
                            if (!changes && !this.followSet[P.get_rhs()[j]].equals(old))
                                changes = true;
                        }

                        if (deriveEpsilon) {
                        	//const old: OrderedIntegerSet = cloneDeep(this.followSet[P.get_rhs()[j]]);
                            const old: OrderedIntegerSet = this.followSet[P.get_rhs()[j]].clone();
                            this.followSet[P.get_rhs()[j]].addAll(this.followSet[P.get_lhs()]);
                            if (!changes && !this.followSet[P.get_rhs()[j]].equals(old))
                                changes = true;
                        }
                    }
                }
            }
        }
        while (changes);
    }

     /**
     * Gera uma representação String dos conjuntos First e Follow
     * @return First e Follow como uma String
     */
    public stringFirstFollow(): string {
        let result = "";
        for (let i = this.FIRST_NON_TERMINAL; i < this.firstSet.length; i++) {
            let bfr = "";
            bfr += `FIRST( ${this.symbols[i]} ) = { `;
            for (let j = 0; j < this.firstSet[i].size; j++) {
                if (this.firstSet[i].list()[j])
                    bfr += `${this.symbols[j]} `;
            }
            bfr += "}";
            result =+ bfr + '\n';
        }
        for (let i = this.FIRST_NON_TERMINAL; i < this.followSet.length; i++) {
            let bfr = "";
            bfr += `FOLLOW(${this.symbols[i]}) = { `;
            for (let j = 0; j < this.followSet[i].size; j++) {
                if (this.followSet[i].list()[j])
                    bfr += this.symbols[j] + " ";
            }
            bfr += "}";
            result += bfr + '\n';
        }
        return result;
    }

    public ffAsHTML(): string {
    	let result = "";
        // //console.log(this.symbols)
        // this.firstSet.forEach((item) => //console.log(item.toString()) )
		result += 
			"<HTML>"+
			"<HEAD>"+
			"<TITLE>First &amp; Follow</TITLE>"+
			"</HEAD>"+
			"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">"+
			"<TABLE border=1 cellspacing=0>";
			
		result +=
			"<TR align=center>"+
			"<TD bgcolor=black><FONT color=white><B>SÍMBOLO</B></FONT></TD>"+
			"<TD bgcolor=black><FONT color=white><B>FIRST</B></FONT></TD>"+
			"<TD bgcolor=black><FONT color=white><B>FOLLOW</B></FONT></TD>"+
			"</TR>";
		
		for (let i = this.FIRST_NON_TERMINAL; i < this.FIRST_SEMANTIC_ACTION(); i++) {

        	result += "<TR align=center>";
			
			result += `<TD nowrap bgcolor=#F5F5F5><B> ${HTMLDialog.translateString(this.symbols[i])} </B></TD>`;
			
			let bfr = "  ";

            // //console.log(`i: ${i}` )
            // //console.log(this.firstSet[i])
            // //console.log( this.firstSet[i].length())

            this.firstSet[i].list().forEach( (item) => bfr += this.symbols[item] + ", " )

            // for (let j = 0; j < this.firstSet[i].length(); j++)
            // {
            //     //console.log(`i: ${i} j: ${j}`)
            //     //console.log(this.firstSet[i].list()[j])
            //     // this.firstSet[i].list()[j]

            //     //if (this.firstSet[i].list().includes(j))
            //     if (this.firstSet[i].has(this.firstSet[i].list()[j])){
            //         // //console.log("Entrou")
            //         bfr += this.symbols[j] + ", ";
            //     }
            // }
            
            bfr = bfr.slice(0, -2);
            
            result += `<TD nowrap bgcolor=#F5F5F5>${HTMLDialog.translateString(bfr)}</TD>`;
			
            bfr = "  ";

            this.followSet[i].list().forEach( (item) => bfr += this.symbols[item] + ", " )

            // for (let j = 0; j < this.followSet[i].length(); j++)
            // {
            //     //if (this.followSet[i].list().includes(j))
            //     if (this.followSet[i].has(j))
            //         bfr += this.symbols[j] + ", ";
            // }

            bfr = bfr.slice(0, -2);
            
            result += `<TD nowrap bgcolor=#F5F5F5>${HTMLDialog.translateString(bfr)}</TD>`;
            
            result += "</TR>";
        }
			
		result += 
			"</TABLE>"+
			"</FONT></BODY>"+
			"</HTML>";
			
		return result;
    }


    /**
     * Remove os estados improdutivos da gramática
     * @throws EmptyGrammarException se o símbolo inicial for removido
     */
    public removeImproductiveSymbols() { //TODO: throws EmptyGrammarException
    	const SP: OrderedIntegerSet = this.getProductiveSymbols();
        this.updateSymbols(SP);
    }

    /**
     * Remove os estados inúteis, os inprodutívos e os inalcansáveis
     * @throws EmptyGrammarException se o símbolo inicial for removido
     */
    public removeUselessSymbols(){ //TODO: throws EmptyGrammarException
        this.removeImproductiveSymbols();
        this.removeUnreachableSymbols();
        //removeRepeatedProductions();
    }

	/**
	 * Elimina as produções repetidas da gramática.
	 */	
	private removeRepeatedProductions() //TODO: throws EmptyGrammarException
	{/*
		BitSet repeated = new BitSet();
		sortProductions();
		
		Production p = productions[0];		
		for (int i = 1; i < productions.size(); i++)
		{
			Production local = productions.get(i);
			if (local.equals(p))
				repeated.set(i);
			p = local;
		}
		
		//retira as produçoes que não possuem símbolos úteis
        Production[] P = new Production[productions.size()];
        int k = 0;
        for (int i=0;i<productions.size();i++)
        {
            if (! repeated.get(i))
                P[k++] = productions.get(i);
        }
        productions = new Production[k];
        for (int i=0; i< productions.size(); i++)
            productions.get(i) = P[i];*/
	}

    /**
     * Calcula as produções cujo lado esquerdo é <code>symbol</code>
     * @return BitSet indicando essas produções
     */
    public productionsFor(symbol: number): OrderedIntegerSet {       
    	const result: OrderedIntegerSet = new OrderedIntegerSet();
        for (let i = 0; i < this.productions.size(); i++)
        {
            if (this.productions.get(i).get_lhs() == symbol)
                result.add(i);
        }
        return result;
    }


    /**
     * Transforma as recursões à esquerda indiretas em recusões diretas
     * @param prods produções para serem processadas
     * @return lista de produçoes sem recursão indireta
     */
    private transformToFindRecursion(prods: List<Production>): List<Production> {
        const prodList: List<Production> = new List<Production>();
        prods.toArray().forEach( i => prodList.add(i));
        for (let i = this.FIRST_NON_TERMINAL; i < this.FIRST_SEMANTIC_ACTION(); i++ ) {
            for (let j = this.FIRST_NON_TERMINAL ; j < i ; j++) {
                for (let it = 0; it < prodList.size(); it++) {
                    const P: Production = prodList.get(it);
                    if (P.get_lhs() == i && P.firstSymbol() == j) {  
                        prodList.toArray().splice(it,1);
                        it--;
                        const actions: number[] = [];
                        for (let k = 0; k < P.get_rhs().length && this.isSemanticAction(P.get_rhs()[k]); k++)
							actions.push(P.get_rhs()[k]);
							
                        for (let it2 = 0; it2 < prodList.size(); it2++) {
                            const P2: Production = prodList.get(it2);
                            if (P2.get_lhs() == j) {
                                const rhs: number[] = new Array<number>(P2.get_rhs().length + P.get_rhs().length - 1);
                                let k = 0;
                                for ( ; k<actions.length; k++)
                                	rhs[k] = actions[k];
                                let m = k;
                                for ( k = 0 ; k < P2.get_rhs().length; k++)
                                    rhs[k + m] = P2.get_rhs()[k];
                                m = m + k - (actions.length + 1);
                                for ( k = actions.length + 1; k<P.get_rhs().length; k++)
                                    rhs[k + m] = P.get_rhs()[k];
                                
                                const newProduction = this.createProduction(P.get_lhs(), rhs);
                                if (newProduction != null)
                                    prodList.add(newProduction);
                            }
                        }
                    }
                }
            }
        }
        return prodList;
    }

    /**
     * Remove as recursões á esquerda da gramática.
     * Primeiramente transforma a gramática para que as recursões
     * indiretas se tornem diretas. Em seguida remove as recursões
     * diretas
     */
    public removeRecursion() {
        this._productions = this.transformToFindRecursion(this._productions);
        this.removeDirectRecursion();
    }

    /**
     * Remove as recursões á esquerda da gramática.
     *  É preciso que não existam recursões indiretas
     */
    private removeDirectRecursion() {
        for (let i = this.FIRST_NON_TERMINAL ; i < this.FIRST_SEMANTIC_ACTION() ; i++) {
            let recursive = this.productionsFor(i);
            const prods = this.productionsFor(i);
            let newSymbol = -1;

            const recursiveArray = recursive.list();

            for (let i = 0; i < recursiveArray.length ; i++) {
                const x = recursiveArray[i];
                if (this._productions.get(x).get_lhs() != this._productions.get(x).firstSymbol())
                    recursiveArray.splice(i, 1);
            }

            recursive = new OrderedIntegerSet();
            recursive.addAllArray(recursiveArray);

            if (recursive.size > 0) {
                newSymbol = this.createSymbol(this.addTail(this._symbols[i]));
                for (const x of prods) {
                    const P: Production = this._productions.get(x);
                    if (recursive.list()[x])
                    {
                        P.get_rhs().splice(0,1);
                        P.get_rhs().push(newSymbol);
                        P.set_lhs(newSymbol);
                    }
                    else
                    {
                    	P.get_rhs().push(newSymbol);
                    }
                }
            }
            if (newSymbol != -1){
                const producton = this.createProduction(newSymbol)
                if(producton != null)
                    this.productions.add(producton);
            }
        }
        this.fillFirstSet();
        this.fillFollowSet();
        this.sort();
    }

	private createSymbol(s: string): number {
		
        for(const p of this._productions){
			const rhs: number[] = p.get_rhs();
			for (let j=0; j<rhs.length; j++)
				if (this.isSemanticAction(rhs[j]))
					rhs.push(j, rhs[j] + 1);
		}

		let newSymbols: string[] = new Array<string>(this._symbols.length+1);
		newSymbols = [...this._symbols];
		this._symbols = newSymbols;
		this._symbols[this._symbols.length-1] = s;
		
		return this._symbols.length-1;
	}

	/**
	 * Verifica se o símbolo a deriva o simbolo b em 0 ou mais passos.
	 * 
	 * @param a índice do primeiro símbolo
	 * @param b índice do segundo símbolo
	 */
	private derives(a: number, b: number): boolean {
		if (a == b)
			return true;
		
		const src: OrderedIntegerSet = new OrderedIntegerSet();
		
		src.add(b);
		
		for (let i=this.FIRST_NON_TERMINAL; i<this.FIRST_SEMANTIC_ACTION(); i++)
		{
			for (const cur of src)	
			{
				if (this.derivesDirectly(i, cur) && !src.list()[i])
				{
					src.add(i);
					i = -1;
					//break;
					continue;
				}
			}			
		}
		
		return src.list()[a] != 0;// TODO: Validar
	}

	/**
	 * Verifica se o símbolo a deriva o simbolo b diretamente.
	 * 
	 * @param a índice do primeiro símbolo
	 * @param b índice do segundo símbolo
	 */	
	private derivesDirectly(a: number, b: number): boolean {		
		
        const derivesEpsilon = this.markEpsilon();
					
		for (let i = 0 ; i < this._productions.size(); i++) {
			const p: Production = this._productions.get(i);
			
			if (p.get_lhs() == a) {
				if (p.get_rhs().length == 1) {
					if (p.get_rhs()[0] == b)
						return true;
				}
				else {
					const rhs: number[] = p.get_rhs();
					
					for (let j = 0 ; j < rhs.length ; j++)
					{
						if (rhs[j] == b)
						{
							let allEpsilon = true;
							for (let k=0; k<j; k++) {
								if (! derivesEpsilon.list()[rhs[k]])
									allEpsilon = false;
							}
							for (let k = j + 1 ; k < rhs.length; k++) {
								if (! derivesEpsilon.list()[rhs[k]])
									allEpsilon = false;
							}
							if (allEpsilon)
								return true;
						}
					}
				}		
			}
		}
		return false;
	}

    /**
     * Remove as produçoes Unitárias.
     * Estas produções são aquelas da forma A ::= X, onde X é um não-terminal.
     */
    public removeUnitaryProductions() {
		const prods = new List<Production>();
        // as produções que NÃO são ciclos são adicionadas a prods
        for (let i = 0; i < this._productions.size(); i++) {
            const p: Production = this._productions.get(i);
            if (p.get_rhs().length != 1 || p.get_rhs()[0] != p.get_lhs())
                prods.add(p);
        }
        
        const N: OrderedIntegerSet[] = [];
        
        for (let i = this.FIRST_NON_TERMINAL; i < N.length; i++) {
        	N[i] = new OrderedIntegerSet();
        	for (let j = this.FIRST_NON_TERMINAL; j < this.FIRST_SEMANTIC_ACTION(); j++)
        		if (this.derives(i, j))
        			N[i].add(j);
        }
        
        this._productions = new List<Production>();
        
        for (let i = 0 ;  i < prods.size() ; i++) {
        	const p: Production = prods.get(i);
        	if (p.get_rhs().length != 1 || !this.isNonTerminal(p.get_rhs()[0])) {
        		for (let j = this.FIRST_NON_TERMINAL ; j < N.length ; j++) {
        			if (N[j].list()[p.get_lhs()]) {
        				const np = this.createProduction(j,p.get_rhs());
        				if (np != null)
	        				this._productions.add(np);
        			}
        		}        		
        	}
        }

        //TODO: terminar este algoritimo
        this.sort();
    }

    /**
     * Remove as Epsilon-Produções da Gramática
     */
    public removeEpsilon() {   
		const E = this.markEpsilon();		
        const prods = new List<Production>();
        	   
        for (let i = 0 ; i < this._productions.size() ; i++) {
        	const p: Production = this._productions.get(i);
        	if ( ! this.isEpsilon( p.get_rhs() ) )
        	{
        		let derivesEpsilon = true;
                for (let j = 0; j < p.get_rhs().length; j++)
                {
                   // derivesEpsilon = derivesEpsilon && E.list()[p.get_rhs()[j]]; //TODO: Validate the return of the BitSet
                
                   derivesEpsilon = derivesEpsilon && (E.list()[p.get_rhs()[j]] != 0);
                
                }
                if (! derivesEpsilon)
	        		prods.add(p);
        	}
        }
        
        for (let it = 0; it < prods.size(); it++) {

            const p: Production = prods.get(it);   

            if (! this.isEpsilon( p.get_rhs() ))//?INUTIL?
            {
                let i = 0;
                while (i < p.get_rhs().length) {
                    //procura pelo epsilon-NT
                    for (; i<p.get_rhs().length; i++) {
                        if (!this.isSemanticAction(p.get_rhs()[i]) && E.list()[p.get_rhs()[i]])
                            break;
                    }
                    if (i < p.get_rhs().length) {
                    	const pNew: Production | null = this.derivationAt(p, i);
                    	if (pNew != null && !prods.contains(pNew))
                    		prods.add(pNew);
                        i++;
                    }
                }
            }
        }
        if (E.list()[this._startSymbol])
        {
         //   String newSymbol = ;
//
  //          String[] s = new String[symbols.length+1];
    //        System.arraycopy(symbols, 0, s, 0, symbols.length);
      //      symbols = s;
        //    int newPos = symbols.length-1;
          //  symbols[newPos] = newSymbol;
            
            const newPos = this.createSymbol(this.addTail(this._symbols[this._startSymbol]));

            let production = this.createProduction(newPos, new Array<number>(this._startSymbol))
            if(production != null) prods.add(production);
            
            production = this.createProduction(newPos) 
            if(production != null) prods.add(production);

            this._startSymbol = newPos;

            this.fillFirstSet();
            this.fillFollowSet();
        }
        this._productions = prods;

        this.sort();
    }
    
    private derivationAt(p: Production, index: number): Production | null{
    	let rhsP = new Array<number>;
    	for (let k = 0 ; k < this._productions.size(); k++) {
    		if ( (this._productions.get(k).get_lhs() == p.get_rhs()[index]) && 
    				(this.isEpsilon(this._productions.get(k).get_rhs())) )
    		{
    			rhsP = this._productions.get(k).get_rhs();
    			break;
    		}
    	} 
    	const rhs = new Array<number>;
    	//int[] rhs = new int[p.get_rhs().length-1];
        for (let k=0; k < index; k++)
            rhs.push(p.get_rhs()[k]);
        for (let k=0; k < rhsP.length; k++)
        	rhs.push(rhsP[k]);
        	
        for (let k = index + 1 ; k < p.get_rhs().length; k++)
            rhs.push(p.get_rhs()[k]);
            
        return this.createProduction(p.get_lhs(), rhs);    	
    }

    private addTail(s: string): string {
    	s = s.substring(0,s.length - 1) + "_T>";
    	
        for (let i = 0; i < this._symbols.length; i++){
            if (this._symbols[i] != null && (this._symbols[i] == s)) {
                s = s.substring(0,s.length-1) + "_T>";
                i = 0;
            }
        }
        return s;
    }

    /**
     * Reordena os símbolos e as produções
     */
    public sort() {    	
    	for (let i = this.FIRST_NON_TERMINAL; i < this.FIRST_SEMANTIC_ACTION(); i++)
    	{
    		const s: string = this._symbols[i].substring(0, this._symbols[i].length - 1 ) + "_T>";
    		let j = i + 1;
    		for ( ; j < this.FIRST_SEMANTIC_ACTION(); j++)
    			if (this._symbols[j] == s )
    				break;
    		if (j < this.FIRST_SEMANTIC_ACTION()) //achou
    		{
    			const to = i + 1, 
    			from = j;
    			    
    			if (to != from)
    			{
    				this.moveSymbol(from, to);
    			}
    		}
    	}

    	this.moveSymbol(this._startSymbol, this.FIRST_NON_TERMINAL);
    	
        const sortedProductions = this._productions.toArray().sort(Production.compareTo); // TODO validar

    	this._productions.clear();

        sortedProductions.forEach(i => this._productions.add(i));
    }
    
	private moveSymbol(from: number, to: number) {
		const s: string = this._symbols[from];
		for (let k = from ; k > to ; k--)
			this._symbols[k] = this._symbols[k-1];
		this._symbols[to] = s;
		
		if (this._startSymbol == from)
			this._startSymbol = to;
		else if (this._startSymbol >= to && this._startSymbol < from)
			this._startSymbol++;
		
		for (const p of this._productions) {
			
			if (p.get_lhs() == from)
				p.set_lhs(to);
			else if (p.get_lhs() >= to && p.get_lhs() < from)
				p.set_lhs(p.get_lhs() + 1);
			const rhs: number[] = p.get_rhs();
			for (let k=0; k < rhs.length; k++)
			{
				if (rhs[k] == from)
					rhs.push(k, to);
				else if (rhs[k] >= to && rhs[k] < from)
					rhs.push(k, rhs[k] + 1);
			}
		}
	}


    /**
     * Verifica as condições para esta gramática ser LL
     */
    public isLL(): boolean {
        return (    this.isFactored() && 
        	        !this.hasLeftRecursion() &&         	
        	        this.passThirdCondition());
    }

    /**
     * Verifica se esta gramática possui recursão à esquerda
     */
    public hasLeftRecursion(): boolean {
        const prods: List<Production> = this.transformToFindRecursion(this._productions);
        
		for (let i = 0; i < prods.size(); i++)
        {
            if (prods.get(i).get_lhs() == prods.get(i).firstSymbol())
            {
            	return true;
            }
            
        }
        return false;
    }
    
    public getLeftRecursiveSimbol(): number {
        const prods: List<Production> = this.transformToFindRecursion(this._productions);
    
        for (let i = 0; i < prods.size(); i++)
        {
            if (prods.get(i).get_lhs() == prods.get(i).firstSymbol())
            {
                return prods.get(i).get_lhs();
            }
        
        }
        return -1;
    }

    /**
     * 
     * @return um BitSet contendo produçoes não fatoradas
     */
    public getNonFactoratedProductions(): OrderedIntegerSet {
    	const result = new OrderedIntegerSet();
        
        for (let i=0; i< this._productions.size(); i++)
        {
            const p1: Production = this._productions.get(i);
            for (let j=i+1; j< this.productions.size(); j++)
            {
                const p2: Production = this._productions.get(j);

                if (p1.get_lhs() == p2.get_lhs())
                {
                	const first: OrderedIntegerSet = this.first(p1.get_rhs());
                    //first.retainAll(this.first(p2.get_rhs()));
                    first.intersection(this.first(p2.get_rhs()))
                    if (! first.isEmpty())
                    {
                        result.add(i);
                        result.add(j);
                    }
                }
            }
            if (result.size > 0)
                break;
        }
        
        return result;
    }

    /**
     * Verifica se esta gramática está fatorada
     */
    public isFactored(): boolean {
        for (let i=0; i< this._productions.size(); i++)
        {
            const P1: Production = this._productions.get(i);
            for (let j=i+1; j< this._productions.size(); j++)
            {
                const P2: Production = this.productions.get(j);

                if (P1.get_lhs() == P2.get_lhs())
                {
                	const first = this.first(P1.get_rhs());
                    //first.retainAll(this.first(P2.get_rhs()));
                    first.intersection(this.first(P2.get_rhs()))
                    if (! first.isEmpty())
                        return false;
                }
            }
        }
        return true;
    }

    /**
     * Verifica a terceira condição LL
     */
    public passThirdCondition(): boolean
    {
    	const derivesEpsilon: OrderedIntegerSet = this.markEpsilon();
        for (let i=this.FIRST_NON_TERMINAL; i<this.FIRST_SEMANTIC_ACTION(); i++)
        {
            if (derivesEpsilon.has(i))
            {
            	const first = new OrderedIntegerSet(this.firstSet[i]);
                //first.retainAll(this.followSet[i]);
                first.intersection(this.followSet[i])
                if (! first.isEmpty())
                    return false;
            }
        }
        return true;
    }

    /**
     * Calcula os estados produtivos
     * @return conjunto dos estados produtivos
     */
    private getProductiveSymbols(): OrderedIntegerSet
    {
    	const SP = new OrderedIntegerSet();
        for (let i = Grammar.FIRST_TERMINAL; i< this.FIRST_NON_TERMINAL; i++)
            SP.add(i);

        for (let i=this.FIRST_SEMANTIC_ACTION(); i<= this.LAST_SEMANTIC_ACTION(); i++)
            SP.add(i);
            
        SP.add(Grammar.EPSILON);
        let change: boolean;

        do
        {
            change = false;
            const Q = new OrderedIntegerSet();
            for (let i=this.FIRST_NON_TERMINAL; i<this.FIRST_SEMANTIC_ACTION(); i++)
            {
                if (! SP.has(i))
                {
                    for (let j=0; j< this._productions.size(); j++)
                    {
                        const P = this._productions.get(j);
                        if (P.get_lhs() == i)
                        {
                            let pass = true;
                            for (let k=0; k<P.get_rhs().length; k++)
                                pass = pass && SP.has(P.get_rhs()[k]);
                            if (pass)
                            {
                                Q.add(i);
                                change = true;
                            }
                        }
                    }
                }
            }
            SP.addAll(Q);
        }
        while (change);
        return SP;
    }

    /**
     * Remove os símbolos inalcançáveis da gramática
     * @throws EmptyGrammarException se o símbolo inicial for removido
     */
    protected removeUnreachableSymbols() //TODO: throws EmptyGrammarException
    {
    	const SA: OrderedIntegerSet = this.getReachableSymbols();

        this.updateSymbols(SA);
    }


    /**
     * Calcula os símbolos que são alcansáveis
     *
     * @return BitSet indicando os symbolos alcansáveis
     */
    private getReachableSymbols(): OrderedIntegerSet
    {
    	const SA = new OrderedIntegerSet();
        SA.add(this._startSymbol);
        let change: boolean;
        do
        {
            change = false;
            const M = new OrderedIntegerSet();
            for (let i=0; i<this._symbols.length; i++)
            {
                if (! SA.has(i))
                {
                    for (let j=0; j< this.productions.size(); j++)
                    {
                        const P: Production = this._productions.get(j);
                        if (SA.has(P.get_lhs()))
                        {
                            for (let k=0; k<P.get_rhs().length; k++)
                            {
                                if (P.get_rhs()[k] == i)
                                {
                                    M.add(i);
                                    change = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            SA.addAll(M);
        }
        while (change);
        return SA;
    }

	public uselessSymbolsHTML(): string
	{
		const clone: Grammar = this.clone();
		
		try
		{
			clone.removeUselessSymbols();
		}
		catch (e)
		{
            console.warn(e);
		}
		
		const cs: string[]  = clone.symbols;
		
		const s = new OrderedIntegerSet();
		
		
		for (let i=2; i<this._symbols.length; i++)
		{
			for (let j=0; j<cs.length; j++)
			{
				if (cs[j] == this._symbols[i])
				{
					s.add(i);
					break;
				}
			}
		}
		
		let result = "";
		
		result +=
					"<HTML>"+
					"<HEAD>"+
					"<TITLE>Símbolos inúteis</TITLE>"+
					"</HEAD>"+
					"<BODY><FONT face=\"Verdana, Arial, Helvetica, sans-serif\">";
		
		let count = 0;
		for (let i=2; i<this._symbols.length; i++)
		{
			if (!s.has(i))
			{
				result +=  this._symbols[i] + "<br>";
				count++;
			}
		}
		if (count == 0)
			result += "Não há símbolos inúteis";
		
		result +=
					"</TABLE>"+
					"</FONT></BODY>"+
					"</HTML>";
		
		return result;
	}

    /**
     * Gera uma representação de um BitSet utilizando os símbolos da Gramática
     *
     * @param b BitSet a ser convertido
     *
     * @return representação do BitSet
     */
    public setToStr(b: OrderedIntegerSet): string
    {
    	let bfr = "{ ";
        for (let j = 0; j < b.size; j++)
        {
            if (b.list()[j])
                bfr += "\"" + this._symbols[j] + "\" ";
        }
        bfr += "}";
        return bfr;
    }

    /**
     * Fatora a gramática
     */

    public factorate() //throws LeftRecursionException
    {
        if (this.hasLeftRecursion())
            throw Error("new LeftRecursionException();")//new LeftRecursionException();

		let change = true;
		while (change)
		{
			change = false;
        	for (let i=this.FIRST_NON_TERMINAL; i<this.FIRST_SEMANTIC_ACTION(); i++)
        	{
            	change = change || this.factorateLeft(i);
        	}
		}
    }

    /**
     * Efetua a fatoração das produções que possuam <code>symb</code> como lado esquerdo
     *
     * @param symb lado esquerdo das produções a serem fatoradas
     * @return <code>true</code> se hove alguma mudança, <code>fals</code>e em caso contrário
     */
    private factorateLeft(symb: number): boolean
    {
    	let result = false;
        const prods = this.productionsFor(symb);

        let conflict = new OrderedIntegerSet();

        const confictSymbol = this.conflict(prods, conflict);

        if (! conflict.isEmpty())
        {
            result = true;
            
			//transforma as producoes para revelar os conflito indiretos
            for (let i=0; i< this._productions.size(); i++)
            {
                const p: Production = this._productions.get(i);
                if (p.get_lhs() == symb && this.first(p.get_rhs()).list()[confictSymbol] && p.firstSymbol() != confictSymbol)
                {
                    const np: List<Production> = this.leftMostDerive(p);
                    this._productions.toArray().splice(i,1); // TODO validar comportamento
                    np.toArray().forEach(pivot => this._productions.add(pivot));
                    i--;           
                    this.fillFirstSet();
            		this.fillFollowSet();         
                }
            }

            conflict = new OrderedIntegerSet();
            for (let i=0; i< this._productions.size(); i++)
            {
                const p: Production = this._productions.get(i);
                if (p.get_lhs() == symb && p.firstSymbol() == confictSymbol)
                {
                    conflict.add(i);
                }
            }

            const newIndex: number = this.createSymbol(this.addTail(this._symbols[symb]));

            const prefix: number[] = this.extractPrefix(conflict);

            //for (BitSetIterator it = new BitSetIterator(conflict); it.hasNext(); )
            for(const it of conflict.list())
            {
                const p: Production = this._productions.get(it);
                p.set_lhs(newIndex);
                if (p.get_rhs().length > prefix.length)
                    p.get_rhs().splice(0, prefix.length);
                else // p.rhs.length == prefix.length
                    p.clear_rhs();
            }
            const rhs = new Array<number>();
            rhs.push(...prefix);
            rhs.push(newIndex);

            const production = this.createProduction(symb, rhs);
            if(production != null) this._productions.add(production);
            
            this.fillFirstSet();
            this.fillFollowSet();
            this.sort();
        }
        return result;
    }

    /**
     * Executa uma derivação mais a esquerda na produção passada como parametro
     *
     * @param p produção a sofrer a derivação
     */
    public leftMostDerive(p: Production): List<Production> 
    {
    	if (this.isTerminal(p.firstSymbol()))
            return new List<Production>();
        else
        {
            const newProds = new List<Production>();
            const symb: number = p.firstSymbol();
            const actions = new Array<number>();
            for (let i=0; i<p.get_rhs().length && this.isSemanticAction(p.get_rhs()[i]); i++)
            	actions.push(p.get_rhs()[i]);

            //for (BitSetIterator it = new BitSetIterator(productionsFor(symb)); it.hasNext(); )
            for(const it of this.productionsFor(symb).list())
            {
                const p1: Production = this.productions.get(it);
                const rhs = new Array<number>();
                for (let i=0 ; i < actions.length ; i++)
                	rhs.push(actions[i]);
                for (let i = 0 ; i < p1.get_rhs().length ; i++)
                	rhs.push(p1.get_rhs()[i]);
                for (let i = actions.length + 1 ; i<p.get_rhs().length; i++)
                	rhs.push(p.get_rhs()[i]);
                
                const n: Production | null = this.createProduction(p.get_lhs(), rhs);
                if (n != null && ! newProds.contains(n))
 	               newProds.add(n);
            }
            return newProds;
        }
    }

	/**
	 * Calcula o prefixo comum de um conjunto de produções.
	 *
	 * @param prods conjunto de produções com prefixo comum.
	 * 
	 * @return prefixo comum entre as produções. 
	 * 
	 */
	
    private extractPrefix(prods: OrderedIntegerSet): number[]
    {
    	const prefix = new Array<number>();
        let repeat: boolean;
        let index = 0;

        do {
            repeat = true;
            let it: number = 0; // prods ite
            const pro: Production = this._productions.get(it);
            if (pro.get_rhs().length > index)
            {
                const s = pro.get_rhs()[index];
                for ( ; it > prods.size; it++)
                {
                    const p: Production = this.productions.get(it);
                    if (p.get_rhs().length <= index || p.get_rhs()[index] != s)
                        repeat = false;
                }
                if (repeat)
                {
                    prefix.push(pro.get_rhs()[index]);
                    index++;
                }
            }
            else
                repeat = false;
        }
        while (repeat);
        return prefix;
    }

    /**
     * Seleciona em um conjunto de produções, aquelas que possuem
     * o mesmo simbolo iniciando o lado direito.
     * Caso existam dois grupos de produções conflitantes, o grupo maior
     * é selecionado
     *
     * @param prods produçoes a seram pesquizadas
     *
     * @return produções conflitantes
     */
    private conflict(prods: OrderedIntegerSet, result: OrderedIntegerSet): number
    {
    	const symbs = new Array<number>(this._symbols.length);
        //BitSet epsilon = markEpsilon();

        for (let i = 0; i < symbs.length; i++)
        {
            symbs[i] = 0;
        }

        //for (BitSetIterator it = new BitSetIterator(prods); it.hasNext(); )
        for (const it of prods)
        {
            const p: Production = this._productions.get(it);
            //for (BitSetIterator i=new BitSetIterator(first(p.get_rhs())); i.hasNext(); )
            for(const i of this.first(p.get_rhs()))
                symbs[i]++;
        }

        symbs[Grammar.EPSILON] = 0;
        symbs[Grammar.DOLLAR] = 0;

        let max = 0;
        let indexMax = 0;
        for (let i = 0; i < symbs.length; i++)
        {
            if (symbs[i] > max)
            {
                max = symbs[i];
                indexMax = i;
            }
        }

       // BitSet result = new BitSet();
        if (max > 1)
        {
            //for (BitSetIterator it = new BitSetIterator(prods); it.hasNext(); )
            for(const pos of prods)
            {
                if (this.first(this._productions.get(pos).get_rhs()).list()[indexMax])
                    result.add(pos);
            }
        }

        return indexMax;
    }

    /**
     * @return a representação de gramática em String
     */
    public toString(): string
    {
        let bfr = "";
        let lhs = "";
        let first = true;

        for (let i = 0; i < this.productions.size(); i++)
        {
            const P: Production = this._productions.get(i);
            if (!(this._symbols[P.get_lhs()] == lhs))
            {
            	if (! first)
            	{            	
            		bfr += ";\n\n";
            	}
            	first = false;
            	lhs = this._symbols[P.get_lhs()];
            	bfr += lhs + " ::=";
            }
            else
            {
            	bfr += "\n";
            	for (let j=0; j< lhs.length; j++)
            		bfr += " ";
				bfr += "   |";            	
            }	
            if (P.get_rhs().length == 0)
            {
				bfr += " " + Grammar.EPSILON_STR;
            }
            else
            {
	            for (let j = 0; j < P.get_rhs().length; j++)
	            {
	                bfr += " ";
	                if (this.isSemanticAction(P.get_rhs()[j]))
	                {
	                	const action = P.get_rhs()[j] - this.FIRST_SEMANTIC_ACTION();
	                	bfr += "#" + action;
	                }	
	                else
	                {
	                	const s: string = this._symbols[P.get_rhs()[j]];
	                	bfr += s;
	                }
	            }
            }
        }
        bfr += ";\n";
        return bfr;
    }

    /**
     * Cria uma cópia da Gramática
     */
    public clone(): Grammar{
    	try
		{
			const g: Grammar = structuredClone(this);
			
			const T: string[] = new Array<string>(this.FIRST_NON_TERMINAL-2);
			const N: string[] = new Array<string>(this.FIRST_SEMANTIC_ACTION() - this.FIRST_NON_TERMINAL);
			for (let i = 0; i < T.length; i++)
			     T[i] = (this._symbols[i+2]).toString();
			for (let i = 0; i < N.length; i++)
			     N[i] = (this._symbols[i+this.FIRST_NON_TERMINAL]).toString();
			const P = new List<Production>();
			for (let i = 0; i < this._productions.size(); i++)
			{
			    const rhs = new Array<number>(this._productions.get(i).get_rhs().length);
			    for (let j=0; j<rhs.length; j++)
			        rhs[j] = this._productions.get(i).get_rhs()[j];
			    P.add( new Production(null, this._productions.get(i).get_lhs(),rhs));
			}
			
			g.setSymbols(T, N, this._startSymbol);
			g.setProductions(P);
			g.fillFirstSet();
			g.fillFollowSet();
					
			return g;
		}
		catch (e)
		{
            console.warn(e);
			throw new Error("Internal Error");
		}
    }
    
    private removeSymbol(s: number)
    {
    	//let newSymbols: string[]  = new Array<string>(this._symbols.length-1);

        this._symbols.splice(s, 1)
    	//System.arraycopy(this._symbols, 0, newSymbols, 0, s);
    	//System.arraycopy(this._symbols, s+1, newSymbols, s, this._symbols.length - s - 1);
    	//this._symbols = newSymbols;
    	
    	if (this._startSymbol > s)
    		this._startSymbol--;
    	if (this.FIRST_NON_TERMINAL > s)
    		this.FIRST_NON_TERMINAL--;
        //for (Iterator i = this._productions; i.hasNext();)

    	for (let i = 0 ; i <  this._productions.size(); i++)
		{
			const p: Production = this.productions.get(i);
			
			if (p.get_lhs() == s)
			{
                this.productions.toArray().splice(i,1); //TODO validar
				continue;
			}
			else if (p.get_lhs() > s)
				p.set_lhs(p.get_lhs()-1);
				
			for (let j=0; j<p.get_rhs().length; j++)
			{
				if (p.get_rhs()[j] == s)
				{
                    this.productions.toArray().splice(i,1); //TODO validar
					break;
				}
				if (p.get_rhs()[j] > s)
					p.set_rhs(j, p.get_rhs()[j] - 1);
			}			
		}
    }
    
    /**
     * Remove todos os symbolos, exceto os que devem ser mantidos;
     * @paramam keep conjunto dos símbolos a serem mantidos
     * @throws EmptyGrammarException se o símbolo inicial for removido
     */
    private updateSymbols(keep: OrderedIntegerSet) //throws EmptyGrammarException
    {
        keep.add(Grammar.EPSILON);
        keep.add(Grammar.DOLLAR);

		/*
        if (checkEmpty && ! keep.get(startSymbol))
            throw new EmptyGrammarException();
        */
        let removed = 0;
        for (let i=0; i<this._symbols.length; i++)
        	if (! keep.list()[i] )
        	{
        		this.removeSymbol(i - removed);
        		removed++;
        	}
        
        this.fillFirstSet();
        this.fillFollowSet();
    }

}
