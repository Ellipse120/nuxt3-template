<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="flex mx-2 mb-2 h-full">
          <div class="flex-1 basis-1/3">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="月度巡检工作完成动态" />
              </template>

              <chart :options="options1" />
              <DataTable :value="table1" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                <Column field="类别" header="类别" />
                <Column field="沪杭车间" header="沪杭车间" />
                <Column field="上海车间" header="上海车间" />
                <Column field="苏锡车间" header="苏锡车间" />
              </DataTable>
            </PageSectionLayout>

            <PageSectionLayout class="my-2">
              <template #header>
                <PageSectionLabel title="年度综合维修费用额度分配" />
              </template>

              <chart :options="options6" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="月度综合维修完成动态" />
              </template>

              <chart :options="options11" />
              <DataTable :value="table5" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                <Column field="类别" header="类别" />
                <Column field="沪杭车间" header="沪杭车间" />
                <Column field="上海车间" header="上海车间" />
                <Column field="苏锡车间" header="苏锡车间" />
              </DataTable>
            </PageSectionLayout>
          </div>

          <div class="flex-1 mx-2">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="2022安全生产费进度（按费用/万元）" />
              </template>

              <chart :options="options2" />
            </PageSectionLayout>

            <PageSectionLayout class="my-2">
              <template #header>
                <PageSectionLabel title="2022专项整治进度（按费用/万元）" />
              </template>

              <chart :options="options7" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="本月段专项活动开展情况" />
              </template>

              <chart :options="options12" />
            </PageSectionLayout>
          </div>

          <div class="flex-1" style="flex: 13%;">
            <div>
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="本月重点安全风险各车间认领情况" />
                </template>

                <chart :options="options31" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <PageSectionLabel title="本月沪杭车间设备问题库销号情况" />
                </template>

                <chart :options="options32" />
                <DataTable :value="table2" class="p-datatable-sm" tableClass="text-xs" responsiveLayout="scroll" stripedRows showGridlines>
                  <Column field="车间" header="车间" />
                  <Column field="检修（未销号）" header="检修（未销号）" class="!p-0" />
                  <Column field="检修（销号）" header="检修（销号）" class="!p-0" />
                  <Column field="综合（未销号）" header="综合（未销号）" class="!p-0" />
                  <Column field="综合（销号）" header="综合（销号）" class="!p-0" />
                  <Column field="大修（未销号）" header="大修（未销号）" class="!p-0" />
                  <Column field="大修（销号）" header="大修（销号）" class="!p-0" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <PageSectionLayout class="my-2">
              <template #header>
                <PageSectionLabel title="本月上海车间设备问题库销号情况" />
              </template>

              <chart :options="options8" />
              <DataTable :value="table4" class="p-datatable-sm" tableClass="text-xs" responsiveLayout="scroll" stripedRows showGridlines>
                <Column field="车间" header="车间" />
                <Column field="检修（未销号）" header="检修（未销号）" class="!p-0" />
                <Column field="检修（销号）" header="检修（销号）" class="!p-0" />
                <Column field="综合（未销号）" header="综合（未销号）" class="!p-0" />
                <Column field="综合（销号）" header="综合（销号）" class="!p-0" />
                <Column field="大修（未销号）" header="大修（未销号）" class="!p-0" />
                <Column field="大修（销号）" header="大修（销号）" class="!p-0" />
              </DataTable>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="本月苏锡车间设备问题库销号情况" />
              </template>

              <chart :options="options13" />
              <DataTable :value="table6" class="p-datatable-sm" tableClass="text-xs" responsiveLayout="scroll" stripedRows showGridlines>
                <Column field="车间" header="车间" />
                <Column field="检修（未销号）" header="检修（未销号）" class="!p-0" />
                <Column field="检修（销号）" header="检修（销号）" class="!p-0" />
                <Column field="综合（未销号）" header="综合（未销号）" class="!p-0" />
                <Column field="综合（销号）" header="综合（销号）" class="!p-0" />
                <Column field="大修（未销号）" header="大修（未销号）" class="!p-0" />
                <Column field="大修（销号）" header="大修（销号）" class="!p-0" />
              </DataTable>
            </PageSectionLayout>
          </div>

          <div class="flex-1 mx-2">
            <div>
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="本月防洪重点处所（按类别）" />
                </template>

                <chart :options="options41" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <PageSectionLabel title="防洪重点场所分布" />
                </template>

                <chart :options="options42" />
              </PageSectionLayout>
            </div>

            <div class="my-2">
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="站区网格化系统报修情况（问题类型）" />
                </template>

                <chart :options="options91" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <PageSectionLabel title="本月上海南站网格化系统报修数量（件）" />
                </template>

                <chart :options="options92" />
              </PageSectionLayout>
            </div>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="主要网格化系统请修同比变化情况" />
              </template>

              <chart :options="options14" />
              <DataTable :value="table7" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                <Column field="类别" header="类别" />
                <Column field="1月份" header="1月份" />
                <Column field="2月份" header="2月份" />
                <Column field="3月份" header="3月份" />
              </DataTable>
            </PageSectionLayout>
          </div>

          <div class="flex-1">
            <div>
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="三级件名表" />
                </template>

                <chart :options="options51" />
                <DataTable :value="table3" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                  <Column field="类别" header="类别" />
                  <Column field="沪杭车间" header="沪杭车间" />
                  <Column field="上海车间" header="上海车间" />
                  <Column field="苏锡车间" header="苏锡车间" />
                  <Column field="全段" header="全段" />
                </DataTable>
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <PageSectionLabel title="本月新线建设问题跟踪" />
                </template>

                <chart :options="options53" />
              </PageSectionLayout>
            </div>

            <PageSectionLayout class="my-2">
              <template #header>
                <PageSectionLabel title="天窗利用率" />
              </template>

              <chart :options="options10" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="天窗时长利用率" />
              </template>

              <chart :options="options15" />
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
  title: '房建科',
})

