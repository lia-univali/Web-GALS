<script lang="ts">
import { defineComponent } from 'vue'
import BarraSuperior from '@/components/BarraSuperior.vue'
import AreaCodigo from './components/AreaCodigo.vue'
import SimuladorJanela from './components/SimuladorJanela.vue'
import BarraEsquerda from './components/BarraEsquerda.vue'
import ModalNovoArquivo from './components/ModalNovoArquivo.vue'
import ModalConfiguracoes from './components/ModalConfiguracoes.vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default defineComponent({
  name: 'GalsWeb',
  components: {
    BarraSuperior,
    AreaCodigo,
    Splitpanes,
    Pane,
    SimuladorJanela,
    BarraEsquerda,
    ModalNovoArquivo,
    ModalConfiguracoes
  }
})
</script>

<template>
  <ModalNovoArquivo />
  <ModalConfiguracoes />
  <BarraSuperior />

  <div class="contentor__geral">
    <div class="contentor__esquerda">
      <BarraEsquerda />
      <!--<div class="caixa white"></div> -->
    </div>

    <div class="contentor__centro">
      <div class="contentor__centro__superior">
        <splitpanes horizontal>
          <pane>
            <splitpanes vertival>
              <pane>
                <AreaCodigo titulo="Tokens" />
              </pane>
              <pane>
                <AreaCodigo titulo="Simulação" />
              </pane>
              <pane>
                <SimuladorJanela />
              </pane>
            </splitpanes>
          </pane>
          <pane>
            <AreaCodigo titulo="Gramática" />
          </pane>
        </splitpanes>
      </div>
      <div class="contentor__centro__inferior">
        <AreaCodigo titulo="Saída" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #aeaeae;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background: #cecece;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #cecece;
}

.contentor__geral {
  display: flex;
  height: calc(100vh - 70px);
  margin: 0px;
  padding: 10px;
  gap: 10px;
}

.contentor__esquerda {
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  margin: 0px;
  padding: 0px;
}

.contentor__centro {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
}

.contentor__centro__superior {
  width: 100%;
  height: calc(100% - 67px);
  flex-grow: 1;
  display: flex;

  margin: 0px;
  padding: 0px;
}

.contentor__centro__inferior {
  width: 100%;
  height: 57px;
  margin: 0px;
  padding: 0px;
  margin-top: 10px;
}

.splitpanes--vertical > .splitpanes__splitter {
  min-width: 10px;
}

.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 10px;
}

.splitpanes--vertical > .splitpanes__splitter:hover {
  background-color: #a8d19b;
  border-radius: 3px;
  transition: 0.3s;
}

.splitpanes--horizontal > .splitpanes__splitter:hover {
  background-color: #a8d19b;
  border-radius: 3px;
  transition: 0.3s;
}
</style>
