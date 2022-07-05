<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <div class="m-2">
          <Toast />

          <div class="flex flex-wrap items-center justify-start p-2">
            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="职教信息-导入"
              choose-label="职教信息-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader1"
            />

            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="每天天窗数据-导入"
              choose-label="每天天窗数据-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader2"
            />

            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="安全隐患库-导入"
              choose-label="安全隐患库-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader3"
            />

            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="设备问题库-导入"
              choose-label="设备问题库-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader4"
            />

            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="防洪重点类型-导入"
              choose-label="防洪重点类型-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader5"
            />

            <FileUpload
              class="!ml-2 !mb-2"
              mode="basic"
              accept="image/*"
              :max-file-size="10000000"
              label="新线建设数据-导入"
              choose-label="新线建设数据-导入"
              :auto="true"
              :custom-upload="true"
              @uploader="myUploader6"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useToast } from 'primevue/usetoast'

definePageMeta({
  layout: 'page',
  title: '其它',
})

const { $setSiteTitle } = useNuxtApp()
$setSiteTitle()

const toast = useToast()

const myUploader1 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  await $fetch(`${useRuntimeConfig().app.serverUrl}/voca/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}

const myUploader2 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  await $fetch(`${useRuntimeConfig().app.serverUrl}/work/repair/plan/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}

const myUploader3 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  await $fetch(`${useRuntimeConfig().app.serverUrl}/security/threat/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}

const myUploader4 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  await $fetch(`${useRuntimeConfig().app.serverUrl}/device/problem/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}

const myUploader5 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  // FIXME: month param
  formData.append('month', '2022-06')
  await $fetch(`${useRuntimeConfig().app.serverUrl}/control/flood/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}

const myUploader6 = async (e) => {
  const formData = new FormData()
  formData.append('file', e.files[0])
  await $fetch(`${useRuntimeConfig().app.serverUrl}/new/line/built/import`, {
    method: 'post',
    body: formData,
  })
    .then(() => {
      toast.add({ severity: 'success', summary: '成功', detail: '导入成功', life: 3000 })
    })
    .catch((err) => {
      toast.add({ severity: 'error', summary: '失败', detail: err?.message || '导入失败', life: 3000 })
    })
}
</script>
