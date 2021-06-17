<template>
    <Table :class="$style.infoTable">
        <tr>
            <td>Ник</td>
            <td v-text="user.getUsername()" />
        </tr>
        <tr>
            <td>Email</td>
            <td v-text="user.getEmail()" />
        </tr>
        <tr>
            <td>Группа</td>
            <td>Главные Администраторы</td>
        </tr>
        <tr>
            <td>Дата регистрации</td>
            <td v-text="user.getCreatedAt()" />
        </tr>
        <tr>
            <td>Баланс</td>
            <td>{{ user.getBalance() || 0 }} руб</td>
        </tr>
    </Table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'

export default defineComponent({
    name: 'InfoTable',
    components: {
        Table,
    },
    computed: {
        user() {
            return this.$store.getters['auth/user']
        },
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
