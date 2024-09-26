<script lang="ts">
import { generateCode } from '@/assets/scripts/gals-functions'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'
import { projetoStore } from '@/stores/projetoStore'
import JSZip from 'jszip'
import type TreeMap from 'ts-treemap'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'BarraSuperior',
  components: {},
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
    gerarCodigo() {

      const selecionado = this.store.selecionado
      if (selecionado == -1) return
      const projeto = this.store.listaProjetos[selecionado]
      const options: Options = projeto.optionsGals
      let linguagemString = '';

      options.input = Options.INPUT_STRING

      switch (options.language)
      {
        case Options.LANG_CPP:		linguagemString =  ("C++"); break;
        case Options.LANG_JAVA:	  linguagemString =  ("Java"); break;
        case Options.LANG_DELPHI:	linguagemString =  ("Delphi"); break;
      }

      //alert(options.toString())

      //let optionsTeste = new Options();
      //optionsTeste.pkgName =  "teste";
      //optionsTeste.parser = Options.PARSER_SLR;
      //options.scannerTable = Options.SCANNER_TABLE_COMPACT;
      //optionsTeste.input = Options.INPUT_STREAM
      let allFiles: TreeMap<string, string> | null = null

      try {
        allFiles = generateCode(
          projeto.regularDefinitions,
          projeto.tokens,
          projeto.nonTerminals,
          projeto.grammar,
          options
        )
      } catch (error) {
        console.log(error)
        this.$toast.error((error as Error).message)
      }

      if (allFiles == null) return

      try {
        const zip = new JSZip()

        for (const [fileName, content] of allFiles.entries()) {
          zip.file(fileName, content)
        }

        zip.generateAsync({ type: 'blob' }).then((content) => {
          const link = document.createElement('a')
          const url = URL.createObjectURL(content)
          link.href = url;
          link.download = projeto.fileName.slice(0, -5) + " - " + linguagemString + '.zip'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        });

        this.$toast.success('Arquivos Gerados!')
      } catch (error) {
        console.error(error)
        this.$toast.error((error as Error).message)
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
    <span class="logo">WEB</span>

    <button class="botao__gerar__codigo" @click="gerarCodigo">Gerar Código</button>

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
  cursor:pointer;
}

.logo {
  font-family: 'Lexend';
  font-weight: 700;
  font-size: 26px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #424242;
}

.logo::before {
  content: '\00a0\00a0';
  color: #9ed15c;
}

.logo::after {
  content: '\00a0GALS';
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
