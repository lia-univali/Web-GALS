<script lang="ts">
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import { defineComponent } from 'vue'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-bnf'
import 'prismjs/components/prism-yaml'
import 'prismjs/themes/prism.css' // import syntax highlighting styles

export default defineComponent({
  name: 'AreaCodigo',
  props: {
    titulo: String
  },
  data() {
    return {
      texto: 'Area de Texto para teste',
      tabSize: 2
    }
  },
  components: {
    PrismEditor
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
  watch: {
    selecionado() {
      const definicoesRegulares = document.getElementById('textoDefinicoesRegulares')
      const tokens = document.getElementById('textoTokens')
      const naoTerminais = document.getElementById('textoNaoTerminais')
      const gramatica = document.getElementById('textoGramatica')
      const saida = document.getElementById('textoSaida')
      const simulador = document.getElementById('textoSimulador')

      if (this.selecionado == -1) return

      if (definicoesRegulares != null)
        (definicoesRegulares as HTMLInputElement).value =
          this.projetos[this.selecionado].regularDefinitions
      if (tokens != null)
        (tokens as HTMLInputElement).value = this.projetos[this.selecionado].tokens
      if (naoTerminais != null)
        (naoTerminais as HTMLInputElement).value = this.projetos[this.selecionado].nonTerminals
      if (gramatica != null)
        (gramatica as HTMLInputElement).value = this.projetos[this.selecionado].grammar
      if (saida != null)
        (saida as HTMLInputElement).value = this.projetos[this.selecionado].consoleExit
      if (simulador != null)
        (simulador as HTMLInputElement).value = this.projetos[this.selecionado].textSimulator
    }
  },
  methods: {
    highlighterPrismBNF(code: string) {
      return highlight(code, languages.bnf, 'bnf') // languages.<insert language> to return html with markup
    },
    highlighterGrammarGALS(code: string) {
      return highlight(
        code,
        (languages['gals_bnf'] = {
          comment: /\/\/.*/,
          string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"/,
            greedy: true
          },
          'semantic-action': {
            pattern: /#\d+/,
            alias: 'symbol'
          },
          'non-terminal': {
            pattern: /<[^<>\r\n\t]+>/,
            alias: ['bold', 'keyword'],
            inside: {
              punctuation: /^<|>$/
            }
          },
          operator: /::=|\||;/,
          epsilon: {
            pattern: /î/,
            alias: 'class-name'
          }
        }),
        'gals_bnf'
      )
    },
    highlighterOrignalTokensGALS(code: string) {
      return highlight(
        code,
        (languages['gals'] = {
          comment: /\/\/.*/,
          sc_token: {
            pattern: /\b[a-zA-Z]\w*[ \t]*(=[ \t]*[a-zA-Z]\w*[ \t]*:)/g,
            lookbehind: true,
            inside: {
              important: /(:)/
            }
          },
          token: {
            pattern: /(^[a-zA-Z]\w*[ \t]*:)([^\r\n]|:)+/gm,
            lookbehind: true,
            alias: 'regex'
          },
          error: {
            pattern: /^(?:[0-9])/m,
            alias: 'number'
          },
          ignore: {
            pattern: /^(:!?)([^\r\n]|:)+/m,
            lookbehind: true,
            alias: 'class-name'
          },
          operator: /(?:(:|!|=))/,
          string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"/,
            greedy: true
          }
        }),
        'gals'
      )
    },
    highlighterNewTokensGALS(code: string) {
      return highlight(
        code,
        (languages['gals'] = {
          comment: /\/\/.*/,
          escaped: {
            pattern: /\\.{1,3}/,
            alias: ['constant']
          },
          token: {
            pattern: /^[a-zA-Z_]\w*(?:[ \t]*):/gm,
            alias: 'variable'
          },
          string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"/,
            greedy: true
          },
          number: /[0-9]/,
          operator: /[|()[\]{}*+?<>]/,
          assign: {
            pattern: /:|=|!/,
            alias: ['important']
          },
          punctuation: /,|;|-|\//
        }),
        'gals'
      )
    },
    highlighterNone(code: string) {
      return code
    },
    focusEditor(id: string) {
      (document.getElementById(id)?.getElementsByClassName('prism-editor__textarea')[0] as HTMLElement)?.focus();
    }
  }
})
</script>

