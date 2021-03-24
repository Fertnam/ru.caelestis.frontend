<template>
  <div :class="$style.page">
    <h1 :class="[captionStyle, $style.pageCaption]">Донат</h1>

    <div :class="$style.tables">
      <DonateCapabilitiesTable :class="$style.tablesItem" />
      <DonateKitsTable :class="$style.tablesItem" />
      <DonatePricesTable :class="$style.tablesItem" />
    </div>
  </div>
</template>

<script>
import DonateCapabilitiesTable from '@default-components/DonateCapabilitiesTable'
import DonateKitsTable from '@default-components/DonateKitsTable'
import DonatePricesTable from '@default-components/DonatePricesTable'
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  components: {
    DonateCapabilitiesTable,
    DonateKitsTable,
    DonatePricesTable,
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
