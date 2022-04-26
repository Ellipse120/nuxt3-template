<template>
  <div class="flex items-center border-b border-dashed border-white py-1">
    <IconAkarIcons:triangle-right class="text-blue-600" />
    <div class="w-full">
      <div class="flex items-center justify-between text-sm">
        <div :class="item.class">{{ item.label }}</div>
        <div>{{ item.time }}</div>
      </div>
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IItem {
  label: string
  time: Date | string | number
  content: string
  class: string
}

defineProps({
  item: {
    type: Object,
    default: {
      label: '',
      time: '',
      content: '',
      class: '',
    } as IItem,
  },
})
</script>
