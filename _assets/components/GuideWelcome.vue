<template>
  <Teleport to="body">
    <div class="g-fixed g-inset-0 g-w-full g-h-screen g-bg-white g-z-[500]">
      <div class="g-grid g-grid-rows-[var(--grid-rows)] g-h-full" style="--grid-rows: 1fr auto">
        <WelcomeAnimation
          ref="animation"
          class="g-object-cover g-overflow-hidden"
          @paused="playing = false"
          @played="playing = true"
        />
        <div class="g-flex g-items-center g-justify-between g-gap-6 g-p-6 g-bg-matrix-titlebar">
          <div class="control-button">
            <button type="button" @click="pause" v-if="playing">
              <SvgPause class="g-inline-block g-w-8 g-h-8" />
            </button>
            <button type="button" @click="play()" v-else>
              <SvgPlay class="g-inline-block g-w-8 g-h-8" />
            </button>
          </div>
          <div>
            <p>
              Welcome to Guide! To get started you’ll need to head to Settings and configure a few things there. You can
              then use the Organizer to create your guides and move them around Craft’s Control Panel.
            </p>
          </div>
          <a class="go" :href="skipUrl">Go to Guide</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { devMode, log } from '../globals';
import WelcomeAnimation from './WelcomeAnimation.vue';
import SvgPlay from './SvgPlay.vue';
import SvgPause from './SvgPause.vue';

export default defineComponent({
  name: 'GuideWelcome',
  components: {
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
      playing: true,
    });

    return { ...toRefs(state) };
  },
  computed: {},
  methods: {
    pause() {
      this.$refs.animation.pause();
    },
    play() {
      this.$refs.animation.play();
    },
  },
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
