<script lang="ts">
import { defineComponent } from 'vue'
import AreaCodigo from '@/components/AreaCodigo.vue'
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import salvador from '@/assets/scripts/saver'
import {
  lexicalTable,
  nonTerminalsFromGrammar,
  syntacticFirstFollowTable,
  syntacticSetTable,
  syntacticTable
} from '@/assets/scripts/gals-functions'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'
import ModalConfiguracoes from '@/components/ModalConfiguracoes.vue'

export default defineComponent({
  name: 'BarraEsquerda',
  components: {
    AreaCodigo,
    ModalConfiguracoes
  },
  data() {
    return {
      paginaAberta: 'Projetos',
      estiloDisplayConteudo: 'flex'
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
      this.colapsaConteudo('Projetos')
      this.paginaAberta = 'Projetos'
    },
    abrirOpcoes() {
      if (this.selecionado === -1) {
        alert('Nenhum projeto selecionado!')
        return
      }

      const modal = document.getElementById('modal__configuracoes')
      const modalConfiguracoesRef = this.$refs.ModalConfiguracoesRef as any

      if (modal == undefined || modalConfiguracoesRef == undefined) return

      if (modalConfiguracoesRef && modalConfiguracoesRef.enviarForms) {
        modalConfiguracoesRef.preencherModal()
        modal.style.display = 'flex'
      }
    },
    abrirDocumentacao() {
      this.colapsaConteudo('Documentação')
      this.paginaAberta = 'Documentação'
    },
    getLinkDocumentacaoHTML(): string {
      let url
      if (process.env.NODE_ENV === 'development') {
        url = 'Gals-Web/files/help.html'
      } else {
        url = 'files/help.html'
      }
      return url
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
          nonTerminals:
            splitResultado[4] == undefined
              ? ''
              : splitResultado[4]
                  .split('\n')
                  .filter((str) => !str.startsWith('//'))[0]
                  .trim(),
          grammar: splitResultado[5] == undefined ? '' : splitResultado[5],
          textSimulator: '',
          consoleExit: '',
          optionsGals:
            splitResultado[1] == undefined
              ? new Options()
              : new Options().constructorFromString(
                  splitResultado[1] == undefined ? '' : splitResultado[1]
                )
        }

        thatStore.addProject(newProject)
        thatStore.selectLastProject()
      }

      input.value = ''
    },
    abrirModalNovoArquivo() {
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
        const objOptions = this.projetos[this.selecionado].optionsGals
        const regularDefinitions = this.projetos[this.selecionado].regularDefinitions
        const tokens = this.projetos[this.selecionado].tokens
        const nonTerminals = this.projetos[this.selecionado].nonTerminals
        const grammar = this.projetos[this.selecionado].grammar

        let codigo = ''
        //codigo += '#Options\n' + (options == undefined ? '' : options) + '\n\n' // TODO mudar para  objeto
        codigo += '#Options\n' + (options == undefined ? '' : objOptions.toString()) + '\n' // <orientador> Tentativa de mudança
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

        salvador.download(codigo, this.projetos[this.selecionado].fileName, '.gals')
      }
    },
    abrirInformacoes() {
      this.colapsaConteudo('Informações')
      this.paginaAberta = 'Informações'
    },
    colapsaConteudo(pagina: string) {
      if (this.paginaAberta == pagina)
        this.estiloDisplayConteudo = this.estiloDisplayConteudo == 'flex' ? 'none' : 'flex'
      else this.estiloDisplayConteudo = 'flex'
    },
    mostrarTabelaLexico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      const html: string = lexicalTable(projeto.regularDefinitions, projeto.tokens)

      const newTab = window.open()
      if (newTab) {
        newTab.document.write(html)
        newTab.document.close()
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      } else {
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      }
    },
    mostrarTabelaSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      const html: string = syntacticTable(
        projeto.regularDefinitions,
        projeto.tokens,
        projeto.nonTerminals,
        projeto.grammar,
        Options.PARSER_SLR,
        null
      )

      const newTab = window.open()
      if (newTab) {
        newTab.document.write(html)
        newTab.document.close()
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      } else {
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      }
    },
    mostrarTabelaConjuntoSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      const html: string = syntacticSetTable(
        projeto.regularDefinitions,
        projeto.tokens,
        projeto.nonTerminals,
        projeto.grammar,
        Options.PARSER_SLR,
        null
      )

      const newTab = window.open()
      if (newTab) {
        newTab.document.write(html)
        newTab.document.close()
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      } else {
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      }
    },
    mostrarTabelaFirstFollowSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      const html: string = syntacticFirstFollowTable(
        projeto.regularDefinitions,
        projeto.tokens,
        projeto.nonTerminals,
        projeto.grammar,
        Options.PARSER_SLR,
        null
      )

      const newTab = window.open()
      if (newTab) {
        newTab.document.write(html)
        newTab.document.close()
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      } else {
        projeto.consoleExit = 'Tabela criada com Sucesso!'
      }
    }
  }
})
</script>

