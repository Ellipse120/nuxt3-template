<template>
  <PageWrapper>
    <PageLsHeader />
    <PageBody>
      <PageSection>
        <div class="flex">
          <div class="w-2/3 grid grid-cols-2">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各车间房建巡检工抽考情况分析" />
              </template>
              <ECharts :height="isSmallerScreen ? '350px' : '40vh'" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各车间房建巡检工抽考平均分" />
              </template>
              <ECharts :height="isSmallerScreen ? '350px' : '40vh'" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="集团公司抽考情况" />
              </template>
              <ECharts :height="isSmallerScreen ? '350px' : '40vh'" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="段持证人员情况" />
              </template>
              <ECharts :height="isSmallerScreen ? '350px' : '40vh'" />
            </PageSectionLayout>
          </div>

          <div class="w-1/3">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="职工年度培训情况" />
              </template>
              <div class="flex flex-col">
                <div class="flex flex-1">
                  <ECharts
                    :chart-data="pieData"
                    :height="isSmallerScreen ? '40vh' : '27vh'"
                    width="50%"
                  />
                  <div
                    class="grid grid-cols-2 grid-rows-2 bg-ls-blue-800 p-16 w-1/2"
                  >
                    <div class="flex items-center justify-center">
                      <IconFaSolid:chalkboardTeacher
                        class="block rounded-md text-4xl p-2 bg-blue-400"
                      />
                    </div>
                    <div class="flex flex-col items-center justify-center w-20">
                      <div class="text-ls-blue-300 text-xl">12</div>
                      <div class="text-xs">本月培训班</div>
                    </div>
                    <div class="flex items-center justify-center">
                      <IconFaSolid:chalkboardTeacher
                        class="block rounded-md text-4xl p-2 bg-green-400"
                      />
                    </div>
                    <div class="flex flex-col items-center justify-center w-20">
                      <div class="text-ls-blue-300 text-xl">3</div>
                      <div class="text-xs">未开班</div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-1">
                  <ECharts
                    :chart-data="pieData2"
                    :height="isSmallerScreen ? '30vh' : '29vh'"
                    width="50%"
                  />
                  <ECharts
                    :chart-data="pieData2"
                    :height="isSmallerScreen ? '30vh' : '29vh'"
                    width="50%"
                  />
                </div>
                <div class="flex flex-1">
                  <ECharts
                    :chart-data="pieData2"
                    :height="isSmallerScreen ? '30vh' : '29vh'"
                    width="50%"
                  />
                  <ECharts
                    :chart-data="pieData2"
                    :height="isSmallerScreen ? '30vh' : '29vh'"
                    width="50%"
                  />
                </div>
              </div>
            </PageSectionLayout>
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

const { $colorLsBlue300, $colorBlue600 } = useNuxtApp()
const isSmallerScreen = useMediaQuery(
  '(min-width: 1024px) and (max-width: 1600px)'
)

const pieData = ref({
  tooltip: {
    trigger: 'item',
  },
  title: {
    top: 'center',
    right: 0,
    left: isSmallerScreen.value ? '82%' : '80%',
    text: '30/36',
    textAlign: 'center',
    textStyle: {
      fontSize: 20,
      color: $colorLsBlue300,
    },
    subtext: '已完成/已报修',
    subtextStyle: {
      color: '#fff',
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['30%', '61%'],
      center: ['32%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: '{num|73%}' + '\n\n' + '{name|完成率}',
        rich: {
          num: {
            fontSize: 18,
          },
          name: {
            fontSize: 12,
            color: $colorLsBlue300,
          },
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
      ],
    },
  ],
})

const pieData2 = computed(() => ({
  title: {
    text: '房建技术科',
    left: isSmallerScreen.value ? '32%' : '32%',
    top: '90%',
    textAlign: 'center',
    textStyle: {
      fontSize: '12px',
      color: $colorBlue600,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    orient: isSmallerScreen.value ? 'horizontal' : 'vertical',
    top: isSmallerScreen.value ? 0 : 'center',
    right: 0,
  },
  series: [
    {
      type: 'pie',
      radius: '60%',
      center: ['32%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 735, name: '已培训' },
        { value: 735, name: '未培训' },
        { value: 1048, name: '计划内未培训' },
      ],
    },
  ],
}))
</script>
