<script lang="ts">
import { computed, defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'
import { Token } from '@/assets/scripts/gals-lib/analyser/Token'
import { lexicalSimulation, syntacticSimulation } from '@/assets/scripts/gals-functions'
import { TreeNode } from '@/assets/scripts/gals-lib/DataStructures'
import TreeBrowser from '@/components/TreeBrowser.vue'
import type { Grammar } from '@/assets/scripts/gals-lib/generator/parser/Grammar'

export default defineComponent({
  name: 'SimuladorJanela',
  components: {
    TreeBrowser
  },
  data() {
    return {
      resultadoLexico: new Map<Token, string>(),
      resultadoSintatico: new TreeNode<string>(),
      tipoSimulacao: 'Lexico'
    }
  },
  setup() {
    const store = projetoStore()

    const toggleNecessarioRecriar = () => {
      store.changeNecessarioRecriar();
    };

    const necessarioRecriar = computed({
      get: () => store.necessarioRecriar,
      set: (value: boolean) => store.setNecessarioRecriar(value),
    });

    return {
      store,
      necessarioRecriar
    }

  },
  methods: {
    simularLexico() {
      this.tipoSimulacao = 'Lexico'
      const selecionado = this.store.selecionado

      if (selecionado == -1) return

      const projeto = this.store.listaProjetos[selecionado]
      if(!projeto.textSimulator) {
        projeto.consoleExit = 'A entrada do simulador está vazia!'
        this.$toast.warning("A entrada do simulador está vazia.");
        return;
      }
      try {
        this.resultadoLexico = lexicalSimulation(
          projeto.textSimulator,
          projeto.regularDefinitions,
          projeto.tokens
        )

        this.$toast.default("Simulação Léxica Concluída");

        projeto.consoleExit = 'Simulação Léxica Concluida'
      } catch (error) {
        console.warn(error)
        this.$toast.error("Erro Léxico: "+(error as Error).message)
        projeto.consoleExit = 'Erro Léxico: ' + (error as Error).message
      }
    },
    simularSintatico() {
      this.tipoSimulacao = 'Sintático'
      const selecionado = this.store.selecionado
      if (selecionado == -1) return

      const projeto = this.store.listaProjetos[selecionado]

      if(!projeto.textSimulator) {
        projeto.consoleExit = 'A entrada do simulador está vazia!'
        this.$toast.warning("A entrada do simulador está vazia.");
        return;
      }
      try {
        const result = syntacticSimulation(
          projeto.textSimulator,
          projeto.regularDefinitions,
          projeto.tokens,
          projeto.nonTerminals,
          projeto.grammar,
          projeto.optionsGals.parser,
          this.store.necessarioRecriar,
          undefined,
          undefined,
          this.store.gramatica as Grammar | undefined
        )
        let [resultadoSintatico,  novaGramatica] = result

        this.resultadoSintatico = resultadoSintatico
        this.store.gramatica = novaGramatica;

        this.$toast.default("Simulação Sintática Concluída")
        
        projeto.consoleExit = 'Simulação Concluida'
      } catch (error) {
        console.log(error)
        this.$toast.error("Erro Léxico/Sintático: "+ (error as Error).message);
        projeto.consoleExit = 'Erro Léxico/Sintático: ' + (error as Error).message
      }
    },
    tokenSelect(lexeme:string, position:number) {
      const inputSimulacaotextArea = document.getElementById('textoSimulacao')?.getElementsByTagName('textarea')[0];
      inputSimulacaotextArea?.setSelectionRange(position, position+lexeme.length);
      inputSimulacaotextArea?.focus()
    }
  }
})
</script>

<template>
  <div class="contentor__simulacao">
    <div class="container__saida__simulacao">
      <p class="caixa__titulo">Saída da Simulação</p>

      <div class="saida__simulacao" v-if="tipoSimulacao === 'Lexico'">
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Lexeme</th>
              <th>Posição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(valor, chave) in resultadoLexico" :key="chave" v-on:click="tokenSelect(valor[0].lexeme,valor[0].position)">
              <td>{{ valor[1] }}</td>
              <td>{{ valor[0].lexeme }}</td>
              <td>{{ valor[0].position }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="saida__simulacao" v-if="tipoSimulacao === 'Sintático'">
        <div>
          <TreeBrowser :node="resultadoSintatico.toJSON()" />
        </div>
      </div>
      <div class="container__botao__simular">
        <button class="botao__simular" @click="simularLexico">Simular Lexico</button>
        <button class="botao__simular" @click="simularSintatico">Simular Sintático</button>
      </div>
      <div class="container__botao__simular">
        <span class="material-icons customizado"  title="Reconstruir Gramática" style="font-size: 22px;">restart_alt</span>
        <label class="switch">
          <input type="checkbox" title="Reconstruir Gramática" v-model="necessarioRecriar"/>-
          <span title="Reconstruir Gramática" class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.caixa__titulo {
  text-align: center;

  font-family: 'IBM Plex Sans';
  font-weight: 600;
  color: #424242;

  border-bottom: 1px solid;
  border-color: #b1b1b1;

  margin: 0px;
  padding: 0px;
}

table {
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
  border-collapse: collapse;
  width: 100%;
  border-radius: 15px;
}

th {
  text-align: left;
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid rgb(217, 217, 217);
  border-left: 1px solid rgb(217, 217, 217);
  border-right: 1px solid rgb(217, 217, 217);
  position: relative;
}

th::before {
  background-color: rgb(217, 217, 217);
}

td {
  padding: 8px 8px 8px 10px;
  border-bottom: 1px solid rgb(217, 217, 217);
  border-left: 1px solid rgb(217, 217, 217);
  border-right: 1px solid rgb(217, 217, 217);
}

table td:first-child {
  border-left: none;
}

table td:last-child {
  border-right: none;
}

tr:nth-child(even) {
  background-color: #eff2f5;
}

tr:not(:first-child):hover {
  background-color: rgba(114, 114, 113, 0.2);
}

tr:hover {
  background-color: rgba(114, 114, 113, 0.2);
}
.saida__simulacao {
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.saida__simulacao__arvore {
  background-color: white;
  width: 100%;
  height: 100%;
}

.contentor__simulacao {
  display: flex;
  background-color: white;
  border-radius: 5px;
  height: 100%;
  flex-grow: 2;
}

.container__saida__simulacao {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;

  flex-grow: 1;
  overflow: auto;
}
.container__botao__simular {
  border-top: 1px solid;
  border-color: #b1b1b1;

  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  align-items: center;
}
.botao__tipo__simulacao {
  font-family: 'IBM Plex Sans';
  font-size: 16px;
  color: #424242;
  text-decoration: none;

  text-align: center;
  vertical-align: middle;

  border: none;
  border-bottom: 1px solid;
  border-color: #b1b1b1;
  background-color: white;

  width: 100%;
  height: 22px;
}

.botao__tipo__simulacao.esquerda {
  border-top-left-radius: 5px;
  border-right: 1px solid;
  border-color: #b1b1b1;
}

.botao__tipo__simulacao.direita {
  border-top-right-radius: 5px;
}

.botao__tipo__simulacao:hover {
  background-color: #9ed15c;
}

.conjunto__botoes {
  margin: 0px;
  padding: 0%;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-color: #b1b1b1;

  background-color: white;

  display: flex;
  flex-grow: 1;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.botao__simular {
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

  width: 180px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;
}

.botao__simular::before {
  content: url(@/assets/icons/Simular.svg);
  vertical-align: middle;
}

.botao__simular:hover {
  background-color: #749a43;
}

.botao__simular:active {
  background-color: #749a43;
  box-shadow: 0 1px #666;
  transform: translateY(1px);
}



.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin: 5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}

.material-icons.customizado{
  cursor: default;
}

</style>
