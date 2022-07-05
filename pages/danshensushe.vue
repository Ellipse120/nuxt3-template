<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="mx-2 mb-2">
        <div class="mb-2 flex">
          <PageSectionLayout class="w-3/4 flex items-center justify-center">
            <div class="text-md w-28 text-center">
              <div class="tracking-wide font-bold font-pangmenzhengdao">上海房建公寓</div>
              <div class="tracking-wide font-bold font-pangmenzhengdao">单身公寓管理</div>
            </div>

            <div class="shrink flex-grow grid grid-cols-6 w-full">
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

              <PageSectionIconInfo label="总床位" value="10000">
                <template #icon>
                  <IconIon:bed />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="月计划接待人次" value="30">
                <template #icon>
                  <IconFluent:people-team-16-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="月实际接待人次" value="30">
                <template #icon>
                  <IconFluent:people-team-16-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="入住率（月度统计）" value="3.2%">
                <template #icon>
                  <IconFluent:data-trending-16-filled />
                </template>
              </PageSectionIconInfo>
            </div>
          </PageSectionLayout>

          <PageSectionLayout class="w-1/4 ml-2 flex items-center justify-center">
            <div class="text-md w-12 font-bold tracking-wide font-pangmenzhengdao text-center">食堂总览</div>

            <div class="shrink flex-grow grid grid-cols-2 w-full">
              <PageSectionIconInfo label="用餐人数" value="75">
                <template #icon>
                  <IconFluent:people-team-16-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="销售金额" value="20000">
                <template #icon>
                  <IconRi:money-cny-circle-fill />
                </template>
              </PageSectionIconInfo>
            </div>
          </PageSectionLayout>
        </div>

        <div class="flex">
          <PageSectionLayout class="w-1/4 h-full">
            <template #header>
              <PageSectionLabel title="各单身宿舍入住率及床位数" />
            </template>

            <chart :options="options1" />
          </PageSectionLayout>

          <div class="w-2/4 px-2 grid grid-cols-2 grid-rows-[250px,300px,255px] gap-2">
            <PageSectionLayout class="col-span-2">
              <template #header>
                <PageSectionLabel title="各单身宿舍入住率及床位数" />
              </template>

              <chart :options="options2" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="本月新增入住及退宿" />
              </template>

              <div class="flex items-center justify-around h-250px bg-ls-blue-800">
                <div class="flex items-center">
                  <img class="h-36 w-36 lg:(h-30 w-30)" :src="ruzhu" />

                  <div class="text-center ml-2">
                    <div class="font-bold text-4xl mb-2">46</div>
                    <div>入住</div>
                  </div>
                </div>

                <div class="flex items-center ml-2">
                  <img class="h-36 w-36 lg:(h-30 w-30)" :src="tuisu" />

                  <div class="text-center ml-2">
                    <div class="font-bold text-4xl mb-2">36</div>
                    <div>退宿</div>
                  </div>
                </div>
              </div>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各单身宿舍接待人次季度数据" />
              </template>

              <chart :options="options3" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="最近床位动态" />
              </template>

              <PageListWrapper class="min-h-51 max-h-51">
                <PageListItem v-for="t in list1" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="现场预警" />
              </template>

              <PageListWrapper class="min-h-51 max-h-51">
                <PageListItem v-for="t in list2" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>
          </div>

          <div class="w-1/4">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各食堂每日就餐人数" />
              </template>

              <chart :options="options4" />
            </PageSectionLayout>

            <PageSectionLayout class="my-2">
              <template #header>
                <PageSectionLabel title="各食堂月就餐人数" />
              </template>

              <chart :options="options5" />
            </PageSectionLayout>

            <PageSectionLayout class="mb-2">
              <template #header>
                <PageSectionLabel title="各食堂每日收入情况" />
              </template>

              <chart :options="options6" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="各食堂月收入情况" />
              </template>

              <chart :options="options7" />
            </PageSectionLayout>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import ruzhu from '../assets/images/ruzhu.png'
