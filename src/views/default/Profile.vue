<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Профиль</h1>

        <div :class="$style.pageInfo">
            <Skin :class="$style.pageSkin" />
            <InfoTable :class="$style.pageInfoTable" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skin from '@default-components/views/profile/Skin.vue'
import InfoTable from '@default-components/views/profile/InfoTable.vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'

export default defineComponent({
    name: 'ProfilePage',
    components: {
        Skin,
        InfoTable,
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

    &__info {
        display: flex;
    }

    &__skin {
        margin-right: 20px;

        pointer-events: none;
        user-select: none;
    }
}
</style>
