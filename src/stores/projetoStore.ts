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
}

export const projetoStore = defineStore('projetos', {
  state: () => {
    return {
      listaProjetos: [] as Projeto[],
      selecionado: -1
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
