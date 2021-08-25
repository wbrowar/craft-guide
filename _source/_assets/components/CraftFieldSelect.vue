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

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'ComponentListItem',
  components: {},
  props: {
    fieldAttributes: Object,
    instructions: String,
    label: { type: String, required: true },
    name: { type: String, required: true },
    options: { type: Array, required: true },
    placeholder: String,
    required: { type: Boolean, default: false },
    startingValue: { type: String, default: '' },
  },
  emits: ['value-changed'],
  setup: (props) => {
    const state = reactive({
      fieldValue: '',
    });

    state.fieldValue = JSON.parse(JSON.stringify(props.startingValue));

    return { ...toRefs(state) };
  },
  methods: {
    setFieldValue(newValue) {
      this.fieldValue = newValue;
    },
  },
  watch: {
    fieldValue() {
      this.$emit('value-changed', this.fieldValue);
    },
  },
});
</script>
