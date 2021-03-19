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
  padding: $base-padding-of-area-for-default-layout;
  composes: light-theme--v_1 from '~@default-scss-modules/theme';
}
</style>
