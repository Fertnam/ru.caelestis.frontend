<template>
  <main :class="$style['main']">
    <router-view />
  </main>
</template>

<style lang="scss" module>
.main {
  @include light-theme($light-blue-v2);

  padding: $default-layout-areas-padding;
}
</style>
