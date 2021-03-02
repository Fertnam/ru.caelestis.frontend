<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__container']">
      <TheHeader :class="$style['layout__header']" />
      <TheNavigation :class="$style['layout__navigation']" />
      <TheMain :class="$style['layout__main']" />
      <TheAside :class="$style['layout__aside']" />
      <TheFooter :class="$style['layout__footer']" />
    </div>
  </div>
</template>

<script>
import TheHeader from '@default-components/layout/Header'
import TheNavigation from '@default-components/layout/Navigation'
import TheMain from '@default-components/layout/Main'
import TheAside from '@default-components/layout/Aside'
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
  background-image: url('/images/default/header.png');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

  composes: layout from '~@scss-blocks/layout';

  &__container {
    display: grid;
    grid-auto-columns: 1fr 30%;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      'header header'
      'navigation navigation'
      'main aside'
      'footer footer';

    min-height: 100vh;

    composes: container from '~@scss-blocks/container';
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
