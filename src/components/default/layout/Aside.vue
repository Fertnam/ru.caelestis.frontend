<template>
  <aside :class="$style['aside']"></aside>
</template>

<style lang="scss" module>
.aside {
  @include light-theme($light-blue-v1);

  padding: $default-layout-areas-padding;
}
</style>
