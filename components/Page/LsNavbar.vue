<template>
  <BuilderNavbar>
    <template #custom>
      <div class="flex justify-between text-center">
        <div class="header-l w-1/3 px-4 flex items-center justify-between">
          <IconMdi:arrow-left-bold-circle
            class="block text-2xl cursor-pointer"
            @click="prev"
          />
          <div class="flex items-center pr-12">
            <div class="flex items-center px-4 font-bold">
              <IconPh:sun-dim-bold
                class="block mr-4 text-2xl text-yellow-500"
              />
              <div>晴天</div>
            </div>
            <div class="px-4">26 ℃</div>
          </div>
        </div>

        <div class="header-m w-1/3 mx-1 text-3xl font-bold text-gray-200 py-2">
          {{ app.name }}
        </div>

        <div class="header-r w-1/3 px-4 flex items-center justify-end">
          <div class="flex items-center font-bold">
            <div class="px-2">{{ formattedYMD }}</div>
            <div class="px-2">{{ formattedHms }}</div>
            <div class="px-2">{{ formattedDay }}</div>
          </div>
          <IconMdi:arrow-right-bold-circle
            class="block text-2xl cursor-pointer"
            @click="next"
          />
        </div>
      </div>
    </template>

    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                >{{ item.text }}
              </Anchor>
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
      </div>
    </template>

    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}
                </Anchor>
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="mt-2">
            <ThemeToggle type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Gitee"
          href="https://gitee.com/shentie-fe/tufang-large-screen.git"
        >
          <IconSimpleIcons:gitee />
          <span class="ml-1">Gitee</span>
        </Button>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>

<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { IApp } from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useState<IApp>('app')
const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.tufang.dashboard'),
    route: { name: 'tf-dashboard' },
  },
  {
    type: 'link',
    text: t('pages.tufang.fangjianjishu'),
    route: { name: 'fangjianjishu' },
  },
  {
    type: 'link',
    text: t('pages.tufang.danshensushe'),
    route: { name: 'danshensushe' },
  },
  {
    type: 'link',
    text: t('pages.tufang.xingchegongyu'),
    route: { name: 'xingchegongyu' },
  },
  {
    type: 'link',
    text: t('pages.tufang.zhijiaoxinxi'),
    route: { name: 'zhijiaoxinxi' },
  },
])

const formattedYMD = useDateFormat(useNow(), 'YYYY-MM-DD')
const formattedHms = useDateFormat(useNow(), 'HH:mm:ss')
const formattedDay = new Intl.DateTimeFormat('zh-CN', {
  weekday: 'long',
}).format(useNow().value)

const router = useRouter()
const prev = () => {
  router.push(menus.value[Math.abs(--i % menus.value.length)].route)
}
let i = 0
const next = () => {
  router.push(menus.value[Math.abs(++i % menus.value.length)].route)
}
</script>

<style scoped>
.header-l {
  clip-path: polygon(0 0, 90% 0%, 100% 100%, 0% 100%);
  background-image: linear-gradient(
    to bottom,
    #0a0231,
    #0a0534,
    #0a0937,
    #0a0c3b,
    #0b0e3e,
    #0c1141,
    #0d1344,
    #0e1547,
    #0f184a,
    #101a4e,
    #101d51,
    #112055
  );
  background-image: url('../../assets/images/header-l.png');
  background-repeat: round;
  background-size: cover;
  width: 36.4%;
  height: 46px;
}
.header-m {
  --color1: azure;
  --color2: aqua;
  --color3: dodgerblue;
  --color4: blue;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
  background-image: linear-gradient(
    to bottom,
    #0a0231,
    #0a0534,
    #0a0937,
    #0a0c3b,
    #0b0e3e,
    #0c1141,
    #0d1344,
    #0e1547,
    #0f184a,
    #101a4e,
    #101d51,
    #112055
  );
  text-shadow: 0 0 2px var(--color1), 0 0 20px var(--color2),
    0 0 40px var(--color3), 0 0 80px var(--color4);
  background-image: url('../../assets/images/appName.png');
  background-repeat: round;
  background-size: cover;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.header-r {
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
  background-image: linear-gradient(
    to bottom,
    #0a0231,
    #0a0534,
    #0a0937,
    #0a0c3b,
    #0b0e3e,
    #0c1141,
    #0d1344,
    #0e1547,
    #0f184a,
    #101a4e,
    #101d51,
    #112055
  );
  background-image: url('../../assets/images/header-r.png');
  background-repeat: round;
  background-size: cover;
  width: 36%;
}
</style>
