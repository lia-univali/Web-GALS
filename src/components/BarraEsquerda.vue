<script lang="ts">
import { defineComponent } from 'vue'
import AreaCodigo from '@/components/AreaCodigo.vue'
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import salvador from '@/assets/scripts/saver'

export default defineComponent({
  name: 'BarraEsquerda',
  components: {
    AreaCodigo
  },
  data() {
    return {
      paginaAberta: 'Projetos'
    }
  },
  setup() {
    const store = projetoStore()

    const selecionado = computed(() => {
      return store.selecionado
    })

    const projetos = computed(() => {
      return store.listaProjetos
    })

    return {
      store,
      projetos,
      selecionado
    }
  },
  methods: {
    abrirProjetos() {
      this.paginaAberta = 'Projetos'
    },
    abrirOpcaoes() {
      if (this.selecionado == -1) {
        alert('Nenhum projeto selecionado!')
      } else {
        const modal = document.getElementById('modal__configuracoes')
        if (modal != null) modal.style.display = 'flex'
      }
    },
    abrirDocumentacao() {
      this.paginaAberta = 'Documentação'
    },
    abrirArquivo() {
      const input: HTMLInputElement = document.getElementById('file') as HTMLInputElement

      if (input == null) return
      if (input.files == null) return

      const file: File = input.files[0]

      const thatStore = this.store
      const reader = new FileReader()

      reader.readAsText(file, 'ISO-8859-4')

      reader.onload = function () {
        const splitResultado: string[] = (reader.result as string).split(
          /#Options\n|\n#RegularDefinitions\n|\n#Tokens\n|\n#NonTerminals\n|\n#Grammar\n/
        )

        const newProject = {
          id: thatStore.totalProjetos,
          fileName: file.name,
          options: splitResultado[1] == undefined ? '' : splitResultado[1],
          regularDefinitions: splitResultado[2] == undefined ? '' : splitResultado[2],
          tokens: splitResultado[3] == undefined ? '' : splitResultado[3],
          nonTerminals: splitResultado[4] == undefined ? '' : splitResultado[4],
          grammar: splitResultado[5] == undefined ? '' : splitResultado[5],
          textSimulator: '',
          consoleExit: ''
        }

        thatStore.addProject(newProject)
      }

      input.value = ''
    },
    abrirModalArquivo() {
      const formulario = document.getElementById('modal__arquivo')
      if (formulario != null) formulario.style.display = 'flex'

      const input = document.getElementById('nomeProjeto') as HTMLInputElement
      if (input != null) input.value = ''
    },
    salvarArquivo() {
      if (this.selecionado == -1) {
        alert('Nenhum projeto selecionado!')
      } else {
        const options = this.projetos[this.selecionado].options
        const regularDefinitions = this.projetos[this.selecionado].regularDefinitions
        const tokens = this.projetos[this.selecionado].tokens
        const nonTerminals = this.projetos[this.selecionado].nonTerminals
        const grammar = this.projetos[this.selecionado].grammar

        let codigo = ''
        codigo += '#Options\n' + (options == undefined ? '' : options) + '\n\n'
        codigo +=
          '#RegularDefinitions\n' +
          (regularDefinitions == undefined ? '' : regularDefinitions) +
          '\n\n'
        codigo += '#Tokens\n' + (tokens == undefined ? '' : tokens) + '\n\n'
        codigo += '#NonTerminals\n' + (nonTerminals == undefined ? '' : nonTerminals) + '\n\n'
        codigo += '#Grammar\n' + (grammar == undefined ? '' : grammar) + '\n\n'

        salvador.download(codigo, this.projetos[this.selecionado].fileName, '.gals')
      }
    },
    abrirInformacoes() {
      this.paginaAberta = 'Informações'
    }
  }
})
</script>

<template>
  <div class="barra__esquerda">
    <div class="selecao__botoes">
      <button class="botao projetos" @click="abrirProjetos"></button>
      <button class="botao opcao" @click="abrirOpcaoes"></button>
      <button class="botao documentacao" @click="abrirDocumentacao"></button>
      <label class="botao__input" @change="abrirArquivo">
        <input name="file" type="file" id="file" ref="myFiles" accept=".gals" />
        Custom Upload
      </label>
      <button class="botao novo__projeto" @click="abrirModalArquivo"></button>
      <button class="botao salvar" @click="salvarArquivo"></button>
      <button class="botao informacoes" @click="abrirInformacoes"></button>
    </div>

    <div class="conteudo">
      <h2>{{ paginaAberta }}</h2>

      <div v-if="paginaAberta == 'Projetos'" class="abaProjetos">
        <div class="lista__projetos" v-if="store.totalProjetos > 0">
          <div v-for="projeto in projetos" :key="projeto.id" class="projeto__acaoes">
            <button @click="store.changeSelected(projeto.id)" class="botao__mudar__projeto">
              {{ projeto.fileName }}
            </button>
            <button @click="store.deleteProject(projeto.id)" class="botao__excluir__projeto">
              X
            </button>
          </div>
        </div>
        <AreaCodigo titulo="Definições Regulares" />
        <AreaCodigo titulo="Não Terminais" />
      </div>
      <div v-else-if="paginaAberta == 'Opções'">
        <div v-if="store.totalProjetos > 0">
          <p>{{ projetos[selecionado].options }}</p>
        </div>
      </div>
      <div v-else-if="paginaAberta == 'Documentação'"></div>
      <div v-else-if="paginaAberta == 'Informações'"></div>
    </div>
  </div>
</template>

<style scoped>
.abaProjetos {
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
}

.lista__projetos {
  width: 100%;
  height: 30%;
  max-height: 170px;
  overflow: auto;
}

.projeto__acaoes {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

h2 {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #424242;
}

.conteudo {
  margin: 0px;
  padding: 5%;
  width: 100%;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.barra__esquerda {
  display: flex;
  background-color: white;
  border-radius: 5px;
  flex-grow: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.selecao__botoes {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 2px solid;
  border-color: #b1b1b1;
}

.botao {
  border: none;
  border-radius: 5px;
  background-color: white;

  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0%;
}

.botao:hover {
  background-color: #9ed15c;
}

.botao:active {
  background-color: #9ed15c;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}

.botao.projetos:before {
  content: url(@/assets/icons/Projetos.svg);
  vertical-align: middle;
}

.botao.opcao:before {
  content: url(@/assets/icons/Opcoes.svg);
  vertical-align: middle;
}

.botao.documentacao:before {
  content: url(@/assets/icons/Documentacao.svg);
  vertical-align: middle;
}

.botao.abrir:before {
  content: url(@/assets/icons/Abrir.svg);
  vertical-align: middle;
}

.botao.salvar:before {
  content: url(@/assets/icons/Salvar.svg);
  vertical-align: middle;
}

.botao.informacoes:before {
  content: url(@/assets/icons/Informacoes.svg);
  vertical-align: middle;
}

.botao.informacoes {
  margin-top: auto;
}

.botao.novo__projeto:before {
  content: url(@/assets/icons/NovoProjeto.svg);
  vertical-align: middle;
}

input[type='file'] {
  display: none;
}

.botao__input {
  border: none;
  border-radius: 5px;
  background-color: white;

  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0%;

  content: url(@/assets/icons/Abrir.svg);
}

.botao__input:hover {
  background-color: #9ed15c;
}

.botao__input:active {
  background-color: #9ed15c;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}

.botao__mudar__projeto {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #424242;

  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.botao__excluir__projeto {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #a40000;

  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
@/assets/scripts/salvador@/assets/scripts/saver
