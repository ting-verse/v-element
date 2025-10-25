<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from "vue";
import type { NameType } from "./types";
import { collapseContextKey } from "./types";

defineOptions({
  name: "VkCollapse",
});

const activeNames = ref<NameType[]>([]);
const handleItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item);
  if (index > -1) {
    activeNames.value.splice(index, 1);
  } else {
    activeNames.value.push(item);
  }
};

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>
