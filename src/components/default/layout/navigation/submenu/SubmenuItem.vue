<template>
    <Link
        :class="$style.submenuItem"
        :link="item"
        :exact-active-class="$style.active"
        active-class=""
        exact
        v-text="item.title"
    />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Link from '@/components/global/Link.vue'
import { ISubmenuItem } from '@/types/Menu'

export default defineComponent({
    name: 'SubmenuItem',
    components: {
        Link,
    },
    props: {
        item: {
            type: Object as PropType<ISubmenuItem>,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
.submenuItem {
    display: block;
    padding: 10px 20px;

    text-transform: none;

    transition: color var(--transition-duration);

    &:hover,
    &.active {
        color: var(--yellow);
    }
}
</style>
