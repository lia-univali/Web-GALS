import { Stack } from '../DataStructures';
import { FiniteAutomataGenerator } from './FiniteAutomataGenerator';
import { Token } from '../analyser/Token';
import { SemanticError } from '../analyser/SystemErros';
import { Node } from './Node';

//TODO verificar tripo do retorno no Node

export class SemanticAnalyser{

    private _exp_simp1: Stack<Node> = new Stack<Node>();

	private _termo1: Stack<Node> = new Stack<Node>();

	private _fator: Stack<Node> = new Stack<Node>();

    private _gen: FiniteAutomataGenerator;

	private _token: Token | null = null;
    
    constructor(gen: FiniteAutomataGenerator){
        this._gen = gen;
    }

    public executeAction(action: number, currentToken: Token | null ){
        
        this._token = currentToken;

        try {
            switch(action){

                case 0:
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
                case 6:
                    this.action6();
                    break;
                case 7:
                    this.action7();
                    break;
                case 8:
                    this.action8();
                    break;
                case 9:
                    this.action9();
                    break;
                case 10:
                    this.action10();
                    break;
                case 11:
                    this.action11();
                    break;
                case 12:
                    this.action12();
                    break;
                case 13:
                    this.action13();
                    break;
                case 14:
                    this.action14();
                    break;
                case 15:
                    this.action15();
                    break;
            }
        }catch (error) {
            if(error instanceof SemanticError)
                throw new SemanticError(error.message);
        }
        //this.actions[action]();

        // try {
        //     let actionObj = this.actions[action];
            
        //     if(actionObj == null) return;
            
        //     this.actionsPromises.push(actionObj());

        //     actionObj()

        // } catch (error) {
        //     if(error instanceof SemanticError)
        //         throw new SemanticError(error.message);
        // }
    }

    public get root(){
        //Promise.all(this.actionsPromises);
        return this._exp_simp1.pop();
    }

    private action1(){

        let nodeResult: Node | undefined = this._termo1.pop()
        if(nodeResult == undefined) return;

        this._exp_simp1.push(nodeResult);
    }

    private action2(){

		let n1: Node | undefined = this._exp_simp1.pop();
		let n2: Node | undefined = this._termo1.pop();
        if(n1 == undefined || n2 == undefined) return;

        let nodeResult: Node| null = Node.createUnionNode(n1, n2);
        if(nodeResult == null) return;

		this._exp_simp1.push(nodeResult);
    }

    private action3(){

		let n2: Node | undefined = this._exp_simp1.pop();
		let n1: Node | undefined = this._exp_simp1.pop();
        if(n1 == undefined || n2 == undefined) return;

        let nodeResult: Node| null = Node.createContextNode(n1, n2);
        if(nodeResult == null) return;

		this._exp_simp1.push(nodeResult);  
    }

    private action4(){

        if(this._fator == undefined) return;
        let nodeResult: Node| undefined =  this._fator.pop();
        if(nodeResult == undefined) return;

        this._termo1.push(nodeResult);
    }

    private action5(){

		let n1: Node | undefined = this._termo1.pop();
		let n2: Node | undefined = this._fator.pop();
        if(n1 == undefined || n2 == undefined) return;

		this._termo1.push( Node.createConcatNode(n1, n2) );    	

    }

    private action6(){

		let n: Node | undefined = this._fator.pop();
        if(n == undefined) return;
    	    	
		this._fator.push( Node.createClosureNode(n) );    	
    }

    private action7(){

		let n: Node | undefined = this._fator.pop();
        if(n == undefined) return;

		this._fator.push( Node.createClosureObNode(n) );    	
    }

    private action8(){

        let n: Node | undefined  = this._fator.pop();
        if(n == undefined) return;

		this._fator.push( Node.createOptionalNode(n) );
    }

    private action9(){    	

        let n: Node | undefined  = this._exp_simp1.pop();
        if(n == undefined) return;

    	this._fator.push(n);
    }

    private action10(){
		this._fator.push( Node.createAllNode() );
    }

    private action11(){

        if(this._token == undefined) return;

		let def: Node | undefined = this._gen.getDefinitionById(this._token.lexeme);


		if (def == undefined) throw new SemanticError("Definição não declarada: "+this._token.lexeme, this._token.position);




        const clone = Object.assign( {}, def );
        this._fator.push( Object.setPrototypeOf( clone, Node.prototype ));

        // let newObject = {...def} as Node;
        // this._fator.push(newObject);

        //this._fator.push(JSON.parse(JSON.stringify(def)));

		//this._fator.push(def.clone());
    }

    private action12(){
        if(this._token == undefined) return
		this._fator.push( Node.createCharNode( this._token.lexeme.charAt(0) ) );
    }

    private action13(){

		let n: Node | undefined = this._fator.pop();		
        if(n == undefined) return;

		this._fator.push(Node.createComplementNode(n));
    }

    private action14(){

		let n2: Node | undefined = this._fator.pop();
		let n1: Node | undefined = this._fator.pop();
        if(n1 == undefined || n2 == undefined) return;
    	
        let nodeResult: Node| null = Node.createUnionNode(n1, n2);
        if(nodeResult == null) return;

		this._fator.push( nodeResult );
    }

    private action15(){
        
        if(this._token == undefined) return;
    	let n1: Node | undefined = this._fator.pop();
    	let n2: Node | undefined = Node.createCharNode(this._token.lexeme.charAt(0));
        if(n1 == undefined || n2 == undefined) return;

        let c1: string = String.fromCharCode(n1.alphabet.list()[0]);
        let c2: string = String.fromCharCode(n2.alphabet.list()[0]);


		if (c1 >= c2) throw new SemanticError("Intervalo inválido", this._token.position);

    	this._fator.push( Node.createIntervalNode( c1, c2) );

    }

}