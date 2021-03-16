<template>
  <header :class="$style['header']">
    <router-link v-slot="{ navigate }" :to="{ name: 'default.index' }" custom>
      <div :class="$style['header__logo']" @click="navigate">
        <img
          :class="$style['header__logo-image']"
          src="/images/global/logo.png"
          alt="Логотип"
          draggable="false"
        />
      </div>
    </router-link>
  </header>
</template>

<style lang="scss" module>
.header {
  padding: 80px;

  &__logo {
    width: 250px;
    height: 60px;

    margin: 0 auto;

    user-select: none;

    cursor: pointer;

    animation: pulse 2s infinite ease-in-out;

    &-image {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }
}

@keyframes pulse {
  from {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.1) rotate(-5deg);
  }
  to {
    transform: scale(1) rotate(0);
  }
}
</style>
