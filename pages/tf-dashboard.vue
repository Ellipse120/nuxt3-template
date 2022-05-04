<template>
  <PageWrapper>
    <PageBody>
      <PageSection> todo </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'tufang',
  title: '首页',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()
</script>
