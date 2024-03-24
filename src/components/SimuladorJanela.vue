<script lang="ts">
import { defineComponent } from 'vue'
import { projetoStore } from '@/stores/projetoStore'
import { Token } from '@/assets/scripts/gals-lib/analyser/Token'
import { lexicalSimulation, syntacticSimulation } from '@/assets/scripts/gals-functions'
import { Options } from '@/assets/scripts/gals-lib/generator/Options'
import { TreeNode } from '@/assets/scripts/gals-lib/DataStructures'
import TreeBrowser from '@/components/TreeBrowser.vue'

export default defineComponent({
  name: 'SimuladorJanela',
  components: {
   TreeBrowser
  },
  data() {
    return {
      resultadoLexico: new Map<Token, string>(),
      resultadoSintatico: new TreeNode<string>(),
      tipoSimulacao: "Lexico",
    }
  },
  setup() {
    const store = projetoStore()

    return {
      store
    }
  },
  methods: {
    simularLexico() {
      this.tipoSimulacao = "Lexico";
      const selecionado = this.store.selecionado;

      if (selecionado == -1) return;

      const projeto = this.store.listaProjetos[selecionado];
      try {
        this.resultadoLexico = lexicalSimulation(
          projeto.textSimulator,
          projeto.regularDefinitions,
          projeto.tokens
        );

        projeto.consoleExit = 'Simulação Concluida';
      } catch (error) {
        console.log(error as Object);
        projeto.consoleExit = 'Erro Léxico: ' + (error as Error).message;
      }
    },
    simularSintatico() {
      this.tipoSimulacao = "Sintático";
      const selecionado = this.store.selecionado
      if (selecionado == -1) return

      const projeto = this.store.listaProjetos[selecionado]

      
      console.log(projeto.nonTerminals)

      try {
        const result = syntacticSimulation(
          projeto.textSimulator,
          projeto.regularDefinitions,
          projeto.tokens,
          projeto.nonTerminals,
          projeto.grammar,
          Options.PARSER_SLR,
          null
        )
        console.log(result);
        this.resultadoSintatico = result;
        projeto.consoleExit = 'Simulação Concluida'
      } catch (error) {
        console.log(error as Object)
        projeto.consoleExit = 'Erro Léxico: ' + (error as Error).message
      }
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
            <tr v-for="(valor, chave) in resultadoLexico" :key="chave">
              <td>{{ valor[1] }}</td>
              <td>{{ valor[0].lexeme }}</td>
              <td>{{ valor[0].position }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="saida__simulacao" v-if="tipoSimulacao === 'Sintático'">
          <div>
            <TreeBrowser
            :node="resultadoSintatico.toJSON()"
            />
          </div>
      </div>
      <div class="container__botao__simular">
        <button class="botao__simular" @click="simularLexico">Simular Lexico</button>
        <button class="botao__simular" @click="simularSintatico">Simular Sintático</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

table {
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
  border-collapse: collapse;
  width: calc(100% - 1px);
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

  flex-grow: 2;
}
.container__botao__simular {
  border-top: 1px solid;
  border-color: #b1b1b1;

  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
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
</style>
