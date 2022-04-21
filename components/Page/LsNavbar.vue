<template>
  <BuilderNavbar>
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
</script>
