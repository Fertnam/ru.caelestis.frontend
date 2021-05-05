<template>
    <div :class="$style.icon">
        <img
            :class="$style.iconImage"
            :src="`/images/default/icons/${src}`"
            :alt="alt"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Icon',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: 'Иконка',
        },
    },
})
</script>

<style lang="scss" module>
.icon {
    display: inline-block;

    width: 44px;
    height: 31px;

    pointer-events: none;
    user-select: none;

    &__image {
        width: 100%;
        height: 100%;

        object-fit: contain;
    }
}
</style>
