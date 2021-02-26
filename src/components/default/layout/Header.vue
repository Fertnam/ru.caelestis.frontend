<template>
  <header class="header">
    <router-link v-slot="{ navigate }" :to="{ name: 'default.index' }" custom>
      <div class="logo header__logo" @click="navigate">
        <img class="logo__image" src="/images/logo.png" alt="Логотип" />
      </div>
    </router-link>
  </header>
</template>
