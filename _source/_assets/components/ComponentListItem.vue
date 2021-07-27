<template>
  <div>
    <p>{{ title }}</p>
    <button type="button" title="copy" @click="onCopy">🗂</button>
    <button type="button" title="insert" @click="onInsert">➡️</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'ComponentListItem',
  components: {},
  props: {
    code: { type: String, required: true },
    title: { type: String, required: true },
  },
  // setup: (props) => {
  //   const state = reactive<{
  //     currentTab: EditorTabGroup;
  //     editorComponents: EditorComponent[];
  //     editorContent: string;
  //     guide: Guide;
  //   }>({
  //     title
  //   });
  //
  //   state.editorContent = state.guide.content;
  //
  //   return { ...toRefs(state) };
  // },
  computed: {},
  methods: {
    onCopy() {
      navigator.clipboard.writeText(this.code);
    },
    onInsert() {
      this.$emit('insert-clicked', this.code);
    },
  },
  // mounted() {},
});
</script>