const { $setSiteTitle, $api } = useNuxtApp()
$setSiteTitle()

const { data: option1, pending: pending1 } = await $api('fjsczh/task-check/countByDept')
const { data: option12, pending: pending12 } = await $api('fjsczh/special-device')
const { data: option41, pending: pending41 } = await $api('control/flood/countByType')
const { data: option42, pending: pending42 } = await $api('control/flood/countByWorkshop')
const { data: option53, pending: pending53 } = await $api('new/line/built/statistics')

const options1 = computed(() => ({
  chart: {
    height: 160,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: option1.value?.data?.map(o => o.type),
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '计划',
      data: option1.value?.data?.map(o => o.planSquare),
    },
    {
      name: '完成',
      data: option1.value?.data?.map(o => o.completeSquare),
    },
  ],
}))

const table1 = computed(() => [
  option1.value?.data?.reduce((acc, cur) => {
    return {
      ...acc,
      '类别': '计划',
      [cur.type]: cur.planSquare,
    }
  }, {}),
  option1.value?.data?.reduce((acc, cur) => {
    return {
      ...acc,
      '类别': '完成',
      [cur.type]: cur.completeSquare,
    }
  }, {})
])

const options2 = computed(() => ({
  chart: {
    height: 260,
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '安全生产费进度',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '1季度', y: 15 },
        { name: '2季度', y: 49 },
        { name: '3季度', y: 20 },
        { name: '4季度', y: 20 },
      ],
    },
  ],
}))

const options31 = computed(() => ({
  chart: {
    height: 115,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['苏锡', '上海', '沪杭', '大修', '给水'],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      data: [24, 19, 22, 20, 19],
    },
  ],
}))

const options32 = computed(() => ({
  chart: {
    height: 120,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['检修未销号', '检修销号', '综合未销号', '综合销号', '大修未销号', '大修销号'],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '沪杭车间',
      data: [23, 18, 22, 20, 19, 20],
    },
  ],
}))

const table2 = computed(() => [
  {
    车间: '沪杭车间',
    '检修（未销号）': 75,
    '检修（销号）': 30,
    '综合（未销号）': 15,
    '综合（销号）': 21,
    '大修（未销号）': 25,
    '大修（销号）': 28,
  },
])

const options41 = computed(() => ({
  chart: {
    height: 100,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
    },
    categories: option41.value?.data?.map(o => o.type),
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '施工措施',
      data: option41.value?.data?.map(o => o.amount),
    },
  ],
}))

