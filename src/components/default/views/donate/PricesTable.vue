<template>
    <Table :captions="captions">
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
    </Table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'

export default defineComponent({
    name: 'PricesTable',
    components: {
        Table,
    },
    data() {
        return {
            captions: ['Срок', 'Игрок', 'Vip', 'Gold', 'Premium', 'Niobium'],
        }
    },
})
</script>
