<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="vk-collapse-item__header"
      :id="`item-header-${name}`"
      @click="handleItemClick"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <div
      class="vk-collapse-item__content"
      :id="`item-content-${name}`"
      v-show="isActive"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import type { CollapseItemProps } from "./types";
import { collapseContextKey } from "./types";

defineOptions({
  name: "VkCollapseItem",
});
const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);
const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name)
);
const handleItemClick = () => {
  if (props.disabled) {
    return;
  }
  collapseContext?.handleItemClick(props.name);
};
</script>
<style></style>
