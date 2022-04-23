<template>
  <div
    ref="echartsRef"
    :class="className"
    :style="{ height: height, width: width }"
  />
</template>

<script lang="ts" setup>
import { nextTick } from 'vue'

const echartsRef = ref(null)
const { $echarts } = useNuxtApp()

const lsTheme = import('@/assets/ls.project.json')
$echarts.registerTheme('ls', lsTheme)

const props = defineProps({
  className: {
    type: String,
    default: 'chart',
  },
  height: {
    type: String,
    default: '350px',
  },
  width: {
    type: String,
    default: '100%',
  },
  chartData: {
    type: Object,
    default() {
      return {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
        },
        yAxis: {
          type: 'value',
        },
        legend: {
          data: ['expected', 'actual'],
        },
        series: [
          {
            name: 'expected',
            type: 'line',
            data: [1, 22, 3, 4, 1, 0, 88],
          },
          {
            name: 'actual',
            type: 'line',
            data: [121, 21, 5, 1, 1, 1, 85],
          },
        ],
      }
    },
  },
})

const echartsInstance = ref(null)

const initChart = () => {
  echartsInstance.value = $echarts.init(echartsRef.value, 'ls')
  setOptions(props.chartData)
}

const setOptions = (options) => {
  echartsInstance.value?.setOption(options, true)
}

const resize = () => {
  // TODO: Debouncing this
  echartsInstance.value?.resize()
}

onMounted(() => {
  nextTick(() => {
    initChart()
  })
  resize()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  echartsInstance.value?.dispose()
  window.removeEventListener('resize', resize)
})
</script>
