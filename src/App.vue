<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    beforeCreate() {
        const hasAuthToken: boolean = !!localStorage.getItem('token')

        if (hasAuthToken) {
            this.$services.users.saveInStoreByAuthToken()
        }
    },
})
</script>
