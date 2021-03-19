<template>
  <div :class="$style.page">
    <h1 :class="captionStyle" v-text="caption" />
  </div>
</template>

<script>
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.updateCaption(to.params.name, to.params.version)
    })
  },
  beforeRouteUpdate(to) {
    this.updateCaption(to.params.name, to.params.version)
  },
  data() {
    return {
      caption: '',
      captionStyle,
    }
  },
  methods: {
    updateCaption(serverName, serverVersion) {
      this.caption = `${serverName} ${serverVersion}`
    },
  },
}
</script>

<style lang="scss" module>
.page {
}
</style>
