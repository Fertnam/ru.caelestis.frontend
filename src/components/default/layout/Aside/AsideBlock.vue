<template>
  <div :class="$style.asideBlock">
    <h2 v-if="$slots.caption" :class="$style.asideBlockCaption">
      <slot name="caption" />
    </h2>

    <slot />
  </div>
</template>

<style lang="scss" module>
.aside__block {
  @include dark_theme-with-box-shadow(5px, $dark-blue-v3);

  padding: 20px;

  &-caption {
    margin: 0;
    padding-bottom: 20px;

    font-size: 1.25em;
    text-align: center;
  }
}
</style>
