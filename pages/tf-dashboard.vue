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
                    <NuxtLink to="fangjianjishu">
                      <PageSectionLabel title="总量情况" />
                    </NuxtLink>
                  </template>
                  <chart :options="options1" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <NuxtLink to="fangjianjishu">
                      <PageSectionLabel title="房建设备一级率变化情况" />
                    </NuxtLink>
                  </template>
                  <chart :options="options3" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <NuxtLink to="fangjianjishu">
                      <PageSectionLabel title="高铁房建设备占比" />
                    </NuxtLink>
                  </template>
                  <chart :options="options4" />
                </PageSectionLayout>

                <PageSectionLayout>
                  <template #header>
                    <NuxtLink to="fangjianjishu">
                      <PageSectionLabel title="房建设备三级率变化情况" />
                    </NuxtLink>
                  </template>
                  <chart :options="options5" />
                </PageSectionLayout>
              </div>

              <PageSectionLayout class="mt-2">
                <NuxtLink to="fangjianjishu">
                  <PageSectionLabel title="2022年房建设备总量总体概况（445万平方米）" />
                </NuxtLink>

                <DataTable
                  :value="table1"
                  class="p-datatable-sm"
                  tableClass="text-xs"
                  autoLayout
                  stripedRows
                  scrollHeight="122px"
                  showGridlines
                >
                  <Column field="type" header="设备分类" />
                  <Column field="站房" header="站房" />
                  <Column field="站台" header="站台" />
                  <Column field="雨棚" header="雨棚" />
                  <Column field="四电用房" header="四电用房" />
                  <Column field="其他" header="其他" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/3 mx-2">
              <PageSectionLayout>
                <chart :options="options2" />
              </PageSectionLayout>

              <PageSectionLayout class="mt-2">
                <template #header>
                  <NuxtLink to="fangjianjishu">
                    <PageSectionLabel title="安全生产事故隐患登记表（上海房建公寓段）" />
                  </NuxtLink>
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
                  <Column field="序号" header="序号" class="!p-0" />
                  <Column field="隐患编号" header="隐患编号" width="20rem" class="!p-0" />
                  <Column field="隐患描述导致结果" header="隐患描述导致结果" headerStyle="width: 28em" class="!p-0" />
                  <Column field="类别" header="类别" class="!p-0" />
                  <Column field="形成时间" header="形成时间" class="!p-0" />
                  <Column field="发现时间" header="发现时间" class="!p-0" />
                  <Column field="责任单位" header="责任单位" class="!p-0" />
                  <Column field="负责人" header="负责人" class="!p-0" />
                  <Column field="完成时间" header="完成时间" class="!p-0" />
                </DataTable>
              </PageSectionLayout>
            </div>

            <div class="w-1/3 flex">
              <div class="w-3/7">
                <PageSectionLayout>
                  <template #header>
                    <NuxtLink to="xingchegongyu">
                      <PageSectionLabel title="行车公寓" />
                    </NuxtLink>
                  </template>

                  <div class="bg-ls-blue-800 inline-grid grid-cols-3 grid-rows-3 gap-2 p-2">
                    <div class="col-span-3 flex">
                      <PageSectionIconInfo label="年计划接待人次" :value="option3?.data?.find((t) => t.type === 1)?.amount">
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

                    <PageSectionIconInfo
                      class="border border-blue-800 rounded h-12"
                      label="月接待人次"
                      :value="option3?.data?.find((t) => t.type === 5)?.amount"
                    />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="已叫班次数" value="680" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="临客次数" value="2400" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="日接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="未叫班次数" value="2785" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="临客人数" value="5800" />
                  </div>
                </PageSectionLayout>

                <PageSectionLayout class="mt-2">
                  <template #header>
                    <NuxtLink to="danshensushe">
                      <PageSectionLabel title="单身宿舍" />
                    </NuxtLink>
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

                    <PageSectionIconInfo
                      class="border border-blue-800 rounded h-12"
                      label="年计划接待人次"
                      :value="option3?.data?.find((t) => t.type === 2)?.amount"
                    />

                    <PageSectionIconInfo
                      class="border border-blue-800 rounded h-12"
                      label="月接待人次"
                      :value="option3?.data?.find((t) => t.type === 6)?.amount"
                    />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="年累计接待人次" value="30" />

                    <PageSectionIconInfo class="border border-blue-800 rounded h-12" label="日接待人次" value="2785" />
                  </div>
                </PageSectionLayout>
              </div>

              <div class="w-4/7 ml-2">
                <div class="flex items-center justify-around bg-blue-600 p-2 h-20">
                  <div>
                    <img class="w-16 h-16 filter drop-shadow-2xl" :src="logo" />
                  </div>
                  <div class="flex flex-col items-center justify-center">
                    <div class="font-extrabold text-xl">上海房建公寓段</div>
                    <div class="font-bold text-base">2021-05-16</div>
                  </div>
                </div>

                <PageSectionLayout class="flex items-center justify-around my-2 h-20">
                  <PageSectionIconInfo label="安全天数" :value="`${option5?.data?.dayCount}`">
                    <template #icon>
                      <IconCib:adguard />
                    </template>
                  </PageSectionIconInfo>

                  <PageSectionIconInfo label="下一个百日" :value="`${option5?.data?.nextHundredDate}`">
                    <template #icon>
                      <IconUiw:date />
                    </template>
                  </PageSectionIconInfo>
                </PageSectionLayout>

                <PageSectionLayout>
                  <div class="flex items-center h-20">
                    <div class="<lg:w-30 w-22 text-yellow-500 font-pangmenzhengdao">经营指标</div>
                    <ProgressSpinner v-if="pending2" class="!h-8 !w-8" />
                    <div class="ml-2 text-xs" v-if="!pending2">
                      {{ option2?.data?.content }}
                    </div>
                  </div>
                </PageSectionLayout>

                <PageSectionLayout class="mt-2">
                  <NuxtLink to="督办事项管理界面系统平台待开发" target="_blank">
                    <PageSectionLabel title="督办事项" :loading="pending7" />
                  </NuxtLink>

                  <PageListWrapper class="min-h-41 max-h-41">
                    <PageListItem v-for="t in list1" :key="t.id" :item="t" />
                  </PageListWrapper>
                </PageSectionLayout>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-5 grid-rows-[140px, 150px] gap-2">
            <PageSectionLayout>
              <template #header>
                <NuxtLink to="fangjianjishu">
                  <PageSectionLabel title="两库" />
                </NuxtLink>
              </template>
              <chart :options="options6" />
              <DataTable :value="table5" class="p-datatable-sm" tableClass="text-xs" autoLayout stripedRows showGridlines>
                <Column field="description" header="两库" class="!p-0" />
                <Column field="addAmount" header="新增" class="!p-0" />
                <Column field="completeAmount" header="处置" class="!p-0" />
                <Column field="leftAmount" header="剩余累计" class="!p-0" />
              </DataTable>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <NuxtLink to="fangjianjishu">
                  <PageSectionLabel title="2022年巡检工作量完成情况" />
                </NuxtLink>
              </template>
              <chart :options="options7" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="施工管理信息" />
              </template>

              <div class="mt-2 flex flex-wrap justify-between">
                <NuxtLink to="http://10.128.20.156:8080/tcx_ui/views/login.html" target="_blank">
                  <span
                    class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1"
                    >天窗修计划系统</span
                  >
                </NuxtLink>
                <NuxtLink to="http://10.128.239.203:8080/ljyyx_ui/views/login.html" target="_blank">
                  <span
                    class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1"
                    >邻近营业线施工系统</span
                  >
                </NuxtLink>
                <NuxtLink to="http://10.128.2.225:7001/ljdd/sgd/" target="_blank">
                  <span
                    class="bg-ls-blue-600 hover:(bg-blue-600 text-white) transition-all duration-200 rounded-2xl text-xs font-bold lg:px-1"
                    >TDMS计划调度系统</span
                  >
                </NuxtLink>
              </div>

              <PageSectionLayout class="my-2 p-0 flex items-center justify-around">
                <div class="lg:(w-10 text-base) w-22 text-xs text-yellow-500 text-center font-pangmenzhengdao">当日计划</div>

                <DataTable :value="table3" :loading="pending4" class="p-datatable-sm" tableClass="text-xs" stripedRows showGridlines>
                  <Column field="workCount" header="施工数量" class="!p-0" />
                  <Column field="repairCount" header="维修数量" class="!p-0" />
                  <Column field="railwayCount" header="高速铁路" class="!p-0" />
                  <Column field="normalRailwayCount" header="普速铁路" class="!p-0" />
                  <Column field="nearlineCount" header="邻近营业线施工" class="!p-0" />
                </DataTable>
              </PageSectionLayout>

              <PageSectionLayout class="p-0 flex items-center justify-around">
                <div class="lg:(w-10 text-base) w-22 text-xs text-yellow-500 text-center font-pangmenzhengdao">本月施工</div>

                <DataTable :value="table4" :loading="pending4" class="p-datatable-sm" tableClass="text-xs" stripedRows showGridlines>
                  <Column field="workCount" header="施工数量" class="!p-0" />
                  <Column field="repairCount" header="维修数量" class="!p-0" />
                  <Column field="railwayCount" header="高速铁路" class="!p-0" />
                  <Column field="normalRailwayCount" header="普速铁路" class="!p-0" />
                  <Column field="nearlineCount" header="邻近营业线施工" class="!p-0" />
                </DataTable>
              </PageSectionLayout>
            </PageSectionLayout>

            <div>
              <PageSectionLayout class="mb-1">
                <template #header>
                  <NuxtLink to="danshensushe">
                    <PageSectionLabel title="食堂管理" />
                  </NuxtLink>
                </template>

                <div class="flex items-center justify-between bg-ls-blue-800 h-12 p-1">
                  <PageSectionIconInfo
                    class="w-1/4 border border-blue-800 rounded"
                    label="年计划收入"
                    :value="option3?.data?.find((t) => t.type === 3)?.amount"
                  />
                  <PageSectionIconInfo class="w-1/4 mx-1 border border-blue-800 rounded" label="日收入" value="680" />
                  <PageSectionIconInfo class="w-1/4 border border-blue-800 rounded" label="累计收入" value="30" />
                  <PageSectionIconInfo class="w-1/4 ml-1 border border-blue-800 rounded" label="日就餐人次" value="2785" />
                </div>
              </PageSectionLayout>

              <PageSectionLayout>
                <template #header>
                  <NuxtLink to="xiewuyunenghao">
                    <PageSectionLabel title="卸污管理" :loading="pending1" />
                  </NuxtLink>
                </template>

                <div class="flex items-center justify-between bg-ls-blue-800 h-12 p-1">
                  <PageSectionIconInfo
                    class="border border-blue-800 rounded"
                    label="年计划收入"
                    :value="option3?.data?.find((t) => t.type === 4)?.amount"
                  />
                  <PageSectionIconInfo
                    class="border border-blue-800 rounded"
                    label="日既有卸污列次"
                    :value="option1?.data?.gdBoxCount"
                  />
                  <PageSectionIconInfo class="border border-blue-800 rounded" label="累计收入" :value="option1?.data?.totalIncome" />
                  <PageSectionIconInfo
                    class="border border-blue-800 rounded"
                    label="日高动卸污箱数"
                    :value="option1?.data?.jyBoxCount"
                  />
                </div>
              </PageSectionLayout>
            </div>

            <PageSectionLayout>
              <template #header>
                <NuxtLink to="预警通知管理界面系统平台待开发" target="_blank">
                  <PageSectionLabel title="预警通知" :loading="pending6" />
                </NuxtLink>
              </template>

              <PageListWrapper class="max-h-38">
                <PageListItem v-for="t in list2" :key="t.id" :item="t" />
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
                <NuxtLink to="fangjianjishu">
                  <PageSectionLabel title="2022年综合维修完成情况" />
                </NuxtLink>
              </template>

              <chart :options="options9" />
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <PageSectionLabel title="当日天窗详情" :loading="pending9" />
              </template>

              <div class="overflow-y-auto lg:max-h-35 py-2 bg-ls-blue-800">
                <div
                  v-for="i in list5"
                  :key="i"
                  class="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-3 p-2 border-b border-dashed text-xs font-bold"
                >
                  <div>
                    <span class="text-blue-600 font-bold">线别: </span>
                    <span>{{ i.line }}</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">计划时间: </span>
                    <span>{{ i.workDate }} {{ i.planDate }}</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">施工地点: </span>
                    <span>{{ i.station }}</span>
                  </div>
                  <div>
                    <span class="text-blue-600 font-bold">作业内容: </span>
                    <span>{{ i.workContent }}</span>
                  </div>
                </div>
              </div>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <NuxtLink to="客运设备网格化管理系统" target="_blank">
                  <PageSectionLabel title="站区网格化系统报修信息" />
                </NuxtLink>
              </template>

              <PageListWrapper class="max-h-35">
                <PageListItem v-for="t in list3" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>

            <PageSectionLayout>
              <template #header>
                <NuxtLink to="消息通知管理界面系统平台待开发" target="_blank">
                  <PageSectionLabel title="消息通知"  :loading="pending8" />
                </NuxtLink>
              </template>

              <PageListWrapper class="min-h-35 max-h-35">
                <PageListItem v-for="t in list4" :key="t.id" :item="t" />
              </PageListWrapper>
            </PageSectionLayout>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import logo from '../assets/images/shanghai-railway.jpg'

