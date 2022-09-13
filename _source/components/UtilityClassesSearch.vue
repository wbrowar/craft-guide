<script lang="ts" setup>
import { computed, ref } from 'vue';
import { utilityClasses } from '../editorData';
import CraftFieldText from './CraftFieldText.vue';

const classes = ref<string[]>([]);
const searchValue = ref('');

classes.value = utilityClasses;

const searchResults = computed(() =>
  searchValue.value !== ''
    ? classes.value.filter((item) => {
        return item.includes(searchValue.value);
      })
    : classes.value
);

function onCopy(text: string) {
  navigator.clipboard.writeText(text);
}
function onSearch(newValue: string) {
  searchValue.value = newValue;
}
</script>

<template>
  <CraftFieldText ref="searchField" label="Search" name="search" @value-changed="onSearch" />
  <h3>Results (Click to select class)</h3>
  <ul>
    <li v-for="result in searchResults" :key="result" class="g-select-all">{{ result }}</li>
  </ul>
</template>
