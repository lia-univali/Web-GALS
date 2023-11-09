<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TreeBrowser',
  components: {},
  props:{
    node: Object,
    depth:{
      type: Number,
      default: 0
    },
    id: Number
  },
  data() {
    return {
      isOpen: true,
    }
  },
  computed: {
    isFolder() {
      if( this.node == null) return false;
      return this.node.children && this.node.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    openCloseCharacter(): string {
      if (this.isFolder) {
        return this.isOpen ?  "-": "+"
      }else{
        return ""
      }
    },
  }
})
</script>

<template>
  <div class="teste"
  >
   <div 
      class="node"
      :style="{'margin-left': `${depth * 20}px`}"
      @click="toggle"
    >
      <span class="type">{{openCloseCharacter()}}</span>
      
      {{node?.value}}

    </div>

    <div :class="{'hidden': !isOpen, 'show': isOpen}">
        <TreeBrowser
          v-for="(child, index) in node?.children"
          :key="child.value == null? '' : child.value "
          :node="child"
          :depth="depth + 1"
          :id="index"
        />
    </div>
    
  </div>
</template>

<style scoped>

  .teste{
    border: 1px solid #333;
  }
  .node{

    
    text-align: left;
    cursor: pointer;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }
  
  .hidden{
    display: none;
  }
  .show{
    visibility: block;
  }
  
</style>
