<template>
    <div :class="$style.layout">
        <h1 :class="$style.layoutTitle">Админ-панель [В разработке]</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AdminLayout',
})
</script>

<style lang="scss" module>
.layout {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f7f7f7;

    &__title {
        user-select: none;
    }
}
</style>
