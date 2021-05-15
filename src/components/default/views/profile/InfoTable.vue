<template>
    <Table :class="$style.infoTable">
        <tr>
            <td>Ник</td>
            <td>Fertnam</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>chtoto@mail.ru</td>
        </tr>
        <tr>
            <td>Группа</td>
            <td>Главные Администраторы</td>
        </tr>
        <tr>
            <td>Дата регистрации</td>
            <td>15-05-2021</td>
        </tr>
        <tr>
            <td>Баланс</td>
            <td>0 руб</td>
        </tr>
    </Table>
</template>

<script>
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'

export default defineComponent({
    name: 'InfoTable',
    components: {
        Table,
    },
})
</script>

<style lang="scss" module>
.info-table {
    tr {
        &:nth-child(even) {
            background-color: transparent;
        }

        &:nth-child(odd) {
            background-color: var(--light-blue-v1);
        }
    }
}
</style>
