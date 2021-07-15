<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Container',
})
</script>

<style lang="scss" module>
.container {
    margin: 0 auto;
    width: 1200px;

    @include _1200 {
        width: 100%;
    }
}
</style>
