<template>
  <div class="g-grid g-grid-cols-[minmax(200px,400px),1fr] g-gap-10">
    <div class="g-bg-[#ff0000]">
      <div style="cursor: move" draggable @dragstart="startDrag($event, 'dragging')">
        <p>draggable</p>
      </div>
    </div>
    <div class="g-bg-[#ff00ff]" @drop="onDrop($event, 'landing')" @dragenter.prevent @dragover.prevent>
      <VAceEditor
        ref="editor"
        v-model:value="editorContent"
        class="g-min-h-[800px] g-h-[70vh]"
        wrap
        :lang="guide.format"
        :options="{
          displayIndentGuides: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          showInvisibles: false,
          tabSize: 2,
        }"
        placeholder="ahhh"
        theme="tomorrow_night_bright"
        style="height: 300px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { Guide } from '~/types/plugins';
import { VAceEditor } from 'vue3-ace-editor';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-twig';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';

export default defineComponent({
  name: 'GuideEditor',
  components: {
    VAceEditor,
  },
  props: {
    guideData: { type: String, required: true },
  },
  setup: (props) => {
    const state = reactive<{
      editorContent: string;
      currentTab: 'config';
      guide: Guide;
    }>({
      editorContent: '',
      currentTab: 'config',
      guide: JSON.parse(props.guideData),
    });

    state.editorContent = state.guide.content;

    return { ...toRefs(state) };
  },
  mounted() {
    if (import.meta.env.DEV) {
      console.log('Guide Editor: guide');
      console.table(this.guide);
    }
  },
  methods: {
    onDrop(e: DragEvent, thing) {
      console.log('drag', e, thing);
    },
    startDrag: (e: DragEvent, thing) => {
      e.dataTransfer.dropEffect = 'move';
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('itemID', thing);
    },
  },
});
</script>

<style scoped></style>
