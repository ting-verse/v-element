<template>
  <form class="vk-form">
    <slot></slot>
    <button @click.prevent="validate">Validate All</button>
  </form>
</template>

<script setup lang="ts">
import { provide } from "vue";
import type { ValidateFieldsError } from "async-validator";
import type {
  FormProps,
  FormItemContext,
  FormContext,
  FormValidateFailure,
  FormInstance,
} from "./types";
import { formContextKey } from "./types";

defineOptions({
  name: "VkForm",
});
const props = defineProps<FormProps>();

const fields: FormItemContext[] = [];

const addField: FormContext["addField"] = (field) => {
  fields.push(field);
};
const removeField: FormContext["removeField"] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};
const validate = async () => {
  let validationErrors: ValidateFieldsError = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (e) {
      const error = e as FormValidateFailure;
      validationErrors = { ...validationErrors, ...error.fields };
    }
  }
  if (Object.keys(validationErrors).length === 0) {
    return true;
  } else {
    return Promise.reject(validationErrors);
  }
};

provide(formContextKey, {
  ...props,
  addField,
  removeField,
});

defineExpose<FormInstance>({ validate });
</script>
