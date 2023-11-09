<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'
import { computed } from 'vue'

export default defineComponent({
  name: 'ModalConfiguracoes',
  components: {},
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
    }
  }
})
</script>

<template>
  <div class="modal__configuracoes" id="modal__configuracoes">
    <h2>Configurações</h2>
    <div class="modal__configuracoes__inner" id="modal__configuracoes__inner">
      <span id="close" v-on:click="fecharModal"></span>
      <p v-if="selecionado != -1" style="white-space: pre-line; text-align: center;">{{ projetos[selecionado].options }}</p>
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
