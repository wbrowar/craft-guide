<script lang="ts" setup>
import { t } from '../globals';

const emit = defineEmits(['documentation-clicked', 'insert-clicked']);
const props = defineProps({
  code: { type: String, required: true },
  docs: Object,
  imageSrcset: String,
  title: { type: String, required: true },
});

function onCopy() {
  navigator.clipboard.writeText(props.code);
}
function onDocumentation() {
  emit('documentation-clicked', {
    code: props.code,
    description: props.docs?.description || null,
    imageSrcset: props.imageSrcset || null,
    props: props.docs?.props || null,
    summary: props.docs?.summary || null,
    title: props.title,
  });
}
function onInsert() {
  emit('insert-clicked', props.code);
}
</script>

<template>
  <div class="g-flex g-flex-nowrap g-bg-matrix-block g-duration-150 hover:g-bg-matrix-titlebar">
    <button type="button" @click="onDocumentation" v-if="imageSrcset">
      <img class="g-block g-w-24 g-h-24 g-object-cover" :srcset="imageSrcset" alt="image preview" />
    </button>
    <div class="g-p-3 g-flex-grow g-border-t g-border-solid g-border-matrix-border">
      <h4>{{ title }}</h4>
      <p v-html="docs.summary" v-if="docs?.summary"></p>
      <div class="g-space-x-1">
        <button class="btn small icon add g-mt-1" type="button" @click="onInsert">{{ t('Add') }}</button>
        <button class="btn small icon copy g-mt-1" type="button" @click="onCopy">{{ t('Copy') }}</button>
        <button class="btn small g-mt-1" type="button" @click="onDocumentation" v-if="docs">
          {{ t('Documentation') }}
        </button>
      </div>
    </div>
  </div>
</template>
