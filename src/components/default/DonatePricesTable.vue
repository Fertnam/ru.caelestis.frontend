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
        <td>30 дней</td>
        <td aria-label="Игрок">Бесплатно</td>
        <td aria-label="VIP">599 руб</td>
        <td aria-label="Gold">599 руб</td>
        <td aria-label="Premium">599 руб</td>
        <td aria-label="Niobium">599 руб</td>
      </tr>
      <tr>
        <td>Навсегда</td>
        <td aria-label="Игрок">Бесплатно</td>
        <td aria-label="VIP">599 руб</td>
        <td aria-label="Gold">599 руб</td>
        <td aria-label="Premium">599 руб</td>
        <td aria-label="Niobium">5999 руб</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import tableStyles from '@default-scss-modules/table'

export default {
  data() {
    return {
      tableStyles,
      captions: ['Срок', 'Игрок', 'Vip', 'Gold', 'Premium', 'Niobium'],
    }
  },
}
</script>
