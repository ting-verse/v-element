<template>
  <form class="vk-form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide } from "vue";
import type { FormProps } from "./types";
import { formContextKey } from "./types";

defineOptions({
  name: "VkForm",
});
const props = defineProps<FormProps>();

provide(formContextKey, props);
</script>
