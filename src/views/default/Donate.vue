<template>
  <div :class="$style.page">
    <h1 :class="[captionStyle, $style.pageCaption]">Донат</h1>

    <div :class="$style.tables">
      <CapabilitiesTable :class="$style.tablesItem" />
      <KitsTable :class="$style.tablesItem" />
      <PricesTable :class="$style.tablesItem" />
    </div>
  </div>
</template>

<script>
import CapabilitiesTable from '@default-components/views/donate/CapabilitiesTable'
import KitsTable from '@default-components/views/donate/KitsTable'
import PricesTable from '@default-components/views/donate/PricesTable'
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  components: {
    CapabilitiesTable,
    KitsTable,
    PricesTable,
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
}

.tables {
  &__item:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
