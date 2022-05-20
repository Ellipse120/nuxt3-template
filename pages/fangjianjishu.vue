<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="grid grid-cols-5 grid-rows-3 gap-2 mx-2 mb-2">
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

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2022安全生产费进度（按费用/万元）" />
            </template>

            <chart :options="options2" />
          </PageSectionLayout>

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
              <DataTable :value="table2" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                <Column field="车间" header="车间" />
                <Column field="检修（未销号）" header="检修（未销号）" />
                <Column field="检修（销号）" header="检修（销号）" />
                <Column field="综合（未销号）" header="综合（未销号）" />
                <Column field="综合（销号）" header="综合（销号）" />
                <Column field="大修（未销号）" header="大修（未销号）" />
                <Column field="大修（销号）" header="大修（销号）" />
              </DataTable>
            </PageSectionLayout>
          </div>

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

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="年度综合维修费用额度分配" />
            </template>

            <chart :options="options6" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2022专项整治进度（按费用/万元）" />
            </template>

            <chart :options="options7" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="本月上海车间设备问题库销号情况" />
            </template>

            <chart :options="options8" />
            <DataTable :value="table4" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
              <Column field="车间" header="车间" />
              <Column field="检修（未销号）" header="检修（未销号）" />
              <Column field="检修（销号）" header="检修（销号）" />
              <Column field="综合（未销号）" header="综合（未销号）" />
              <Column field="综合（销号）" header="综合（销号）" />
              <Column field="大修（未销号）" header="大修（未销号）" />
              <Column field="大修（销号）" header="大修（销号）" />
            </DataTable>
          </PageSectionLayout>

          <div>
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
              <PageSectionLabel title="天窗利用率" />
            </template>

            <chart :options="options10" />
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

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="本月段专项活动开展情况" />
            </template>

            <chart :options="options12" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="本月苏锡车间设备问题库销号情况" />
            </template>

            <chart :options="options13" />
            <DataTable :value="table6" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
              <Column field="车间" header="车间" />
              <Column field="检修（未销号）" header="检修（未销号）" />
              <Column field="检修（销号）" header="检修（销号）" />
              <Column field="综合（未销号）" header="综合（未销号）" />
              <Column field="综合（销号）" header="综合（销号）" />
              <Column field="大修（未销号）" header="大修（未销号）" />
              <Column field="大修（销号）" header="大修（销号）" />
            </DataTable>
          </PageSectionLayout>

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

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="天窗时长利用率" />
            </template>

            <chart :options="options15" />
          </PageSectionLayout>
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

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const options1 = computed(() => ({
  chart: {
    height: 190,
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

const table1 = computed(() => [
  {
    类别: '计划',
    沪杭车间: 29,
    上海车间: 26,
    苏锡车间: 24,
  },
  {
    类别: '完成',
    沪杭车间: 21,
    上海车间: 25,
    苏锡车间: 23,
  },
])

const options2 = computed(() => ({
  chart: {
    height: 290,
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
    height: 100,
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
    height: 150,
    type: 'column',
  },
  xAxis: {
    type: 'category',
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
      data: [23, 18, 22, 20, 19, 20],
    },
  ],
}))

const table2 = computed(() => [
  {
    '车间': '沪杭车间',
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
    height: 220,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['站房雨棚排水不畅', '低洼四电用房', '渗漏隐患房建设备', '产生沉降房建设备'],
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
      name: '',
      data: [28, 19, 24, 21],
    },
  ],
}))

const options42 = computed(() => ({
  chart: {
    height: 220,
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
      name: '防洪重点场所分布',
      type: 'pie',
      borderColor: 'transparent',
      data: [
        { name: '沪苏车间', y: 15 },
        { name: '上海车间', y: 15 },
        { name: '苏锡车间', y: 70 },
      ],
    },
  ],
}))

const options51 = computed(() => ({
  chart: {
    height: 150,
    type: 'column',
  },
  xAxis: {
    type: 'category',
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
    height: 180,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['施工介入', '静态验收', '动态验收', '安全评估'],
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
      name: '沪苏通',
      data: [25, 35, 12, 5],
    },
    {
      name: '南沿江',
      data: [19, 36, 10, 4],
    },
    {
      name: '沪苏湖',
      data: [23, 31, 13, 3],
    },
  ],
}))

const options6 = computed(() => ({
  chart: {
    height: 290,
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
    height: 290,
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
    height: 190,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['沪杭车间', '上海车间', '苏锡车间'],
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
      name: '',
      data: [29, 26, 24],
    },
  ],
}))

const table4 = computed(() => [
  {
    '车间': '上海车间',
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
    height: 200,
    type: 'column',
  },
  xAxis: {
    type: 'category',
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
    height: 200,
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
    height: 290,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['上海房建车间', '沪杭房建车间', '苏锡房建车间', '大修车间', '给水车间'],
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
      name: '天窗利用率 计划',
      data: [17, 13, 9, 4, 15],
    },
    {
      name: '天窗利用率 实际',
      data: [16, 13, 9, 4, 14],
    },
    {
      name: '天窗利用率 利用率',
      data: [42, 41, 41, 40, 42],
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
    类别: '计划',
    沪杭车间: 29,
    上海车间: 26,
    苏锡车间: 24,
  },
  {
    类别: '完成',
    沪杭车间: 21,
    上海车间: 25,
    苏锡车间: 23,
  },
])

const options12 = computed(() => ({
  chart: {
    height: 180,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['高铁站台抹灰层', '四电房屋渗漏', '雨棚吊顶排查', '客站消防缺陷隐患'],
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
      name: '上海车间',
      data: [47, 43, 41, 40],
    },
    {
      name: '苏锡车间',
      data: [35, 41, 44, 45],
    },
    {
      name: '沪杭车间',
      data: [42, 41, 41, 40],
    },
  ],
}))

const options13 = computed(() => ({
  chart: {
    height: 150,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['沪杭车间', '上海车间', '苏锡车间'],
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
      name: '',
      data: [29, 26, 24],
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
    height: 150,
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
    类别: '2022',
    '1月份': 29,
    '2月份': 26,
    '3月份': 24,
  },
  {
    类别: '2021',
    '1月份': 21,
    '2月份': 25,
    '3月份': 23,
  },
])

const options15 = computed(() => ({
  chart: {
    height: 280,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['上海房建车间', '沪杭房建车间', '苏锡房建车间', '大修车间', '给水车间'],
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
      name: '天窗时长利用率 计划时间',
      data: [47, 43, 41, 40, 46],
    },
    {
      name: '天窗时长利用率 实际时间',
      data: [35, 41, 44, 45, 46],
    },
    {
      name: '天窗时长利用率 利用率',
      data: [42, 41, 41, 40, 46],
    },
  ],
}))
</script>
