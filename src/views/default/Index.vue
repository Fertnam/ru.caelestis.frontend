<template>
  <div :class="$style.page">
    <h1 :class="captionStyle">Главная</h1>
  </div>
</template>

<script>
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  data() {
    return {
      captionStyle,
    }
  },
}
</script>

<style lang="scss" module>
.page {
}
</style>
