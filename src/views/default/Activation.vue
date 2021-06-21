<template>
    <div :class="$style.page">
        <fa-icon
            v-if="status === Statuses.UNKNOWN"
            :class="$style.pageSpinner"
            icon="spinner"
            spin
        />

        <div
            v-else
            :class="[
                $style.pageMessage,
                { [$style.pageMessageError]: status === Statuses.ERROR },
            ]"
            v-text="message"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

enum Statuses {
    SUCCESS,
    ERROR,
    UNKNOWN,
}

let status: Statuses = Statuses.UNKNOWN

export default defineComponent({
    name: 'ActivationPage',
    data() {
        return {
            Statuses,
            status,
            message: '',
        }
    },
    async beforeCreate() {
        try {
            await this.$services.users.activate(
                this.$route.params.code as string
            )

            this.status = Statuses.SUCCESS
            this.message =
                'Активация прошла успешно. Вы можете использовать логин и пароль для входа'
        } catch (e) {
            console.error(e)

            this.status = Statuses.ERROR
            this.message = 'Неверный код активации'
        }
    },
})
</script>

<style lang="scss" module>
.page {
    &__spinner {
        display: block;
        margin: 0 auto;

        font-size: 2em;
    }

    &__message {
        @include box-shadow(5px, var(--dark-blue-v1));

        padding: 14px;

        font-size: 1.1em;
        user-select: none;

        composes: light-theme light-theme--v_1 from '~@default-scss-modules/theme';

        &--error {
            @include red-theme;
            @include box-shadow(5px, var(--dark-red));
        }
    }
}
</style>
