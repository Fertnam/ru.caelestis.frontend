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
import TheHeader from '@/components/default/Header'
import TheNavigation from '@/components/default/Navigation'
import TheMain from '@/components/default/Main'
import TheAside from '@/components/default/Aside'
import TheFooter from '@/components/default/Footer'

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
