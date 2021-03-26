<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <th
          v-for="(caption, index) in captions"
          :key="index"
          v-text="caption"
        />
      </tr>
    </thead>

    <tbody>
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    captions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.table {
  composes: table from '~@default-scss-modules/table';
}
</style>
