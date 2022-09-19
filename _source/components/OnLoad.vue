<script lang="ts" setup>
import { onMounted } from 'vue';

const emit = defineEmits(['loaded']);

onMounted(() => {
  emit('loaded');
});
</script>

<template><slot></slot></template>
