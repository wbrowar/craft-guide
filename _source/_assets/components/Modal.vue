<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits(['closed', 'opened']);
const props = defineProps({
  teleportTo: { type: String, default: null },
});

const isOpen = ref(false);

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
      class="guide-modal g-flex g-items-center g-justify-center g-p-20 g-inset-0 g-z-[10]"
      :class="[teleportTo ? 'g-fixed' : 'g-absolute']"
      v-show="isOpen"
    >
      <div class="g-w-full g-h-full g-max-w-[800px] g-max-h-[600px] g-bg-white g-rounded-lg g-shadow-lg">
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
</style>
