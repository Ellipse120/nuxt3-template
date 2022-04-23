import * as echarts from 'echarts'
import colors from 'windicss/colors'

const colorLsBlue300 = 'rgb(0,244,255)'
const colorBlue600 = colors.blue[600]

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      echarts,
      colorLsBlue300,
      colorBlue600,
    },
  }
})
