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
      showInlineEditor: false,
    });

    return { ...toRefs(state) };
  },
  computed: {
    teleportTarget() {
      return this.teleportSelector ? `#teleport-${this.guideDisplay}` : null;
    },
  },
  methods: {},
  created() {
    if (this.guideNav?.length) {
      this.currentGuide = this.guideNav[0].slug;
    }

    this.showInlineEditor = this.startInInlineEditor;
  },
  mounted() {
    log('GuideDisplay loaded');
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
