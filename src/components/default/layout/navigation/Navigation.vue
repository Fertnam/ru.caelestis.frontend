<template>
    <nav :class="$style.navigation">
        <Menu :items="menuItems" :class="$style.menu" />

        <router-link
            :class="$style.link"
            :to="{ name: 'default.index' }"
            exact-active-class=""
            active-class=""
            exact
        >
            Начать игру
        </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@/components/default/layout/navigation/menu/Menu.vue'
import { IMenuItem } from '@/types/Menu'

const menuItems: IMenuItem[] = [
    {
        id: 1,
        title: 'Главная',
        icon: 'home',
        to: { name: 'default.index' },
    },
    {
        id: 2,
        title: 'Форум',
        icon: 'comments',
        href: '/forum',
    },
    {
        id: 3,
        title: 'Сервера',
        icon: 'gamepad',
        submenuItems: [
            { id: 1, title: 'Decor', href: '/forum' },
            { id: 2, title: 'Horror', to: { name: 'admin.index' } },
        ],
    },
    {
        id: 4,
        title: 'Банлист',
        icon: 'scroll',
        to: { name: 'admin.index' },
    },
    {
        id: 5,
        title: 'Донат',
        icon: 'donate',
        to: { name: 'admin.index' },
    },
    {
        id: 6,
        title: 'Правила',
        icon: 'clipboard-list',
        to: { name: 'admin.index' },
    },
]

export default defineComponent({
    name: 'Navigation',
    components: {
        Menu,
    },
    data() {
        return {
            menuItems,
        }
    },
})
</script>

<style lang="scss" module>
.navigation {
    /* Размер нижней рамки */
    --navigation-border-bottom-size: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: var(--navigation-border-bottom-size) solid
        var(--dark-blue-v3);

    white-space: nowrap;
    user-select: none;

    composes: darkTheme from '~@scss/modules/default/theme.module.scss';

    & > .menu {
        margin-left: var(--base-padding-of-area);
    }

    & > .link {
        margin-right: var(--base-padding-of-area);
    }
}
</style>
