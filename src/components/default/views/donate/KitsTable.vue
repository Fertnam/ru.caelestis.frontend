<template>
  <Table :captions="captions">
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
  </Table>
</template>

<script>
import Table from '@default-components/Table'
import IconAllow from '@default-components/icons/IconAllow'
import IconForbid from '@default-components/icons/IconForbid'

export default {
  components: {
    Table,
    IconAllow,
    IconForbid,
  },
  data() {
    return {
      captions: ['Наборы', 'Игрок', 'Vip', 'Gold', 'Premium', 'Niobium'],
    }
  },
}
</script>
