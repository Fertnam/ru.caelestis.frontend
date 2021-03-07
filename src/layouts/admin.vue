<template>
  <div :class="$style['layout']">
    <h1 :class="$style['layout__title']">Админ-панель [В разработке]</h1>
  </div>
</template>

<style lang="scss" module>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  background-color: #f7f7f7;

  composes: layout from '~@global-scss-modules/layout';

  &__title {
    user-select: none;
  }
}
</style>