import tuisu from '../assets/images/tuisu.png'

definePageMeta({
  layout: 'tufang',
  title: '单身宿舍',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const options1 = computed(() => ({
  chart: {
    height: 770,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: [
      '局南村宿舍',
      '西藏北路宿舍',
      '虹桥单身宿舍',
      '江湾宿舍',
      '王家宅东楼宿舍',
      '红厦宿舍',
      '老干部宿舍',
      'zha江路宿舍',
      '南翔动车所宿舍',
      '南翔宿舍',
      '上南宿舍',
      '王家宅西楼宿舍',
      '庐峰宿舍',
      '上西宿舍',
      '天津路宿舍',
      '何家湾宿舍',
      '无锡公寓单身宿舍',
      '北郊宿舍',
    ],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
  series: [
    {
      name: '入住率',
      type: 'bar',
      borderColor: 'transparent',
      dataLabels: {
        enabled: true,
        format: '{point.y:.2f}%',
      },
      data: [75.5, 85, 78, 75, 73, 65, 75.5, 85, 78, 75, 73, 65, 75.5, 85, 78, 75, 88, 92],
    },
    {
      name: '床位数',
      type: 'bar',
      borderColor: 'transparent',
      data: [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
    },
  ],
}))

const options2 = computed(() => ({
  chart: {
    height: 200,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2022接待次数',
      data: [21, 19, 27, 20, 20, 22, 20, 26, 20, 20, 19, 20],
    },
    {
      name: '2021接待次数',
      data: [17, 20, 27, 20, 20, 23, 19, 26, 19, 20, 20, 21],
    },
  ],
}))

const options3 = computed(() => ({
  chart: {
    height: 250,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓'],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '每日就餐人数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75, 85, 78, 75, 73, 65],
    },
  ],
}))

const options4 = computed(() => ({
  chart: {
    height: 150,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓'],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '每日就餐人数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75, 85, 78, 75, 73, 65],
    },
  ],
}))

const options5 = computed(() => ({
  chart: {
    height: 150,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓'],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '每日就餐人数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75, 85, 78, 75, 73, 65],
    },
  ],
}))

const options6 = computed(() => ({
  chart: {
    height: 150,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓'],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '每日就餐人数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75, 85, 78, 75, 73, 65],
    },
  ],
}))

const options7 = computed(() => ({
  chart: {
    height: 147,
    type: 'bar',
  },
  xAxis: {
    type: 'category',
    lineWidth: 0,
    tickWidth: 0,
    categories: ['上海行车公寓', '上南行车公寓', '虹桥行车公寓', '虹桥动车公寓', '南翔动车公寓', '苏州行车公寓'],
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '每日就餐人数',
      type: 'bar',
      borderColor: 'transparent',
      data: [75, 85, 78, 75, 73, 65],
    },
  ],
}))

const list1 = computed(() => [
  {
    id: 1,
    label: '【上海机辆段】',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '【姜伟】已入住',
  },
  {
    id: 2,
    label: '【上海机辆段】',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '【姜伟】已入住',
  },
  {
    id: 3,
    label: '【上海机辆段】',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '【姜伟】已入住',
  },
  {
    id: 4,
    label: '【上海机辆段】',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '【姜伟】已入住',
  },
])

const list2 = computed(() => [
  {
    id: 1,
    label: '宿舍预警',
    class: 'text-red-500',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '西藏北路宿舍床位不足',
  },
  {
    id: 2,
    label: '宿舍预警',
    class: 'text-red-500',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '西藏北路宿舍床位不足',
  },
  {
    id: 3,
    label: '宿舍预警',
    class: 'text-red-500',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '突发事件，需要汇报及协调其他事项',
  },
  {
    id: 4,
    label: '宿舍预警',
    class: 'text-red-500',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '突发事件，需要汇报及协调其他事项',
  },
])
</script>
