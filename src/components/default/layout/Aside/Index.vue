<template>
  <aside :class="$style.aside">
    <AsideBlockUserPanel />
  </aside>
</template>

<script>
import AsideBlockUserPanel from '@default-components/layout/Aside/AsideBlockUserPanel'

export default {
  components: {
    AsideBlockUserPanel,
  },
}
</script>

<style lang="scss" module>
.aside {
  padding: var(--base-padding-of-area);
  composes: light-theme light-theme--v_2 from '~@default-scss-modules/theme';
}
</style>
