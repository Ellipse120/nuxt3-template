<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div>
          <div class="flex">
            <div class="w-1/3">
              <div class="grid grid-cols-2 grid-rows-2 gap-2">
                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="总量情况" />
                  </template>
                  <chart :options="options1" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="房建设备一级率变化情况" />
                  </template>
                  <chart :options="options1" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="高铁房建设备占比" />
                  </template>
                  <chart :options="options1" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="房建设备三级率变化情况" />
                  </template>
                  <chart :options="options1" />
                </PageSectionLayout>
              </div>

              <PageSectionLayout class="mt-1">
                <PageSectionLabel
                  title="2022年房建设备总量总体概况（445万平方米）"
                />

                <DataTable :value="table1" class="p-datatable-sm" autoLayout showGridlines>
                  <Column field="设备分类" header="设备分类" />
                  <Column field="站房" header="站房" />
                  <Column field="站台" header="站台" />
                  <Column field="雨棚" header="雨棚" />
                  <Column field="四电用房" header="四电用房" />
                  <Column field="其它" header="其它" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/2 mx-2">
              <PageSectionLayout>
                <chart :options="options2" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-1">
                <template #header>
                  <PageSectionLabel title="安全生产事故隐患登记表（上海房建公寓段）" />
                </template>

                <DataTable :value="table2" class="p-datatable-sm" responsiveLayout="scroll" columnResizeMode="expand" :autoLayout="true" showGridlines>
                  <Column field="序号" header="序号" header-class="text-xs" />
                  <Column field="隐患编号" header="隐患编号" />
                  <Column field="隐患描述导致结果" header="隐患描述导致结果" />
                  <Column field="类别" header="类别" />
                  <Column field="形成时间" header="形成时间" />
                  <Column field="发现时间" header="发现时间" />
                  <Column field="责任单位" header="责任单位" />
                  <Column field="负责人" header="负责人" />
                  <Column field="完成时间" header="完成时间" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/3 inline-grid grid-cols-2 grid-rows-2 gap-2">
              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="行车公寓" />
                </template>

                <div class="flex flex-col h-full">
                  <div class="h-1/3 flex">
                    <PageSectionIconInfo label="年计划接待人次" value="436">
                      <template #icon>
                        <IconIon:bed />
                      </template>
                    </PageSectionIconInfo>

                    <PageSectionIconInfo label="年累计接待人次" value="30">
                      <template #icon>
                        <IconIon:bed />
                      </template>
                    </PageSectionIconInfo>
                  </div>

                  <div class="h-2/3 inline-grid grid-cols-3 grid-rows-2 gap-2">
                    <PageSectionIconInfo label="月接待人次" value="30" />
                    <PageSectionIconInfo label="已叫班次数" value="680" />
                    <PageSectionIconInfo label="临客次数" value="2400" />
                    <PageSectionIconInfo label="日接待人次" value="30" />
                    <PageSectionIconInfo label="未叫班次数" value="2785" />
                    <PageSectionIconInfo label="临客人数" value="5800" />
                  </div>
                </div>
              </PageSectionLayout>

              <PageSectionLayout class="h-full">
                <div>
                  <PageSectionIconInfo label="2021-05-16" value="上海房建公寓段">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>
                </div>

                <div class="inline-flex">
                  <PageSectionIconInfo label="安全天数" value="3769天">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="下一个百日" value="2022-06-01">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>
                </div>
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <PageSectionLabel title="单身宿舍" />
                </template>

                <div class="grid grid-cols-2 grid-rows-2 gap-2">
                  <PageSectionIconInfo label="入住率" value="436">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="剩余床位数" value="30">
                    <template #icon>
                      <IconIon:bed />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="年计划接待人次" value="30" />

                  <PageSectionIconInfo label="月接待人次" value="680" />

                  <PageSectionIconInfo label="年累计接待人次" value="30" />

                  <PageSectionIconInfo label="日接待人次" value="2785" />
                </div>
              </PageSectionLayout>

              <PageSectionLayout>
                <div>
                  <PageSectionLayout>
                    <div class="flex items-center">
                      <div class="w-30 text-yellow-500 font-pangmenzhengdao">经营指标</div>
                      <div class="text-xs">本月计划完成巡检，综合维修100万元，大修专项整治11万元，公寓接待率97%，卸污高铁3000箱，普铁30000列。</div>
                    </div>
                  </PageSectionLayout>

                  <PageSectionLayout class="mt-2">
                    <PageSectionLabel title="督办事项" />

                    <PageListWrapper>
                      <PageListItem v-for="t in list" :key="t.id" :item="t" />
                    </PageListWrapper>
                  </PageSectionLayout>
                </div>
              </PageSectionLayout>
            </div>
          </div>

          <div class="grid grid-cols-5 grid-rows-2 gap-2 mx-2">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="行车公寓" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="单身宿舍" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="施工管理信息" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="食堂管理" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="预警通知" />
              </template>

              <PageListWrapper>
                <PageListItem v-for="t in list" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="本月上海虹桥站股份限界数据分析" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="2022年综合维修完成情况" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="当日天窗详情" />
              </template>
              <chart :options="options1" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="站区网格化系统报修信息" />
              </template>

              <PageListWrapper>
                <PageListItem v-for="t in list" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="消息通知" />
              </template>
              <PageListWrapper>
                <PageListItem v-for="t in list" :key="t.id" :item="t" />
              </PageListWrapper>
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
  title: '首页',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const list = computed(() => (Array.from({ length: 2 }, (_, index) => {
  return {
    id: index + 1,
    label: '【上海机辆段】',
    time: useDateFormat(new Date(), 'MM-DD HH:mm'),
    content: '【张三】 已入住',
  }
})))

const table1 = computed(() => [
  {
    '设备分类': '高铁',
    '站房': '43.1',
    '站台': '9.8',
    '雨棚': '45.8',
    '四电用房': '26.6',
    '其它': '15.3',
  },
  {
    '设备分类': '普铁',
    '站房': '43.1',
    '站台': '9.8',
    '雨棚': '45.8',
    '四电用房': '26.6',
    '其它': '15.3',
  },
])

const table2 = computed(() => [
  {
    '序号': '1',
    '隐患编号': 'III-1',
    '隐患描述导致结果': '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
    '类别': 'III',
    '形成时间': '2022-1-4',
    '发现时间': '2022-1-4',
    '责任单位': '房建技术科\n安全质量科',
    '负责人': '蔡志军\n康卫明',
    '完成时间': '2022-3',
  },
  {
    '序号': '2',
    '隐患编号': 'III-1',
    '隐患描述导致结果': '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
    '类别': 'III',
    '形成时间': '2022-1-4',
    '发现时间': '2022-1-4',
    '责任单位': '房建技术科\n安全质量科',
    '负责人': '蔡志军\n康卫明',
    '完成时间': '2022-3',
  },
])

const options1 = computed(() => ({
  chart: {
    height: 150,
  },
}))

const options2 = computed(() => ({
  chart: {
    height: 390,
  },
}))
</script>
