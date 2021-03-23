<template>
  <div :class="$style.rulesDivision">
    <h2 :class="$style.rulesDivisionCaption">
      <fa-icon :class="$style.rulesDivisionCaptionIcon" :icon="division.icon" />
      {{ division.caption }}
    </h2>

    <div :class="$style.clauses">
      <div
        v-for="({ number, appellation, punishment }, index) in division.clauses"
        :key="index"
        :class="$style.clausesItem"
      >
        <div :class="$style.clausesItemInfo">
          <span :class="$style.clausesItemInfoNumber" v-text="number" />
          <div
            :class="$style.clausesItemInfoAppellation"
            v-text="appellation"
          />
        </div>
        <div v-if="punishment" :class="$style.clausesItemPunishment">
          Наказание: {{ punishment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    division: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.rules-division {
  $padding: 14px;

  &:hover .rules-division__caption-icon {
    color: var(--yellow);
    transform: scale(1.15);
  }

  &__caption {
    position: sticky;
    top: 0;

    margin: 0;
    padding: $padding;

    font-size: 1em;
    font-weight: normal;

    text-transform: uppercase;
    text-align: center;

    user-select: none;

    composes: dark-theme from '~@default-scss-modules/theme';

    &-icon {
      margin-right: 4px;

      transition: transform var(--transition-duration),
        color var(--transition-duration);
      will-change: transform;
    }
  }

  .clauses {
    &__item {
      padding: $padding;

      &:nth-child(even) {
        background-color: var(--light-blue-v1);
      }

      &-info {
        display: flex;

        &-number {
          margin-right: 7px;
          font-weight: bold;
        }
      }

      &-punishment {
        margin-top: 10px;
        color: var(--dark-red);
      }
    }
  }
}
</style>
