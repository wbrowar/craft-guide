<script lang="ts" setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['closed', 'opened']);
const props = defineProps({
  aspectRatio: String,
  clickOutsideToClose: { type: Boolean, default: false },
  maxHeight: { type: String, default: '600px' },
  maxWidth: { type: String, default: '800px' },
  teleportTo: { type: String, default: null },
});

const isOpen = ref(false);
const modalStyles = computed(() => {
  const styles: Record<string, any> = {
    '--max-height': props.maxHeight,
    '--max-width': props.maxWidth,
  };

  if (props.aspectRatio) {
    styles['--aspect-ratio'] = props.aspectRatio;
  }

  return styles;
});

function close() {
  isOpen.value = false;
  emit('closed');
}
function open() {
  isOpen.value = true;
  emit('opened');
}

defineExpose({
  close,
  open,
});
</script>

<template>
  <Teleport :disabled="!teleportTo" :to="teleportTo">
    <div
      class="guide-modal g-flex g-items-center g-justify-center g-p-20 g-inset-0 g-z-[1000]"
      :class="[teleportTo ? 'g-fixed' : 'g-absolute']"
      v-show="isOpen"
    >
      <div class="g-absolute g-w-full g-h-full" @click="clickOutsideToClose ? close() : null"></div>
      <div
        class="g-relative g-w-full g-max-w-[var(--max-width)] g-max-h-[var(--max-height)] g-aspect-[var(--aspect-ratio)] g-bg-white g-rounded-lg g-shadow-lg"
        :class="aspectRatio ? '' : 'g-h-full'"
        :style="modalStyles"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.guide-modal {
  background-color: rgba(228, 237, 246, 0.3);
  backdrop-filter: blur(10px);
}
.guide-modal :is(img, video) {
  border-radius: 5px;
}
</style>
