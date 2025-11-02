<template>
  <form class="vk-form">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import type { FormProps } from "./types";

defineOptions({
  name: "VkForm",
});
defineProps<FormProps>();
</script>
