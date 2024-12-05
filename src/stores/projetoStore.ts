import { Options } from '@/assets/scripts/gals-lib/generator/Options'
import { defineStore } from 'pinia'
import { nonTerminalsFromGrammar } from '@/assets/scripts/gals-functions'
import type { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'
import { LRParserSimulator } from '@/assets/scripts/gals-lib/simulator/LRParserSimulator'
import { LL1ParserSimulator } from '@/assets/scripts/gals-lib/simulator/LL1ParserSimulator'

export interface Projeto {
  id: number
  fileName: string
  options: string
  regularDefinitions: string
  tokens: string
  nonTerminals: string
  grammar: string
  textSimulator: string
  consoleExit: string
  optionsGals: Options
}

export interface Layout {
  token: number,
  simulacao: number,
  saidaSimulacao: number,
  gramatica: number,
}

let linhaProjetoAntigo: string = '';
let linhaProjetoNovo: string = '';

export const projetoStore = defineStore('projetos', {
  state: () => {
    return {
      listaProjetos: [
        {
          'id': 0,
          'fileName': 'untitled.gals',
          'options': '',
          'regularDefinitions': '',
          'tokens': '',
          'nonTerminals': '',
          'grammar': '',
          'textSimulator': '',
          'consoleExit': '',
          'optionsGals': new Options(),
        },
      ] as Projeto[],
      selecionado: 0,
      layout: {
        'token': 33.3333,
        'simulacao': 33.3333,
        'saidaSimulacao': 33.3333,
        'gramatica': 50,
      } as Layout,
      necessarioRecriar: true,
      gramatica: undefined as Grammar | undefined,
      lrSim: undefined as LRParserSimulator | undefined,
      ll1Sim:  undefined as LL1ParserSimulator | undefined
    }
  },
  getters: {
    totalProjetos: (state) => state.listaProjetos.length
  },
  actions: {
    changeSelected(newSelected: number) {
      this.selecionado = newSelected
      this.necessarioRecriar  = true
    },
    deleteProject(id: number) {
      const selecionadoAntigo = this.selecionado
      this.selecionado = -1

      this.listaProjetos.splice(id, 1)

      for (let j = 0; j < this.listaProjetos.length; j++) {
        this.listaProjetos[j].id = j
      }

      if (this.totalProjetos == 0 || this.selecionado == -1) this.selecionado = -1
      else this.selecionado = selecionadoAntigo - 1
    },
    addProject(newProject: Projeto) {
      this.listaProjetos.push(newProject)
    },
    selectLastProject() {
      this.selecionado = this.listaProjetos.length - 1; 
    },
    changeNecessarioRecriar(): void{
      this.necessarioRecriar = !this.necessarioRecriar
    },
    setNecessarioRecriar(valor: boolean): void {
      this.necessarioRecriar = valor;
    },
    verificaNecessarioRecriar(): void{
      const options = this.listaProjetos[this.selecionado].options
      const objOptions = this.listaProjetos[this.selecionado].optionsGals
      const regularDefinitions = this.listaProjetos[this.selecionado].regularDefinitions
      const tokens = this.listaProjetos[this.selecionado].tokens
      const nonTerminals = this.listaProjetos[this.selecionado].nonTerminals
      const grammar = this.listaProjetos[this.selecionado].grammar

      let codigo = ''
      codigo += '#Options\n' + (options == undefined ? '' : objOptions.toString()) + '\n'
      codigo +=
        '#RegularDefinitions\n' +
        (regularDefinitions == undefined ? '' : regularDefinitions) +
        '\n'
      codigo += '#Tokens\n' + (tokens == undefined ? '' : tokens) + '\n'
      codigo +=
        '#NonTerminals\n' +
        (nonTerminals == undefined ? '' : nonTerminalsFromGrammar(nonTerminals, grammar)) +
        '\n'
      codigo += '#Grammar\n' + (grammar == undefined ? '' : grammar)

      linhaProjetoNovo = codigo

      if(linhaProjetoNovo === linhaProjetoAntigo)
        this.necessarioRecriar = false
      else{
        this.necessarioRecriar = true
        linhaProjetoAntigo = linhaProjetoNovo
      }
    }
  }
})
