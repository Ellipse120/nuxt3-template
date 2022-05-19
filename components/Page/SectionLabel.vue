<template>
  <div class="font-extrabold text-blue-600 p-2 bg-ls-blue-800 flex items-center">
    <slot name="icon"><IconMdi:signal-cellular-3 class="text-xs" /></slot>
    <slot name="title">
      <div class="ml-1 text-xs">{{ title }}</div>
    </slot>
    <slot name="loading">
      <ProgressSpinner v-if="loading" class="!h-4 !w-4 !m-0" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false
  },
})
</script>
