<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="mx-2 mb-2">
          <div class="flex mb-2">
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
                  <chart :options="options3" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="高铁房建设备占比" />
                  </template>
                  <chart :options="options4" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="房建设备三级率变化情况" />
                  </template>
                  <chart :options="options5" />
                </PageSectionLayout>
              </div>

              <PageSectionLayout class="mt-2">
                <PageSectionLabel title="2022年房建设备总量总体概况（445万平方米）" />

                <DataTable
                  :value="table1"
                  class="p-datatable-sm"
                  tableClass="text-xs"
                  autoLayout
                  stripedRows
                  scrollHeight="122px"
                  showGridlines
                >
                  <Column field="设备分类" header="设备分类" />
                  <Column field="站房" header="站房" />
                  <Column field="站台" header="站台" />
                  <Column field="雨棚" header="雨棚" />
                  <Column field="四电用房" header="四电用房" />
                  <Column field="其它" header="其它" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/3 mx-2">
              <PageSectionLayout>
                <chart :options="options2" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <PageSectionLabel
                    title="安全生产事故隐患登记表（上海房建公寓段）"
                  />
                </template>

                <DataTable
                  class="p-datatable-sm"
                  tableClass="text-xs"
                  :value="table2"
                  autoLayout
                  stripedRows
                  showGridlines
                  scrollable
                  scrollHeight="150px"
                >
                  <Column field="序号" header="序号" />
                  <Column field="隐患编号" header="隐患编号" width="20rem" />
                  <Column field="隐患描述导致结果" header="隐患描述导致结果" headerStyle="width: 28em" />
                  <Column field="类别" header="类别" />
                  <Column field="形成时间" header="形成时间" />
                  <Column field="发现时间" header="发现时间" />
                  <Column field="责任单位" header="责任单位" />
                  <Column field="负责人" header="负责人" />
                  <Column field="完成时间" header="完成时间" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/3 flex">
              <div class="w-3/7">
                <PageSectionLayout>
                  <template #header>
                    <PageSectionLabel title="行车公寓" />
                  </template>

                  <div class="bg-ls-blue-800 inline-grid grid-cols-3 grid-rows-3 gap-2 p-2">
                    <div class="col-span-3 flex">
                      <PageSectionIconInfo label="年计划接待人次" value="436">
                        <template #icon>
                          <IconFluent:people-team-16-filled />
                        </template>
                      </PageSectionIconInfo>

                      <PageSectionIconInfo label="年累计接待人次" value="30">
                        <template #icon>
                          <IconIon:bed />
                        </template>
                      </PageSectionIconInfo>
                    </div>

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="月接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="已叫班次数" value="680" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="临客次数" value="2400" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="日接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="未叫班次数" value="2785" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-18" label="临客人数" value="5800" />
                  </div>
                </PageSectionLayout>

                <PageSectionLayout class="mt-2">
                  <template #header>
                    <PageSectionLabel title="单身宿舍" />
                  </template>

                  <div class="bg-ls-blue-800 grid grid-cols-2 grid-rows-3 gap-2 p-2">
                    <PageSectionIconInfo label="入住率" value="436">
                      <template #icon>
                        <IconFluent:data-trending-16-filled />
                      </template>
                    </PageSectionIconInfo>

                    <PageSectionIconInfo label="剩余床位数" value="30">
                      <template #icon>
                        <IconIon:bed />
                      </template>
                    </PageSectionIconInfo>

                    <PageSectionIconInfo class="border border-blue-800 rounded h-20" label="年计划接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-20" label="月接待人次" value="680" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-20" label="年累计接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-20" label="日接待人次" value="2785" />
                  </div>
                </PageSectionLayout>
              </div>

              <div class="w-4/7 ml-2">
                <div class="flex items-center justify-around bg-blue-600 p-2 h-30">
                  <div>
                    <img class="w-20 h-20 filter drop-shadow-2xl" :src="logo" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <div class="font-extrabold text-xl">上海房建公寓段</div>
                    <div class="font-bold text-base">2021-05-16</div>
                  </div>
                </div>

                <PageSectionLayout class="flex items-center justify-around my-2 h-20">
                  <PageSectionIconInfo label="安全天数" value="3769天">
                    <template #icon>
                      <IconCib:adguard />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="下一个百日" value="2022-06-01">
                    <template #icon>
                      <IconUiw:date />
                    </template>
                  </PageSectionIconInfo>
                </PageSectionLayout>

                <PageSectionLayout>
                  <div class="flex items-center h-20">
                    <div class="<lg:w-30 w-22 text-yellow-500 font-pangmenzhengdao">
                      经营指标
                    </div>
                    <div class="ml-2 text-xs">
                      本月计划完成巡检，综合维修100万元，大修专项整治11万元，公寓接待率97%，卸污高铁3000箱，普铁30000列。
                    </div>
                  </div>
                </PageSectionLayout>

                <PageSectionLayout class="mt-2 h-50">
                  <PageSectionLabel title="督办事项" />

                  <PageListWrapper class="h-27vh">
                    <PageListItem v-for="t in list" :key="t.id" :item="t" />
                  </PageListWrapper>
                </PageSectionLayout>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-5 grid-rows-2 gap-2">
            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="两库" />
              </template>
              <chart :options="options6" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="2022年巡检工作量完成情况" />
              </template>
              <chart :options="options7" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="施工管理信息" />
              </template>

              <div class="my-2 flex flex-wrap justify-between">
                <NuxtLink to="http://10.128.20.156:8080/tcx_ui/views/login.html" target="_blank">
                  <span class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1">天窗修计划系统</span>
                </NuxtLink>
                <NuxtLink to="http://10.128.239.203:8080/ljyyx_ui/views/login.html" target="_blank">
                  <span class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1">邻近营业线施工系统</span>
                </NuxtLink>
                <NuxtLink to="http://10.128.2.225:7001/ljdd/sgd/" target="_blank">
                  <span class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1">TDMS计划调度系统</span>
                </NuxtLink>
              </div>

              <PageSectionLayout class="my-2 flex items-center justify-between">
                <div class="lg:(w-12 text-lg) w-22 text-xs text-yellow-500 font-pangmenzhengdao">当日计划</div>

                <DataTable
                  :value="table3"
                  class="p-datatable-sm"
                  tableClass="text-xs"
                  stripedRows
                  showGridlines
                >
                  <Column field="当日施工" header="当日施工" />
                  <Column field="当日维修" header="当日维修" />
                  <Column field="高速铁路" header="高速铁路" />
                  <Column field="普速铁路" header="普速铁路" />
                  <Column field="邻近营业线施工" header="邻近营业线施工" />
                </DataTable>
              </PageSectionLayout>

              <PageSectionLayout class="flex items-center justify-between">
                <div class="lg:(w-12 text-lg) w-22 text-xs text-yellow-500 font-pangmenzhengdao">本月施工</div>

                <DataTable
                  :value="table4"
                  class="p-datatable-sm"
                  tableClass="text-xs"
                  stripedRows
                  showGridlines
                >
                  <Column field="本月施工" header="当日施工" />
                  <Column field="本月维修" header="当日维修" />
                  <Column field="高速铁路" header="高速铁路" />
                  <Column field="普速铁路" header="普速铁路" />
                  <Column field="邻近营业线施工" header="邻近营业线施工" />
                </DataTable>
              </PageSectionLayout>
            </PageSectionLayout>

            <div class="flex flex-col items-center justify-between">
              <PageSectionLayout class="w-full">
                <template #header>
                  <PageSectionLabel title="食堂管理" />
                </template>

                <div class="flex items-center justify-between bg-ls-blue-800 p-2">
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="年计划收入" value="30" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="日收入" value="680" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="累计收入" value="30" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="日就餐人次" value="2785" />
                </div>
              </PageSectionLayout>

              <PageSectionLayout class="w-full">
                <template #header>
                  <PageSectionLabel title="卸污管理" />
                </template>

                <div class="flex items-center justify-between bg-ls-blue-800 p-2">
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="年计划收入" value="30" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="日既有卸污列次" value="680" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="累计收入" value="30" />
                  <PageSectionIconInfo class="border border-blue-800 rounded p-1" label="日高动卸污箱数" value="2785" />
                </div>
              </PageSectionLayout>
            </div>

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
              <chart :options="options8" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="2022年综合维修完成情况" />
              </template>
              <chart :options="options9" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="当日天窗详情" />
              </template>

              <div class="overflow-y-auto lg:max-h-60">
                <div v-for="i in 9" :key="i" class="grid grid-cols-2 grid-rows-2 gap-2 p-2 border-b border-dashed text-xs font-bold">
                  <div>
                    <span class="text-blue-600 font-bold">线别: </span>
                    <span>沪宁城际线</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">计划时间: </span>
                    <span>4/22 00:00-04:00</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">施工地点: </span>
                    <span>苏州城际场</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">作业内容: </span>
                    <span>站房下部吸音棉整治</span>
                  </div>
                </div>
              </div>
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
// @ts-nocheck
import logo from '../assets/images/shanghai-railway.jpg'

