<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TreeBrowser',
  components: {},
  props:{
    node: Object,
    isFinal: {
      type: Boolean,
      default: true
    },
    isRoot: {
      type: Boolean,
      default: true
    }
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
})
</script>

<template>
  <div class="tree">
  <ul>
    <li :class="{ 'not__final': !isFinal, 'root': isRoot}">
      <details :open="isRoot" v-if="isFolder" >
        <summary :style="{ fontWeight: isFolder ? 'bold' : 'normal',  color: isFolder ? 'green' : 'black' }">{{node?.value}}</summary>
        <TreeBrowser
          v-for="(child, index) in node?.children"
          :key="(child.value == null) ? '' : child.value "
          :node="child"
          :is-final="index == node?.children.length - 1"
          :is-root="false"
        />
      </details>
      <div v-else><li>{{node?.value}}</li></div>
    </li>
  </ul>
  </div>
</template>

<style scoped>
  .tree{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow: auto;
  }

  ul{
    font-family: 'IBM Plex Sans';
    list-style: none;
    line-height: 2em;
  }

  ul summary{
    cursor: pointer;
    list-style-type: '';
  }

  ul summary::after{
    cursor: pointer;
    list-style-type: '';
  }

  ul li{
    position: relative;
  }

  ul li::before{
    position: absolute;
    left: -20px;
    top: 0px;
    border-left: 2px solid  ;
    border-bottom: 2px solid black;
    content: "";
    width: 14px;
    height: 1em;
  }

  .not__final::after{
    position: absolute;
    left: -20px;
    bottom: 0px;
    border-left: 2px solid black;
    content: "";
    width: 7px;
    height: 100%;
  }

  .root::after{
    display: none;
  }

  .root::before{
    display: none;
  }

</style>
