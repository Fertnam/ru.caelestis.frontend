<template>
    <Link
        :class="$style.menuItem"
        :link="item"
        :exact-active-class="$style.active"
        active-class=""
        exact
    >
        <FaIcon :class="$style.icon" :icon="item.icon" />
        <span :class="$style.title" v-text="item.title" />

        <Submenu
            v-if="item.submenuItems"
            :class="$style.submenu"
            :items="item.submenuItems"
        />
    </Link>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Link from '@/components/global/Link.vue'
import Submenu from '@/components/default/layout/navigation/submenu/Submenu.vue'
import { IMenuItem } from '@/types/Menu'

export default defineComponent({
    name: 'MenuItem',
    components: {
        Link,
        Submenu,
    },
    props: {
        item: {
            type: Object as PropType<IMenuItem>,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
.menuItem {
    position: relative;
    padding: 25px 14px;

    text-transform: uppercase;

    cursor: pointer;

    transition: color var(--transition-duration);

    &:hover,
    &.active {
        color: var(--yellow);
    }

    @include _812 {
        padding: 20px 10px;
    }

    & > .icon {
        margin-right: 7px;
        font-size: 1.1em;
    }

    & > .submenu {
        $submenu-mark-size: 10px;

        position: absolute;
        top: calc(
            100% + #{$submenu-mark-size} + var(--navigation-border-bottom-size)
        );
        right: 50%;

        z-index: 50;

        transform: translateX(50%);

        opacity: 0;
        visibility: hidden;

        transition: opacity var(--transition-duration),
            visibility var(--transition-duration);
        transition-delay: 150ms;

        &:before {
            position: absolute;
            top: -#{$submenu-mark-size * 2};
            right: 50%;

            border: $submenu-mark-size solid transparent;
            border-bottom: $submenu-mark-size solid var(--dark-blue-v3);

            transform: translateX(50%);

            content: '';
        }
    }

    &:hover > .submenu {
        opacity: 1;
        visibility: visible;
    }
}
</style>
