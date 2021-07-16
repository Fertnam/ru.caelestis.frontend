<template>
    <div :class="$style.submenu">
        <SubmenuItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            :class="$style.item"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SubmenuItem from '@/components/default/layout/navigation/submenu/SubmenuItem.vue'
import { ISubmenuItem } from '@/types/Menu'

export default defineComponent({
    name: 'Submenu',
    components: { SubmenuItem },
    props: {
        items: {
            type: Array as PropType<ISubmenuItem[]>,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
.submenu {
    text-align: center;
    white-space: nowrap;

    composes: darkTheme from '~@scss/modules/default/theme.module.scss';
}
</style>
