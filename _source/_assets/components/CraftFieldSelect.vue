<script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['value-changed']);
const props = defineProps({
  fieldAttributes: Object,
  instructions: String,
  label: { type: String, required: true },
  name: { type: String, required: true },
  options: { type: Array, required: true },
  placeholder: String,
  required: { type: Boolean, default: false },
  startingValue: { type: String, default: '' },
});

const fieldValue = ref(JSON.parse(JSON.stringify(props.startingValue)));

function setFieldValue(newValue: string) {
  fieldValue.value = newValue;
};

watch(fieldValue, (fieldValue) => {
  emit('value-changed', fieldValue);
})

defineExpose({
  setFieldValue,
});
</script>

<template>
  <div :id="`${name}-field`" class="field">
    <div class="heading">
      <label :id="`${name}-label`" :class="required ? 'required' : null" :for="name">{{ label }}</label>
    </div>
    <div :id="`${name}-instructions`" class="instructions" v-if="instructions">
      <p v-html="instructions"></p>
    </div>
    <div class="input ltr">
      <div class="select fullwidth">
        <select
          :id="name"
          v-model="fieldValue"
          :name="name"
          :aria-describedby="instructions ? `${name}-instructions` : null"
          v-bind="fieldAttributes"
        >
          <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
