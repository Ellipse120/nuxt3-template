import { useTitle } from '@vueuse/core'
import { format, toDate } from 'date-fns'
import zhLocale from 'date-fns/locale/zh-CN/index'
import { isRef } from '@vue/reactivity'
import { LanguageManager } from './lang'
import { ThemeManager } from './theme'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: '土地房产综合管理平台',
    author: {
      name: 'Lusai',
      link: 'https://github.com/ellipse120',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    themeManager,
    languageManager,
  }
}

export function setSiteTitle() {
  const { app } = AppSetup()
  const route = useRoute()
  useTitle(`${route.meta.title} - ${app.name}`)
}

export function formatDate(time, cFormat = 'yyyy-MM-dd HH:mm:ss', options) {
  if (!time) {
    return ''
  }
  if (isRef(time)) {
    time = time.value
  }
  return format(toDate(time), cFormat, {
    ...{
      locale: zhLocale,
    },
    ...options,
  })
}
