<template>
  <main :class="$style.main">
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss" module>
.main {
  padding: $base-padding-of-area-for-default-layout;
  composes: light-theme--v_2 from '~@default-scss-modules/theme';
}
</style>