definePageMeta({
  layout: 'tufang',
  title: '首页',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const list = computed(() =>
  Array.from({ length: 2 }, (_, index) => {
    return {
      id: index + 1,
      label: '【上海机辆段】',
      time: useDateFormat(new Date(), 'MM-DD HH:mm'),
      content: '【张三】 已入住',
    }
  })
)

const table1 = computed(() => [
  {
    设备分类: '高铁',
    站房: '43.1',
    站台: '9.8',
    雨棚: '45.8',
    四电用房: '26.6',
    其它: '15.3',
  },
  {
    设备分类: '普铁',
    站房: '43.1',
    站台: '9.8',
    雨棚: '45.8',
    四电用房: '26.6',
    其它: '15.3',
  },
])

const table2 = computed(() => [
  {
    序号: '1',
    隐患编号: 'III-1',
    隐患描述导致结果:
      '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
    类别: 'III',
    形成时间: '2022-1-4',
    发现时间: '2022-1-4',
    责任单位: '房建技术科\n安全质量科',
    负责人: '蔡志军\n康卫明',
    完成时间: '2022-3',
  },
  {
    序号: '2',
    隐患编号: 'III-1',
    隐患描述导致结果:
      '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
    类别: 'III',
    形成时间: '2022-1-4',
    发现时间: '2022-1-4',
    责任单位: '房建技术科\n安全质量科',
    负责人: '蔡志军\n康卫明',
    完成时间: '2022-3',
  },
])

const table3 = computed(() => [
  {
    当日施工: '2',
    当日维修: '2',
    高速铁路: '3',
    普速铁路: '2',
    邻近营业线施工: '1',
  },
])

const table4 = computed(() => [
  {
    本月施工: '2',
    本月维修: '2',
    高速铁路: '3',
    普速铁路: '2',
    邻近营业线施工: '1',
  },
])

const options1 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options2 = computed(() => ({
  chart: {
    height: 400,
  },
}))

const options3 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options4 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options5 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options6 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options7 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options8 = computed(() => ({
  chart: {
    height: 180,
  },
}))

const options9 = computed(() => ({
  chart: {
    height: 180,
  },
}))
</script>
