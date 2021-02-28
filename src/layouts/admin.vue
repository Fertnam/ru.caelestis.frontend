<template>
  <div :class="$style['layout']">
    <h1 :class="$style['title']">Админ-панель [В разработке]</h1>
  </div>
</template>

<style lang="scss" module>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f7f7f7;

  & > .title {
    user-select: none;
  }

  composes: layout from '~@scss-modules/layout';
}
</style>
