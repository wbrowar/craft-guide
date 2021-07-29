<template>
  <CraftFieldText ref="searchField" label="Search" name="search" @value-changed="onSearch" />
  <h3>Results (Click to select class)</h3>
  <ul>
    <li v-for="result in searchResults" :key="result" class="g-select-all">{{ result }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import CraftFieldText from './CraftFieldText.vue';

export default defineComponent({
  name: 'UtilityClassesSearch',
  components: {
    CraftFieldText,
  },
  setup: () => {
    const state = reactive({
      classes: [],
      searchValue: '',
    });

    state.classes = ['g-flex', 'g-items-center', 'g-justify-center', 'g-grid-cols-[var(--grid-cols)]'];

    return { ...toRefs(state) };
  },
  computed: {
    searchResults() {
      return this.searchValue !== ''
        ? this.classes.filter((item) => {
            return item.includes(this.searchValue);
          })
        : this.classes;
    },
  },
  methods: {
    onCopy(text) {
      navigator.clipboard.writeText(text);
    },
    onSearch(newValue) {
      this.searchValue = newValue;
    },
  },
});
</script>
