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
import { Options, FORMAT_GALS2003, FORMAT_VGLS } from '@/assets/scripts/gals-lib/generator/Options'
import ModalConfiguracoes from '@/components/ModalConfiguracoes.vue'
import type { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'

import { parseFileFromString, saveFile } from '@/assets/scripts/gals-lib/loadnsave_utils'
import {
  parse_lexingrules,
  parse_grammar,
  generate_syntactic_graph_svg
} from '@/assets/scripts/gals-functions2'


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

    const buildDate = __BUILD_DATE__

    return {
      store,
      projetos,
      selecionado,
      buildDate,
      FORMAT_GALS2003,
    }
  },
  methods: {
    abrirProjetos() {
      this.colapsaConteudo('Projetos')
      this.paginaAberta = 'Projetos'
    },
    abrirOpcoes() {
      if (this.selecionado === -1) {
        this.$toast.info('Nenhum projeto selecionado!')
        return
      }

      const modal = document.getElementById('modal__configuracoes')
      const modalConfiguracoesRef = this.$refs.ModalConfiguracoesRef as any

      if (modal == undefined || modalConfiguracoesRef == undefined) return

      if (modalConfiguracoesRef && modalConfiguracoesRef.enviarForms) {
        modalConfiguracoesRef.preencherModal()
        modalConfiguracoesRef.resetShadowStates()
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
        url = 'Web-GALS/docs/index.html'
      } else {
        url = 'docs/index.html'
      }
      return url
    },
    getLinkChangelogHTML(): string {
      let url
      if (process.env.NODE_ENV === 'development') {
        url = 'Web-GALS/files/changelog.html'
      } else {
        url = 'files/changelog.html'
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

      import('detect-file-encoding-and-language')
        .then(({ default: DetectFileEncodingAndLanguage }) => {
          DetectFileEncodingAndLanguage(file).then((fileInfo) => {
            if (fileInfo.encoding == null) {
              reader.readAsText(file, 'ISO-8859-4')
            } else {
              reader.readAsText(file, fileInfo.encoding.toString())
            }

            reader.onload = () => {
              const content = reader.result as string

              try {
                const newProject = parseFileFromString(file.name, thatStore.totalProjetos, content)

                thatStore.addProject(newProject)
                thatStore.selectLastProject()

                input.value = ''
                this.$toast.info('Arquivo carregado!')
              } catch (e) {
                this.$toast.error((e as Error).message)
              }
            }
          })
        })
        .catch((error) => {
          console.error('Error importing DetectFileEncodingAndLanguage:', error)
        })
    },
    abrirModalNovoArquivo() {
      const formulario = document.getElementById('modal__arquivo')
      if (formulario != null) formulario.style.display = 'flex'

      const input = document.getElementById('nomeProjeto') as HTMLInputElement
      if (input != null) input.value = ''
    },
    abrirModalEditarArquivo(pid: number) {
      this.store.changeSelected(pid)

      const formulario = document.getElementById('modal__arquivo__editar')
      if (formulario != null) formulario.style.display = 'flex'

      const input = document.getElementById('nomeProjetoEditar') as HTMLInputElement
      if (input != null) input.value = ''
    },
    salvarArquivo() {
      if (this.selecionado == -1) {
        this.$toast.error('Nenhum projeto selecionado!')
      } else {
        saveFile(this.projetos[this.selecionado])
        this.$toast.success('Projeto salvo!')
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

      try {
        const html: string = lexicalTable(projeto.regularDefinitions, projeto.tokens)

        const newTab = window.open()
        if (newTab) {
          newTab.document.write(html)
          newTab.document.close()
        }
        projeto.consoleExit = 'Tabela criada com Sucesso!'
        this.$toast.info('Tabela Léxica criada com Sucesso!')
      } catch (error) {
        this.$toast.error('Erro Léxico: ' + (error as Error).message, { duration: 0 })
      }
    },
    mostrarTabelaSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      syntacticTable(
        projeto.regularDefinitions,
        projeto.tokens,
        projeto.nonTerminals,
        projeto.grammar,
        projeto.optionsGals.parser,
        this.store.necessarioRecriar,
        undefined,
        undefined,
      )
        .then(([html, _gramatica]) => {
        // TODO: Mover para thread
//        this.store.gramatica = gramatica

          const newTab = window.open()
          if (newTab) {
            newTab.document.write(html)
            newTab.document.close()
          }
          projeto.consoleExit = 'Tabela criada com Sucesso!'
          this.$toast.info('Tabela Sintática criada com Sucesso!')
        })
        .catch((error) => {
          this.$toast.error('Erro Léxico: ' + (error as Error).message, { duration: 0 })
        })
    },
    mostrarTabelaConjuntoSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      syntacticSetTable(
        projeto.regularDefinitions,
        projeto.tokens,
        projeto.nonTerminals,
        projeto.grammar,
        projeto.optionsGals.parser,
        this.store.necessarioRecriar,
        undefined,
        undefined,
      )
        .then(([html, _gramatica]) => {
        // TODO: Mover para thread
//        this.store.gramatica = gramatica

          const newTab = window.open()
          if (newTab) {
            newTab.document.write(html)
            newTab.document.close()
          }
          projeto.consoleExit = 'Tabela criada com Sucesso!'
          this.$toast.info('Tabela do Conjunto de Itens criada com sucesso.')
        })
        .catch((error) => {
          this.$toast.error('Erro Sintático: ' + (error as Error).message, { duration: 0 })
        })
    },
    mostrarTabelaFirstFollowSintatico() {
      const selecionado = this.store.selecionado
      const projeto = this.store.listaProjetos[selecionado]

      try {
        const [html, _gramatica] = syntacticFirstFollowTable(
          projeto.regularDefinitions,
          projeto.tokens,
          projeto.nonTerminals,
          projeto.grammar,
          projeto.optionsGals.parser,
          this.store.necessarioRecriar,
          undefined,
          undefined,
        )
        // TODO: Mover para thread
//        this.store.gramatica = gramatica

        const newTab = window.open()
        if (newTab) {
          newTab.document.write(html)
          newTab.document.close()
        }
        projeto.consoleExit = 'Tabela criada com Sucesso!'
        this.$toast.info('Tabela First Follow criada com sucesso!')
      } catch (error) {
        this.$toast.error('Erro Sintático: ' + (error as Error).message, { duration: 0 })
      }
    },
    mostrarTodosGrafosSintaticos() {
      const prj = this.projetos[this.selecionado]

      let g: Grammar | undefined = undefined

      try {
        const fa = parse_lexingrules(prj.regularDefinitions, prj.tokens, undefined)
        g = parse_grammar(prj.nonTerminals, prj.grammar, fa)
      } catch (_error) {
        this.$toast.error('Não é possível criar os grafos de uma linguagem inválida.');
        return
      }

      let resultinghtml: string = `<html><head><link rel="stylesheet" href="${ process.env.NODE_ENV === 'development' ? "Web-GALS/railroad.css" : "/Web-GALS/railroad.css" }">`;

      resultinghtml += "<style>body { font-family: monospace; font-weight: bold; color: #708; }</style>";

      resultinghtml += "</head><body><title>Diagramas sintáticos</title><ul>";

      const splitgrammar = prj.grammar.split(/\r?\n/)

      for (let linenum = 0; linenum < splitgrammar.length; linenum++) {
        let line = splitgrammar[linenum];
        {
          const commentpos = line.indexOf('//');
          if (commentpos != -1) {
            line = line.slice(0, commentpos)
          }
        }

        if (line.includes('::=') == false)
          continue;

        const linesplit  = line.split(/::=/);
        const production = linesplit[0].trim();

        let d
        try {
          d = generate_syntactic_graph_svg(production, g, true)
        } catch (error) {
          this.$toast.error('Erro na visualização do grafo sintático:  ' + (error as Error).message, {
            duration: 0
          })
          return
        }

        // HACK: escapar html
        {
          const div = document.createElement('div');
          div.textContent = production;
          resultinghtml += `<li id="${div.innerHTML}">${div.innerHTML}:</li>`;
        }
        resultinghtml += d.outerHTML
        resultinghtml += "<hr><br>";
      }

      resultinghtml += "</ul></body></html>"

      const newTab = window.open()
      if (newTab) {
          newTab.document.write(resultinghtml);
          newTab.document.close();
      }
      this.$toast.info('Grafos sintáticos criados com sucesso!')
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
        <input name="file" type="file" id="file" ref="myFiles" accept=".gals,.vgls" />
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
              {{ projeto.fileName }}{{ projeto.projectFormat == FORMAT_GALS2003 ? ".gals" : ".vgls" }}
              <span class="projeto__modified" v-if="projeto.dirty">•</span>
            </button>

            <div class="botao__conjunto__projeto">
              <span
                @click="abrirModalEditarArquivo(projeto.id)"
                class="material-icons customizado"
                title="Editar Projeto"
                style="font-size: 14px"
                >edit_square</span
              >
              <button
                @click="store.deleteProject(projeto.id)"
                class="botao__excluir__projeto"
                title="Excluir Projeto"
              >
                X
              </button>
            </div>
          </div>
        </div>
        <div class="codigo__definicao__regulares">
          <AreaCodigo titulo="Definições Regulares" />
        </div>
        <!--<AreaCodigo titulo="Simbolo inicial" /> -->
      </div>
      <div v-else-if="paginaAberta == 'Opções'">
        <div v-if="store.totalProjetos > 0">
          <p>{{ projetos[selecionado].options }}</p>
        </div>
      </div>
      <div v-else-if="paginaAberta == 'Documentação'">
        <button class="btn" @click="mostrarTabelaLexico">Tabela de Análise Léxica</button>
        <button class="btn" @click="mostrarTabelaSintatico">Tabela de Análise Sintática</button>
        <div
          v-if="
            projetos[selecionado].optionsGals.parser != 3 &&
            projetos[selecionado].optionsGals.parser != 4
          "
        >
          <button class="btn" @click="mostrarTabelaConjuntoSintatico">Conjunto de itens</button>
        </div>
        <button class="btn" @click="mostrarTodosGrafosSintaticos">Grafos Sintáticos</button>
        <button class="btn" @click="mostrarTabelaFirstFollowSintatico">First & Follow</button>
      </div>
      <div class="container__info" v-else-if="paginaAberta == 'Informações'">
        <p>
          <b>G</b>erador de <b>A</b>nalisadores<b>
            <br />
            L</b
          >éxicos e <b>S</b>intáticos.
        </p>

        <p>
          <b>{{ buildDate }}</b>
        </p>

        <p><a class="link" :href="getLinkDocumentacaoHTML()" target="_blank">DOCUMENTAÇÃO</a></p>
        <p><a class="link" :href="getLinkChangelogHTML()" target="_blank">CHANGELOG</a></p>

        <p>
          <a href="https://univali.br/computacao" target="_blank"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Univali.jpg"
              alt="Logo Univali"
              width="162"
          /></a>
        </p>

        <hr />

        <div class="container__developers">
          <h4>Versão Web - 2.0<br />(v. 2026.XX.XX)</h4>

          <p>
            <em>Desenvolvedor</em><br />
            <a href="https://github.com/vsczpv" target="_blank">Vinícius Schütz Piva</a>
          </p>
          <p>
            <em>Orientador</em> <br />
            <a href="https://linktr.ee/prof.edu" target="_blank">Prof. Eduardo Alves da Silva</a>
          </p>
          <p>
            <em>Mantida em:</em
            ><a href="https://github.com/lia-univali/Web-GALS" target="_blank">LIA@GitHub</a>
          </p>
        </div>

        <hr />

        <div class="container__developers">
          <h4>Versão Web - 1.0<br />(v. 2024.11.10)</h4>

          <p>
            <em>Desenvolvedor</em><br />
            <a href="https://github.com/Dangaki" target="_blank">Daniel Akira Nakamura Gullich</a>
          </p>
          <p>
            <em>Orientador</em> <br />
            <a href="https://linktr.ee/prof.edu" target="_blank">Prof. Eduardo Alves da Silva</a>
          </p>
          <p>
            <em>Mantida em:</em
            ><a href="https://github.com/lia-univali/Web-GALS" target="_blank">LIA@GitHub</a>
          </p>
        </div>

        <hr />

        <div class="container__developers">
          <h4>Versão Desktop <br />(v. 2003.10.03)</h4>
          <p>
            <em>Desenvolvedor</em><br />
            <a href="https://github.com/cegesser/gals" target="_blank">Carlos Eduardo Gesser</a>
          </p>
          <p>
            <em>Orientador</em> <br />
            <a href="https://www.inf.ufsc.br/~olinto.furtado/" target="_blank"
              >Prof. Olinto José V. Furtado</a
            >
          </p>
          <p>
            <em>Mantida em:</em
            ><a href="https://gals.sourceforge.net/" target="_blank">SOURCEFORGE</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container__info {
  justify-content: center;
  align-items: center;
  gap: 10px;

  overflow-y: auto;
  max-height: 80vh;
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
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
}

.abaProjetos {
  max-height: calc(100% - 72px - 172px);
  height: 100%;
}

.lista__projetos {
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

h3 {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 400;
  font-size: x-large;
  color: #424242;
}

h4 {
  font-family: 'IBM Plex Sans';
}

p {
  font-family: 'IBM Plex Sans';
  text-align: center;
}

.container__developers p {
  font-family: 'IBM Plex Sans';
  text-align: left;
}

.conteudo {
  margin: 0px;
  padding: 3%;
  width: 302px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  border-left: 2px solid rgb(217, 217, 217);

  display: flex;
  flex-direction: column;
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

  align-items: center;
}

.botao__editar__projeto {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.93);

  background: none;
  border: none;
  margin: 0px;
  margin-left: 20px;
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

.material-icons.customizado {
  margin-left: 30px;
  cursor: pointer;
}

.botao__conjunto__projeto {
  display: flex;
  gap: 15px;
  align-items: center;
}

.projeto__modified {
  font-size: 14pt;
}
</style>
@/assets/scripts/salvador@/assets/scripts/saver

<!-- Modelines; ponha a sua aqui -->

<!-- kate: replace-tabs on; indent-width 2; tab-width 2; -->
