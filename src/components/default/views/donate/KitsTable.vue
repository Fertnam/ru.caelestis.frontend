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

<script lang="ts">
import { defineComponent } from 'vue'
import Table from '@default-components/Table.vue'
import IconAllow from '@default-components/icons/IconAllow.vue'
import IconForbid from '@default-components/icons/IconForbid.vue'

export default defineComponent({
    name: 'KitsTable',
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
})
</script>