definePageMeta({
  layout: 'tufang',
  title: '首页',
})

const { $setSiteTitle, $api } = useNuxtApp()
$setSiteTitle()

const { data: option1, pending: pending1, error: error1 } = await $api('xiewu-daily-record/index')
const { data: option2, pending: pending2 } = await $api('goal-config')
const { data: option3 } = await $api('year-income-config/type')
const { data: option4, pending: pending4 } = await $api('work-daily-record/statistics')
const { data: option5 } = await $api('fjsczh/daily-important/safe-day-count')
const { data: option6, pending: pending6 } = await $api('event-config/queryIndex?type=1') // 1 预警信息
const { data: option7, pending: pending7 } = await $api('event-config/queryIndex?type=2') // 2 督办事项
const { data: option8, pending: pending8 } = await $api('event-config/queryIndex?type=3') // 3 消息通知
const { data: option9, pending: pending9 } = await $api('work/repair/plan/queryCurrent')
const { data: option10 } = await $api('device/problem/statistics')
const { data: option11 } = await $api('fjsczh/device/category-count')
const { data: option12 } = await $api('fjsczh/device/type-amount-count')
const { data: option13 } = await $api('fjsczh/device/level-percent?level=1')
const { data: option14 } = await $api('fjsczh/device/level-percent?level=3')
const { data: option15, pending: pending15 } = await $api('fjsczh/device/type-area-count')

