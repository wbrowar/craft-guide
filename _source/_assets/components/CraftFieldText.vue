<script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['focused', 'value-changed']);
const props = defineProps({
  autofocus: { type: Boolean, default: true },
  fieldAttributes: Object,
  fieldType: { type: String, default: 'text' },
  instructions: String,
  label: { type: String, required: true },
  name: { type: String, required: true },
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
      <textarea
        :id="name"
        v-model="fieldValue"
        class="text fullwidth"
        :name="name"
        :autofocus="autofocus"
        autocomplete="off"
        :placeholder="placeholder ? placeholder : null"
        :aria-describedby="instructions ? `${name}-instructions` : null"
        v-bind="fieldAttributes"
        @focus="$emit('focused')"
        v-if="fieldType === 'textarea'"
      />
      <input
        :id="name"
        v-model="fieldValue"
        class="text fullwidth"
        :type="fieldType"
        :name="name"
        :autofocus="autofocus"
        autocomplete="off"
        :placeholder="placeholder ? placeholder : null"
        :aria-describedby="instructions ? `${name}-instructions` : null"
        v-bind="fieldAttributes"
        @focus="$emit('focused')"
        v-else
      />
    </div>
  </div>
</template>
