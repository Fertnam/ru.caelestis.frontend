<template>
    <aside :class="$style.aside">
        <UserPanel />
    </aside>
</template>

<script>
import { defineComponent } from 'vue'
import UserPanel from '@default-components/layout/aside/blocks/UserPanel.vue'

export default defineComponent({
    name: 'Aside',
    components: {
        UserPanel,
    },
})
</script>

<style lang="scss" module>
.aside {
    padding: var(--base-padding-of-area);
    composes: light-theme light-theme--v_2 from '~@default-scss-modules/theme';
}
</style>
