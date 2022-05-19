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
  title: '卸污与能耗管理',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()
</script>
