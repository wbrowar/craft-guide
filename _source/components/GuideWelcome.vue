<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { log, t } from '../globals';
import SvgPause from './SvgPause.vue';
import SvgPlay from './SvgPlay.vue';
import WelcomeAnimation from './WelcomeAnimation.vue';

const props = defineProps({
  skipUrl: String,
});

const playing = ref(true);

const animation = ref<InstanceType<typeof WelcomeAnimation>>();

function pause() {
  if (animation.value) {
    animation.value.pause();
  }
}
function play() {
  if (animation.value) {
    animation.value.play();
  }
}

onMounted(() => {
  log('GuideWelcome loaded');
});
</script>

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
            <button type="button" @click="play" v-else>
              <SvgPlay class="g-inline-block g-w-8 g-h-8" />
            </button>
          </div>
          <div>
            <p>{{ t['WELCOME_MESSAGE'] }}</p>
          </div>
          <a class="btn submit icon go" :href="skipUrl" style="--ui-control-color: currentColor">{{
            t['WELCOME_BUTTON_LABEL']
          }}</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.control-button,
.control-button > button {
  line-height: 0;
}
</style>
