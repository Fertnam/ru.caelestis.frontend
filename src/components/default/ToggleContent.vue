<template>
    <div :class="$style.toggleContent">
        <div :class="$style.toggleContentTitle" @click="isOpened = !isOpened">
            <fa-icon
                v-if="isOpened"
                :class="$style.toggleContentIcon"
                icon="minus-circle"
            />
            <fa-icon
                v-else
                :class="$style.toggleContentIcon"
                icon="plus-circle"
            />

            <slot name="title" />
        </div>

        <div v-show="isOpened" :class="$style.toggleContentBody">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ToggleContent',
    data() {
        return {
            isOpened: false,
        }
    },
})
</script>

<style lang="scss" module>
.toggle-content {
    &__title {
        padding: 12px;

        text-align: center;
        text-transform: uppercase;

        user-select: none;
        cursor: pointer;

        composes: dark-theme from '~@default-scss-modules/theme';
    }

    &__icon {
        margin-right: 8px;
    }

    &__body {
        margin: 15px auto 0;
        width: 95%;
    }
}
</style>
