<template>
  <article :class="$style.article">
    <div :class="$style.articleHeader">
      <div :class="$style.articleHeaderCaption" v-text="article.caption" />
      <div :class="$style.articleHeaderDate">
        <fa-icon :class="$style.articleHeaderDateIcon" icon="calendar-alt" />
        {{ article.date }}
      </div>
    </div>

    <div :class="$style.articleBody">
      <div :class="$style.articleBodyImage">
        <img
          :class="$style.articleBodyImageSource"
          :src="article.image"
          alt="Изображение к статье"
        />
      </div>
      <div :class="$style.articleBodyContent" v-text="article.content" />
    </div>

    <div :class="$style.articleFooter">
      <a :class="$style.articleFooterLink" :href="article.to">Подробнее</a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
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

    composes: light-theme from '~@default-scss-modules/theme';

    &-caption {
      font-size: 1.35em;
    }

    &-date-icon {
      font-size: 1.2em;
      margin-right: 2px;
    }
  }

  &__body {
    @extend %section-margin-bottom;

    &-image {
      @extend %section-margin-bottom;

      height: 300px;

      user-select: none;
      pointer-events: none;

      &-source {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
      }
    }

    &-content {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;

      overflow: hidden;

      line-height: 1.5;
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;

    &-link {
      padding: 12px;
      user-select: none;

      composes: dark-theme from '~@default-scss-modules/theme';
    }
  }
}
</style>
