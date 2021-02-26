<template>
  <div class="layout">
    <TheHeader />
    <TheNavigation />
    <TheMain />
    <TheAside />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/default/layout/Header'
import TheNavigation from '@/components/default/layout/Navigation'
import TheMain from '@/components/default/layout/Main'
import TheAside from '@/components/default/layout/Aside'
import TheFooter from '@/components/default/layout/Footer'

export default {
  components: {
    TheHeader,
    TheNavigation,
    TheMain,
    TheAside,
    TheFooter,
  },
}
</script>
