<script lang="ts">
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import { defineComponent } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { EditorView } from '@codemirror/view'
import { StreamLanguage } from '@codemirror/language'
import { EditorSelection } from '@codemirror/state'
import type { LanguageSupport } from '@codemirror/language'
import { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'
import {
  parse_lexingrules,
  parse_grammar,
  generate_syntactic_graph_svg
} from '@/assets/scripts/gals-functions2'

export default defineComponent({
  name: 'AreaCodigo',
  mounted() {
    this.regenerateDiagram()
  },
  setup() {
    const store = projetoStore()

    const selecionado = computed(() => {
      return store.selecionado
    })

    const projetos = computed(() => {
      return store.listaProjetos
    })

    const currGrammarLine = computed(() => {
      return store.currGrammarLine
    })

    const grammarTexto = computed(() => {
      return store.listaProjetos[store.selecionado].grammar
    })

    return {
      store,
      projetos,
      selecionado,
      currGrammarLine,
      grammarTexto
    }
  },
  data() {
    return {
      prodName: 'ε',
      producaoFalha: true
    }
  },
  watch: {
    currGrammarLine() {
      this.regenerateDiagram()
    },
    grammarTexto() {
      this.regenerateDiagram()
    }
  },
  methods: {
    regenerateDiagram() {
      const prj = this.projetos[this.selecionado]

      let g: Grammar | undefined = undefined

      try {
        const fa = parse_lexingrules(prj.regularDefinitions, prj.tokens, undefined)
        g = parse_grammar(prj.nonTerminals, prj.grammar, fa)
      } catch (_error) {
        this.prodName = 'ε'
        this.producaoFalha = true
        return
      }

      const splitgrammar = prj.grammar.split(/\r?\n/)
      let linenum = this.store.currGrammarLine - 1
      let line = splitgrammar[linenum].trim()

      while (line.includes('::=') == false) {
        linenum--
        if (linenum < 0) break
        line = splitgrammar[linenum].trim()
      }

      let linesplit = line.split(/::=/)
      const production = linesplit[0]

      /* TODO: Checar se estas condições e quer ocorrem */
      if (production === '' || !line.includes('::=')) {
        this.prodName = 'ε'
        this.producaoFalha = true
        return
      }

      let d
      try {
        d = generate_syntactic_graph_svg(production, g)
      } catch (error) {
        this.$toast.error('Erro na visualização do grafo sintático:  ' + (error as Error).message, {
          duration: 0
        })
        this.prodName = 'ε'
        this.producaoFalha = true
        return
      }

      d.style.maxWidth = '500px'
      d.style.maxHeight = '75%'
      d.style.width = '100%'
      d.style.height = 'auto'

      const dg = this.$refs.diagramContainer as HTMLElement
      dg.replaceChildren(d)

      this.prodName = production

      this.producaoFalha = false
    }
  }
})
</script>

<template>
  <div class="caixa_railroad">
    <div class="caixa__titulo">
      <p class="caixa__titulo">Diagrama Sintático</p>
    </div>
    <div style="width: 100%; height: 100%" class="caixa__interna__railroad">
      <div class="producao">
        <label>Produção: <span class="producao__inner" :class="{ producao_falha: producaoFalha }">{{ prodName }}</span></label>
      </div>
      <div class="diagrama__railroad" ref="diagramContainer"></div>
    </div>
  </div>
</template>

<style scoped>
.caixa_railroad {
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

.caixa__interna__railroad {
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

.producao {
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  font-family: 'IBM Plex Sans';
  font-weight: 500;
  padding: 4px;
  width: calc(100% - 6px);
}

.producao__inner {
 color: #708;
 font-weight: normal;
}

.producao_falha {
  color: #f00;
}

.diagrama__railroad {
  width: 100%;
  height: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<!-- Modelines; ponha a sua aqui -->

<!-- kate: replace-tabs on; indent-width 2; tab-width 2; -->
