<template>
  <div :class="$style['layout']">
    <TheHeader :class="$style['header']" />
    <TheNavigation :class="$style['navigation']" />
    <TheMain :class="$style['main']" />
    <TheAside :class="$style['aside']" />
    <TheFooter :class="$style['footer']" />
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
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    'header header'
    'navigation navigation'
    'main aside'
    'footer footer';

  composes: layout from '~@scss-modules/layout';

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
