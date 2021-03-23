<template>
  <div :class="$style.page">
    <div :class="$style.articles">
      <Article
        v-for="(article, index) in articles"
        :key="index"
        :class="$style.articlesItem"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from '@default-components/Article'
import articles from '@global-data/articles'

export default {
  components: {
    Article,
  },
  data() {
    return {
      articles,
    }
  },
}
</script>

<style lang="scss" module>
.page {
}

.articles {
  &__item:not(:last-child) {
    margin-bottom: 30px;
  }
}
</style>
