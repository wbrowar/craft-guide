<template>
  <div class="g-flex g-flex-nowrap g-bg-matrix-block g-duration-150 hover:g-bg-matrix-titlebar">
    <button type="button" @click="onDocumentation" v-if="imageSrcset">
      <img class="g-block g-w-24 g-h-24 g-object-cover" :srcset="imageSrcset" alt="image preview" />
    </button>
    <div class="g-p-3 g-flex-grow g-border-t g-border-solid g-border-matrix-border">
      <h4>{{ title }}</h4>
      <p v-html="docs.summary" v-if="docs?.summary"></p>
      <div class="g-space-x-1">
        <button class="btn small icon add g-mt-1" type="button" @click="onInsert">Add</button>
        <button class="btn small icon copy g-mt-1" type="button" @click="onCopy">Copy</button>
        <button class="btn small g-mt-1" type="button" @click="onDocumentation" v-if="docs">Documentation</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentListItem',
  components: {},
  props: {
    code: { type: String, required: true },
    docs: Object,
    imageSrcset: String,
    title: { type: String, required: true },
  },
  emits: ['documentation-clicked', 'insert-clicked'],
  computed: {},
  methods: {
    onCopy() {
      navigator.clipboard.writeText(this.code);
    },
    onDocumentation() {
      this.$emit('documentation-clicked', {
        code: this.code,
        description: this.docs?.description || null,
        imageSrcset: this.imageSrcset || null,
        props: this.docs?.props || null,
        summary: this.docs?.summary || null,
        title: this.title,
      });
    },
    onInsert() {
      this.$emit('insert-clicked', this.code);
    },
  },
  // mounted() {},
});
</script>
