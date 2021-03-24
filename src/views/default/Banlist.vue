<template>
  <div :class="$style.page">
    <h1 :class="[captionStyle, $style.pageCaption]">Банлист</h1>

    <SearchForm :class="$style.pageForm" />
    <ResultTable />
  </div>
</template>

<script>
import SearchForm from '@default-components/views/banlist/SearchForm'
import ResultTable from '@default-components/views/banlist/ResultTable'
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  components: {
    SearchForm,
    ResultTable,
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
