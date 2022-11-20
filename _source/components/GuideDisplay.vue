<script lang="ts" setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, nextTick, reactive, ref, watch } from 'vue';
import { log, proEdition, t, userOperations } from '../globals';
import GuideModal from './GuideModal.vue';
import OnLoad from './OnLoad.vue';
import PlacementInlineEditor from './PlacementInlineEditor.vue';
import SvgGuide from './SvgGuide.vue';
import SvgSettings from './SvgSettings.vue';
import type { GuideNavItem } from '../types/plugins';

const props = defineProps({
  enableInlineEditor: Boolean,
  guideDisplay: { type: String, required: true },
  guideNavData: String,
  startInInlineEditor: { type: Boolean, required: false },
  teleportContainerClass: { type: String, default: '' },
  teleportMethod: { type: String, default: 'append' },
  teleportSelector: String,
  teleportToSlideout: { type: Boolean, default: false },
});

const currentGuide = ref('');
const data = reactive<Record<string, any>>({});
const enableTldr = ref(false);
const hash = ref('');
const showInlineEditor = ref(false);
const showTldr = ref(false);
const slideout = ref<any>();
const slideoutOpened = ref(false);

const guideNav = computed<GuideNavItem[]>(() => {
  return props.guideNavData ? JSON.parse(props.guideNavData) : [];
});
const renderDisplay = computed(() => {
  return props.teleportToSlideout ? slideoutOpened.value : true;
});
const teleportTarget = computed(() => {
  if (props.teleportToSlideout && props.teleportSelector) {
    return props.teleportSelector;
  }

  return props.teleportSelector ? `#teleport-${props.guideDisplay}` : null;
});

function openSlideout() {
  if (slideout.value) {
    slideout.value.open();
    slideoutOpened.value = true;
  }
}
function onHashUpdated() {
  hash.value = window.location.hash.substr(1);
}
function toggleTldr(on: boolean) {
  log(`Turning TLDR: ${on ? 'on' : 'off'}`);
  showTldr.value = on === true;

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
}
function updateEnableTldr() {
  if (currentGuide.value) {
    const tldrEl = document.querySelector(
      `.guide-${currentGuide.value} .tldr-hide, .guide-${currentGuide.value} .tldr-show, .guide-${currentGuide.value} [class^="tldr:"]`
    );
    enableTldr.value = tldrEl !== null;
  }
}

onBeforeMount(() => {
  if (guideNav.value?.length) {
    currentGuide.value = guideNav.value[0].slug;
  }

  showInlineEditor.value = props.startInInlineEditor === true;
});

onMounted(() => {
  updateEnableTldr();
  toggleTldr(localStorage.getItem('guide:display:tldr') === 'true');

  window.addEventListener('hashchange', onHashUpdated);

  if (props.teleportToSlideout && window.Craft?.Slideout) {
    slideout.value = new window.Craft.Slideout(`<div id="guide-slideout"></div>`, {
      autoOpen: false,
      containerAttributes: {
        class: 'g-relative g-overflow-y-auto',
      },
    });
  }

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

watch(
  guideNav,
  () => {
    if (proEdition) {
      guideNav.value.forEach((guide) => {
        if (!data[guide.slug]) {
          data[guide.slug] = {
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
        }
      });
    }
  },
  { immediate: true }
);
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
