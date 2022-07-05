import { defineNuxtPlugin } from '#app'
import Toast, { PluginOptions, POSITION } from 'vue-toastification'

const options: PluginOptions = {
  shareAppContext: true,
  maxToasts: 20,
  newestOnTop: true,
  position: POSITION.TOP_RIGHT,
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options)
})
