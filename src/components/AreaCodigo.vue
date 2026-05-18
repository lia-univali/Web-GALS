<script lang="ts">
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import { defineComponent } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { EditorView } from '@codemirror/view'
import { StreamLanguage } from '@codemirror/language'
import { EditorSelection } from '@codemirror/state'
import type { LanguageSupport } from '@codemirror/language'

// Criar linguagem customizada para GALS tokens
const galsTokensLanguage = StreamLanguage.define({
  token(stream) {
    // Comentário
    if (stream.match(/\/\/.*/)) return 'comment'
    
    // String
    if (stream.match(/"(?:\\.|[^\\"\r\n])*"/)) return 'string'
    
    // Operadores
    if (stream.match(/[:|!=]/)) return 'operator'
    
    // Token (nome_token:)
    if (stream.match(/^[a-zA-Z]\w*[ \t]*:/)) return 'keyword'
    
    // Números
    if (stream.match(/[0-9]/)) return 'number'
    
    // Espaços
    if (stream.eatSpace()) return null
    
    // Default
    stream.next()
    return null
  }
})

// Criar linguagem customizada para BNF/Gramática GALS
const bnfLanguage = StreamLanguage.define({
  token(stream) {
    // Comentário
    if (stream.match(/\/\/.*/)) return 'comment'
    
    // String
    if (stream.match(/"(?:\\.|[^\\"\r\n])*"/)) return 'string'
    
    // Epsilon (î)
    if (stream.match(/î/)) return 'escape'
    
    // Non-terminal <...>
    if (stream.match(/<[^<>\r\n\t]+>/)) return 'keyword'
    
    // Semantic action #\d+
    if (stream.match(/#\d+/)) return 'strong'
    
    // Operadores BNF (::=, |, ;)
    if (stream.match(/::=|\||;/)) return 'namespace'
    
    // Espaços
    if (stream.eatSpace()) return null
    
    // Default
    stream.next()
    return null
  }
})


export default defineComponent({
  name: 'AreaCodigo',
  props: {
    titulo: String
  },
  data() {
    return {
      texto: 'Area de Texto para teste',
      tabSize: 2,
      simulatorView: null as any,
      // Extensões base para todos os editores
      baseExtensions: [
        EditorView.lineWrapping
      ] as any[]
    }
  },
  components: {
    Codemirror
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
  mounted() {
    // Registra a função de seleção globalmente apenas para o simulador
    if (this.titulo === 'Simulação') {
      (window as any)._selectTextInSimulator = this.selectTextInSimulator.bind(this)
    }
  },
  beforeUnmount() {
    // Remove a função global ao desmontar apenas se for o simulador
    if (this.titulo === 'Simulação') {
      delete (window as any)._selectTextInSimulator
    }
  },
  watch: {
    selecionado() {
      // Update editor content when project changes
      const definicoesRegulares = document.querySelector('[data-editor-id="textoDefinicoesRegulares"]')
      const tokens = document.querySelector('[data-editor-id="textoTokens"]')
      const naoTerminais = document.getElementById('textoSimboloInicial')
      const gramatica = document.querySelector('[data-editor-id="textoGramatica"]')
      const simulador = document.querySelector('[data-editor-id="textoSimulador"]')

      if (this.selecionado == -1) return

      if (definicoesRegulares != null)
        (definicoesRegulares as any).value =
          this.projetos[this.selecionado].regularDefinitions
      if (tokens != null)
        (tokens as any).value = this.projetos[this.selecionado].tokens
      if (naoTerminais != null)
        (naoTerminais as HTMLInputElement).value = this.projetos[this.selecionado].nonTerminals
      if (gramatica != null)
        (gramatica as any).value = this.projetos[this.selecionado].grammar
      if (simulador != null)
        (simulador as any).value = this.projetos[this.selecionado].textSimulator
    }
  },
  computed: {
    // Extensões com linguagem GALS para tokens
    extensionsTokens(): (LanguageSupport | any)[] {
      return [...this.baseExtensions, galsTokensLanguage] as any
    },
    // Extensões com linguagem BNF para gramática
    extensionsBNF(): (LanguageSupport | any)[] {
      return [...this.baseExtensions, bnfLanguage] as any
    },
    // Extensões sem linguagem para simulador
    extensionsDefault(): any[] {
      return this.baseExtensions as any
    }
  },
  methods: {
    onSimulatorReady(view: any) {
      this.simulatorView = view
      // Armazenar globalmente para acesso externo
      ;(window as any)._editorStore = (window as any)._editorStore || {}
      ;(window as any)._editorStore['textoSimulador'] = view
    },
    focusEditor(id: string) {
      const editor = document.querySelector(`[data-editor-id="${id}"] .cm-editor`) as HTMLElement
      editor?.focus()
    },
    selectTextInSimulator(start: number, end: number) {
      try {
        let view = this.simulatorView
        if (!view) {
          // Fallback para o store global
          view = (window as any)._editorStore?.['textoSimulador']
        }
        if (!view) {
          console.warn('Simulator editor view not found')
          return
        }

        const selection = EditorSelection.single(start, end)
        view.view.dispatch({
          selection: selection,
          effects: EditorView.scrollIntoView(start)
        }) 
        view.view.focus()
      } catch (e) {
        console.error(e)
      }
    }
  }
})
</script>

<template>
  <div :class="[titulo === 'Símbolo inicial' ? 'caixa__input' : 'caixa']">
    <div class="caixa__titulo">
      <p class="caixa__titulo">{{ titulo }}</p>
    </div>
    
    <div v-if="projetos[selecionado] === undefined" class="caixa__interna">
      <input
        v-if="titulo === 'Símbolo inicial'"
        name="textoCodigoVazio"
        class="input__codigo"
        spellcheck="false"
        autocomplete="off"
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
      data-editor-id="textoDefinicoesRegulares"
      @click="focusEditor('textoDefinicoesRegulares')"
    >
      <codemirror
        :key="`def-reg-${selecionado}`"
        v-model="projetos[selecionado].regularDefinitions"
        :extensions="extensionsTokens"
        @change="store.verificaNecessarioRecriar"
        :disabled="selecionado == -1"
        class="texto__codigo"
      />
    </div>

    <div
      v-else-if="titulo == 'Tokens'"
      class="caixa__interna"
      data-editor-id="textoTokens"
      @click="focusEditor('textoTokens')"
    >
      <codemirror
        :key="`tokens-${selecionado}`"
        v-model="projetos[selecionado].tokens"
        :extensions="extensionsTokens"
        @change="store.verificaNecessarioRecriar"
        :disabled="selecionado == -1"
        class="texto__codigo"
      />
    </div>

    <div v-else-if="titulo == 'Gramática'" class="caixa__interna">
      <div class="simboloInicial" @click="focusEditor('textoSimboloInicial')">
        <label>Símbolo inicial</label>
        <input
          @change="store.verificaNecessarioRecriar"
          id="textoSimboloInicial"
          type="text"
          name="textoCodigo"
          class="input__codigo"
          spellcheck="false"
          autocomplete="off"
          :disabled="selecionado == -1"
          v-model="projetos[selecionado].nonTerminals"
          pattern="<[a-zA-Z_0-9]+>"
        />
      </div>
      <div
        class="caixa__interna__gramatica"
        data-editor-id="textoGramatica"
        @click="focusEditor('textoGramatica')"
      >
        <codemirror
          :key="`grammar-${selecionado}`"
          v-model="projetos[selecionado].grammar"
          :extensions="extensionsBNF"
          @change="store.verificaNecessarioRecriar"
          :disabled="selecionado == -1"
          class="texto__codigo"
        />
      </div>
    </div>

    <div
      v-else-if="titulo == 'Simulação'"
      class="caixa__interna"
      data-editor-id="textoSimulador"
      @click="focusEditor('textoSimulador')"
    >
      <codemirror
        ref="simulatorEditor"
        :key="`sim-${selecionado}`"
        v-model="projetos[selecionado].textSimulator"
        @change="store.verificaNecessarioRecriar"
        :extensions="extensionsDefault"
        :disabled="selecionado == -1"
        class="texto__codigo"
        @ready="onSimulatorReady"
      />
    </div>
  </div>
</template>

<style scoped>
.texto__codigo {
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
}

.texto__codigo :deep(.cm-editor) {
  height: 100%;
  border: none;
  border-radius: 4px;
}

.texto__codigo :deep(.cm-scroller) {
  overflow: auto;
}

.input__codigo {
  outline: auto;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
}

.caixa {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.caixa__interna:hover {
  cursor: text;
}

.caixa__input {
  margin: 0px;
  padding: 6px;
  width: calc(100% - 12px);
  display: flex;
  text-wrap: nowrap;
  flex-direction: row;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.caixa__interna {
  margin: 0px;
  padding: 0px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
  height: calc(100% - 28px);
}

.caixa_gramatica {
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.caixa__interna__gramatica {
  margin: 0px;
  padding: 0px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
  height: calc(100% - 26px);
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

#textoSimboloInicial:valid {
  color: #07a;
}

#textoSimboloInicial:invalid {
  color: #ff0000;
}

#textoSimboloInicial {
  margin-left: 12px;
  width: 100%;
}

.simboloInicial {
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  padding: 4px;
  width: calc(100% - 6px);
}
</style>
