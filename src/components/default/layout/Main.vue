<template>
  <main :class="$style['main']">
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss" module>
.main {
  @include light-theme($light-blue-v2);

  padding: $base-padding-of-area-for-default-layout;
}
</style>
