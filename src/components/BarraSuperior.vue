<script lang="ts">
import { generateCode } from '@/assets/scripts/gals-functions'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'
import { projetoStore } from '@/stores/projetoStore'
import JSZip from 'jszip'
import type TreeMap from 'ts-treemap'
import { computed, defineComponent } from 'vue'
import type { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'
import * as UIBridge from '@/workers/UIBridge'

export default defineComponent({
  name: 'BarraSuperior',
  components: {},
  isEmitting: false,
  data() {
    return {
      isEmitting: false
    }
  },
  setup() {
    const store = projetoStore()

    const layout = computed(() => {
      return store.layout
    })

    return {
      store,
      layout
    }
  },
  methods: {
    /*
     * TODO: Não é possível mandar a gramática atravéz de workers
     * devido a uma referencia circular; consertar.
     */
    gerarCodigo() {
      this.isEmitting = true

      const selecionado = this.store.selecionado
      if (selecionado == -1) return
      const projeto = this.store.listaProjetos[selecionado]
      const options: Options = projeto.optionsGals

      let linguagemString = ''

      switch (options.language) {
        case Options.LANG_CPP:
          linguagemString = 'C++'
          break
        case Options.LANG_JAVA:
          linguagemString = 'Java'
          break
        case Options.LANG_DELPHI:
          linguagemString = 'Delphi'
          break
        case Options.LANG_PYTHON:
          linguagemString = 'Python'
          break
        case Options.LANG_RUST:
          linguagemString = 'Rust'
          break
      }

      const worker = new Worker(new URL('@/workers/emitcode.worker.ts', import.meta.url), {
        type: 'module'
      })

      worker.postMessage({
        regularDefinitions: projeto.regularDefinitions,
        tokens: projeto.tokens,
        nonTerminals: projeto.nonTerminals,
        grammar: projeto.grammar,
        options: JSON.stringify(options),
        necessarioRecriar: true,
        fa: undefined,
        g: undefined,
        fileName: projeto.fileName
      })

      worker.onmessage = (event) => {
        const data = event.data

        if (data.type === 'rpc_request') {
          UIBridge.uibridgeimpl(this, worker, data)
        } else {
          if (data.success) {
            /*
             * Eu não consigo acreditar que é ASSIM que se emite um arquivo no
             * javascript.
             *
             * Bravo, Brendan Eich.
             */

            const link = document.createElement('a')
            link.href = data.result
            link.download = projeto.fileName.slice(0, -5) + ' - ' + linguagemString + '.zip'

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            URL.revokeObjectURL(data.result)

            this.$toast.success('Arquivos Gerados!')
          } else {
            this.$toast.error(data.error, { duration: 0 })
          }

          this.isEmitting = false
          worker.terminate()
        }
      }
    },
    mudaLayout(perfil: number) {
      switch (perfil) {
        case 0: // Léxico
          this.layout.token = 33.33333
          this.layout.simulacao = 33.33333
          this.layout.saidaSimulacao = 33.33333

          this.layout.gramatica = 0
          break
        case 1: // Sintático
          this.layout.token = 0
          this.layout.simulacao = 50
          this.layout.saidaSimulacao = 50

          this.layout.gramatica = 50
          break
        case 2: //Léxico e Sintático
          this.layout.token = 33.33333
          this.layout.simulacao = 33.33333
          this.layout.saidaSimulacao = 33.33333

          this.layout.gramatica = 50
          break
        case 3: //Simulador
          this.layout.token = 0
          this.layout.simulacao = 50
          this.layout.saidaSimulacao = 50

          this.layout.gramatica = 0
          break
      }
    }
  }
})
</script>

<template>
  <div class="barra__superior">
    <span class="logo">WEB <span style="color: #9ed15c">GALS</span></span>

    <button
      class="botao__gerar__codigo"
      :class="{ emitindo: isEmitting }"
      :disabled="isEmitting"
      @click="gerarCodigo"
    >
      <span v-if="isEmitting"> Gerando... </span>

      <span v-else> Gerar Código </span>
    </button>

    <div class="dropdown">
      <button class="dropbtn">Layout</button>
      <div class="dropdown-content">
        <a @click="mudaLayout(0)">Léxico</a>
        <a @click="mudaLayout(1)">Sintático</a>
        <a @click="mudaLayout(2)">Léxico e Sintático</a>
        <a @click="mudaLayout(3)">Simulador</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}

.logo {
  font-family: 'Lexend';
  font-weight: 700;
  font-size: 26px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  white-space: pre;
  color: #424242;
  user-select: none;
}

.logo::before {
  content: '\00a0\00a0';
  color: #9ed15c;
}

.botao__gerar__codigo {
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

  width: 150px;
  height: 38px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.botao__gerar__codigo::before {
  content: url(@/assets/icons/Gerar_Codigo.svg);
  vertical-align: middle;
}

.botao__gerar__codigo:hover {
  background-color: #749a43;
}

.botao__gerar__codigo:active {
  background-color: #749a43;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}
.emitindo.botao__gerar__codigo::before {
  content: url(@/assets/icons/spinner.svg);
  filter: invert(100%);
  transform: translateY(1pt) translateX(-2pt);
}

.emitindo.botao__gerar__codigo {
  background-color: #738b53;
  transform: none;
  box-shadow: none;
}

.barra__superior {
  background-color: white;
  width: auto;
  height: 48px;
  display: flex;
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;

  justify-content: space-between;
  align-items: center;
}

/* Dropdown Button */
.dropbtn {
  font-family: 'IBM Plex Sans';
  background-color: #f2f2f2;
  color: rgb(129, 129, 129);
  padding: 13px;
  font-size: 16px;
  border: none;
  text-align: right;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  text-align: left;
}

/* Links inside the dropdown */
.dropdown-content a {
  font-family: 'IBM Plex Sans';
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #9ed15c;
}
</style>

<!-- Modelines; ponha a sua aqui -->

<!-- kate: replace-tabs on; indent-width 2; tab-width 2; -->
