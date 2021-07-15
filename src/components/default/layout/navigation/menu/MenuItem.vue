<template>
    <a href="#" :class="$style.menuItem">
        <FaIcon :class="$style.icon" icon="comments" />
        Форум
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MenuItem',
})
</script>

<style lang="scss" module>
.menuItem {
    position: relative;
    display: flex;

    padding: 25px 14px;

    text-transform: uppercase;

    cursor: pointer;

    transition: color var(--transition-duration);

    &:hover,
    &.active {
        color: var(--yellow);
    }

    @include _812 {
        padding: 20px 10px;
    }

    & > .icon {
        margin-right: 3px;
        font-size: 1.1em;
    }
}
</style>
