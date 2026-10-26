<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TreeBrowser',
  components: {},
  props: {
    node: Object,
    isFinal: {
      type: Boolean,
      default: true
    },
    isRoot: {
      type: Boolean,
      default: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isOpen: this.isRoot
    }
  },
  computed: {
    isFolder() {
      if (this.node == null) return false
      return this.node.children && this.node.children.length
    }
  },
  methods: {

    collapseTreeCb() {
      if (this.$refs.children) {
        for (const child of this.$refs.children as any[]) {
          child.collapseTree()
        }
      }
    },
    collapseTree() {
      this.isOpen = false;
      if (this.$refs.children) {
        for (const child of this.$refs.children as any[]) {
          child.collapseTree()
        }
      }
    },
    expandTree() {
      this.isOpen = true;
      if (this.$refs.children) {
        for (const child of this.$refs.children as any[]) {
          child.expandTree()
        }
      }
    }
  }
})
</script>

<template>
  <div class="tree">
    <ul>
      <li :class="{ not__final: !isFinal, root: isRoot }">
        <details :open="isOpen" v-if="isFolder" @toggle="isOpen = ($event.target as HTMLDetailsElement).open">
          <summary
            :style="{
              fontWeight: isFolder ? 'bold' : 'normal',
              color: isFolder ? 'green' : 'black'
            }"
          >
            {{ node?.value }}
            <button class='text-button' @click.stop="collapseTreeCb">-</button>
            <button class='text-button' @click.stop="expandTree">+</button>
          </summary>
          <TreeBrowser
            ref='children'
            v-for="(child, index) in node?.children"
            :key="child.value == null ? '' : `${child.value}#${index},${depth}`"
            :node="child"
            :is-final="index == node?.children.length - 1"
            :is-root="false"
            :depth="depth + 1"
          />
        </details>
        <div v-else>
          <li>{{ node?.value }}</li>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tree {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  /* overflow: auto; */
}

ul {
  font-family: 'IBM Plex Sans';
  list-style: none;
  line-height: 2em;
}

ul summary {
  cursor: pointer;
  list-style-type: '';
  white-space: nowrap;
}

ul summary::after {
  cursor: pointer;
  list-style-type: '';
}

ul li {
  position: relative;
}

ul li::before {
  position: absolute;
  left: -20px;
  top: 0px;
  border-left: 2px solid;
  border-bottom: 2px solid black;
  content: '';
  width: 14px;
  height: 1em;
}

button.text-button {
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	font: inherit;
	color: inherit;
	cursor: pointer;
}


button.text-button {
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  font: inherit;
  color: white;
  cursor: pointer;

  width: 1.5em;
  height: 1.5em;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

summary:hover button.text-button {
  color: inherit;
}

button.text-button:hover {
  background: #dfd;
}

.not__final::after {
  position: absolute;
  left: -20px;
  bottom: 0px;
  border-left: 2px solid black;
  content: '';
  width: 7px;
  height: 100%;
}

.root::after {
  display: none;
}

.root::before {
  display: none;
}
</style>

<!-- Modelines; ponha a sua aqui -->

<!-- kate: replace-tabs on; indent-width 2; tab-width 2; -->
