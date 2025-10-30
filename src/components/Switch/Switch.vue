<template>
  <div
    class="vk-switch"
    :class="{
      [`vk-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="switchValue"
  >
    <input
      class="vk-switch__input"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwitchProps, SwitchEmits } from "./types";
import { ref, computed } from "vue";

defineOptions({
  name: "VkSwitch",
  inheritAttrs: false,
});

const props = defineProps<SwitchProps>();
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);

const checked = computed(() => innerValue.value);

const switchValue = () => {
  if (props.disabled) return;
  innerValue.value = !checked.value;
  emits("update:modelValue", innerValue.value);
  emits("change", innerValue.value);
};
</script>
