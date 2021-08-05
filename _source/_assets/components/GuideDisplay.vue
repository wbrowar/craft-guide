<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { log } from '../globals';

export default defineComponent({
  name: 'GuideDisplay',
  delimiters: ['${', '}'],
  components: {},
  props: {
    guideDisplay: { type: String, required: true },
  },
  setup: () => {},
  computed: {},
  methods: {},
  mounted() {
    log('GuideDisplay loaded');
  },
});
</script>

<style scoped></style>
