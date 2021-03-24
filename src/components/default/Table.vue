<template>
  <table :class="tableStyles.table">
    <thead>
      <tr>
        <th
          v-for="(caption, index) in captions"
          :key="index"
          :class="tableStyles.tableTh"
          v-text="caption"
        />
      </tr>
    </thead>

    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script>
import tableStyles from '@default-scss-modules/table'

export default {
  props: {
    captions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tableStyles,
    }
  },
}
</script>
