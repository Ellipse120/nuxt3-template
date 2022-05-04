import { setSiteTitle } from '~/utils/app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      setSiteTitle: setSiteTitle,
    },
  }
})
