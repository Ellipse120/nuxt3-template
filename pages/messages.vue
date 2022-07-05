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

                <div v-for="(value, key) of eventType" :key="key" class="mx-2">
                  <RadioButton :id="key" v-model="eventTypeQuery" name="category" :value="key" />
                  <label class="ml-2" :for="key">{{ value }}</label>
                </div>

                <Button label="查询" icon="pi pi-search" @click="refresh" />
              </template>

              <template #end>
                <Button label="导出" icon="pi pi-download" class="p-button-help" @click="exportCSV($event)" />
              </template>
            </Toolbar>

            <DataTable
              ref="dt"
              v-model:selection="selectedProducts"
              :value="products?.data?.list"
              :loading="pending1"
              :paginator="true"
              :rows="10"
              paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              :rows-per-page-options="[5, 10, 25]"
              responsive-layout="scroll"
            >
              <template #header>
                <div class="table-header flex flex-column md:flex-row md:justify-content-between">
                  <h5 class="mb-2 md:m-0 p-as-md-center">事件通知列表</h5>
                </div>
              </template>

              <Column field="title" header="事件标题" />
              <Column field="context" header="事件内容" />
              <Column field="type" header="事件类型">
                <template #body="slotProps">
                  <span>{{ eventType[slotProps.data.type] }}</span>
                </template>
              </Column>
              <Column field="eventTime" header="日期" />

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
              <label for="title">事件标题</label>
              <InputText id="title" v-model="product.title" type="text" />
            </div>
            <div class="field">
              <label for="context">事件内容</label>
              <Textarea id="context" v-model="product.context" :auto-resize="true" rows="5" cols="30" />
            </div>
            <div class="field flex">
              <label for="type">事件类型</label>
              <div v-for="(value, key) of eventType" :key="key" class="ml-2">
                <RadioButton :id="key" v-model="product.type" name="category" :value="key" />
                <label class="ml-2" :for="key">{{ value }}</label>
              </div>
            </div>
            <div class="field">
              <label for="eventTime">日期</label>
              <Calendar id="eventTime" v-model="product.eventTime" date-format="yy-mm-dd" autocomplete="off" />
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

const { $setSiteTitle, $api } = useNuxtApp()
$setSiteTitle()

const toast = useToast()
const dt = ref()
const eventTypeQuery = ref('')
const productDialog = ref(false)
const deleteProductDialog = ref(false)
const product = ref()
const selectedProducts = ref()

const openNew = () => {
  product.value = {}
  productDialog.value = true
}

const hideDialog = () => {
  productDialog.value = false
}

const eventType = ref({
  '1': '预警信息',
  '2': '督办事项',
  '3': '消息通知',
})

type TProduct = {
  id?: number
  // 事件内容
  context: string
  // 日期
  eventTime: string
  // 事件标题
  title: string
  // 事件类型 1=预警信息 2=督办事项 3=消息通知
  type: '1' | '2' | '3'
}

const queryString = computed(() => {
  return `?type=${eventTypeQuery.value}`
})

const {
  data: products,
  pending: pending1,
  refresh,
} = await $api(() => `event-config/${queryString.value}`, {
  watch: [eventTypeQuery],
})

const saveProduct = async () => {
  product.value.id
    ? await $api(`event-config/${product.value.id}`, {
        method: 'put',
        body: product.value,
      })
    : await $api(`event-config/set`, {
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
  await $api(`event-config/${product.value.id}`, {
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