const list1 = computed(() => option7.value.data.list?.map(o => ({
  label: o.title,
  time: o.eventTime,
  content: o.context
})))

const list2 = computed(() => option6.value.data.list?.map(o => ({
  label: o.title,
  time: o.eventTime,
  content: o.context
})))

const list3 = computed(() =>
  Array.from({ length: 9 }, (_, index) => {
    return {
      id: index + 1,
      label: '车站：上海站',
      class: 'text-red-500',
      time: useDateFormat(new Date(), 'MM-DD HH:mm'),
      content: '巡视地点：售1',
    }
  })
)

const list4 = computed(() => option8.value.data?.list?.map(o => ({
  label: o.title,
  time: o.eventTime,
  content: o.context
})))

const list5 = computed(() => option9.value.data)

const table1 = computed(() => [
  option15.value?.data?.gt?.reduce((acc, cur) => {
    return {
      ...acc,
      type: cur.wallType,
      [cur.type]: cur.area
    }
  }, {}),
  option15.value?.data?.pt?.reduce((acc, cur) => {
    return {
      ...acc,
      type: cur.wallType,
      [cur.type]: cur.area
    }
  }, {})
])
// const table1 = computed(() => [
//   {
//     设备分类: '高铁',
//     站房: '43.1',
//     站台: '9.8',
//     雨棚: '45.8',
//     四电用房: '26.6',
//     其它: '15.3',
//   },
//   {
//     设备分类: '普铁',
//     站房: '43.1',
//     站台: '9.8',
//     雨棚: '45.8',
//     四电用房: '26.6',
//     其它: '15.3',
//   },
// ])

