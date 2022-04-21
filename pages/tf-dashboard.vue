<template>
  <PageWrapper>
    <PageLsHeader>
      <PageTitle :text="route.meta.title" />
    </PageLsHeader>
    <PageBody>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.blank.just_blank_page_with_title') }}
        </div>
      </PageSection>
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
