<tempalte>
  <table>
    <thead>
      <tr>
        <td v-for="(t1, index) in tableMetaData" :key="'thead' + index">
          <slot><div>{{ t1 }}</div></slot>
        </td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(t2, index) in tableData" :key="'tbody' + index">
        <td>
          <slot><div>{{ t2 }}</div></slot>
        </td>
      </tr>
    </tbody>
  </table>
</tempalte>

<script lang="ts" setup>
interface TableMeta {
  key: string
  value: any
}

interface TableData {
  key: string
  value: any
}

defineProps({
  tableMetaData: {
    type: Array,
    default: () => [],
  },
  tableData: {
    type: Array,
    default: () => [],
  },
})
</script>
