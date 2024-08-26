<!-- eslint-disable no-constant-condition -->
<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'

export default defineComponent({
  name: 'ModalConfiguracoes',
  components: {},
  props: {
    options: Options
  },
  data() {
    return {
      activeTab: 'Geral',
      namespace: true
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
    fecharModal() {
      const modal = document.getElementById('modal__configuracoes')
      if (modal != null) modal.style.display = 'none'
    },
    changeTab(tab: string) {
      let tablinks = document.getElementsByClassName('tablinks')
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
      }

      if (tab === 'Geral') {
        tablinks[0].className += ' active'
      } else if (tab === 'Léxico') {
        tablinks[1].className += ' active'
      } else if (tab === 'Sintático') {
        tablinks[2].className += ' active'
      }
      this.activeTab = tab
    },
    enviarForms(e: Event) {
      if (e == null) return
      let newOptions = new Options()
      const form = e.target as HTMLFormElement

      if (form == null) return

      newOptions.setOption(
        'GenerateScanner',
        form.gerar.value === '1' || form.gerar.value === '3' ? 'true' : 'false'
      )
      newOptions.setOption(
        'GenerateParser',
        form.gerar.value === '2' || form.gerar.value === '3' ? 'true' : 'false'
      )

      newOptions.setOption('Language', form.linguagem.value)
      newOptions.setOption('ScannerName', form.nomeLexico.value)
      newOptions.setOption('ParserName', form.nomeSintatico.value)
      newOptions.setOption('SemanticName', form.nomeSemantico.value)
      newOptions.setOption('Package', form.nameNamespace.value)

      newOptions.setOption('ScannerCaseSensitive', form.sensibilidade.checked)
      newOptions.setOption('ScannerTable', form.automato.value)
      newOptions.setOption('Input', form.tipoEntrada.value)

      newOptions.setOption('Parser', form.parser.value)

      this.projetos[this.selecionado].optionsGals = newOptions
      this.projetos[this.selecionado].options = newOptions.toString()
      this.fecharModal()
    },
    preencherModal() {
      const form: any = this.$refs.form
      const opcoes: Options = this.projetos[this.selecionado].optionsGals

      //alert(opcoes.toString())

      if (opcoes.generateScanner && opcoes.generateParser) form.gerar.value = '3'
      else if (opcoes.generateParser) form.gerar.value = '2'
      else if (opcoes.generateScanner) form.gerar.value = '1'

      if (Options.LANG_CPP == opcoes.language) form.linguagem.value = 'C++'
      else if (Options.LANG_JAVA == opcoes.language) form.linguagem.value = 'Java'
      else if (Options.LANG_DELPHI == opcoes.language) form.linguagem.value = 'Delphi'

      form.nomeLexico.value = opcoes.scannerName
      form.nomeSintatico.value = opcoes.parserName
      form.nomeSemantico.value = opcoes.semanticName
      form.nameNamespace.value = opcoes.pkgName

      form.sensibilidade.checked = opcoes.scannerCaseSensitive

      if (Options.INPUT_STREAM == opcoes.input) form.tipoEntrada.value = 'Stream'
      else if (Options.INPUT_STRING == opcoes.input) form.tipoEntrada.value = 'String'

      if (Options.SCANNER_TABLE_FULL == opcoes.scannerTable) form.automato.value = 'Full'
      else if (Options.SCANNER_TABLE_COMPACT == opcoes.scannerTable) form.automato.value = 'Compact'
      else if (Options.SCANNER_TABLE_HARDCODE == opcoes.scannerTable)
        form.automato.value = 'Hardcode'

      if (Options.PARSER_LR == opcoes.parser) form.parser.value = 'LR'
      else if (Options.PARSER_LALR == opcoes.parser) form.parser.value = 'LALR'
      else if (Options.PARSER_SLR == opcoes.parser) form.parser.value = 'SLR'
      else if (Options.PARSER_LL == opcoes.parser) form.parser.value = 'LL'
      else if (Options.PARSER_REC_DESC == opcoes.parser) form.parser.value = 'RD'
    }
  }
})
</script>

