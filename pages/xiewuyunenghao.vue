<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="mx-2 mb-2">
        <div class="mb-2 flex">
          <PageSectionLayout class="w-1/2 flex items-center justify-center">
            <div class="text-md w-12 font-bold tracking-wide font-pangmenzhengdao text-center">卸污统计</div>

            <div class="shrink flex-grow grid grid-cols-4 w-full">
              <PageSectionIconInfo label="高动卸污总箱数" value="30">
                <template #icon>
                  <IconIon:waterdrop />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="高动卸污总收入" value="30">
                <template #icon>
                  <IconRi:money-cny-circle-fill />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="既有卸污总列次" value="10000">
                <template #icon>
                  <IconIon:waterdrop />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="既有卸污总收入" value="750000">
                <template #icon>
                  <IconRi:money-cny-circle-fill />
                </template>
              </PageSectionIconInfo>
            </div>
          </PageSectionLayout>

          <PageSectionLayout class="w-1/2 ml-2 flex items-center justify-center">
            <div class="text-md w-12 font-bold tracking-wide font-pangmenzhengdao text-center">能耗统计</div>

            <div class="shrink flex-grow grid grid-cols-3 w-full">
              <PageSectionIconInfo label="总用电量" value="30">
                <template #icon>
                  <IconAntDesign:thunderbolt-filled />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="总用水量" value="30">
                <template #icon>
                  <IconIc:baseline-water-drop />
                </template>
              </PageSectionIconInfo>

              <PageSectionIconInfo label="总天然气量" value="75">
                <template #icon>
                  <IconIon:bed />
                </template>
              </PageSectionIconInfo>
            </div>
          </PageSectionLayout>
        </div>

        <div class="grid grid-cols-4 grid-rows-3 gap-2">
          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="高动卸污箱数" />
            </template>

            <chart :options="options1" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="高动卸污收入" />
            </template>

            <chart :options="options2" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="既有卸污列次" />
            </template>

            <chart :options="options3" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="既有卸污收入" />
            </template>

            <chart :options="options4" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="高动卸污箱数季度统计" />
            </template>

            <chart :options="options5" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="高动卸污收入季度统计" />
            </template>

            <chart :options="options6" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="既有卸污列次季度统计" />
            </template>

            <chart :options="options7" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="既有卸污收入季度统计" />
            </template>

            <chart :options="options8" />
          </PageSectionLayout>

          <div class="col-span-4 flex w-full items-center justify-between">
            <PageSectionLayout class="flex-1">
              <template #header>
                <PageSectionLabel title="月度用电量统计" />
              </template>

              <chart :options="options9" />
            </PageSectionLayout>

            <PageSectionLayout class="flex-1 mx-2">
              <template #header>
                <PageSectionLabel title="月度用水量统计" />
              </template>

              <chart :options="options10" />
            </PageSectionLayout>

            <PageSectionLayout class="flex-1">
              <template #header>
                <PageSectionLabel title="月度天然气量统计" />
              </template>

              <chart :options="options11" />
            </PageSectionLayout>

            <PageSectionLayout class="flex-1 mx-2">
              <template #header>
                <PageSectionLabel title="用电量季度统计" />
              </template>

              <chart :options="options12" />
            </PageSectionLayout>

            <PageSectionLayout class="flex-1">
              <template #header>
                <PageSectionLabel title="用水量季度统计" />
              </template>

              <chart :options="options13" />
            </PageSectionLayout>

            <PageSectionLayout class="flex-1 ml-2">
              <template #header>
                <PageSectionLabel title="天然气季度统计" />
              </template>

              <chart :options="options14" />
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
  title: '卸污与能耗管理',
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options2 = computed(() => ({
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options7 = computed(() => ({
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options9 = computed(() => ({
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
      name: '2021年用电量',
      type: 'line',
      data: [34, 6, 13, 28, 12],
    },
    {
      name: '2022年用电量',
      type: 'line',
      data: [18, 12, 29, 16, 20],
    },
  ],
}))

const options10 = computed(() => ({
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
      name: '2021年用电量',
      type: 'line',
      data: [34, 6, 13, 28, 12],
    },
    {
      name: '2022年用电量',
      type: 'line',
      data: [18, 12, 29, 16, 20],
    },
  ],
}))

const options11 = computed(() => ({
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
      name: '2021年用电量',
      type: 'line',
      data: [34, 6, 13, 28, 12],
    },
    {
      name: '2022年用电量',
      type: 'line',
      data: [18, 12, 29, 16, 20],
    },
  ],
}))

const options12 = computed(() => ({
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options13 = computed(() => ({
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))

const options14 = computed(() => ({
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
      name: '2021高动卸污箱数',
      data: [23, 20, 26, 19, 20],
    },
    {
      name: '2022高动卸污箱数',
      data: [15, 20, 25, 20, 19],
    },
  ],
}))
</script>
