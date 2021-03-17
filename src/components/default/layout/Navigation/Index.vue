<template>
  <nav :class="$style.navigation">
    <Menu />
    <router-link
      :class="$style.navigationRegistrationLink"
      :to="{ name: 'default.registration' }"
      exact-active-class=""
      active-class=""
      exact
    >
      Регистрация
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
  @include dark-theme;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 $base-padding-of-area-for-default-layout;

  &__registration-link {
    $shadow-size: 5px;
    $fallibility: ($base-padding-of-area-for-default-layout * 2) - $shadow-size;

    @include light-theme-with-box-shadow($shadow-size, $dark-blue-v1);

    width: calc(#{$aside-width-of-default-layout} - #{$fallibility});

    margin-top: -$shadow-size;
    padding: 8px 30px;

    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
