<script lang="ts" setup>
import { onBeforeMount } from 'vue';

const emit = defineEmits(['loaded']);

onBeforeMount(() => {
  emit('loaded');
});
</script>

<template></template>
