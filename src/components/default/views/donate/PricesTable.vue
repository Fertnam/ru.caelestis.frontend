<template>
    <Table :captions="captions">
        <tr>
            <td>30 дней</td>
            <td aria-label="Игрок">Бесплатно</td>
            <td aria-label="VIP">90 руб</td>
            <td aria-label="Gold">190 руб</td>
            <td aria-label="Premium">350 руб</td>
            <td aria-label="Niobium">500 руб</td>
        </tr>
        <tr>
            <td>Навсегда</td>
            <td aria-label="Игрок">Бесплатно</td>
            <td aria-label="VIP">900 руб</td>
            <td aria-label="Gold">1900 руб</td>
            <td aria-label="Premium">3500 руб</td>
            <td aria-label="Niobium">5000 руб</td>
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
