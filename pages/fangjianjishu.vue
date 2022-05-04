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
  title: '房建技术',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()
</script>
