<template>
  <Teleport to="body">
    <div class="guide-modal g-p-20 g-fixed g-inset-0 g-z-[500]" v-if="isOpen">
      <div class="g-w-full g-h-full g-bg-white g-rounded-lg">
        <div class="g-grid g-grid-rows-[auto,1fr] g-relative g-h-full g-rounded-lg g-bg-matrix-block">
          <div class="g-p-3 g-flex g-flex-nowrap g-items-center g-justify-between g-rounded-t-lg g-bg-matrix-titlebar">
            <slot name="header"></slot>
          </div>
          <div class="g-overflow-auto"><slot></slot></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: {},
  props: {},
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
  background-color: rgba(228, 237, 246, 0.75);
  backdrop-filter: blur(10px);
}
</style>
