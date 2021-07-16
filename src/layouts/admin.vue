<template>
    <div :class="$style.layout">
        <h1 :class="$style.title">Админ-панель [В разработке]</h1>
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

    composes: layout from '~@scss/modules/global/layout.module.scss';

    & > .title {
        user-select: none;
    }
}
</style>
