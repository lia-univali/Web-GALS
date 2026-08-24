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

import {Diagram, Choice} from "@/vendor/railroad.js";


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

    return {
      store,
      projetos,
      selecionado,
    }
  },
  methods: {
    regenerateDiagram() {
      const d = new Diagram(
          "qux",
          new Choice(0, "foo", "bar")
      ).toSVG();

      d.style.maxWidth = "500px"
      d.style.width    = "100%";
      d.style.height   = "auto";

      this.$refs.diagramContainer.replaceChildren(d);
    },
  },
})
</script>

<template>
  <div class="caixa_railroad">
    <div class="caixa__titulo">
      <p class="caixa__titulo">Diagrama Sintático</p>
    </div>
    <div style="width: 100%; height: 100%;" class="caixa__interna__railroad">
      <div class="producao">
        <label>Produção: &lt;Placeholder&gt;</label>
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
.diagrama__railroad {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
