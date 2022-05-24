<template>
  <div class="flex items-center justify-center">
    <div
      v-if="$slots.icon"
      class="rounded-full icon-bg flex items-center justify-center h-8 w-8 mr-2"
    >
      <slot name="icon" class="block" />
    </div>

    <div class="text-center">
      <slot name="title">
        <div class="text-xl font-extrabold text-ls-green-500">{{ value }}</div>
      </slot>

      <slot name="subTitle">
        <div class="text-xs font-bold">{{ label }}</div>
      </slot>
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
