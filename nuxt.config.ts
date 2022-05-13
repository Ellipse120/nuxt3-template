import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  // meta
  meta: {
    title: '土地房产综合管理平台',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '土地房产综合管理平台',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // css
  css: [
    '~/assets/sass/vendor.scss',
    '~/assets/sass/app.scss',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue', 'echarts'],
  },

  modules: [],

  // build modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // auto import components
  components: true,

  typescript: {
    strict: false,
  },

  // @ts-ignore
  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'zh-CN',
      fallbackLocale: 'en',
      availableLocales: ['zh-CN', 'en'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    // analyze: {
    //   analysis: {
    //     interpretUtilities: false,
    //   },
    //   server: {
    //     port: 4000,
    //     open: false,
    //   },
    // },
    // scan: true,
  },
})
