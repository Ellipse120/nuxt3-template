<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="mx-2 mb-2">
        <PageSectionLayout class="mb-2">
          <div class="flex items-center justify-center h-12 p-2">
            <div class="text-md w-44 font-bold tracking-wide text-center">
              <div class="font-pangmenzhengdao">上海房间公寓段</div>
              <div class="font-pangmenzhengdao">行车公寓管理</div>
            </div>

            <div class="flex-grow grid grid-cols-6 w-full">
              <PageSectionIconInfo label="总公寓数" value="30">
                <template #icon>
                  <IconIc:baseline-apartment />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="总房间数" value="75">
                <template #icon>
                  <IconFluent:conference-room-28-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="总床位" value="75">
                <template #icon>
                  <IconIon:bed />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="月计划接待人次" value="75">
                <template #icon>
                  <IconFluent:people-team-16-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="月实际接待人次" value="75">
                <template #icon>
                  <IconFluent:people-team-16-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="入住率" value="3.2%">
                <template #icon>
                  <IconFluent:data-trending-16-filled />
                </template>
              </PageSectionIconInfo>
            </div>
          </div>
        </PageSectionLayout>

        <div class="flex">
          <div class="flex-1 grid grid-cols-2 grid-rows-3 gap-2">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓预警信息" />
              </template>

              <PageListWrapper class="max-h-47">
                <PageListItem v-for="t in list1" :key="t.id" :item="t">
                  <template #icon>
                    <IconFluent:alert-on-20-filled class="w-8 h-8 mr-2 text-red-500" />
                  </template>
                </PageListItem>
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓房间数" />
              </template>
              <chart :options="options2" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="行车公寓叫班次数月度对比图" />
              </template>
              <chart :options="options3" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="行车公寓接待人次对比图" />
              </template>
              <chart :options="options4" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="行车公寓叫班次数季度数据" />
              </template>
              <chart :options="options5" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="行车公寓接待人次季度数据" />
              </template>
              <chart :options="options6" />
            </PageSectionLayout>
          </div>

          <div class="flex-1 ml-2 grid grid-cols-2 grid-rows-3 gap-2">
            <div class="col-span-2 flex">
              <PageSectionLayout class="w-1/3">
                <template #header>
                  <PageSectionLabel title="各公寓每日叫班次数" />
                </template>
                <chart :options="options7" />
              </PageSectionLayout>

              <PageSectionLayout class="w-1/3 mx-2">
                <template #header>
                  <PageSectionLabel title="各公寓每日接待次数" />
                </template>
                <chart :options="options8" />
              </PageSectionLayout>

              <PageSectionLayout class="w-1/3">
                <template #header>
                  <PageSectionLabel title="各公寓入住率" />
                </template>
                <chart :options="options9" />
              </PageSectionLayout>
            </div>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓月度叫班次数" />
              </template>
              <chart :options="options10" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓月度接待人次" />
              </template>
              <chart :options="options11" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓季度叫班次数" />
              </template>
              <chart :options="options12" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各公寓季度接待人次" />
              </template>
              <chart :options="options13" />
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
  title: '行车公寓',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const { isSmallerScreen } = useMediaQuerySmallScreen()
const height = computed(() => (isSmallerScreen.value ? 220 : 215))

const xData = ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓']

const options = computed(() => ({
  chart: {
    height: height.value,
  },
}))

const list1 = computed(() =>
  Array.from({ length: 9 }, (_, index) => {
    return {
      id: index + 1,
      label: '公寓预警',
      class: 'text-red-500',
      time: useDateFormat(new Date(), 'MM-DD HH:mm'),
      content: '上海行车公寓房间数量不足',
    }
  })
)

const options2 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options3 = computed(() => ({
  chart: {
    height: 190,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['一月', '二月', '三月', '四月', '五月'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2021叫班次数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022叫班次数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options4 = computed(() => ({
  chart: {
    height: 190,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['一月', '二月', '三月', '四月', '五月'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2021接待次数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022接待次数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options5 = computed(() => ({
  chart: {
    height: 190,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['第一季度', '第二季度', '第三季度', '第四季度'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2021叫班次数',
      data: [23, 20, 26, 19],
    },
    {
      name: '2022叫班次数',
      data: [15, 20, 25, 20],
    },
  ],
}))

const options6 = computed(() => ({
  chart: {
    height: 190,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['第一季度', '第二季度', '第三季度', '第四季度'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2021接待次数',
      data: [23, 20, 26, 19],
    },
    {
      name: '2022接待次数',
      data: [15, 20, 25, 20],
    },
  ],
}))

const options7 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options8 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options9 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  yAxis: {
    max: 100,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
        format: '{point.y}%',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75.5, 67.6, 49.3, 42.2, 32.9, 23.8],
    },
  ],
}))

const options10 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options11 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options12 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))

const options13 = computed(() => ({
  chart: {
    height: 190,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: xData,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
    series: {
      dataLabels: {
        enabled: true,
        // inside: true,
        align: 'right',
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '房间数',
      type: 'bar',
      borderColor: 'transparent',
      data: [88, 85, 78, 75, 73, 65],
    },
  ],
}))
</script>
