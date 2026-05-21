<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore, type Projeto } from '@/stores/projetoStore'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'

export default defineComponent({
  name: 'ModalNovoArquivo',
  components: {},
  setup() {
    const store = projetoStore()

    return {
      store
    }
  },
  methods: {
    fecharModal() {
      const formulario = document.getElementById('modal__arquivo')
      if (formulario != null) formulario.style.display = 'none'
    },
    adicionarProjeto() {
      const input = document.getElementById('nomeProjeto') as HTMLInputElement
      if (input != null) {
        let nome: string = input.value.trim() + '.gals'

        const newProject = {
          id: this.store.totalProjetos,
          fileName: nome,
          options: '',
          regularDefinitions: '',
          tokens: '',
          nonTerminals: '',
          grammar: '',
          textSimulator: '',
          consoleExit: '',
          optionsGals: new Options()
        } as Projeto

        this.store.addProject(newProject)
        this.store.selectLastProject()
        this.fecharModal()
        this.$toast.info('Projeto Criado!')
      }
    }
  }
})
</script>

<template>
  <div class="modal__arquivo" id="modal__arquivo">
    <h2>Novo Projeto</h2>
    <div class="modal__arquivo__inner" id="modal__arquivo__inner">
      <span id="close" v-on:click="fecharModal"></span>
      <input type="text" id="nomeProjeto" />
      <button v-on:click="adicionarProjeto">Criar</button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #424242;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;

  text-align: center;
}

button {
  font-family: 'IBM Plex Sans';
  font-weight: bold;
  font-size: 15px;
  color: white;
  text-decoration: none;

  text-align: center;
  vertical-align: middle;

  border: none;
  border-radius: 12px;
  background-color: #9ed15c;

  width: 100%;
  height: 38px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #749a43;
}

button:active {
  background-color: #749a43;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}

.modal__arquivo {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 300px;
  height: 200px;

  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: none;
  flex-direction: column;

  overflow: auto;
}

.modal__arquivo__inner {
  background-color: #f2f2f2;
  padding: 1%;
  width: 90%;
  height: 80%;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px dotted #626262;
  border-bottom: 1px dotted #626262;
  margin: auto;

  overflow: auto;
}

#close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}

#close:hover {
  display: inline-block;
  cursor: pointer;
  background: #ccc;
  color: #fff;
}

#close:before,
#close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: rgb(0, 0, 0);
}

#close:before {
  transform: rotate(45deg);
}

#close:after {
  transform: rotate(-45deg);
}
</style>
