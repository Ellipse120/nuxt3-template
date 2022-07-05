import { setSiteTitle, formatDate } from '~/utils/app'
import { api } from '~/utils/request'

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      setSiteTitle,
      api,
      formatDate,
    },
  }
})
