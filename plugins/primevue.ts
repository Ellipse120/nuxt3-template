import { defineNuxtPlugin } from '#app'
// @ts-ignore
import PrimeVue from 'primevue/config'
// @ts-ignore
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' //optional for column grouping
import Row from 'primevue/row' //optional for row
import Tooltip from 'primevue/tooltip'
import Divider from 'primevue/divider'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('ColumnGroup', ColumnGroup)
  nuxtApp.vueApp.component('Row', Row)
  nuxtApp.vueApp.component('Divider', Divider)
  nuxtApp.vueApp.directive('tooltip', Tooltip)
  //other components that you need
})
