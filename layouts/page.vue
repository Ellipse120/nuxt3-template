<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="flex-1 w-full flex flex-col">
        <div
          class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
        >
          <slot />
        </div>
      </div>
      <!--      <slot name="footer">-->
      <!--        <PageFooter />-->
      <!--      </slot>-->
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>

<script lang="ts" setup>
import { AppSetup } from '~/utils/app'

const { app } = AppSetup()
const route = useRoute()

definePageMeta({
  title: `${route.meta.title} - ${app.name}`,
})
</script>
