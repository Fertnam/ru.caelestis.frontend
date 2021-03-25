<template>
  <header :class="$style.header">
    <router-link v-slot="{ navigate }" :to="{ name: 'default.index' }" custom>
      <div :class="$style.headerLogo" @click="navigate">
        <img
          :class="$style.headerLogoImage"
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

  @include _812 {
    padding: 30px;
  }

  &__logo {
    width: 250px;
    height: 60px;

    margin: 0 auto;

    user-select: none;

    cursor: pointer;

    animation: pulse 2s infinite ease-in-out;

    @include _812 {
      width: 200px;
    }

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
