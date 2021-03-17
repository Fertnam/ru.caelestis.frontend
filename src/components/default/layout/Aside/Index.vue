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
  @include light-theme($light-blue-v1);

  padding: $base-padding-of-area-for-default-layout;
}
</style>
