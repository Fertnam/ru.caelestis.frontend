<template>
  <div :class="$style.layout">
    <TheHeader :class="$style.layoutHeader" />
    <TheNavigation :class="$style.layoutNavigation" />
    <TheMain :class="$style.layoutMain" />
    <TheAside :class="$style.layoutAside" />
    <TheFooter :class="$style.layoutFooter" />
  </div>
</template>

<script>
import TheHeader from '@default-components/layout/Header'
import TheNavigation from '@default-components/layout/Navigation/Index'
import TheMain from '@default-components/layout/Main'
import TheAside from '@default-components/layout/Aside/Index'
import TheFooter from '@default-components/layout/Footer'

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheMain,
    TheAside,
    TheFooter,
  },
}
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
  --dark-red: #c22727;

  display: grid;
  grid-auto-columns: 1fr $aside-width-of-default-layout;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    'header header'
    'navigation navigation'
    'main aside'
    'footer footer';

  composes: layout from '~@global-scss-modules/layout';
  composes: container from '~@global-scss-modules/container';

  &:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: -1;

    background-image: url('/images/default/layout.png');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;

    content: '';
  }

  &__header {
    grid-area: header;
  }

  &__navigation {
    grid-area: navigation;
  }

  &__main {
    grid-area: main;
  }

  &__aside {
    grid-area: aside;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
