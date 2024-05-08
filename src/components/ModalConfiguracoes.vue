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
    changeTab(tab: string){
      this.activeTab = tab;
    },
    enviarForms(e: Event){
      if(e == null) return
      let newOptions = new Options();
      const form = e.target as HTMLFormElement;

      if(form == null) return
      
      newOptions.setOption('GenerateScanner', (form.gerar.value === '1' || form.gerar.value === '3') ? 'true' : 'false');
      newOptions.setOption('GenerateParser',  (form.gerar.value === '2' || form.gerar.value === '3') ? 'true' : 'false');
      
      newOptions.setOption('Language', form.linguagem.value)
      newOptions.setOption('ScannerName',   form.nomeLexico.value)
      newOptions.setOption('ParserName',    form.nomeSintatico.value)
      newOptions.setOption('SemanticName',  form.nomeSemantico.value)
      newOptions.setOption('Package',       form.nameNamespace.value) 

      newOptions.setOption('ScannerCaseSensitive', form.sensibilidade.checked)
      newOptions.setOption('ScannerTable', form.automato.value)
      newOptions.setOption('Parser', form.parser.value)

      this.projetos[this.selecionado].optionsGals = newOptions
    },
    preencherModal(){
      
      const form: any = this.$refs.form
      const opcoes: Options = this.projetos[this.selecionado].optionsGals

      alert(opcoes.toString())

      if (opcoes.generateScanner && opcoes.generateParser)  form.gerar.value = '3'
      else if (opcoes.generateParser)                       form.gerar.value = '2'
      else if (opcoes.generateScanner)                      form.gerar.value = '1'
      
      if      (Options.LANG_CPP    == opcoes.language) form.linguagem.value = 'C++'
      else if (Options.LANG_JAVA   == opcoes.language) form.linguagem.value = 'Java'
      else if (Options.LANG_DELPHI == opcoes.language) form.linguagem.value = 'Delphi'
      
      form.nomeLexico.value    = opcoes.scannerName
      form.nomeSintatico.value = opcoes.parserName
      form.nomeSemantico.value = opcoes.semanticName
      form.nameNamespace.value = opcoes.pkgName

      form.sensibilidade.checked = opcoes.scannerCaseSensitive;

      if      (Options.SCANNER_TABLE_FULL     == opcoes.scannerTable) form.automato.value = 'Full'
      else if (Options.SCANNER_TABLE_COMPACT  == opcoes.scannerTable) form.automato.value = 'Compact'
      else if (Options.SCANNER_TABLE_HARDCODE == opcoes.scannerTable) form.automato.value = 'Hardcode'

      if      (Options.PARSER_LR       == opcoes.parser) form.automato.value = 'LR'
      else if (Options.PARSER_LALR     == opcoes.parser) form.automato.value = 'LALR'
      else if (Options.PARSER_SLR      == opcoes.parser) form.automato.value = 'SLR'
      else if (Options.PARSER_LL       == opcoes.parser) form.automato.value = 'LL'
      else if (Options.PARSER_REC_DESC == opcoes.parser) form.automato.value = 'RD'
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
        <button class="tablinks" @click="changeTab('Geral')">Geral</button>
        <button class="tablinks" @click="changeTab('Léxico')">Léxico</button>
        <button class="tablinks" @click="changeTab('Sintático')">Sintático</button>
      </div>

      <form id="formOptions" @submit.prevent="enviarForms" ref="form">
        
        <div v-show="activeTab == 'Geral'" id="Geral" class="tabcontent">
          <fieldset id="'gerar'">
            <legend>Gerar</legend>
            <div>
              <input type="radio" id="1" name="gerar" value="1" checked />
              <label for="1">Analisador Léxico</label>
            </div>

            <div>
              <input type="radio" id="2" name="gerar" value="2" />
              <label for="2">Analisador Sintático</label>
            </div>

            <div>
              <input type="radio" id="3" name="gerar" value="3" />
              <label for="3">Analisador Léxico e Sintático</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Linguagem</legend>
            <div>
              <input type="radio" id="1" name="linguagem" value="Java" checked />
              <label for="1">Java</label>
            </div>

            <div>
              <input type="radio" id="2" name="linguagem" value="C++" />
              <label for="2">C++</label>
            </div>

            <div>
              <input type="radio" id="3" name="linguagem" value="Delphi" />
              <label for="3">Delphi</label>
            </div>

            <!-- <div>
              <input type="radio" id="3" name="linguagem" value="C#" />
              <label for="3">C#</label>
            </div> -->
          </fieldset>

          <fieldset>
            <legend>Classes</legend>
            <div>
              <label>Analisador Léxico</label>
              <input type="input" id="1" name="nomeLexico" value="Lexico" checked />
            </div>

            <div>
              <label>Analisador Sintático</label>
              <input type="input" id="2" name="nomeSintatico" value="Sintatico" />
            </div>

            <div>
              <label>Analisador Semantico</label>
              <input type="input" id="3" name="nomeSemantico" value="Semantico" />
            </div>

            <div>
              <input type="checkbox" id="3" name="namespace" v-model="namespace"/>
              <label>Package / Namespace</label>
              <input type="input" :disabled="!namespace" id="3" name="nameNamespace" />
            </div>
          </fieldset>

        </div>

        <div v-show="activeTab == 'Léxico'" id="Léxico" class="tabcontent">
          <fieldset>
            <legend>Forma de Entrada</legend>
            <div>
              <input type="radio" id="1" name="forma__entrada" value="1" checked />
              <label for="1">Stream</label>
            </div>

            <div>
              <input type="radio" id="2" name="forma__entrada" value="2" />
              <label for="2">String</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Implementação do Autômato</legend>
            <div>
              <input type="radio" id="1" name="automato" value="Full" checked />
              <label for="1">Tabela Completa</label>
            </div>

            <div>
              <input type="radio" id="2" name="automato" value="Compact" />
              <label for="2">Tabela Compactada (Só para Java)</label>
            </div>

            <div>
              <input type="radio" id="3" name="automato" value="Hardcode" />
              <label for="3">Específica (Código)</label>
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
                <input type="radio" id="1" name="parser" value="RD" checked />
                <label for="1">Descendente Recursivo</label>
              </div>

              <div>
                <input type="radio" id="2" name="parser" value="LL" checked />
                <label for="2">LL(1)</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Ascendentes</legend>

              <div>
                <input type="radio" id="3" name="parser" value="SLR" checked />
                <label for="3">SLR(1)</label>
              </div>

              <div>
                <input type="radio" id="4" name="parser" value="LALR" checked />
                <label for="4">LALR(1)</label>
              </div>

              <div>
                <input type="radio" id="5" name="parser" value="LR" checked />
                <label for="5">LR(1)</label>
              </div>
            </fieldset>

          </fieldset>
        </div>
      <button >Aplicar</button>
    </form>
      <!-- <p v-if="selecionado != -1" style="white-space: pre-line; text-align: center;">{{ projetos[selecionado].options }}</p> -->
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #424242;
}

.modal__configuracoes {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50vw;
  height: 80vh;

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
.modal__configuracoes__inner {
  background-color: #f2f2f2;
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
