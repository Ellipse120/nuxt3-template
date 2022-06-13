<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="m-2">
          <Toast />

          <div>
            <Toolbar class="mb-4">
              <template #start>
                <Button label="添加" icon="pi pi-plus" class="p-button-success" @click="openNew" />

                <Calendar
                  v-model="dateRange"
                  class="!mx-2"
                  date-format="yy-mm-dd"
                  placeholder="请选择日期"
                  selectOtherMonths
                  selectionMode="range"
                  :manualInput="false"
                />

                <Button label="查询" icon="pi pi-search" @click="refresh" />
              </template>

              <template #end>
                <Button label="导出" icon="pi pi-download" class="p-button-help" @click="exportCSV($event)" />
              </template>
            </Toolbar>

            <DataTable
              ref="dt"
              lazt
              :value="products?.data?.list"
              :loading="pending1"
              v-model:selection="selectedProducts"
              :paginator="true"
              :rows="10"
              :total-records="20"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rowsPerPageOptions="[5, 10, 25]"
              responsiveLayout="scroll"
              @page="onPage($event)"
            >
              <template #header>
                <div class="table-header flex flex-column md:flex-row md:justify-content-between">
                  <h5 class="mb-2 md:m-0 p-as-md-center">督办事项、预警信息、消息通知列表</h5>
                </div>
              </template>

              <Column field="workCount" header="施工数量" />
              <Column field="repairCount" header="维修数量" />
              <Column field="railwayCount" header="高速铁路数量" />
              <Column field="normalRailwayCount" header="普通铁路数量" />
              <Column field="nearlineCount" header="邻近营业线施工数" />
              <Column field="createTime" header="创建时间" />

              <Column :exportable="false" style="min-width: 8rem">
                <template #body="slotProps">
                  <Button icon="pi pi-pencil" class="p-button-rounded p-button-success !mr-2" @click="editProduct(slotProps.data)" />
                  <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                </template>
              </Column>
            </DataTable>
          </div>

          <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="维护" :modal="true" class="p-fluid">
            <div class="field">
              <label for="workCount">施工数量</label>
              <InputNumber id="workCount" v-model="product.workCount" autofocus />
            </div>
            <div class="field">
              <label for="repairCount">维修数量</label>
              <InputNumber id="repairCount" v-model="product.repairCount" />
            </div>
            <div class="field">
              <label for="railwayCount">高速铁路数量</label>
              <InputNumber id="railwayCount" v-model="product.railwayCount" />
            </div>
            <div class="field">
              <label for="normalRailwayCount">普通铁路数量</label>
              <InputNumber id="normalRailwayCount" v-model="product.normalRailwayCount" />
            </div>
            <div class="field">
              <label for="nearlineCount">邻近营业线施工数量</label>
              <InputNumber id="nearlineCount" v-model="product.nearlineCount" />
            </div>

            <template #footer>
              <Button label="取消" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
              <Button label="保存" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
            </template>
          </Dialog>

          <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="提示" :modal="true">
            <div class="confirmation-content">
              <i class="pi pi-exclamation-triangle mr-3" />
              <span v-if="product">确认删除吗?</span>
            </div>

            <template #footer>
              <Button label="取消" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
              <Button label="确定" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
          </Dialog>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'

definePageMeta({
  layout: 'page',
  title: '施工管理',
})

const { $setSiteTitle, $api, $formatDate } = useNuxtApp()
$setSiteTitle()

const toast = useToast()
const dt = ref()
const dateRange = ref(null)
const productDialog = ref(false)
const deleteProductDialog = ref(false)
const product = ref<TProduct>()
const selectedProducts = ref()

const openNew = () => {
  product.value = {} as TProduct
  productDialog.value = true
}

const hideDialog = () => {
  productDialog.value = false
}

type TProduct = {
  id?: number
  // 施工数量
  workCount: number
  // 维修数量
  repairCount: number
  // 高速铁路数量
  railwayCount: number
  // 普通铁路数量
  normalRailwayCount: number
  // 邻近营业线施工数
  nearlineCount: number
  // 日期格式字符串
  operateTime: string
}
const queryString = computed(() => {
  const startDate = dateRange.value?.[0] ? useDateFormat(dateRange.value?.[0], 'YYYY-MM-DD').value : ''
  const endDate = dateRange.value?.[1] ? useDateFormat(dateRange.value?.[1], 'YYYY-MM-DD').value : ''
  const pageNo = pagination.value.pageNo
  const pageSize = pagination.value.pageSize

  return `?startDate=${startDate}&endDate=${endDate}&pageNo=${pageNo}&pageSize=${pageSize}`
})

const pagination = ref({
  pageNo: 1,
  pageSize: 10,
})

const {
  data: products,
  pending: pending1,
  refresh,
} = await $api(
  () => `work-daily-record/${queryString.value}`,
  {
    watch: [dateRange],
  }
)

const onPage = (event) => {
  pagination.value = {
    pageNo: event.first + 1,
    pageSize: event.rows,
  }
  refresh()
}

const saveProduct = async () => {
  product.value.id ?
    await $api(`work-daily-record/${product.value.id}`, {
      method: 'put',
      body: product.value,
    }) :
    await $api(`work-daily-record/insert`, {
      method: 'post',
      body: product.value,
    })

  productDialog.value = false
  product.value = {} as TProduct
  toast.add({ severity: 'success', summary: '成功', detail: '保存成功', life: 3000 })
  refresh()
}

const editProduct = (prod) => {
  product.value = { ...prod }
  productDialog.value = true
}

const confirmDeleteProduct = (prod) => {
  product.value = prod
  deleteProductDialog.value = true
}

const deleteProduct = async () => {
  await $api(`work-daily-record/${product.value.id}`, {
    method: 'delete',
  })
  deleteProductDialog.value = false
  product.value = {} as TProduct
  toast.add({ severity: 'success', summary: '成功', detail: '删除成功', life: 3000 })
  refresh()
}

const exportCSV = () => {
  dt.value.exportCSV()
}
</script>

<style scoped>
.field {
  @apply my-2;
}
</style>
