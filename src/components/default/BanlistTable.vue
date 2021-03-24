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
      <tr v-for="(ban, index) in banlist" :key="index">
        <td v-text="ban.user" />
        <td v-text="ban.admin" />
        <td v-text="ban.start" />
        <td v-text="ban.end || 'Никогда'" />
        <td v-text="ban.reason" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import tableStyles from '@default-scss-modules/table'
import banlist from '@global-data/banlist'

export default {
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
