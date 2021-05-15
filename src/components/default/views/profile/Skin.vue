<template>
    <div :class="$style.skin">
        <img
            :class="$style.skinImage"
            src="https://mcskindb.com/ru/547925/preview"
            alt="Fertnam"
        />
    </div>
</template>

<script>
export default {
    name: 'Skin',
}
</script>

<style lang="scss" module>
.skin {
    min-width: 212px;
    height: 410px;

    &__image {
        width: 100%;
        height: 100%;

        object-fit: contain;
        object-position: center;
    }
}
</style>
