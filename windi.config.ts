import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// colors
import colors from 'windicss/colors'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

export const MyTheme = {
  colors: {
    green: {
      50: '#f6fbf9',
      100: '#ecf8f3',
      200: '#d0ede0',
      300: '#b3e3cd',
      400: '#7bcda8',
      500: '#42b883',
      600: '#3ba676',
      700: '#328a62',
      800: '#286e4f',
      900: '#205a40',
    },
    'ls-blue': {
      300: 'rgb(0,244,255)',
      600: 'rgb(32,49,116)',
      800: 'rgb(15,18,59)',
      900: 'rgb(7,2,44)',
    },
    'ls-green': {
      500: 'rgb(19,215,102)',
    },
  },
}

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
    exclude: ['node_modules', 'dist', '.git', '.github', '.nuxt', 'coverage', '**/__snapshots__', '*.test.js'],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.green[500],
        green: MyTheme.colors.green,
        slate: colors.slate,
        'ls-blue': MyTheme.colors['ls-blue'],
        'ls-green': MyTheme.colors['ls-green'],
      },
      fontFamily: {
        pangmenzhengdao: ['PangMenZhengDaoBiao'],
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    // filters plugin require for navbar blur
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