<template>
  <div class="modal__configuracoes" id="modal__configuracoes">
    <h2>Configurações</h2>
    <div class="modal__configuracoes__inner" id="modal__configuracoes__inner">
      <span id="close" v-on:click="fecharModal"></span>

      <div class="tab">
        <button class="tablinks active" @click="changeTab('Geral')">Geral</button>
        <button class="tablinks" @click="changeTab('Léxico')">Léxico</button>
        <button class="tablinks" @click="changeTab('Sintático')">Sintático</button>
      </div>

      <form id="formOptions" @submit.prevent="enviarForms" ref="form">
        <div v-show="activeTab == 'Geral'" id="Geral" class="tabcontent">
          <fieldset id="gerar">
            <legend>Gerar</legend>
            <div>
              <input type="radio" id="gerarLexico" name="gerar" value="1" checked />
              <label for="gerarLexico">Analisador Léxico</label>
            </div>

            <div>
              <input type="radio" id="gerarSintatico" name="gerar" value="2" />
              <label for="gerarSintatico">Analisador Sintático</label>
            </div>

            <div>
              <input type="radio" id="gerarLexicoSintatico" name="gerar" value="3" />
              <label for="gerarLexicoSintatico">Analisador Léxico e Sintático</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Linguagem</legend>
            <div>
              <input type="radio" id="linguagemJava" name="linguagem" value="Java" checked />
              <label for="linguagemJava">Java</label>
            </div>

            <div>
              <input type="radio" id="linguagemC++" name="linguagem" value="C++" />
              <label for="linguagemC++">C++</label>
            </div>

            <div>
              <input type="radio" id="linguagemDelphi" name="linguagem" value="Delphi" />
              <label for="linguagemDelphi">Delphi</label>
            </div>

            <!-- <div>
              <input type="radio" id="linguagemC#" name="linguagem" value="C#" />
              <label for="linguagemC#">C#</label>
            </div> -->
          </fieldset>

          <fieldset>
            <legend>Classes</legend>
            <table>
              <tr>
                <td>
                  <label for="arquivoLexico">Analisador Léxico</label>
                </td>
                <td>
                  <input type="input" id="arquivoLexico" name="nomeLexico" value="Lexico" checked />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="arquivoSintatico">Analisador Sintático</label>
                </td>
                <td>
                  <input
                    type="input"
                    id="arquivoSintatico"
                    name="nomeSintatico"
                    value="Sintatico"
                  />
                </td>
              </tr>
              <tr>
                <td><label for="arquivoSemantico">Analisador Semantico</label></td>
                <td>
                  <input
                    type="input"
                    id="arquivoSemantico"
                    name="nomeSemantico"
                    value="Semantico"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <!-- <input
                    type="checkbox"
                    id="arquivoNamespace"
                    name="namespace"
                    v-model="namespace"
                  /> -->
                  <label for="arquivoNamespace">Package / Namespace</label>
                </td>
                <td>
                  <input type="input" id="arquivoNamespace" name="nameNamespace" value="" />
                </td>
              </tr>
            </table>
          </fieldset>
        </div>

        <div v-show="activeTab == 'Léxico'" id="Léxico" class="tabcontent">
          <fieldset>
            <legend>Forma de Entrada</legend>
            <div>
              <input
                type="radio"
                id="formaEntradaStream"
                name="tipoEntrada"
                value="Stream"
                checked
              />
              <label for="formaEntradaStream">Stream</label>
            </div>

            <div>
              <input type="radio" id="formaEntradaString" name="tipoEntrada" value="String" />
              <label for="formaEntradaString">String</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Implementação do Autômato</legend>
            <div>
              <input type="radio" id="automatoCompleto" name="automato" value="Full" checked />
              <label for="automatoCompleto">Tabela Completa</label>
            </div>

            <div>
              <input type="radio" id="automatoCompactado" name="automato" value="Compact" />
              <label for="automatoCompactado">Tabela Compactada (Só para Java)</label>
            </div>

            <div>
              <input type="radio" id="automatoEspecifico" name="automato" value="Hardcode" />
              <label for="automatoEspecifico">Específica (Código)</label>
            </div>
          </fieldset>

          <div>
            <input type="checkbox" id="sensibilidade" name="sensibilidade" />
            <label for="sensibilidade">Diferenciar maiúscula/minúscula em casos especiais</label>
          </div>
        </div>

        <div v-show="activeTab == 'Sintático'" id="Sintático" class="tabcontent">
          <fieldset>
            <legend>Classe do Analisador Sintático</legend>

            <fieldset>
              <legend>Descendentes</legend>

              <div>
                <input type="radio" id="sintaticoLLRec" name="parser" value="RD" />
                <label for="sintaticoLLRec">Descendente Recursivo</label>
              </div>

              <div>
                <input type="radio" id="sintaticoLLPred" name="parser" value="LL" />
                <label for="sintaticoLLPred">LL(1)</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Ascendentes</legend>

              <div>
                <input type="radio" id="sintaticoSLR" name="parser" value="SLR" />
                <label for="sintaticoSLR">SLR(1)</label>
              </div>

              <div>
                <input type="radio" id="sintaticoLALR" name="parser" value="LALR" />
                <label for="sintaticoLALR">LALR(1)</label>
              </div>

              <div>
                <input type="radio" id="sintaticoLRCanonico" name="parser" value="LR" />
                <label for="sintaticoLRCanonico">LR(1)</label>
              </div>
            </fieldset>
          </fieldset>
        </div>
        <button class="btn_aplicarConfiguracoes">Aplicar</button>
      </form>
      <!-- <p v-if="selecionado != -1" style="white-space: pre-line; text-align: center;">{{ projetos[selecionado].options }}</p> -->
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'IBM Plex Sans';
}

h2 {
  text-align: center;
  font-weight: 600;
  color: #85b04d;
}

.modal__configuracoes {
  border: 2px solid rgb(193, 191, 191);
  border-radius: 20px;
  background-color: #dedede;
  padding: 10px;
  width: 40vw;
  height: 74vh;

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

@media (max-width: 1100px) {
  .modal__configuracoes {
    width: 80vw;
    height: 80vh;
    border-radius: 10px;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .modal__configuracoes {
    width: 90vw;
    height: 90vh;
    border-radius: 5px;
    padding: 20px;
  }
}

.modal__configuracoes__inner {
  background-color: inherit;
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

.tab {
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.tab button {
  font-size: medium;
  background-color: inherit;
  color: #4db09c;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  /* margin: 5px; */
  transition: 0.3s;
}

.tab button:hover {
  background-color: #a3d6e3;
}

.tab button.active {
  /* background-color: #b1fae8; */
  background-color: #04aa6d;
  color: white;
}

.tabcontent {
  animation: fadeEffect 0.5s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

fieldset {
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  border-color: #85b04d;
  font-family: 'IBM Plex Sans';
}

legend {
  color: #85b04d;
}

.btn_aplicarConfiguracoes {
  float: right;
  font-size: medium;
  padding: 8px 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.btn_aplicarConfiguracoes:hover {
  background-color: #a3d6e3;
}

.btn_aplicarConfiguracoes:active {
  background-color: #4db09c;
  box-shadow: 0 5px black;
  transform: translateY(4px);
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
