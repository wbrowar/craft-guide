<template>
  <Teleport to="body">
    <div class="g-fixed g-inset-0 g-w-full g-h-screen g-bg-white g-z-[500]">
      <div class="g-grid g-grid-rows-[var(--grid-rows)] g-h-full" style="--grid-rows: 1fr auto">
        <WelcomeAnimation class="g-object-cover g-overflow-hidden" />
        <div class="g-flex g-items-center g-justify-between g-p-6 g-bg-matrix-titlebar">
          <div></div>
          <a class="btn submit icon go" :href="skipUrl">Skip</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { devMode, log } from '../globals';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import WelcomeAnimation from './WelcomeAnimation.vue';
import SvgPlay from './SvgPlay.vue';
import SvgPause from './SvgPause.vue';

export default defineComponent({
  name: 'GuideWelcome',
  components: {
    CraftFieldSelect,
    CraftFieldText,
    SvgPlay,
    SvgPause,
    WelcomeAnimation,
  },
  props: {
    skipUrl: String,
  },
  setup: () => {
    const state = reactive({
      devMode,
    });

    return { ...toRefs(state) };
  },
  computed: {},
  methods: {},
  mounted() {
    log('GuideWelcome loaded');
  },
});
</script>

<style scoped>
.control-button,
.control-button > button {
  line-height: 0;
}
</style>
