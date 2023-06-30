import {defineStore} from 'pinia'

export interface Projeto{
    id: number;
    fileName: string;
    options: string;
    regularDefinitions: string;
    tokens: string;
    nonTerminals: string;
    grammar: string;                  
};
  

export const projetoStore = defineStore('projetos',{
    state: () =>{
        return{
            listaProjetos: [] as Projeto[],
            selecionado: -1,
            textoSimulador: ""
        };
    },
    getters: {
        totalProjetos: (state) => state.listaProjetos.length,
    },
    actions: {
        changeSelected(newSelected:number) {
            this.selecionado = newSelected;
        },
        deleteProject(id:number) {
            const selecionadoAntigo = this.selecionado;
            this.selecionado = -1;

            this.listaProjetos.splice(id,1);

            for(var j = 0; j < this.listaProjetos.length; j++){
                this.listaProjetos[j].id = j;
            }

            if(this.totalProjetos == 0 || this.selecionado == -1) 
                this.selecionado = -1;
            else
            this.selecionado = selecionadoAntigo -1;
        },
        addProject(newProject:Projeto) {
            this.listaProjetos.push(newProject);
        },
        setFileName(id:number, fileName:string){
            this.listaProjetos[id].fileName = fileName;
        },
        setOptions(id:number, options:string){
            this.listaProjetos[id].options = options;
        },
        setRegularDefinitions(id:number, regularDefinitions:string){
            this.listaProjetos[id].regularDefinitions = regularDefinitions;
        },
        setTokens(id:number, tokens:string){
            this.listaProjetos[id].tokens = tokens;
        },
        setNonTerminalse(id:number, nonTerminals:string){
            this.listaProjetos[id].nonTerminals = nonTerminals;
        },
        setGrammar(id:number, grammar:string){
            this.listaProjetos[id].grammar = grammar;
        },
        setTextoSimulador(texto: string){
            this.textoSimulador = texto;
        }
    },
});