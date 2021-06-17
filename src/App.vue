<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    async beforeCreate() {
        this.$services.users.saveByAuthToken()
    },
})
</script>
