<template>
    <div :class="$style.page">Главная страница</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IndexPage',
})
</script>

<style lang="scss" module>
.articles {
    &__item:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>
