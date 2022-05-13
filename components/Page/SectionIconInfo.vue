<template>
  <div class="flex items-center justify-center">
    <div v-if="$slots.icon" class="rounded-full icon-bg flex items-center justify-center h-8 w-8">
      <slot name="icon" class="block" />
    </div>
    <div class="text-center ml-2">
      <div class="text-xl font-bold text-ls-green-500">{{ value }}</div>
      <div class="text-xs">{{ label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    default: '',
  },
})
</script>

<style scoped>
.icon-bg {
  opacity: 0.9;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.28)
  );
}
</style>
