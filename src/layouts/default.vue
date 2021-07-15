<template>
    <Container :class="$style.layout">
        <TheHeader :class="$style.header" />
        <TheNavigation :class="$style.navigation" />
        <TheMain :class="$style.main" />
        <TheAside :class="$style.aside" />
        <TheFooter :class="$style.footer" />
    </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from '@/components/global/Container.vue'
import TheHeader from '@/components/default/layout/Header.vue'
import TheNavigation from '@/components/default/layout/navigation/Navigation.vue'
import TheMain from '@/components/default/layout/Main.vue'
import TheAside from '@/components/default/layout/aside/Aside.vue'
import TheFooter from '@/components/default/layout/Footer.vue'

export default defineComponent({
    name: 'DefaultLayout',
    components: {
        Container,
        TheHeader,
        TheNavigation,
        TheMain,
        TheAside,
        TheFooter,
    },
})
</script>

<style lang="scss" module>
.layout {
    /* Цвета */
    --blue: #878cb0;
    --light-blue-v1: #9fa1b3;
    --light-blue-v2: #c6c9de;
    --dark-blue-v1: #5f627d;
    --dark-blue-v2: #101121;
    --dark-blue-v3: #0c0d1a;
    --yellow: #fff9cc;
    --dark-yellow: #99957a;
    --red: #c45252;
    --dark-red: #662e2e;

    /* Базовый размер padding для разделов (они помечены через grid-area) */
    --base-padding-of-area: 30px;

    /* Ширина раздела aside */
    --aside-width: 30%;

    display: grid;
    grid-auto-columns: 1fr var(--aside-width);
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        'header header'
        'navigation navigation'
        'main aside'
        'footer footer';

    composes: layout from '~@scss/modules/global/layout.module.scss';

    &:before {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        z-index: -1;

        width: 100vw;
        height: 100vh;

        background-image: url('/images/default/layout.png');
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: cover;

        content: '';
    }

    & > .header {
        grid-area: header;
    }

    & > .navigation {
        grid-area: navigation;
    }

    & > .main {
        grid-area: main;
    }

    & > .aside {
        grid-area: aside;
    }

    & > .footer {
        grid-area: footer;
    }
}
</style>
