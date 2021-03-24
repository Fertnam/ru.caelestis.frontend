<template>
  <Table :captions="captions">
    <tr v-for="(ban, index) in banlist" :key="index">
      <td v-text="ban.user" />
      <td v-text="ban.admin" />
      <td v-text="ban.start" />
      <td v-text="ban.end || 'Никогда'" />
      <td v-text="ban.reason" />
    </tr>
  </Table>
</template>

<script>
import Table from '@default-components/Table'
import banlist from '@global-data/banlist'
import tableStyles from '@default-scss-modules/table'

export default {
  components: {
    Table,
  },
  data() {
    return {
      tableStyles,
      banlist,
      captions: [
        'Нарушитель',
        'Заблокировал',
        'Начало',
        'Окончание',
        'Причина',
      ],
    }
  },
}
</script>
