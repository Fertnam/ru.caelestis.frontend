<template>
    <nav :class="$style.navigation">
        <Menu :class="$style.menu" />

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

export default defineComponent({
    name: 'Navigation',
    components: {
        Menu,
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
}
</style>
