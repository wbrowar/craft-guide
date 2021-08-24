<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { log, proEdition, userOperations } from '../globals';
import OnLoad from './OnLoad.vue';
import PlacementInlineEditor from './PlacementInlineEditor.vue';
import SvgSettings from './SvgSettings.vue';
import { GuideNavItem } from '../types/plugins';

export default defineComponent({
  name: 'GuideDisplay',
  delimiters: ['${', '}'],
  components: {
    OnLoad,
    PlacementInlineEditor,
    SvgSettings,
  },
  props: {
    enableInlineEditor: Boolean,
    guideDisplay: { type: String, required: true },
    guideNavData: String,
    startInInlineEditor: { type: Boolean, required: false },
    teleportContainerClass: String,
    teleportMethod: String,
    teleportSelector: String,
  },
  setup: (props) => {
    const state = reactive({
      currentGuide: '',
      data: {},
      guideNav: (props.guideNavData ? JSON.parse(props.guideNavData) : []) as GuideNavItem[],
      enableTldr: false,
      proEdition,
      showInlineEditor: false,
      showTldr: false,
      userOperations,
    });

    if (state.proEdition) {
      state.guideNav.forEach((guide) => {
        state.data[guide.slug] = {
          boolean1: false,
          boolean2: false,
          boolean3: false,
          boolean4: false,
          boolean5: false,
          number1: 0,
          number2: 0,
          number3: 0,
          number4: 0,
          number5: 0,
          string1: '',
          string2: '',
          string3: '',
          string4: '',
          string5: '',
        };
      });
    }

    return { ...toRefs(state) };
  },
  computed: {
    teleportTarget() {
      return this.teleportSelector ? `#teleport-${this.guideDisplay}` : null;
    },
  },
  methods: {
    toggleTldr(on: boolean) {
      log(`Turning TLDR: ${on ? 'on' : 'off'}`);
      this.showTldr = on;

      const showEls = document.querySelectorAll('.tldr-show');
      showEls.forEach((el) => {
        if (on) {
          el.removeAttribute('hidden');
        } else {
          el.setAttribute('hidden', 'hidden');
        }
      });

      const hideEls = document.querySelectorAll('.tldr-hide');
      hideEls.forEach((el) => {
        if (on) {
          el.setAttribute('hidden', 'hidden');
        } else {
          el.removeAttribute('hidden');
        }
      });

      localStorage.setItem('guide:display:tldr', on ? 'true' : 'false');
    },
    updateEnableTldr() {
      if (this.currentGuide) {
        const tldrEl = document.querySelector(
          `.guide-${this.currentGuide} .tldr-hide, .guide-${this.currentGuide} .tldr-show, .guide-${this.currentGuide} [class^="tldr:"]`
        );
        log(`.guide-${this.currentGuide}`, tldrEl);
        this.enableTldr = tldrEl !== null;
      }
    },
  },
  created() {
    if (this.guideNav?.length) {
      this.currentGuide = this.guideNav[0].slug;
    }

    this.showInlineEditor = this.startInInlineEditor;
  },
  mounted() {
    this.updateEnableTldr();
    this.toggleTldr(localStorage.getItem('guide:display:tldr') === 'true');

    log('GuideDisplay loaded');
  },
  watch: {
    currentGuide() {
      this.$nextTick(() => {
        this.updateEnableTldr();
        this.toggleTldr(this.showTldr);
      });
    },
  },
});
</script>

<style>
.guide .guide-edit-button {
  float: right;
  margin-top: 0 !important;
  position: relative;
  opacity: 0.3;
  z-index: 50;
}
.guide:hover .guide-edit-button {
  opacity: 1;
}
</style>
