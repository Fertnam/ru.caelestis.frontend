<template>
    <main :class="$style.main">
        <router-view v-slot="{ Component }">
            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster"
            >
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Main',
})
</script>

<style lang="scss" module>
.main {
    padding: var(--base-padding-of-area);
    composes: light-theme light-theme--v_3 from '~@default-scss-modules/theme';
}
</style>
