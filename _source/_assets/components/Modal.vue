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

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: {},
  props: {
    teleportTo: { type: String, default: null },
  },
  emits: ['closed', 'opened'],
  setup: () => {
    const state = reactive({
      isOpen: false,
    });

    return { ...toRefs(state) };
  },
  methods: {
    close() {
      this.isOpen = false;
      this.$emit('closed');
    },
    open() {
      this.isOpen = true;
      this.$emit('opened');
    },
  },
});
</script>

<style scoped>
.guide-modal {
  background-color: rgba(228, 237, 246, 0.3);
  backdrop-filter: blur(10px);
}
</style>