const table2 = computed(() => [
  {
    序号: '1',
    隐患编号: 'III-1',
    隐患描述导致结果: '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
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
    隐患描述导致结果: '山南3-4#站台上方雨棚吊顶板松动，有脱落风险，给行车安全造成隐患。',
    类别: 'III',
    形成时间: '2022-1-4',
    发现时间: '2022-1-4',
    责任单位: '房建技术科\n安全质量科',
    负责人: '蔡志军\n康卫明',
    完成时间: '2022-3',
  },
])

const table3 = computed(() => [
  option4.value.data.dayPlanData
  // {
  //   当日施工: '2',
  //   当日维修: '2',
  //   高速铁路: '3',
  //   普速铁路: '2',
  //   邻近营业线施工: '1',
  // },
])

const table4 = computed(() => [option4.value.data.monthPlanData])

const table5 = computed(() => option10.value?.data)

const options1 = computed(() => ({
  chart: {
    height: 114,
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
      name: '总量情况',
      type: 'pie',
      borderColor: 'transparent',
      innerSize: '50%',
      data: option11.value?.data?.map(o => ({
        name: o.categoryName,
        y: o.amount,
      })),
    },
  ],
}))

const options2 = computed(() => ({
  chart: {
    height: 269,
  },
}))

const options3 = computed(() => ({
  chart: {
    height: 114,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: option13.value?.data?.map(o => o.timePoint),
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemDistance: 5,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: option13.value?.data?.map(o => ({
    name: o.timePoint,
    data: [o.percent],
  })),
}))

const options4 = computed(() => ({
  chart: {
    height: 114,
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
      size: '120%',
    },
  },
  series: [
    {
      name: '高铁房建设备',
      type: 'pie',
      borderColor: 'transparent',
      innerSize: '50%',
      data: option12.value?.data?.map(o => ({
        name: o.type,
        y: o.amount,
      })),
    },
  ],
}))

