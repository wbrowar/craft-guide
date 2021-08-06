<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';
import { GuideNavItem } from '../types/plugins';

export default defineComponent({
  name: 'GuideDisplay',
  delimiters: ['${', '}'],
  components: {},
  props: {
    guideDisplay: { type: String, required: true },
    guideNavData: String,
    teleportSelector: String,
  },
  setup: (props) => {
    const state = reactive({
      currentGuide: '',
      guideNav: (props.guideNavData ? JSON.parse(props.guideNavData) : []) as GuideNavItem[],
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
  },
  mounted() {
    log('GuideDisplay loaded');
  },
});
</script>

<style scoped></style>
