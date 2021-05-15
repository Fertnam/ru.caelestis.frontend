<template>
    <table :class="$style.table">
        <thead v-if="captions.length > 0">
            <tr>
                <th
                    v-for="(caption, index) in captions"
                    :key="index"
                    v-text="caption"
                />
            </tr>
        </thead>

        <tbody>
            <slot />
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Table',
    props: {
        captions: {
            type: Array,
            default: () => [],
        },
    },
})
</script>

<style lang="scss" module>
.table {
    composes: table from '~@default-scss-modules/table';
}
</style>
