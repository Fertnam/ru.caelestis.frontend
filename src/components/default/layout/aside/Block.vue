<template>
    <div :class="$style.asideBlock">
        <h2 v-if="$slots.caption" :class="captionClasses">
            <slot name="caption" />
        </h2>

        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AsideBlock',
    props: {
        borderAfterCaption: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        captionClasses(): string[] {
            if (this.borderAfterCaption) {
                return [
                    this.$style.asideBlockCaption,
                    this.$style.asideBlockCaptionWithBorder,
                ]
            }

            return this.$style.asideBlockCaption
        },
    },
})
</script>

<style lang="scss" module>
.aside__block {
    --padding: 20px;

    @include box-shadow(5px, var(--dark-blue-v3));

    padding: var(--padding);
    composes: dark-theme from '~@default-scss-modules/theme';

    &:not(:last-child) {
        margin-bottom: 30px;
    }

    &-caption {
        margin-bottom: var(--padding);

        font-size: 1.25em;
        text-align: center;

        &--with-border {
            padding-bottom: var(--padding);
            border-bottom: 2px solid var(--blue);
        }
    }
}
</style>
