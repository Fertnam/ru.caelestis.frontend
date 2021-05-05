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

<script lang="ts">
import { defineComponent } from 'vue'
import Article from '@default-components/Article.vue'
import articles from '@global-data/articles.json'

export default defineComponent({
    name: 'IndexPage',
    components: {
        Article,
    },
    data() {
        return {
            articles,
        }
    },
})
</script>

<style lang="scss" module>
.articles {
    &__item:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>
