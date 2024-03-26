<template></template>

<script lang="ts">
import { defineComponent, defineEmits, onMounted } from 'vue';

export default defineComponent({
  emits: ['loaded'],
  created() {
    this.$emit('loaded');
  },
});
</script>
