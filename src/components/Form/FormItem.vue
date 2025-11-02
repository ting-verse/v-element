<template>
  <div class="vk-form-item">
    <label class="vk-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="vk-form-item__content">
      <slot />
    </div>
    {{ innerValue }} - {{ itemRules }}
    <button @click.prevent="validate">Validate</button>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import Schema from "async-validator";
import { isNil } from "lodash-es";
import { formContextKey } from "./types";
import type { FormItemProps } from "./types";
defineOptions({
  name: "VkFormItem",
});
const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);

const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop];
  } else {
    return null;
  }
});
const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop];
  } else {
    return [];
  }
});

const validate = () => {
  const modelName = props.prop;
  if (modelName) {
    const validator = new Schema({
      [modelName]: itemRules.value,
    });
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        console.log("no error");
      })
      .catch((e) => {
        console.log(e.errors);
      });
  }
};
</script>
