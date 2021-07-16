<template>
    <div :class="$style.menu">
        <MenuItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            :class="$style.item"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MenuItem from '@/components/default/layout/navigation/menu/MenuItem.vue'
import { IMenuItem } from '@/types/Menu'

export default defineComponent({
    name: 'Menu',
    components: {
        MenuItem,
    },
    props: {
        items: {
            type: Array as PropType<IMenuItem[]>,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
.menu {
    display: flex;

    & > .item {
        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;
        }
    }
}
</style>
