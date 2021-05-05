<template>
    <footer :class="$style.footer">
        <div :class="$style.footerCopyright">© 2021 Caelestis</div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer',
})
</script>

<style lang="scss" module>
.footer {
    padding: 40px var(--base-padding-of-area);
    composes: dark-theme from '~@default-scss-modules/theme';

    &__copyright {
        text-align: center;
    }
}
</style>
