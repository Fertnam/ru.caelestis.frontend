<template>
  <footer :class="$style.footer">
    <div :class="$style.footerCopyright">© 2021 Caelestis</div>
  </footer>
</template>

<style lang="scss" module>
.footer {
  @include dark-theme;

  padding: 40px $base-padding-of-area-for-default-layout;

  &__copyright {
    text-align: center;
  }
}
</style>
