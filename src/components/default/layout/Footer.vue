<template>
  <footer :class="$style['footer']">
    <div :class="$style['footer__copyright']">© 2021 Caelestis</div>
  </footer>
</template>

<style lang="scss" module>
.footer {
  @include dark-theme;

  padding: 50px $base-padding-of-area-for-default-layout;

  &__copyright {
    text-align: center;
  }
}
</style>
