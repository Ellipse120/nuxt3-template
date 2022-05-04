<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="grid grid-cols-3 grid-rows-2 gap-2 mx-2">
          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各车间房建巡检工抽考情况分析" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各车间房建巡检工抽考平均分" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="集团公司抽考情况" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="段持证人员情况" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout
            class="flex flex-col h-full col-start-3 row-span-full"
          >
            <template #header>
              <PageSectionLabel title="职工年度培训情况" />
            </template>
            <div class="flex-1 grid grid-cols-2 grid-rows-3 bg-ls-blue-800">
              <highchart :options="options3" />

              <div class="flex items-center justify-around">
                <div class="flex flex-col items-center justify-center w-20">
                  <div class="text-ls-blue-300 text-xl">30/36</div>
                  <div class="text-xs">已完成/已报修</div>
                </div>

                <div class="inline-grid grid-cols-2 grid-rows-2 gap-y-8">
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
              <highchart :options="options2" />
              <highchart :options="options2" />
              <highchart :options="options2" />
              <highchart :options="options2" />
            </div>
          </PageSectionLayout>
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

const { $colorLsBlue300, $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const options = ref({
  chart: {
    height: 395,
  },
})

const options2 = ref({
  chart: {
    height: 282,
  },
  title: {
    text: '房建技术科',
    align: 'center',
    verticalAlign: 'bottom',
    style: {
      color: $colorLsBlue300,
      fontSize: '12px',
    },
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  plotOptions: {
    pie: {
      showInLegend: true,
      dataLabels: {
        enabled: false,
      },
      center: ['50%', '50%'],
      size: '100%',
    },
  },
  series: [
    {
      name: '房建技术科',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '已培训', y: 735 },
        { name: '未培训', y: 735 },
        { name: '计划内未培训', y: 1048 },
      ],
    },
  ],
})

const options3 = ref({
  chart: {
    height: 285,
    spacing: [0, 55, 0, 55],
  },
  title: {
    text: '58%',
    verticalAlign: 'middle',
    y: 10,
    style: {
      color: $colorLsBlue300,
      fontSize: '18px',
    },
  },
  subtitle: {
    text: '完成率',
    verticalAlign: 'middle',
    y: 30,
    style: {
      color: '#fff',
      fontSize: '12px',
    },
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
      },
      center: ['50%', '50%'],
      size: '100%',
    },
  },
  legend: {
    enabled: true,
  },
  series: [
    {
      name: '完成率',
      type: 'pie',
      innerSize: '50%',
      borderColor: 'transparent',
      data: [
        { name: '已完成', y: 1048 },
        { name: '未完成', y: 735 },
      ],
    },
  ],
})
</script>
