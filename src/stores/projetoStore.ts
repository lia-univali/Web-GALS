import type { Options } from '@/assets/scripts/gals-lib/generator/Options'
import { defineStore } from 'pinia'

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

        },
      ] as Projeto[],
      selecionado: -1,
      layout: {
        'token': 33.3333,
        'simulacao': 33.3333,
        'saidaSimulacao': 33.3333,
        'gramatica': 50,
      } as Layout
    }
  },
  getters: {
    totalProjetos: (state) => state.listaProjetos.length
  },
  actions: {
    changeSelected(newSelected: number) {
      this.selecionado = newSelected
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
    }
  }
})