<template>
  <div :class="[titulo === 'Simbolo inicial' ? 'caixa__input' : 'caixa']">
    <p class="caixa__titulo">{{ titulo }}</p>

    <div v-if="projetos[selecionado] == undefined" class="caixa__interna">
      <input
        v-if="titulo === 'Simbolo inicial'"
        name="textoCodigoVazio"
        class="input__codigo"
        :disabled="selecionado == -1"
      />
      <textarea
        v-else
        name="textoCodigoVazio"
        class="texto__codigo"
        :disabled="selecionado == -1"
      ></textarea>
    </div>
    <div
      v-else-if="titulo == 'Definições Regulares'"
      class="caixa__interna"
      @click="focusEditor('textoDefinicoesRegulares')"
    >
      <prism-editor
        id="textoDefinicoesRegulares"
        name="textoCodigo"
        rows="4"
        cols="50"
        class="texto__codigo"
        spellcheck="false"
        v-model="projetos[selecionado].regularDefinitions"
        :highlight="highlighterOrignalTokensGALS"
        :disabled="selecionado == -1"
        :line-numbers="true"
      />
    </div>
    <div v-else-if="titulo == 'Tokens'" class="caixa__interna" @click="focusEditor('textoTokens')">
      <prism-editor
        id="textoTokens"
        name="textoCodigo"
        rows="4"
        cols="50"
        class="texto__codigo"
        spellcheck="false"
        v-model="projetos[selecionado].tokens"
        :disabled="selecionado == -1"
        :highlight="highlighterOrignalTokensGALS"
        :line-numbers="true"
      />
    </div>
    <div v-else-if="titulo == 'Simbolo inicial'" class="caixa__interna__input">
      <input
        id="textoNaoTerminais"
        type="text"
        name="textoCodigo"
        class="input__codigo"
        spellcheck="false"
        v-model="projetos[selecionado].nonTerminals"
        pattern="<[a-zA-Z_0-9]+>"
        :disabled="selecionado == -1"
      />
    </div>
    <div v-else-if="titulo == 'Gramática'" class="caixa__interna" @click="focusEditor('textoGramatica')">
      <prism-editor
        id="textoGramatica"
        name="textoCodigo"
        rows="4"
        cols="50"
        class="texto__codigo"
        spellcheck="false"
        v-model="projetos[selecionado].grammar"
        :disabled="selecionado == -1"
        :highlight="highlighterGrammarGALS"
        :line-numbers="true"
      />
    </div>
    <div v-else-if="titulo == 'Saída'" class="caixa__interna">
      <textarea
        id="textoSaida"
        name="textoCodigo"
        rows="4"
        cols="50"
        class="texto__codigo"
        spellcheck="false"
        disabled
        v-model="projetos[selecionado].consoleExit"
      ></textarea>
    </div>
    <div v-else-if="titulo == 'Simulação'" class="caixa__interna" @click="focusEditor('textoSimulacao')">
      <prism-editor
        id="textoSimulacao"
        name="textoCodigo"
        rows="4"
        cols="50"
        class="texto__codigo"
        spellcheck="false"
        v-model="projetos[selecionado].textSimulator"
        :disabled="selecionado == -1"
        :highlight="highlighterNone"
        :line-numbers="true"
      />
    </div>
  </div>
</template>

<style scoped>

.texto__codigo {
  outline: none;
  resize: none;
  width: 100%;
  height: calc(100% - 7px);
  -webkit-box-sizing: border-box;
  /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  /* Firefox, other Gecko */
  box-sizing: border-box;
  /* Opera/IE 8+ */

  font-family: 'Ubuntu Mono';

  white-space: pre !important;
}

.input__codigo {
  outline: none;
  resize: none;
  width: 100%;
  -webkit-box-sizing: border-box;
  /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  /* Firefox, other Gecko */
  box-sizing: border-box;
  /* Opera/IE 8+ */
  text-align: center;
  font-family: 'Ubuntu Mono';
}

.caixa {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;

  border-radius: 5px;
  background-color: white;

  flex-grow: 1;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.caixa__interna:hover {
  cursor:text;
}

.caixa__input {
  /*  margin: 0px; */
  /* padding: 0px; */
  width: 100%;

  border-radius: 5px;
  background-color: white;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.caixa__interna {
  margin: 0px;
  padding: 3px;
  /* width: 100%; */
  height: calc(100% - 21.333px);
}

.caixa__interna__input {
  margin: 0px;
  padding: 3px;
  width: 100%;
}

.caixa__titulo {
  font-family: 'IBM Plex Sans';
  font-weight: 600;
  color: #424242;

  border-bottom: 1px solid;
  border-color: #b1b1b1;

  text-align: center;
  margin: 0px;
  padding: 0px;
}

#textoNaoTerminais:valid {
  color: #07a;
}

#textoNaoTerminais:invalid {
  color: #ff0000;
}
</style>
