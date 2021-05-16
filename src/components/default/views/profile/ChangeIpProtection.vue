<template>
    <ToggleContent>
        <template #title>Защита по IP</template>
        <template #default> В разработке... </template>
    </ToggleContent>
</template>

<script>
import { defineComponent } from 'vue'
import ToggleContent from '@default-components/ToggleContent.vue'

export default defineComponent({
    name: 'ChangePassword',
    components: {
        ToggleContent,
    },
})
</script>
