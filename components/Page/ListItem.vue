<template>
  <div class="flex items-center border-b border-dashed border-white p-2 text-xs">
    <IconAkarIcons:triangle-right class="text-blue-600 text-base" />
    <div class="w-full">
      <div class="flex items-center justify-between text-sm">
        <slot name="label">
          <div :class="item.class">{{ item.label }}</div>
        </slot>

        <slot name="time">
          <div class="mt-2">{{ item.time }}</div>
        </slot>
      </div>

      <slot name="content">
        <div>{{ item.content }}</div>
      </slot>
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
