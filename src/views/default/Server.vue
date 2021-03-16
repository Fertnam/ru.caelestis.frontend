<template>
  <div :class="$style['page']">
    <h1 :class="captionClass" v-text="caption" />
  </div>
</template>

<script>
import { caption } from '@default-scss-modules/caption'

export default {
  data() {
    return {
      captionClass: caption,
    }
  },
  computed: {
    caption() {
      return `${this.$route.params.name} ${this.$route.params.version}`
    },
  },
}
</script>

<style lang="scss" module>
.page {
}
</style>
