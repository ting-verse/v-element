<template>
  <div
    class="vk-form-item"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
    }"
  >
    <label class="vk-form-item__label">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div class="vk-form-item__content">
      <slot :validate="validate" />
      <div
        class="vk-form-item__error-msg"
        v-if="validateStatus.state === 'error'"
      >
        {{ validateStatus.errorMsg }}
      </div>
    </div>
    {{ innerValue }} - {{ itemRules }}
    <button @click.prevent="validate">Validate</button>
  </div>
</template>
<script setup lang="ts">
import { inject, computed, reactive, provide } from "vue";
import Schema from "async-validator";
import { isNil } from "lodash-es";
import { formContextKey, formItemContextKey } from "./types";
import type {
  FormItemProps,
  FormValidateFailure,
  FormItemContext,
} from "./types";
defineOptions({
  name: "VkFormItem",
});
const props = defineProps<FormItemProps>();

const formContext = inject(formContextKey);
const validateStatus = reactive({
  state: "init",
  errorMsg: "",
  loading: false,
});
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
    validateStatus.loading = true;
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = "success";
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e;
        validateStatus.state = "error";
        validateStatus.errorMsg =
          errors && errors.length > 0 ? errors[0].message || "" : "";
        console.log(e.errors);
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};

const context: FormItemContext = {
  validate,
};
provide(formItemContextKey, context);
</script>
