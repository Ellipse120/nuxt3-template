<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="grid grid-cols-3 grid-rows-2 gap-2 mx-2">
          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各车间房建巡检工抽考情况分析" />
            </template>
            <highchart :options="options1" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各车间房建巡检工抽考平均分" />
            </template>
            <highchart :options="options2" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="集团公司抽考情况" />
            </template>
            <highchart :options="options3" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="段持证人员情况" />
            </template>
            <highchart :options="options4" />
          </PageSectionLayout>

          <PageSectionLayout
            class="flex flex-col h-full col-start-3 row-span-full"
          >
            <template #header>
              <PageSectionLabel title="职工年度培训情况" />
            </template>
            <div class="flex-1 grid grid-cols-2 grid-rows-3 bg-ls-blue-800">
              <highchart :options="options5" />

              <div class="flex items-center justify-around">
                <div
                  class="flex flex-col items-center justify-center w-20 md:w-24"
                >
                  <div class="text-ls-blue-300 text-xl">
                    {{ completed }}/{{ yearTotal }}
                  </div>
                  <div class="text-xs">已完成/年总计</div>
                </div>

                <div class="inline-grid grid-cols-2 grid-rows-2 gap-y-8">
                  <div class="flex items-center justify-center">
                    <IconFaSolid:chalkboardTeacher
                      class="block rounded-md text-4xl p-2 bg-blue-400"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-center w-20">
                    <div class="text-ls-blue-300 text-xl">{{ mouthTotal }}</div>
                    <div class="text-xs">本月开班</div>
                  </div>
                  <div class="flex items-center justify-center">
                    <IconFaSolid:chalkboardTeacher
                      class="block rounded-md text-4xl p-2 bg-green-400"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-center w-20">
                    <div class="text-ls-blue-300 text-xl">{{ notStarted }}</div>
                    <div class="text-xs">未开班</div>
                  </div>
                </div>
              </div>
              <highchart :options="options6" />
              <highchart :options="options7" />
              <highchart :options="options8" />
              <highchart :options="options9" />
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

const { $colorLsBlue300, $setSiteTitle, $api } = useNuxtApp()
$setSiteTitle()

const { isSmallerScreen } = useMediaQuerySmallScreen()

const [
  { data: option1 },
  { data: option2 },
  { data: option3 },
  { data: option4 },
  { data: option5 },
] = await Promise.all([
  $api('zhijiaoxinxi/1'),
  $api('zhijiaoxinxi/2'),
  $api('zhijiaoxinxi/3'),
  $api('zhijiaoxinxi/4'),
  $api('zhijiaoxinxi/5'),
])

const quartarMapper = {
  '1': '一季度',
  '2': '二季度',
  '3': '三季度',
  '4': '四季度',
}

const lMapper = {
  '0': '应持证人数',
  '1': '实际持证人数',
  '2': '本月复训人数',
}

const options1 = computed(() => ({
  chart: {
    height: 395,
  },
  xAxis: {
    type: 'category',
  },
  series: option1.value?.data?.map((o) => {
    return {
      name: o.title,
      data: o.scores.map((d) => ({
        name: quartarMapper[d.quarter],
        y: d.score,
      })),
    }
  }),
}))

const options2 = computed(() => ({
  chart: {
    height: 395,
  },
  xAxis: {
    type: 'category',
  },
  series: option2.value?.data?.map((o) => {
    return {
      name: o.title,
      data: o.scores.map((d) => ({
        name: quartarMapper[d.quarter],
        y: d.score,
      })),
    }
  }),
}))

const options3 = computed(() => ({
  chart: {
    height: 395,
  },
  xAxis: {
    type: 'category',
  },
  series: option3.value?.data?.map((o) => {
    return {
      name: o.title,
      borderColor: 'transparent',
      data: o.scores.map((d) => ({
        name: quartarMapper[d.quarter],
        y: d.score,
      })),
    }
  }),
}))

const options4 = computed(() => ({
  chart: {
    height: 395,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: option4.value?.data?.map((o) => o.title),
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: option4.value?.data?.map((o, index) => {
    return {
      name: lMapper[index + ''],
      borderColor: 'transparent',
      data: [o.shouldHold, o.realHold, o.retraining],
    }
  }),
}))

const completed = computed(() => option5?.value?.data?.completed)
const notStarted = computed(() => option5?.value?.data?.notStarted)
const yearTotal = computed(() => option5?.value?.data?.yearTotal)
const mouthTotal = computed(() => option5?.value?.data?.mouthTotal)

const options5 = computed(() => ({
  chart: {
    height: 285,
    spacing: isSmallerScreen.value ? [0, 30, 0, 30] : [0, 55, 0, 55],
  },
  title: {
    text: `${(completed.value * 100) / yearTotal.value || 0}%`,
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
        { name: '已完成', y: completed.value },
        { name: '年总计', y: yearTotal.value },
      ],
    },
  ],
}))

const options6 = computed(() => ({
  chart: {
    height: 282,
  },
  title: {
    text: option5?.value?.data?.statistics?.[0]?.title,
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
        { name: '已培训', y: option5?.value?.data?.statistics?.[0]?.completed },
        {
          name: '未培训',
          y: option5?.value?.data?.statistics?.[0]?.notStarted,
        },
        {
          name: '计划内未培训',
          y: option5?.value?.data?.statistics?.[0]?.planNotStarted,
        },
      ],
    },
  ],
}))

const options7 = computed(() => ({
  chart: {
    height: 282,
  },
  title: {
    text: option5?.value?.data?.statistics?.[1]?.title,
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
      name: option5?.value?.data?.statistics?.[1]?.title,
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '已培训', y: option5?.value?.data?.statistics?.[0]?.completed },
        {
          name: '未培训',
          y: option5?.value?.data?.statistics?.[0]?.notStarted,
        },
        {
          name: '计划内未培训',
          y: option5?.value?.data?.statistics?.[0]?.planNotStarted,
        },
      ],
    },
  ],
}))

const options8 = computed(() => ({
  chart: {
    height: 282,
  },
  title: {
    text: option5?.value?.data?.statistics?.[2]?.title,
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
      name: option5?.value?.data?.statistics?.[2]?.title,
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '已培训', y: option5?.value?.data?.statistics?.[2]?.completed },
        {
          name: '未培训',
          y: option5?.value?.data?.statistics?.[2]?.notStarted,
        },
        {
          name: '计划内未培训',
          y: option5?.value?.data?.statistics?.[2]?.planNotStarted,
        },
      ],
    },
  ],
}))

const options9 = computed(() => ({
  chart: {
    height: 282,
  },
  title: {
    text: option5?.value?.data?.statistics?.[3]?.title,
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
      name: option5?.value?.data?.statistics?.[3]?.title,
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '已培训', y: option5?.value?.data?.statistics?.[3]?.completed },
        {
          name: '未培训',
          y: option5?.value?.data?.statistics?.[3]?.notStarted,
        },
        {
          name: '计划内未培训',
          y: option5?.value?.data?.statistics?.[3]?.planNotStarted,
        },
      ],
    },
  ],
}))
</script>