const options42 = computed(() => ({
  chart: {
    height: 100,
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
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
      name: '防洪重点场所分布',
      type: 'pie',
      borderColor: 'transparent',
      data: option42.value?.data?.map(o => ({
        name: o.type,
        y: o.amount,
      })),
    },
  ],
}))

const options51 = computed(() => ({
  chart: {
    height: 120,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
    },
    categories: ['沪杭车间', '上海车间', '苏锡车间', '全段'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '构筑物',
      data: [0, 222, 1689, 1911],
    },
    {
      name: '房屋',
      data: [13071, 2319, 6883, 22273],
    },
  ],
}))

const table3 = computed(() => [
  {
    类别: '构筑物',
    沪杭车间: 0,
    上海车间: 222,
    苏锡车间: 1689,
    全段: 1911,
  },
  {
    类别: '房屋',
    沪杭车间: 13071,
    上海车间: 2319,
    苏锡车间: 6883,
    全段: 22273,
  },
])

const options53 = computed(() => ({
  chart: {
    height: 140,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: [...new Set(option53.value?.data?.map(o => o.periodProblem))],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  legend: {
    itemDistance: 5,
  },
  series: [...new Set(option53.value?.data?.map(o => o.line))]?.map(line => {
    const d = option53.value?.data?.filter(m => m.line === line).map(n => n.amount);

    return {
      name: line,
      data: d,
    }
  })
}))

const options6 = computed(() => ({
  chart: {
    height: 220,
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '年度综合维修费用额度分配',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '上海车间', y: 15 },
        { name: '沪杭车间', y: 49 },
        { name: '苏锡车间', y: 20 },
        { name: '段预留', y: 20 },
      ],
    },
  ],
}))

const options7 = computed(() => ({
  chart: {
    height: 220,
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '安全生产费进度',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '1季度', y: 15 },
        { name: '2季度', y: 49 },
        { name: '3季度', y: 20 },
        { name: '4季度', y: 20 },
      ],
    },
  ],
}))

const options8 = computed(() => ({
  chart: {
    height: 120,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['检修未销号', '检修销号', '综合未销号', '综合销号', '大修未销号', '大修销号'],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '上海车间',
      data: [23, 18, 22, 20, 19, 20],
    },
  ],
}))

const table4 = computed(() => [
  {
    车间: '上海车间',
    '检修（未销号）': 75,
    '检修（销号）': 30,
    '综合（未销号）': 15,
    '综合（销号）': 21,
    '大修（未销号）': 25,
    '大修（销号）': 28,
  },
])

const options91 = computed(() => ({
  chart: {
    height: 106,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['站台漏雨', '雨棚漏雨', '站台抹灰层', '照明破损', '雨棚吊顶脱落', '关键节点锈蚀'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  legend: {
    itemDistance: 5,
  },
  series: [
    {
      name: '1月份',
      data: [45, 41, 40, 40, 39, 38],
    },
    {
      name: '2月份',
      data: [36, 41, 43, 42, 44, 43],
    },
    {
      name: '3月份',
      data: [39, 40, 40, 40, 42, 38],
    },
  ],
}))

const options92 = computed(() => ({
  chart: {
    height: 110,
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
  },
  tooltip: {
    headerFormat: '{series.name}<br>',
    pointFormat: '{point.name}: {point.y} (<b>{point.percentage:.2f}%</b>)',
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
      name: '上海南站网格化系统报修',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '站房漏雨', y: 15 },
        { name: '雨棚漏雨', y: 49 },
        { name: '站台抹灰层空鼓', y: 16 },
        { name: '照明破损', y: 19 },
        { name: '雨棚吊顶松脱', y: 20 },
      ],
    },
  ],
}))

const options10 = computed(() => ({
  chart: {
    height: 155,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['上海房建车间', '沪杭房建车间', '苏锡房建车间', '大修车间', '给水车间'],
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      shadow: false,
      borderWidth: 0,
    },
    series: {
      grouping: false,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.per:.2f}%',
      },
    },
  },
  series: [
    {
      name: '计划',
      pointPadding: 0.3,
      pointPlacement: -0.2,
      data: [
        { y: 17, per: (16 / 17) * 100 },
        { y: 13, per: (13 / 13) * 100 },
        { y: 9, per: (9 / 9) * 100 },
        { y: 4, per: (4 / 4) * 100 },
        { y: 15, per: (14 / 15) * 100 },
      ],
    },
    {
      name: '实际',
      pointPadding: 0.4,
      pointPlacement: -0.2,
      data: [
        { y: 16, per: (16 / 17) * 100 },
        { y: 13, per: (13 / 13) * 100 },
        { y: 9, per: (9 / 9) * 100 },
        { y: 4, per: (4 / 4) * 100 },
        { y: 14, per: (14 / 15) * 100 },
      ],
    },
  ],
}))

