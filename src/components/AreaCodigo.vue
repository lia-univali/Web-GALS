<script lang="ts">
import { projetoStore } from '@/stores/projetoStore';
import { computed } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AreaCodigo',
    props: {
        titulo: String,
    },
    data() {
        return {
            texto: "Area de Texto para teste",
        }
    },
    setup() {
        const store = projetoStore();

        const selecionado = computed(() => {
            return store.selecionado;
        });

        const projetos = computed(() => {
            return store.listaProjetos;
        });

        return {
            store,
            projetos,
            selecionado,
        }
    },
    watch: {
        selecionado() {
            console.log("Selecionado: " + this.selecionado)
            const definicoesRegulares = document.getElementById('textoDefinicoesRegulares');
            const tokens = document.getElementById('textoTokens');
            const naoTerminais = document.getElementById('textoNaoTerminais');
            const gramatica = document.getElementById('textoGramatica');

            if(this.selecionado == -1) return;

            if (definicoesRegulares != null)
                (definicoesRegulares as HTMLInputElement).value = this.projetos[this.selecionado].regularDefinitions;
            if (tokens != null)
                (tokens as HTMLInputElement).value = this.projetos[this.selecionado].tokens;
            if (naoTerminais != null)
                (naoTerminais as HTMLInputElement).value = this.projetos[this.selecionado].nonTerminals;
            if (gramatica != null)
                (gramatica as HTMLInputElement).value = this.projetos[this.selecionado].grammar;

        }
    },
    methods: {
        atualizarProjeto() {
            console.log("Atualizado: " + this.selecionado)
            let selecionado = this.store.selecionado;

            const definicoesRegulares = document.getElementById('textoDefinicoesRegulares');
            const tokens = document.getElementById('textoTokens');
            const naoTerminais = document.getElementById('textoNaoTerminais');
            const gramatica = document.getElementById('textoGramatica');

            switch (this.titulo) {
                case 'Definições Regulares':
                    this.store.setRegularDefinitions(selecionado, (definicoesRegulares as HTMLInputElement).value)
                    break;
                case 'Tokens':
                    this.store.setTokens(selecionado, (tokens as HTMLInputElement).value)
                    break;
                case 'Não Terminais':
                    this.store.setNonTerminalse(selecionado, (naoTerminais as HTMLInputElement).value)
                    break;
                case 'Gramática':
                    this.store.setGrammar(selecionado, (gramatica as HTMLInputElement).value)
                    break;
                case 'Simulador':
                    this.store.setGrammar(selecionado, (gramatica as HTMLInputElement).value)
                    break;
                default:
                    alert('Erro');
            }
        },
    },
});
</script>

<template>
    <div class="caixa">
        <p class="caixa__titulo">{{titulo}}</p>
        <div v-if="titulo =='Definições Regulares' && selecionado == -1" class="caixa__interna">
            <textarea id="textoDefinicoesRegulares" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Tokens' && selecionado == -1" class="caixa__interna">
            <textarea id="textoTokens" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Não Terminais' && selecionado == -1" class="caixa__interna">
            <textarea id="textoNaoTerminais" name="textoCodigo" rows="4" cols="50" class="texto__codigo"  spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Gramática' && selecionado == -1" class="caixa__interna">
            <textarea id="textoGramatica" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Saida' && selecionado == -1" class="caixa__interna">
            <textarea id="textoSaida" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Simulação' && selecionado == -1" class="caixa__interna">
            <textarea id="textoSimulacao" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Definições Regulares'" class="caixa__interna">
            <textarea id="textoDefinicoesRegulares" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" v-model="projetos[selecionado].regularDefinitions"></textarea>
        </div>
        <div v-else-if="titulo =='Tokens'" class="caixa__interna">
            <textarea id="textoTokens" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" v-model="projetos[selecionado].tokens" ></textarea>
        </div>
        <div v-else-if="titulo =='Não Terminais'" class="caixa__interna">
            <textarea id="textoNaoTerminais" name="textoCodigo" rows="4" cols="50" class="texto__codigo"  spellcheck="false" v-model="projetos[selecionado].nonTerminals"></textarea>
        </div>
        <div v-else-if="titulo =='Gramática'" class="caixa__interna">
            <textarea id="textoGramatica" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" v-model="projetos[selecionado].grammar"></textarea>
        </div>
        <div v-else-if="titulo =='Saida'" class="caixa__interna">
            <textarea id="textoSaida" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" disabled></textarea>
        </div>
        <div v-else-if="titulo =='Simulação'" class="caixa__interna">
            <textarea id="textoSimulacao" name="textoCodigo" rows="4" cols="50" class="texto__codigo" spellcheck="false" v-model="store.textoSimulador"></textarea>
        </div>
    </div>
</template>

<style scoped>
.texto__codigo {

    outline: none;
    resize: none;
    width: 99%;
    height: calc(100% - 7px);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    font-family: 'Fira Code';

    white-space: nowrap;
}

.caixa {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;

    border-radius: 5px;
    background-color: white;

    flex-grow: 1;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.caixa__interna {
    margin: 0px;
    padding: 3px;
    width: 100%;
    height: calc(100% - 21.333px);
}

.caixa__titulo {
    font-family: 'IBM Plex Sans';
    font-weight: 600;
    color: #424242;

    border-bottom: 1px solid;
    border-color: #B1B1B1;

    text-align: center;
    margin: 0px;
    padding: 0px;

}
</style>