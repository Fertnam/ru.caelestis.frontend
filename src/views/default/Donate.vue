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

<script lang="ts">
import { defineComponent } from 'vue'
import CapabilitiesTable from '@default-components/views/donate/CapabilitiesTable.vue'
import KitsTable from '@default-components/views/donate/KitsTable.vue'
import PricesTable from '@default-components/views/donate/PricesTable.vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'

export default defineComponent({
    name: 'DonatePage',
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
})
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
