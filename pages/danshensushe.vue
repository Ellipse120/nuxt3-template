<template>
  <PageWrapper class="flex-1">
    <PageBody class="flex-1">
      <PageSection class="flex-1">
        <div class="flex w-full px-2">
          <div class="w-3/4 mx-1">
            <PageSectionLayout>
              <div class="flex items-center justify-center">
                <div
                  class="text-md w-32 font-bold tracking-wide font-pangmenzhengdao text-center"
                >
                  上海房建公寓段单身宿舍管理
                </div>
                <div
                  class="shrink flex-grow grid grid-cols-6 grid-rows-2 w-full"
                >
                  <PageSectionIconInfo label="总床位数" value="24299">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="总入住率" value="84.27%">
                    <template #icon>
                      <IconFluent:data-trending-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="地区床位数" value="13155">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="地区剩余床位数" value="1314">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="地区入住率" value="89.81%">
                    <template #icon>
                      <IconFluent:data-trending-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="预警信息" value="6">
                    <template #icon>
                      <IconRi:alarm-warning-fill />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="自管床位" value="8902">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="自管剩余床位" value="2268">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="自主入住率" value="74.52%">
                    <template #icon>
                      <IconFluent:data-trending-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="外租床位" value="2242">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="外租剩余床位" value="104">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="外租入住率" value="95.36%">
                    <template #icon>
                      <IconFluent:data-trending-16-filled />
                    </template>
                  </PageSectionIconInfo>
                </div>
              </div>
            </PageSectionLayout>

            <div class="grid grid-cols-3 grid-rows-2 gap-2 mt-2">
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021年月度及累计单宿舍接待人次" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022单宿月度接待人次对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022单宿累计接待人次对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022水量累计消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022电量累计消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022天然气累计消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022水量月度消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022电量月度消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022天然气月度消耗对比" />
                </template>
                <chart :options="options1" />
              </PageSectionLayout>
            </div>
          </div>

          <div class="w-1/4 mx-1">
            <PageSectionLayout>
              <PageSectionLabel title="最近床位动态" />

              <PageListWrapper>
                <PageListItem v-for="t in list" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout class="my-2">
              <PageSectionLabel title="现场预警" />

              <PageListWrapper>
                <PageListItem v-for="t in list2" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <PageSectionLabel title="宿舍月度情况" />
              <chart :options="options2" />
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
  title: '单身宿舍',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const list = ref(
  Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      label: '【上海机辆段】',
      time: useDateFormat(new Date(), 'MM-DD HH:mm'),
      content: '【张三】 已入住',
    }
  })
)

const list2 = ref(
  Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      label: '宿舍预警',
      time: useDateFormat(new Date(), 'MM-DD HH:mm'),
      content: '西藏北路宿舍床位不足',
      class: 'font-bold text-red-400',
    }
  })
)

const { isSmallerScreen } = useMediaQuerySmallScreen()
const height = computed(() => (isSmallerScreen.value ? 220 : 203))

const options1 = computed(() => ({
  chart: {
    height: height.value,
  },
  series: [
    {
      name: '1月',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: '2月',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: '3月',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: '4月',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: '5月',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
}))

const options2 = computed(() => ({
  chart: {
    height: 205,
  },
  series: [
    {
      name: '2021年累计消耗',
      data: [11, 22, 12, 41, 32, 49, 120, 31],
    },
    {
      name: '2022年累计消耗',
      data: [249, 64, 22, 29, 32, 302, 381, 404],
    },
  ],
}))
</script>
