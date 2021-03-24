<template>
  <div :class="$style.page">
    <h1 :class="[captionStyle, $style.pageCaption]">Банлист</h1>
    <BanlistForm :class="$style.pageForm" />
    <BanlistTable />
  </div>
</template>

<script>
import BanlistForm from '@default-components/BanlistForm'
import BanlistTable from '@default-components/BanlistTable'
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  components: {
    BanlistForm,
    BanlistTable,
  },
  data() {
    return {
      captionStyle,
    }
  },
}
</script>

<style lang="scss" module>
.page {
  &__caption {
    margin-bottom: 40px;
  }

  &__form {
    margin-bottom: 30px;
  }
}
</style>
