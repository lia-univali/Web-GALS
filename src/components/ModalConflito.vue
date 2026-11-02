<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'

export default defineComponent({
  name: 'ModalConflito',

  components: {},

  data() {
    return {
      state: 0,
      intext: '',
      conflicts: [] as string[][],
      resolver: null as ((value: string) => void) | null,
    }
  },

  setup() {
    const store = projetoStore()

    return {
      store
    }
  },

  methods: {
    fecharModal() {
      const formulario = document.getElementById('modal__conflito')
      const bg = document.getElementById('modal__conflito__darkbg')
      if (formulario != null) formulario.style.display = 'none'
      if (bg != null) bg.style.display = 'none'
    },

    abrirModal() {
      const formulario = document.getElementById('modal__conflito')
      const bg = document.getElementById('modal__conflito__darkbg')
      if (formulario != null) formulario.style.display = 'flex'
      if (bg != null) bg.style.display = 'flex'
    },

    pedirResolucao(state: number, intext: string, conflicts: string[][]): Promise<string> {
      this.state = state
      this.intext = intext
      this.conflicts = conflicts

      this.abrirModal()

      return new Promise((resolve) => {
        this.resolver = resolve
      })
    },

    resolverConflito() {
      this.fecharModal()

      let form: any = this.$refs.formConflicts
      let solution = form.solution.value !== undefined ? (parseInt(form.solution.value, 10) + 1) : 1

      const resolve = this.resolver
      this.resolver = null

      resolve?.(solution.toString())
    }
  }
})
</script>

<template>
  <div class="modal__conflito__darkbg" id="modal__conflito__darkbg">
  </div>
  <div class="modal__conflito" id="modal__conflito">
    <h2>Conflito Gramatical</h2>

    <div class="modal__conflito__inner" id="modal__conflito__inner">
      <p>
        A gramática especificada é ambígua, e existe uma (ou mais) transições que não podem ser decididas automaticamente.
        <br><br>
        O estado no topo da pilha é: <span class="inline-data">{{ state }}</span>
        <br>
        O símbolo da entrada é: <span class="inline-data">{{ intext }}</span>
        <br><br>
        Escolha qual ação deve ser executada:
        <br>
      </p>
      <form ref="formConflicts">
          <fieldset id="solution">
            <div v-for="(conflict, index) in conflicts" :key="conflict[1]" class="modal__conflito__for">
              <div>
                <input type="radio" :id="'solution' + index.toString()" name="solution" :value="index" :checked="index == 0"/>
                <label :for="'solution' + index.toString()"><b>{{ conflict[0] }}:</b> <span class="inline-data">{{ conflict[1] }}</span></label>
              </div>
            </div>
          </fieldset>
      </form>
      <button v-on:click="resolverConflito">
        Resolver
      </button>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'IBM Plex Sans';
}

.modal__conflito__darkbg {
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 99998;
  display: none;
}
h2 {
  font-family: 'IBM Plex Sans';
  text-align: center;
  font-weight: 600;
  color: #424242;
}
.inline-data {
  font-family: Consolas, Monaco, 'Andale Mono', 'Lucida Console', monospace;
  white-space: nowrap;
}
button {
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

  width: 100%;
  height: 38px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #749a43;
}

button:active {
  background-color: #749a43;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}
.modal__conflito {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50vw;
  height: fit-content;

  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: none;
  flex-direction: column;


  overflow: none;
}
.modal__conflito__inner {
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

  display: flex;
  flex-direction: column;

  overflow: none;
}
.modal__conflito__for {
  display: flex;
  flex-direction: column;
}
</style>

<!-- Modelines; ponha a sua aqui -->

<!-- kate: replace-tabs on; indent-width 2; tab-width 2; -->
