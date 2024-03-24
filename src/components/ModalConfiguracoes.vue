<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'

export default defineComponent({
  name: 'ModalConfiguracoes',
  components: {},
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

      <div v-show="activeTab == 'Geral'" id="Geral" class="tabcontent">
        <fieldset>
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
            <input type="radio" id="1" name="linguagem" value="1" checked />
            <label for="1">Java</label>
          </div>

          <div>
            <input type="radio" id="2" name="linguagem" value="2" />
            <label for="2">C++</label>
          </div>

          <div>
            <input type="radio" id="3" name="linguagem" value="3" />
            <label for="3">Delphi</label>
          </div>

          <div>
            <input type="radio" id="3" name="linguagem" value="3" />
            <label for="3">C#</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Classes</legend>
          <div>
            <label>Analisador Léxico</label>
            <input type="input" id="1" name="linguagem" value="Lexico" checked />
          </div>

          <div>
            <label>Analisador Sintático</label>
            <input type="input" id="2" name="linguagem" value="Sintatico" />
          </div>

          <div>
            <label>Analisador Semantico</label>
            <input type="input" id="3" name="linguagem" value="Semantico" />
          </div>

          <div>
            <input type="checkbox" id="3" name="linguagem" v-model="namespace"/>
            <label>Package / Namespace</label>
            <input type="input" :disabled="!namespace" id="3" name="linguagem" value="" />
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
            <input type="radio" id="1" name="automato" value="1" checked />
            <label for="1">Tabela Completa</label>
          </div>

          <div>
            <input type="radio" id="2" name="automato" value="2" />
            <label for="2">Tabela Compactada (Só para Java)</label>
          </div>

          <div>
            <input type="radio" id="3" name="automato" value="3" />
            <label for="3">Específica (Código)</label>
          </div>
        </fieldset>

        <div>
          <input type="checkbox" id="sensibilidade" name="linguagem" />
          <label>Diferenciar maiúscula/minúscula em casos especiais</label>
        </div>

      </div>

      <div v-show="activeTab == 'Sintático'" id="Sintático" class="tabcontent">
        <fieldset>
          <legend>Classe do Analisador Sintático</legend>

          <fieldset>
            <legend>Descendentes</legend>

            <div>
              <input type="radio" id="1" name="descendentes" value="1" checked />
              <label for="1">Descendente Recursivo</label>
            </div>

            <div>
              <input type="radio" id="2" name="descendentes" value="2" checked />
              <label for="2">LL(1)</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Ascendentes</legend>

            <div>
              <input type="radio" id="1" name="ascendentes" value="1" checked />
              <label for="1">SLR(1)</label>
            </div>

            <div>
              <input type="radio" id="2" name="ascendentes" value="2" checked />
              <label for="2">LALR(1)</label>
            </div>

            <div>
              <input type="radio" id="3" name="ascendentes" value="3" checked />
              <label for="3">LR(1)</label>
            </div>
          </fieldset>

        </fieldset>
      </div>

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
