<template>
  <Teleport to="body">
    <div class="g-fixed g-inset-0 g-w-full g-h-screen g-bg-white g-z-[500]">
      <div class="g-grid g-grid-rows-[var(--grid-rows)] g-h-full" style="--grid-rows: 1fr auto">
        <div
          class="g-grid"
          :class="{
            'g-grid-cols-1': loggedInPeople.length === 1,
            'g-grid-cols-2': loggedInPeople.length === 2,
            'g-grid-cols-3': loggedInPeople.length >= 3,
          }"
        >
          <div
            v-for="(person, index) in loggedInPeople"
            :key="person.name"
            class="g-bg-secondary g-border-solid g-border-8 g-text-white"
            :class="[index === talking ? 'g-border-focus-light' : 'g-border-secondary']"
          >
            <p>
              {{ person.name }} <span v-if="person.muted">⚫</span><span v-else>🔴</span>
              <span v-if="index == talking">💬</span>
            </p>
            <p v-if="person.showSpeech">{{ replaceText(person.speech) }}</p>
          </div>
        </div>
        <div class="g-flex g-items-center g-justify-between g-p-6 g-bg-matrix-titlebar">
          <div class="control-button">
            <button type="button" @click="pause" v-if="playing">
              <SvgPause class="g-inline-block g-w-8 g-h-8" />
            </button>
            <button type="button" @click="play()" v-else>
              <SvgPlay class="g-inline-block g-w-8 g-h-8" />
            </button>
          </div>
          <div class="g-flex g-flex-nowrap g-items-center g-gap-2" v-if="devMode">
            <CraftFieldText
              class="g-mb-0"
              label="Go to Frame"
              name="frame"
              :field-attributes="{ size: 5 }"
              @value-changed="setFrameTo"
            />
            <div class="g-min-w-[100px]">{{ frame }}</div>
          </div>
          <div>form</div>
          <a class="btn submit icon go" :href="skipUrl">Skip to Settings</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { devMode, log } from '../globals';
import { welcomePeople, welcomeScript } from '../welcomeScript';
import CraftFieldSelect from './CraftFieldSelect.vue';
import CraftFieldText from './CraftFieldText.vue';
import SvgPlay from './SvgPlay.vue';
import SvgPause from './SvgPause.vue';
import { WelcomeScriptPerson } from '../welcomeScript';

export default defineComponent({
  name: 'GuideWelcome',
  components: {
    CraftFieldSelect,
    CraftFieldText,
    SvgPlay,
    SvgPause,
  },
  props: {
    skipUrl: String,
  },
  setup: () => {
    const state = reactive({
      devMode,
      frame: 0,
      nextAction: 0,
      people: [] as WelcomeScriptPerson[],
      talking: -1,
      playing: false,
      script: welcomeScript,
    });

    const shuffleArray = (array) => {
      let currentIndex = array.length,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    };

    // Add people
    const people = shuffleArray(welcomePeople);
    state.people = people.slice(0, 6).map((person) => {
      return {
        loggedIn: false,
        muted: true,
        name: person,
        showSpeech: false,
        speech: '',
      };
    });

    return { ...toRefs(state) };
  },
  computed: {
    loggedInPeople() {
      return this.people.filter((person) => {
        return person.loggedIn;
      });
    },
  },
  methods: {
    action(frame) {
      const action = welcomeScript[frame.toString()];
      const personId = typeof action.person === 'number' ? action.person : null;
      const person = this.people?.[personId];
      if (person) {
        switch (action.event) {
          case 'logIn':
            person.loggedIn = true;
            break;
          case 'mute':
            person.muted = true;
            break;
          case 'talk':
            this.setTalking(personId);
            person.showSpeech = true;
            person.speech = action?.text;
            break;
          case 'unmute':
            person.muted = false;
            break;
        }
      }
      log(`Action: ${frame}`, action);
      this.getNextAction(frame);
    },
    getNextAction(frame) {
      const keys = Object.keys(welcomeScript);
      const nextIndex = keys.indexOf(frame.toString()) + 1;
      this.nextAction = parseFloat(keys[nextIndex]);
    },
    pause() {
      this.playing = false;
    },
    play() {
      this.playing = true;
      window.requestAnimationFrame(this.step);
    },
    replaceText(text) {
      return text
        .replace(/PERSON_0/g, this.people?.[0]?.name)
        .replace(/PERSON_1/g, this.people?.[1]?.name)
        .replace(/PERSON_2/g, this.people?.[2]?.name)
        .replace(/PERSON_3/g, this.people?.[3]?.name)
        .replace(/PERSON_4/g, this.people?.[4]?.name)
        .replace(/PERSON_5/g, this.people?.[5]?.name);
    },
    setFrameTo(frame) {
      log(frame);
      this.frame = parseFloat(frame);
    },
    setTalking(personId = -1) {
      this.talking = personId;
    },
    step() {
      if (this.frame === this.nextAction) {
        this.action(this.frame);
      }
      this.frame += 1;
      if (this.playing) {
        window.requestAnimationFrame(this.step);
      }
    },
  },
  mounted() {
    this.nextAction = parseFloat(Object.keys(welcomeScript)[0]);
    this.play();

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
