<template>
  <PageWrapper>
    <PageLsHeader />
    <PageBody>
      <PageSection>
        <div class="flex">
          <div class="w-2/3 grid grid-cols-2">
            <div>
              <div class="text-blue-800">
                <IconMdi:signal-cellular-3 />
                <span>各车间房建巡检工抽考情况分析</span>
              </div>
              <ECharts />
            </div>
            <div>
              <div class="text-blue-800">
                <IconMdi:signal-cellular-3 />
                <span>各车间房建巡检工抽考平均分</span>
              </div>
              <ECharts />
            </div>
            <div>
              <div class="text-blue-800">
                <IconMdi:signal-cellular-3 />
                <span>集团公司抽考情况</span>
              </div>
              <ECharts />
            </div>
            <div>
              <div class="text-blue-800">
                <IconMdi:signal-cellular-3 />
                <span>段持证人员情况</span>
              </div>
              <ECharts />
            </div>
          </div>
          <div class="w-1/3">
            <div class="text-blue-800">
              <IconMdi:signal-cellular-3 />
              <span>职工年度培训情况</span>
            </div>
            <div>123</div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'tufang',
  title: '职教信息',
})
</script>
