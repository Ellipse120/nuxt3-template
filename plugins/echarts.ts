import colors from 'windicss/colors'

const colorLsBlue300 = 'rgb(0,244,255)'
const colorBlue600 = colors.blue[600]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      colorLsBlue300,
      colorBlue600,
    },
  }
})
