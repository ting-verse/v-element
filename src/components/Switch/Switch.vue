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
      class="vk-swtich__input"
      type="checkbox"
      role="switch"
      ref="input"
      :name="name"
      :disabled="disabled"
      @keydown.enter="switchValue"
    />
    <div class="vk-switch__core">
      <div class="vk-switch__core-action"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { SwitchProps, SwitchEmits } from "./types";

defineOptions({
  name: "VkSwtich",
  inheritAttrs: false,
});
const props = defineProps<SwitchProps>();
const emits = defineEmits<SwitchEmits>();

const innerValue = ref(props.modelValue);
const input = ref<HTMLInputElement>();
// 现在是否被选中
const checked = computed(() => innerValue.value);
const switchValue = () => {
  if (props.disabled) return;
  innerValue.value = !checked.value;
  emits("update:modelValue", innerValue.value);
  emits("change", innerValue.value);
};
onMounted(() => {
  input.value!.checked = checked.value;
});
watch(checked, (val) => {
  input.value!.checked = val;
});
watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);
</script>
