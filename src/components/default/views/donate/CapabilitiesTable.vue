<template>
    <Table :captions="captions">
        <tr>
            <td>Регионы</td>
            <td aria-label="Игрок">3x550000</td>
            <td aria-label="VIP">4x800000</td>
            <td aria-label="Gold">6x1050000</td>
            <td aria-label="Premium">8x2050000</td>
            <td aria-label="Niobium">12x5050000</td>
        </tr>
        <tr>
            <td>Количество точек домов</td>
            <td aria-label="Игрок">2</td>
            <td aria-label="VIP">3</td>
            <td aria-label="Gold">5</td>
            <td aria-label="Premium">8</td>
            <td aria-label="Niobium">12</td>
        </tr>
        <tr>
            <td>Количество сундуков-магазинов</td>
            <td aria-label="Игрок">30</td>
            <td aria-label="VIP">40</td>
            <td aria-label="Gold">50</td>
            <td aria-label="Premium">60</td>
            <td aria-label="Niobium">70</td>
        </tr>
        <tr>
            <td>Установка скинов</td>
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
            <td>Сохранение инвентаря после смерти</td>
            <td aria-label="Игрок">
                <IconForbid />
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
            <td>/back</td>
            <td aria-label="Игрок">
                <IconForbid />
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
            <td>/fix (без чар, не из модов)</td>
            <td aria-label="Игрок">
                <IconForbid />
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
            <td>/craft</td>
            <td aria-label="Игрок">
                <IconForbid />
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
            <td>Сохранение опыта после смерти</td>
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
                <IconAllow />
            </td>
            <td aria-label="Niobium">
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/fix (с чарами, не из модов)</td>
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
                <IconAllow />
            </td>
            <td aria-label="Niobium">
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/enderchest</td>
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
                <IconAllow />
            </td>
            <td aria-label="Niobium">
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/near</td>
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
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/fly</td>
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
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/hat</td>
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
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/ci</td>
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
                <IconAllow />
            </td>
        </tr>
        <tr>
            <td>/ptime</td>
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
        <tr>
            <td>/feed</td>
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

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'
import IconAllow from '@default-components/icons/IconAllow.vue'
import IconForbid from '@default-components/icons/IconForbid.vue'

export default defineComponent({
    name: 'CapabilitiesTable',
    components: {
        Table,
        IconAllow,
        IconForbid,
    },
    data() {
        return {
            captions: ['Услуги', 'Игрок', 'Vip', 'Gold', 'Premium', 'Niobium'],
        }
    },
})
</script>
