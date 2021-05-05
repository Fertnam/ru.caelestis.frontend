<template>
    <div :class="$style.page">
        <h1 :class="captionStyle" v-text="caption" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'

export default defineComponent({
    name: 'ServerPage',
    data() {
        return {
            caption: 'Сервер',
            captionStyle,
        }
    },
    methods: {
        updateCaption(serverName: string, serverVersion: string) {
            this.caption = `${serverName} ${serverVersion}`
        },
    },
})
</script>

<style lang="scss" module>
.page {
}
</style>
