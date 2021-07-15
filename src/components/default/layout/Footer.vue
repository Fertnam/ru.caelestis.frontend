<template>
    <footer :class="$style.footer">
        <div :class="$style.copyright">© 2021 Caelestis</div>
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
    composes: darkTheme from '~@scss/modules/default/theme.module.scss';

    & > .copyright {
        text-align: center;
    }
}
</style>
