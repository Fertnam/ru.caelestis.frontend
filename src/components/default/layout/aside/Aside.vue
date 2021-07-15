<template>
    <aside :class="$style.aside">Боковая панель</aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Aside',
})
</script>

<style lang="scss" module>
.aside {
    padding: var(--base-padding-of-area);
    composes: lightThemeV2 from '~@scss/modules/default/theme.module.scss';
}
</style>