const options11 = computed(() => ({
  chart: {
    height: 150,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['沪杭车间', '上海车间', '苏锡车间'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '计划',
      data: [29, 26, 24],
    },
    {
      name: '完成',
      data: [21, 25, 23],
    },
  ],
}))

const table5 = computed(() => [
  {
    '类别': '计划',
    '沪杭车间': 29,
    '上海车间': 26,
    '苏锡车间': 24,
  },
  {
    '类别': '完成',
    '沪杭车间': 21,
    '上海车间': 25,
    '苏锡车间': 23,
  },
])

const options12 = computed(() => ({
  chart: {
    height: 250,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: [...new Set(Object.values(option12.value?.data).flat().map(o => o?.name))],
    // categories: ['高铁站台抹灰层', '四电房屋渗漏', '雨棚吊顶排查', '客站消防缺陷隐患'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  legend: {
    itemDistance: 5,
  },
  series: Object.keys(option12.value?.data)?.map(key => {
    return {
      name: key,
      data: option12.value?.data?.[key]?.map(m => m.amount)
    }
  }),
  // series: [
  //   {
  //     name: '上海车间',
  //     data: [47, 43, 41, 40],
  //   },
  //   {
  //     name: '苏锡车间',
  //     data: [35, 41, 44, 45],
  //   },
  //   {
  //     name: '沪杭车间',
  //     data: [42, 41, 41, 40],
  //   },
  // ],
}))

const options13 = computed(() => ({
  chart: {
    height: 117,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['检修未销号', '检修销号', '综合未销号', '综合销号', '大修未销号', '大修销号'],
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '苏锡车间',
      data: [23, 18, 22, 20, 19, 20],
    },
  ],
}))

const table6 = computed(() => [
  {
    '车间': '苏锡车间',
    '检修（未销号）': 75,
    '检修（销号）': 30,
    '综合（未销号）': 15,
    '综合（销号）': 21,
    '大修（未销号）': 25,
    '大修（销号）': 28,
  },
])

const options14 = computed(() => ({
  chart: {
    height: 100,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['1月份', '2月份', '3月份'],
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: '2022',
      data: [46, 41, 39],
    },
    {
      name: '2021',
      data: [38, 40, 41],
    },
  ],
}))

const table7 = computed(() => [
  {
    '类别': '2022',
    '1月份': 29,
    '2月份': 26,
    '3月份': 24,
  },
  {
    '类别': '2021',
    '1月份': 21,
    '2月份': 25,
    '3月份': 23,
  },
])

const options15 = computed(() => ({
  chart: {
    height: 160,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: 0,
      padding: 0,
    },
    categories: ['上海房建车间', '沪杭房建车间', '苏锡房建车间', '大修车间', '给水车间'],
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      shadow: false,
      borderWidth: 0,
    },
    series: {
      grouping: false,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.per:.2f}%',
      },
    },
  },
  series: [
    {
      name: '计划时间',
      pointPadding: 0.3,
      pointPlacement: -0.2,
      data: [
        { y: 17, per: (16 / 17) * 100 },
        { y: 13, per: (13 / 13) * 100 },
        { y: 9, per: (9 / 9) * 100 },
        { y: 4, per: (4 / 4) * 100 },
        { y: 15, per: (14 / 15) * 100 },
      ],
    },
    {
      name: '实际时间',
      pointPadding: 0.4,
      pointPlacement: -0.2,
      data: [
        { y: 16, per: (16 / 17) * 100 },
        { y: 13, per: (13 / 13) * 100 },
        { y: 9, per: (9 / 9) * 100 },
        { y: 4, per: (4 / 4) * 100 },
        { y: 14, per: (14 / 15) * 100 },
      ],
    },
  ],
}))
</script>
