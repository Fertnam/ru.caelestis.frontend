<template>
  <nav :class="$style.navigation">
    <Menu :class="$style.navigationMenu" />
    <router-link
      :class="$style.navigationRegistrationLink"
      :to="{ name: 'default.registration' }"
      exact-active-class=""
      active-class=""
      exact
    >
      Начать игру
    </router-link>
  </nav>
</template>

<script>
import Menu from '@default-components/layout/Navigation/Menu'

export default {
  components: {
    Menu,
  },
}
</script>

<style lang="scss" module>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  composes: dark-theme from '~@default-scss-modules/theme';

  &__menu {
    margin-left: $base-padding-of-area-for-default-layout;
  }

  &__registration-link {
    $shadow-size: 5px;
    $fallibility: $base-padding-of-area-for-default-layout * 2;

    @include box-shadow($shadow-size, var(--dark-blue-v1));

    margin-top: -$shadow-size;
    margin-right: $base-padding-of-area-for-default-layout;

    padding: 8px 30px;

    width: calc(#{$aside-width-of-default-layout} - #{$fallibility});

    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    composes: light-theme from '~@default-scss-modules/theme';
  }
}
</style>
