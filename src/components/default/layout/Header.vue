<template>
  <header :class="$style['header']">
    <router-link v-slot="{ navigate }" :to="{ name: 'default.index' }" custom>
      <div :class="$style['logo']" @click="navigate">
        <img
          :class="$style['logo-image']"
          src="/images/logo.png"
          alt="Логотип"
          draggable="false"
        />
      </div>
    </router-link>
  </header>
</template>

<style lang="scss" module>
.header {
  padding: 7%;
  background: url('/images/default/header.png') center 85% / cover;

  & > .logo {
    width: 250px;
    height: 60px;

    margin: 0 auto;

    user-select: none;

    cursor: pointer;

    animation: pulse 2s infinite ease-in-out;

    & > .logo-image {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
