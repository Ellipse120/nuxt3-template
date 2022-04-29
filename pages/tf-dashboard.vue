<template>
  <PageWrapper>
    <PageLsHeader>
      <PageTitle :text="route.meta.title" />
    </PageLsHeader>
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

const route = useRoute()
</script>
