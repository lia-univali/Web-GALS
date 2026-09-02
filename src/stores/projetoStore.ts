import { Options, FORMAT_GALS2003, FORMAT_VGLS } from '@/assets/scripts/gals-lib/generator/Options'
import { defineStore } from 'pinia'
import { nonTerminalsFromGrammar } from '@/assets/scripts/gals-functions'
import type { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'
import { LRParserSimulator } from '@/assets/scripts/gals-lib/simulator/LRParserSimulator'
import { LL1ParserSimulator } from '@/assets/scripts/gals-lib/simulator/LL1ParserSimulator'
import * as UIBridge from '@/workers/UIBridge'

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
  dirty: boolean
  projectFormat: number,
}

export interface Layout {
  token: number
  simulacao: number
  saidaSimulacao: number
  gramatica: number
  diagsyn: number
  gramhoriz: number
}

let linhaProjetoAntigo: string = ''
let linhaProjetoNovo: string = ''

function storeFrom2To3(j: any) {
  for (let p of j.listaProjetos) {
    const i = p.fileName.lastIndexOf('.');
    if (i != -1) {
      p.fileName = p.fileName.slice(0, i);
    }
    p.projectFormat = FORMAT_VGLS;
  }
  j.version = 3;
}

export const projetoStore = defineStore('projetos', {
  state: () => {
    const simulationworker = new Worker(new URL('@/workers/simulation.worker.ts', import.meta.url), {
      type: 'module'
    });

    simulationworker.addEventListener('message', (event) => {
      if (event.data.type === 'rpc_request')
      {
        UIBridge.uibridgeimpl(this, simulationworker, event.data)
      }
    })

    return {
      version: 3,
      listaProjetos: [
        {
          id: 0,
          fileName: 'untitled',
          options: '',
          regularDefinitions: '',
          tokens: '',
          nonTerminals: '',
          grammar: '',
          textSimulator: '',
          consoleExit: '',
          optionsGals: new Options(),
          dirty: false,
          projectFormat: FORMAT_VGLS,
        }
      ] as Projeto[],
      selecionado: 0,
      layout: {
        token: 33.3333,
        simulacao: 33.3333,
        saidaSimulacao: 33.3333,
        gramatica: 50,
        diagsyn: 50,
        gramhoriz: 50,
      } as Layout,
      necessarioRecriar: true,
      simulationworker: simulationworker,
      currGrammarLine: 1,
    }
  },
  getters: {
    totalProjetos: (state) => state.listaProjetos.length
  },
  actions: {
    loadPersistedState() {
      const saved = localStorage.getItem('webgals-projects')

      if (!saved) return

      const parsed = JSON.parse(saved)

      if (parsed.version === 2) {
        storeFrom2To3(parsed) ;
      }

      if (parsed.version !== 3) {
        return;
      }

      parsed.listaProjetos.forEach((p: Projeto) => {
        p.optionsGals = Object.assign(new Options(), p.optionsGals)
      })

      parsed.listaProjetos = parsed.listaProjetos.filter((item: any) => item !== null)

      this.$patch(parsed)
    },

    persistState() {
      localStorage.setItem(
        'webgals-projects',
        JSON.stringify({
          version: this.version,
          listaProjetos: this.listaProjetos,
          selecionado: this.selecionado,
          layout: this.layout
        })
      )
    },
    changeSelected(newSelected: number) {
      this.selecionado = newSelected
      this.necessarioRecriar = true
      this.currGrammarLine = 1
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
      this.selecionado = this.listaProjetos.length - 1
    },
    changeNecessarioRecriar(): void {
      this.necessarioRecriar = !this.necessarioRecriar
    },
    setNecessarioRecriar(valor: boolean): void {
      this.necessarioRecriar = valor
    },
    verificaNecessarioRecriar(): void {
      const options = this.listaProjetos[this.selecionado].options
      const objOptions = this.listaProjetos[this.selecionado].optionsGals
      const regularDefinitions = this.listaProjetos[this.selecionado].regularDefinitions
      const tokens = this.listaProjetos[this.selecionado].tokens
      const nonTerminals = this.listaProjetos[this.selecionado].nonTerminals
      const grammar = this.listaProjetos[this.selecionado].grammar

      let codigo = ''
      codigo += '#Options\n' + (options == undefined ? '' : objOptions.toString()) + '\n'
      codigo +=
        '#RegularDefinitions\n' + (regularDefinitions == undefined ? '' : regularDefinitions) + '\n'
      codigo += '#Tokens\n' + (tokens == undefined ? '' : tokens) + '\n'
      codigo +=
        '#NonTerminals\n' +
        (nonTerminals == undefined ? '' : nonTerminalsFromGrammar(nonTerminals, grammar)) +
        '\n'
      codigo += '#Grammar\n' + (grammar == undefined ? '' : grammar)

      linhaProjetoNovo = codigo

      if (linhaProjetoNovo === linhaProjetoAntigo) this.necessarioRecriar = false
      else {
        this.listaProjetos[this.selecionado].dirty = true
        this.necessarioRecriar = true
        linhaProjetoAntigo = linhaProjetoNovo
      }
    },
    markDirty(): void {
      this.listaProjetos[this.selecionado].dirty = true
    }
  }
})

// Modelines; ponha a sua aqui

// kate: replace-tabs on; indent-width 2; tab-width 2;
