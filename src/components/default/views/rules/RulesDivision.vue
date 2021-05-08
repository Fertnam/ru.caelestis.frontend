<template>
    <div :class="$style.rulesDivision">
        <h2 :class="$style.rulesDivisionCaption">
            <fa-icon :class="$style.rulesDivisionIcon" :icon="division.icon" />
            {{ division.caption }}
        </h2>

        <div :class="$style.clauses">
            <div
                v-for="(clause, index) in division.clauses"
                :key="index"
                :class="$style.clausesItem"
            >
                <div :class="$style.clausesItemInfo">
                    <span
                        :class="$style.clausesItemNumber"
                        v-text="clause.number"
                    />
                    <div
                        :class="$style.clausesItemAppellation"
                        v-text="clause.appellation"
                    />
                </div>
                <div
                    v-if="clause.punishment"
                    :class="$style.clausesItemPunishment"
                >
                    Наказание: {{ clause.punishment }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'RulesDivision',
    props: {
        division: {
            type: Object,
            required: true,
        },
    },
})
</script>

<style lang="scss" module>
$padding: 14px;

%padding {
    padding: $padding;
}

.rules-division {
    &:hover .rules-division__caption-icon {
        color: var(--yellow);
        transform: scale(1.15);
    }

    &__caption {
        @extend %padding;

        position: sticky;
        top: 0;

        font-size: 1em;
        font-weight: normal;

        text-transform: uppercase;
        text-align: center;

        user-select: none;

        composes: dark-theme from '~@default-scss-modules/theme';
    }

    &__icon {
        margin-right: 4px;

        will-change: transform;
        transition: transform var(--transition-duration),
            color var(--transition-duration);
    }
}

.clauses {
    &__item {
        @extend %padding;

        &:nth-child(even) {
            background-color: var(--light-blue-v1);
        }

        &-info {
            display: flex;
        }

        &-number {
            margin-right: 7px;
            font-weight: bold;
        }

        &-punishment {
            margin-top: 10px;
            color: var(--dark-red);
        }
    }
}
</style>
