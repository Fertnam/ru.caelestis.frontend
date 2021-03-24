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
      <tr>
        <td>
          /kit start <br />
          (только при первом заходе)
        </td>
        <td aria-label="Игрок">
          <IconAllow />
        </td>
        <td aria-label="VIP">
          <IconAllow />
        </td>
        <td aria-label="Gold">
          <IconAllow />
        </td>
        <td aria-label="Premium">
          <IconAllow />
        </td>
        <td aria-label="Niobium">
          <IconAllow />
        </td>
      </tr>
      <tr>
        <td>/kit vip</td>
        <td aria-label="Игрок">
          <IconForbid />
        </td>
        <td aria-label="VIP">
          <IconAllow />
        </td>
        <td aria-label="Gold">
          <IconForbid />
        </td>
        <td aria-label="Premium">
          <IconForbid />
        </td>
        <td aria-label="Niobium">
          <IconForbid />
        </td>
      </tr>
      <tr>
        <td>/kit gold</td>
        <td aria-label="Игрок">
          <IconForbid />
        </td>
        <td aria-label="VIP">
          <IconForbid />
        </td>
        <td aria-label="Gold">
          <IconAllow />
        </td>
        <td aria-label="Premium">
          <IconForbid />
        </td>
        <td aria-label="Niobium">
          <IconForbid />
        </td>
      </tr>
      <tr>
        <td>/kit premium</td>
        <td aria-label="Игрок">
          <IconForbid />
        </td>
        <td aria-label="VIP">
          <IconForbid />
        </td>
        <td aria-label="Gold">
          <IconForbid />
        </td>
        <td aria-label="Premium">
          <IconAllow />
        </td>
        <td aria-label="Niobium">
          <IconForbid />
        </td>
      </tr>
      <tr>
        <td>/kit premium</td>
        <td aria-label="Игрок">
          <IconForbid />
        </td>
        <td aria-label="VIP">
          <IconForbid />
        </td>
        <td aria-label="Gold">
          <IconForbid />
        </td>
        <td aria-label="Premium">
          <IconForbid />
        </td>
        <td aria-label="Niobium">
          <IconAllow />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import IconAllow from '@default-components/IconAllow'
import IconForbid from '@default-components/IconForbid'
import tableStyles from '@default-scss-modules/table'

export default {
  components: {
    IconAllow,
    IconForbid,
  },
  data() {
    return {
      tableStyles,
      captions: ['Наборы', 'Игрок', 'Vip', 'Gold', 'Premium', 'Niobium'],
    }
  },
}
</script>
