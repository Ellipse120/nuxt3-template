<template>
  <PageWrapper>
    <PageLsHeader>
      <PageTitle :text="route.meta.title" class="capitalize" />
    </PageLsHeader>
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

const route = useRoute()
</script>
