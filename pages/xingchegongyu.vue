<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="flex w-full px-2">
          <div class="flex-1">
            <PageSectionLayout>
              <div class="flex items-center justify-center h-12 p-2">
                <div class="text-md w-44 font-bold tracking-wide text-center">
                  <div class="font-pangmenzhengdao">上海集团公司</div>
                  <div class="font-pangmenzhengdao">行车公寓接待情况</div>
                </div>
                <div class="flex-grow grid grid-cols-5 grid-rows-1 w-full">
                  <PageSectionIconInfo label="目前接待人数" value="30">
                    <template #icon>
                      <IconFluent:people-team-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="叫班次数" value="75">
                    <template #icon>
                      <IconTeenyicons:text-document-alt-solid />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="入住率" value="3.2%">
                    <template #icon>
                      <IconFluent:data-trending-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <div class="flex items-center col-span-2 justify-around">
                    <div
                      class="text-blue-600 text-sm underline decoration-2 underline-offset-2 mx-4"
                    >
                      公寓详情
                    </div>
                    <div class="flex items-center">
                      <div
                        class="w-10 text-yellow-500 font-bold font-pangmenzhengdao"
                      >
                        系统公告
                      </div>
                      <div class="text-xs">
                        <div>1、测试公示信息</div>
                        <div>2、测试公示信息</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageSectionLayout>
          </div>

          <div class="flex-1 ml-2">
            <PageSectionLayout>
              <div class="flex items-center justify-center h-12 p-2">
                <div class="text-md w-44 font-bold tracking-wide text-center">
                  <div class="font-pangmenzhengdao">食堂总览</div>
                </div>
                <div class="flex-grow grid grid-cols-3 grid-rows-1 w-full">
                  <PageSectionIconInfo label="食堂总数" value="30">
                    <template #icon>
                      <IconBx:bxs-dish />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="用餐人数" value="75">
                    <template #icon>
                      <IconFluent:people-team-16-filled />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="销售金额" value="20000">
                    <template #icon>
                      <IconRi:database-2-fill />
                    </template>
                  </PageSectionIconInfo>
                </div>
              </div>
            </PageSectionLayout>
          </div>
        </div>

        <div class="grid grid-cols-6 grid-rows-2 gap-2 m-2">
          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各房建公寓段入住率" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各房建公寓段入住率占比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="最近一周入住情况" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各房建公寓段食堂数量" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各房建公寓段食堂日均用餐人数" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="各房建公寓段食堂日均用餐人数" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021-2022水量累计消耗对比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021-2022水量累计消耗对比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021-2022水量累计消耗对比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021年月度及累计单宿舍接待人次" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021-2022水量累计消耗对比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021-2022水量累计消耗对比" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>
        </div>

        <div class="grid grid-cols-4 grid-rows-1 gap-2 m-2">
          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2021年月度及累计单宿舍接待人次" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2012-2022年累计销售收入" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2022年月度就餐人次" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>

          <PageSectionLayout>
            <template #header>
              <PageSectionLabel title="2022年月度销售收入" />
            </template>
            <highchart :options="options" />
          </PageSectionLayout>
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
const height = computed(() => (isSmallerScreen.value ? 220 : 220))

const options = ref({
  chart: {
    height: height.value,
  },
})
</script>
