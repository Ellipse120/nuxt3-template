<template>
  <PageWrapper>
    <PageLsHeader />
    <PageBody>
      <PageSection>
        <div class="flex w-full px-2">
          <div class="w-3/4 mx-1">
            <PageSectionLayout>
              <div class="flex items-center justify-center">
                <div
                  class="text-md w-32 font-bold font-pangmenzhengdao text-center"
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
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022单宿月度接待人次对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022单宿累计接待人次对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022水量累计消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022电量累计消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022天然气累计消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022水量月度消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022电量月度消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="2021-2022天然气月度消耗对比" />
                </template>
                <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
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

            <PageSectionLayout>
              <PageSectionLabel title="现场预警" />

              <PageListWrapper>
                <PageListItem v-for="t in list" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <PageSectionLabel title="宿舍月度情况" />
              <ECharts :height="isSmallerScreen ? '250px' : '18vh'" />
            </PageSectionLayout>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import ListWrapper from '~/components/Page/ListWrapper.vue'

definePageMeta({
  layout: 'tufang',
  title: '单身宿舍',
})

const { isSmallerScreen } = useMediaQuerySmallScreen()

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
</script>
