<template>
  <div :class="$style.page">
    <h1 :class="[captionStyle, $style.pageCaption]">Правила</h1>

    <div :class="$style.rulesDivisions">
      <RulesDivision
        v-for="(division, index) in rulesDivisions"
        :key="index"
        :class="$style.rulesDivisionsItem"
        :division="division"
      />
    </div>
  </div>
</template>

<script>
import RulesDivision from '@default-components/RulesDivision'
import rulesDivisions from '@global-data/rules'
import { caption as captionStyle } from '@default-scss-modules/caption'

export default {
  components: {
    RulesDivision,
  },
  data() {
    return {
      captionStyle,
      rulesDivisions,
    }
  },
}
</script>

<style lang="scss" module>
.page {
  &__caption {
    margin-bottom: 40px;
  }
}

.rules-divisions {
  &__item:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
