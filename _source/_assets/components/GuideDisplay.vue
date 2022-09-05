<script lang="ts" setup>
import {
  computed,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { log, proEdition, userOperations } from '../globals';
import type { GuideNavItem } from '../types/plugins';

const props = defineProps({
  enableInlineEditor: Boolean,
  guideDisplay: { type: String, required: true },
  guideNavData: String,
  startInInlineEditor: { type: Boolean, required: false },
  teleportContainerClass: String,
  teleportMethod: String,
  teleportSelector: String,
});

const currentGuide = ref('');
const data = ref({} as Record<string, any>);
const enableTldr = ref(false);
const guideNav = ref((props.guideNavData ? JSON.parse(props.guideNavData) : []) as GuideNavItem[]);
const hash = ref('');
const showInlineEditor = ref(false);
const showTldr = ref(false);

const teleportTarget = computed(() => props.teleportSelector ? `#teleport-${props.guideDisplay}` : null);

if (proEdition) {
  guideNav.value.forEach((guide) => {
    data.value[guide.slug] = {
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

function onHashUpdated() {
  hash.value = window.location.hash.substr(1);
};
function toggleTldr(on: boolean) {
  log(`Turning TLDR: ${on ? 'on' : 'off'}`);
  showTldr.value = on;

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
};
function updateEnableTldr() {
  if (currentGuide.value) {
    const tldrEl = document.querySelector(
        `.guide-${currentGuide.value} .tldr-hide, .guide-${currentGuide.value} .tldr-show, .guide-${currentGuide.value} [class^="tldr:"]`
    );
    log(`.guide-${currentGuide.value}`, tldrEl);
    enableTldr.value = tldrEl !== null;
  }
};

onBeforeMount(() => {
  if (guideNav.value?.length) {
    currentGuide.value = guideNav.value[0].slug;
  }

  showInlineEditor.value = props.startInInlineEditor;
});

onMounted(() => {
  updateEnableTldr();
  toggleTldr(localStorage.getItem('guide:display:tldr') === 'true');

  window.addEventListener('hashchange', onHashUpdated);

  log('GuideDisplay loaded');
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHashUpdated);
});

watch(currentGuide, () => {
  nextTick(() => {
    updateEnableTldr();
    toggleTldr(showTldr.value);
  });
});
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import OnLoad from './OnLoad.vue';
import PlacementInlineEditor from './PlacementInlineEditor.vue';
import SvgSettings from './SvgSettings.vue';

export default defineComponent({
  name: 'GuideDisplay',
  delimiters: ['${', '}'],
  components: {
    OnLoad,
    PlacementInlineEditor,
    SvgSettings,
  }
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
