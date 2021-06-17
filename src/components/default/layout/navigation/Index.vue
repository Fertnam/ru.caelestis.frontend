<template>
    <nav :class="$style.navigation">
        <Menu :class="$style.navigationMenu" />

        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__bounceIn animate__fast"
            leave-active-class="animate__animated animate__bounceOut animate__fast"
        >
            <a v-if="isAuth" :class="$style.navigationLink" href="#">
                Скачать лаунчер
            </a>

            <router-link
                v-else
                :class="$style.navigationLink"
                :to="{ name: 'default.registration' }"
                exact-active-class=""
                active-class=""
                exact
            >
                Начать игру
            </router-link>
        </transition>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@default-components/layout/navigation/Menu.vue'

export default defineComponent({
    name: 'Navigation',
    components: {
        Menu,
    },
    computed: {
        isAuth(): boolean {
            return this.$store.getters['auth/user'].isAuth()
        },
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

    composes: dark-theme from '~@default-scss-modules/theme';

    @include _1200 {
        overflow-x: auto;
        overflow-y: hidden;
    }

    &__menu {
        margin-left: var(--base-padding-of-area);
    }

    &__link {
        $shadow-size: 5px;
        $fallibility: calc(var(--base-padding-of-area) * 2);

        @include box-shadow($shadow-size, var(--dark-blue-v1));

        margin-top: -$shadow-size;
        margin-right: var(--base-padding-of-area);

        padding: 8px 30px;

        width: calc(var(--aside-width) - #{$fallibility});

        font-size: 1.2em;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;

        composes: light-theme light-theme--v_1 from '~@default-scss-modules/theme';

        @include _1200 {
            margin-left: calc(var(--base-padding-of-area) + #{$shadow-size});
            width: auto;
        }

        @include _812 {
            font-size: 1em;
        }
    }
}
</style>
