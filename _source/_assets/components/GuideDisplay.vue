<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
import PlacementInlineEditor from './PlacementInlineEditor.vue';
import SvgSettings from './SvgSettings.vue';
import { GuideNavItem } from '../types/plugins';

export default defineComponent({
  name: 'GuideDisplay',
  delimiters: ['${', '}'],
  components: {
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
      guideNav: (props.guideNavData ? JSON.parse(props.guideNavData) : []) as GuideNavItem[],
      enableTldr: false,
      showInlineEditor: false,
      showTldr: false,
    });

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
        log('Hey the current guide changed!', this.currentGuide);
      });
    },
  },
});
</script>

<style>
.guide .guide-edit-button {
  margin-top: 0 !important;
  opacity: 0;
}
.guide:hover .guide-edit-button {
  opacity: 1;
}
</style>
