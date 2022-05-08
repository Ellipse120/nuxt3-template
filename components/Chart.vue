<template>
  <highcharts-wrapper ref="highchartsRef" :options="options" />
</template>

<script lang="ts" setup>
// eslint-disable-next-line import/default
import Highcharts, { setOptions } from 'highcharts'
import { Chart as HighchartsWrapper } from 'highcharts-vue'
import HighchartsNodata from 'highcharts/modules/no-data-to-display'
import HighchartsA11y from 'highcharts/modules/accessibility'

HighchartsNodata(Highcharts)
HighchartsA11y(Highcharts)
const highchartsRef = ref(null)

setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ',',
    loading: '加载中',
    noData: '暂无数据',
  },

  loading: {
    labelStyle: {
      fontSize: '32px',
    },
    style: {
      backgroundColor: 'rgb(15,18,59)',
    },
  },

  boost: {
    useGPUTranslations: true,
    seriesThreshold: 5,
  },

  noData: {
    style: {
      fontWeight: 'bold',
      fontSize: '22px',
    },
  },

  colors: [
    '#00A3FA',
    '#44D197',
    '#F49139',
    '#8F4DFF',
    '#F4CF39',
    '#fc97af',
    '#87f7cf',
    '#f7f494',
    '#72ccff',
    '#f7c5a0',
    '#d4a4eb',
    '#d2f5a6',
    '#76f2f2',
    '#DDDF0D',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee',
    '#ff0066',
    '#eeaaee',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee',
  ],

  chart: {
    backgroundColor: 'rgb(15,18,59)',
    // backgroundColor: {
    // linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    // stops: [
    //   [0, 'rgb(48, 48, 96)'],
    //   [1, 'rgb(0, 0, 0)'],
    // ],
    // },
    // borderColor: '#000000',
    // borderWidth: 2,
    // plotBackgroundColor: 'rgba(255, 255, 255, .1)',
    // plotBorderColor: '#CCCCCC',
    // plotBorderWidth: 1,
  },

  title: {
    text: '',
    style: {
      color: '#C0C0C0',
      font: 'bold "微软雅黑, Trebuchet MS", Verdana, sans-serif',
    },
  },

  subtitle: {
    text: '',
    style: {
      color: '#666666',
      font: 'bold "微软雅黑, Trebuchet MS", Verdana, sans-serif',
    },
  },

  yAxis: {
    gridLineColor: '#333333',
    labels: {
      style: {
        color: '#A0A0A0',
      },
    },
    lineColor: '#A0A0A0',
    minorTickInterval: null,
    tickColor: '#A0A0A0',
    tickWidth: 1,
    title: {
      text: '',
      style: {
        color: '#CCC',
        fontWeight: 'bold',
        fontSize: '12px',
        fontFamily: '微软雅黑, Trebuchet MS, Verdana, sans-serif',
      },
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017',
    },
    gridLineColor: '#333333',
    gridLineWidth: 1,
    labels: {
      style: {
        color: '#A0A0A0',
      },
    },
    lineColor: '#A0A0A0',
    tickColor: '#A0A0A0',
    title: {
      style: {
        color: '#CCC',
        fontWeight: 'bold',
        fontSize: '12px',
        fontFamily: '微软雅黑, Trebuchet MS, Verdana, sans-serif',
      },
    },
  },

  legend: {
    enabled: true,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    alignColumns: false,
    backgroundColor: 'rgb(15,18,59)',
    itemStyle: {
      font: '9pt 微软雅黑, Trebuchet MS, Verdana, sans-serif',
      color: '#A0A0A0',
    },
    itemHoverStyle: {
      color: '#FFF',
    },
    itemHiddenStyle: {
      color: '#444',
    },
    title: {
      style: {
        color: '#C0C0C0',
      },
    },
  },

  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    style: {
      color: '#F0F0F0',
    },
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
    line: {
      dataLabels: {
        color: '#CCC',
      },
      marker: {
        lineColor: '#333',
      },
    },
    spline: {
      marker: {
        lineColor: '#333',
      },
    },
    scatter: {
      marker: {
        lineColor: '#333',
      },
    },
    candlestick: {
      lineColor: 'white',
    },
  },

  credits: {
    enabled: false,
  },

  // @ts-ignore
  labels: {
    style: {
      color: '#CCC',
    },
  },

  navigation: {
    buttonOptions: {
      theme: {
        fill: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.4, '#606060'],
            [0.6, '#333333'],
          ],
        },
        stroke: '#000000',
      },
    },
  },

  rangeSelector: {
    buttonTheme: {
      fill: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0.4, '#888'],
          [0.6, '#555'],
        ],
      },
      stroke: '#000000',
      style: {
        color: '#CCC',
        fontWeight: 'bold',
      },
      states: {
        hover: {
          fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.4, '#BBB'],
              [0.6, '#888'],
            ],
          },
          stroke: '#000000',
          style: {
            color: 'white',
          },
        },
        select: {
          fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.1, '#000'],
              [0.3, '#333'],
            ],
          },
          stroke: '#000000',
          style: {
            color: 'yellow',
          },
        },
      },
    },
    inputStyle: {
      backgroundColor: '#333',
      color: 'silver',
    },
    labelStyle: {
      color: 'silver',
    },
  },

  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA',
    },
    outlineColor: '#CCC',
    maskFill: 'rgba(16, 16, 16, 0.5)',
    series: {
      color: '#7798BF',
      lineColor: '#A6C7ED',
    },
  },

  scrollbar: {
    barBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0.4, '#888'],
        [0.6, '#555'],
      ],
    },
    barBorderColor: '#CCC',
    buttonArrowColor: '#CCC',
    buttonBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0.4, '#888'],
        [0.6, '#555'],
      ],
    },
    buttonBorderColor: '#CCC',
    rifleColor: '#FFF',
    trackBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, '#000'],
        [1, '#333'],
      ],
    },
    trackBorderColor: '#666',
  },

  series: [
    {
      name: 'Installation',
      type: 'line',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Manufacturing',
      type: 'line',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Sales & Distribution',
      type: 'line',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: 'Project Development',
      type: 'line',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: 'Other',
      type: 'line',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],

  responsive: {
    rules: [
      // {
      //   condition: {
      //     maxWidth: 300,
      //   },
      //   chartOptions: {
      //     legend: {
      //       layout: 'horizontal',
      //       align: 'center',
      //       verticalAlign: 'bottom',
      //     },
      //   },
      // },
    ],
  },
})

const props = defineProps({
  options: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  // highchartsRef.value.chart.showLoading()
  watch(
    () => props.loading,
    (newValue) => {
      if (newValue) {
        highchartsRef.value?.chart?.showLoading()
      } else {
        highchartsRef.value?.chart?.hideLoading()
      }
    },
    {
      immediate: true,
    }
  )
})
</script>
