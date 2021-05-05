<template>
    <Table :captions="captions">
        <tr v-for="(ban, index) in banlist" :key="index">
            <td v-text="ban.user" />
            <td aria-label="Заблокировал" v-text="ban.admin" />
            <td aria-label="Начало" v-text="ban.start" />
            <td aria-label="Окончание" v-text="ban.end || 'Никогда'" />
            <td aria-label="Причина" v-text="ban.reason" />
        </tr>
    </Table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'
import banlist from '@global-data/banlist.json'
import tableStyles from '@default-scss-modules/table.module.scss'

export default defineComponent({
    name: 'ResultTable',
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
})
</script>
