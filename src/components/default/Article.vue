<template>
    <article :class="$style.article">
        <div :class="$style.articleHeader">
            <div :class="$style.articleCaption" v-text="article.caption" />
            <div :class="$style.articleDate">
                <fa-icon :class="$style.articleDateIcon" icon="calendar-alt" />
                {{ article.date }}
            </div>
        </div>

        <div :class="$style.articleBody">
            <div :class="$style.articleImage">
                <img
                    :class="$style.articleImageSource"
                    :src="article.image"
                    alt="Изображение к статье"
                />
            </div>
            <div :class="$style.articleContent" v-text="article.content" />
        </div>

        <div :class="$style.articleFooter">
            <a :class="$style.articleLink" :href="article.to">Подробнее</a>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Article',
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
/* Размер нижнего отсупа для каждого раздела статьи */
$section-margin-bottom: 20px;

%section-margin-bottom {
    margin-bottom: $section-margin-bottom;
}

.article {
    &__header {
        $shadow-size: 5px;

        @include box-shadow($shadow-size, var(--dark-blue-v1));

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: $section-margin-bottom + $shadow-size;
        padding: 16px;

        font-weight: bold;

        composes: light-theme light-theme--v_1 from '~@default-scss-modules/theme';
    }

    &__caption {
        font-size: 1.35em;

        @include _812 {
            font-size: 1.1em;
        }
    }

    &__date {
        @include _812 {
            font-size: 0.9em;
        }

        &-icon {
            font-size: 1.2em;
            margin-right: 2px;

            @include _812 {
                font-size: 1em;
            }
        }
    }

    &__body {
        @extend %section-margin-bottom;
    }

    &__image {
        @include proportional-content(40);
        @extend %section-margin-bottom;

        user-select: none;
        pointer-events: none;

        &-source {
            object-fit: cover;
            object-position: center;
        }
    }

    &__content {
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;

        overflow: hidden;

        line-height: 1.5;
    }

    &__footer {
        display: flex;
        justify-content: flex-end;
    }

    &__link {
        padding: 12px;
        user-select: none;

        composes: dark-theme from '~@default-scss-modules/theme';

        @include _812 {
            font-size: 0.9em;
        }
    }
}
</style>
