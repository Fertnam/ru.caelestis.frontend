<template>
    <aside :class="$style.aside">
        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__bounceIn animate__fast"
            leave-active-class="animate__animated animate__zoomOut animate__fast"
        >
            <UserPanel v-if="isAuth" />
            <AuthForm v-else />
        </transition>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import AuthForm from '@default-components/layout/aside/blocks/AuthForm.vue'
import UserPanel from '@default-components/layout/aside/blocks/UserPanel.vue'

export default defineComponent({
    name: 'Aside',
    components: {
        AuthForm,
        UserPanel,
    },
    computed: {
        ...mapGetters({
            isAuth: 'auth/isAuth',
        }),
    },
})
</script>

<style lang="scss" module>
.aside {
    padding: var(--base-padding-of-area);
    composes: light-theme light-theme--v_2 from '~@default-scss-modules/theme';
}
</style>