<template>
  <ModalConfiguracoes ref="ModalConfiguracoesRef" />

  <div class="barra__esquerda">
    <div class="selecao__botoes">
      <button
        class="botao projetos"
        @click="abrirProjetos"
        v-bind:class="paginaAberta == 'Projetos' ? 'selecionado' : 'nao_selecionado'"
      ></button>
      <button class="botao novo__projeto" @click="abrirModalNovoArquivo"></button>
      <label class="botao__input" @change="abrirArquivo">
        <input name="file" type="file" id="file" ref="myFiles" accept=".gals" />
        Custom Upload
      </label>
      <button class="botao salvar" @click="salvarArquivo"></button>
      <button
        class="botao documentacao"
        @click="abrirDocumentacao"
        v-bind:class="paginaAberta == 'Documentação' ? 'selecionado' : 'nao_selecionado'"
      ></button>
      <button class="botao opcao" @click="abrirOpcoes"></button>
      <button
        class="botao informacoes"
        @click="abrirInformacoes"
        v-bind:class="paginaAberta == 'Informações' ? 'selecionado' : 'nao_selecionado'"
      ></button>
    </div>

    <div class="conteudo" :style="{ display: estiloDisplayConteudo }">
      <h2>{{ paginaAberta }}</h2>

      <div v-if="paginaAberta == 'Projetos'" class="abaProjetos">
        <div class="lista__projetos">
          <div v-for="projeto in projetos" :key="projeto.id" class="projeto__acaoes">
            <button
              @click="store.changeSelected(projeto.id)"
              class="botao__mudar__projeto"
              v-bind:class="selecionado == projeto.id ? 'selecionado__projeto' : ''"
            >
              {{ projeto.fileName }}
            </button>
            <button @click="store.deleteProject(projeto.id)" class="botao__excluir__projeto">
              X
            </button>
          </div>
        </div>
        <div class="codigo__definicao__regulares">
          <AreaCodigo titulo="Definições Regulares" />
        </div>
        <AreaCodigo titulo="Simbolo inicial" />
      </div>
      <div v-else-if="paginaAberta == 'Opções'">
        <div v-if="store.totalProjetos > 0">
          <p>{{ projetos[selecionado].options }}</p>
        </div>
      </div>
      <div v-else-if="paginaAberta == 'Documentação'">
        <button class="btn" @click="mostrarTabelaLexico">Tabela de Análise Léxica</button>
        <button class="btn" @click="mostrarTabelaSintatico">Tabela de Análise Sintática</button>
        <button class="btn" @click="mostrarTabelaConjuntoSintatico">Conjunto de itens</button>
        <button class="btn" @click="mostrarTabelaFirstFollowSintatico">First & Follow</button>
      </div>
      <div v-else-if="paginaAberta == 'Informações'">
        <div class="container__links">
          <a class="link" :href="getLinkDocumentacaoHTML()" target="_blank">DOCUMENTAÇÃO</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.link {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
}

.btn {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  background-color: #fafafa;
  padding: 10px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid #cccccc 1px;
  box-shadow: none;
  border-radius: 5px;
  transition: 90ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 100%;
  justify-content: center;
}

.btn:hover {
  transition: 90ms;
  padding: 10px 31px;
  transform: translateY(-0px);
  background-color: #fff;
  color: #1b9100;
  border: solid 1px #328c22;
}

.codigo__definicao__regulares {
  margin: 0;
  margin-bottom: 6px;
  padding: 0;
  height: calc(100% - 228px);
}
.abaProjetos {
  /* overflow: auto;
  overflow-x: hidden; */
  height: 100%;
}

.lista__projetos {
  /* width: 100%; */
  /* height: 30%; */
  max-height: 170px;
  min-height: 170px;
  border: 2px solid #ecf0f1;
  border-radius: 3px;
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
  padding: 3%;
  width: 240px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  border-left: 2px solid rgb(217, 217, 217);

  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.barra__esquerda {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  flex-grow: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: stretch;
  min-width: max-content;
}

.selecao__botoes {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.botao {
  border: none;
  border-radius: 1px;
  background-color: white;

  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0%;
}

.botao:hover {
  background-color: #e6e6e6;
}

.botao:active {
  background-color: #e6e6e6;
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
  border-radius: 1px;
  background-color: white;

  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0%;

  content: url(@/assets/icons/Abrir.svg);
}

.botao__input:hover {
  background-color: #e6e6e6;
}

.botao__input:active {
  background-color: #e6e6e6;
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

.selecionado {
  border-left: 3px solid #aace65;
  border-right: 3px solid #aace65;
}

.selecionado__projeto {
  font-weight: bold;
  color: #839f50;
}

.nao__selecionado {
  border-left: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
}
</style>
@/assets/scripts/salvador@/assets/scripts/saver
