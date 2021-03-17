<template>
  <div :class="$style.page">
    <h1 :class="captionStyle">Донат</h1>
  </div>
</template>

<script>
import { caption } from '@default-scss-modules/caption'

export default {
  data() {
    return {
      captionStyle: caption,
    }
  },
}
</script>

<style lang="scss" module>
.page {
}
</style>
