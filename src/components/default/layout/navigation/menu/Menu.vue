<template>
    <ul :class="$style.menu">
        <MenuItem :class="$style.link" />
        <!--        <li :class="$style.item">-->
        <!--            -->
        <!--        </li>-->
        <!--        <li :class="$style.item">-->
        <!--            <MenuItem :class="$style.link" />-->
        <!--        </li>-->
        <!--        <li :class="$style.item">-->
        <!--            <MenuItem :class="$style.link" />-->
        <!--        </li>-->
        <!--        <li :class="$style.item">-->
        <!--            <MenuItem :class="$style.link" />-->
        <!--        </li>-->

        <!--        <li :class="$style.item">-->
        <!--            <a :class="$style.link" href="#">-->
        <!--                <FaIcon :class="$style.icon" icon="comments" />-->
        <!--                Форум-->
        <!--            </a>-->

        <!--            <ul :class="$style.submenu">-->
        <!--                <li :class="$style.item">-->
        <!--                    <a :class="$style.link" href="#"> Сервер </a>-->
        <!--                </li>-->
        <!--                <li :class="$style.item">-->
        <!--                    <a :class="$style.link" href="#"> Сервер </a>-->
        <!--                </li>-->
        <!--                <li :class="$style.item">-->
        <!--                    <a :class="$style.link" href="#"> Сервер </a>-->
        <!--                </li>-->
        <!--            </ul>-->
        <!--        </li>-->
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuItem from '@/components/default/layout/navigation/menu/MenuItem.vue'

export default defineComponent({
    name: 'Menu',
    components: {
        MenuItem,
    },
})
</script>

<style lang="scss" module>
//Стили для активных пунктов меню и подменю
%active {
    color: var(--yellow);
}
//Transition для анимации смены состояния пунктов меню
%transition-for-menu-links {
    transition: color var(--transition-duration);
}

.menu {
    display: flex;

    & > .item {
        position: relative;
        display: flex;

        cursor: pointer;

        &:first-child > .link {
            padding-left: 0;
        }

        &:last-child > .link {
            padding-right: 0;
        }

        &:hover > .submenu {
            opacity: 1;
            visibility: visible;
        }
    }
}

.submenu {
    $submenu-mark-size: 10px;
    $shadow-size: 5px;

    position: absolute;
    top: calc(
        100% + #{$submenu-mark-size} + var(--navigation-border-bottom-size)
    );
    right: 50%;

    z-index: 50;

    opacity: 0;
    visibility: hidden;

    text-align: center;
    white-space: nowrap;

    transform: translateX(calc(50% + #{$shadow-size}));

    transition: opacity var(--transition-duration),
        visibility var(--transition-duration);
    transition-delay: 150ms;

    composes: darkTheme from '~@scss/modules/default/theme.module.scss';

    &:before {
        position: absolute;
        top: -#{$submenu-mark-size * 2};
        right: 50%;

        border: $submenu-mark-size solid transparent;
        border-bottom: $submenu-mark-size solid var(--dark-blue-v3);

        transform: translateX(50%);

        content: '';
    }

    & > .item > .link {
        @extend %transition-for-menu-links;

        display: block;
        padding: 10px;

        &:hover,
        &.active {
            @extend %active;
        }
    }
}
</style>