const options5 = computed(() => ({
  chart: {
    height: 114,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: option14.value?.data?.map(o => o.timePoint),
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemDistance: 5,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: option14.value?.data?.map(o => ({
    name: o.timePoint,
    data: [o.percent],
  })),
}))

const options6 = computed(() => ({
  chart: {
    height: 100,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['新增', '已处置', '剩余累计'],
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: option10.value?.data?.map(o => ({
    name: o.description,
    data: [o.addAmount, o.completeAmount, o.leftAmount]
  })),
}))

const options7 = computed(() => ({
  chart: {
    height: 153,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['一月份', '二月份', '三月份', '四月份', '五月份'],
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
      data: [30, 27, 35, 28, 27],
    },
    {
      name: '完成',
      data: [22, 26, 28, 26, 25],
    },
  ],
}))

const options8 = computed(() => ({
  chart: {
    height: 140,
  },
  xAxis: {
    categories: ['5点位', '20点位', '40点位', '60点位', '80点位'],
  },
  series: [
    {
      name: 'I道',
      type: 'line',
      data: [34, 11, 21, 29, 17],
    },
    {
      name: 'IX道',
      type: 'line',
      data: [17, 12, 35, 14, 20],
    },
    {
      name: 'X道',
      type: 'line',
      data: [23, 20, 33, 23, 25],
    },
    {
      name: 'XXXIII道',
      type: 'line',
      data: [18, 5, 10, 13, 9],
    },
    {
      name: '30道',
      type: 'line',
      data: [16, 11, 24, 17, 18],
    },
  ],
}))

const options9 = computed(() => ({
  chart: {
    height: 140,
    type: 'column',
  },
  xAxis: {
    type: 'category',
    categories: ['一月份', '二月份', '三月份', '四月份', '五月份'],
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
      data: [30, 27, 35, 28, 27],
    },
    {
      name: '完成',
      data: [22, 26, 28, 26, 25],
    },
  ],
}))
</script>
