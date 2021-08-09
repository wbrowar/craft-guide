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
        autofocus=""
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
        autofocus=""
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

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'ComponentListItem',
  components: {},
  props: {
    fieldAttributes: Object,
    fieldType: { type: String, default: 'text' },
    instructions: String,
    label: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: String,
    required: { type: Boolean, default: false },
    startingValue: { type: String, default: '' },
  },
  emits: ['focused', 'value-changed'],
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
