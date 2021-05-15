<template>
    <aside :class="$style.aside">
        <UserPanel v-if="isAuth" />
        <AuthForm v-else />
    </aside>
</template>

<script>
import { defineComponent } from 'vue'
import AuthForm from '@default-components/layout/aside/blocks/AuthForm.vue'
import UserPanel from '@default-components/layout/aside/blocks/UserPanel.vue'

export default defineComponent({
    name: 'Aside',
    components: {
        AuthForm,
        UserPanel,
    },
    data() {
        return {
            isAuth: true,
        }
    },
})
</script>

<style lang="scss" module>
.aside {
    padding: var(--base-padding-of-area);
    composes: light-theme light-theme--v_2 from '~@default-scss-modules/theme';
}
</style>
