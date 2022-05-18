import { setSiteTitle } from '~/utils/app'
import { api } from '~/utils/request'

export default defineNuxtPlugin((/*nuxtApp*/) => {
  return {
    provide: {
      setSiteTitle: setSiteTitle,
      api,
    },
  }
})
