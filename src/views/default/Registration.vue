<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Регистрация</h1>

        <form
            :class="[formStyles.form, formStyles.formThemeMain]"
            @submit.prevent="onSubmit"
        >
            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Логин:
                    <input :class="formStyles.formInput" type="text" />
                </label>
                <div
                    v-if="false"
                    :class="[
                        formStyles.formMessage,
                        formStyles.formMessageThemeError,
                    ]"
                >
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="exclamation-circle"
                    />
                    Неправильный логин
                </div>
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Email:
                    <input :class="formStyles.formInput" type="text" />
                </label>
                <div v-if="false" :class="[formStyles.formMessage]" />
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Пароль:
                    <input :class="formStyles.formInput" type="password" />
                </label>
                <div v-if="false" :class="[formStyles.formMessage]">
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="check-circle"
                    />
                    Пароль корректный
                </div>
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Повторите пароль:
                    <input :class="formStyles.formInput" type="password" />
                </label>
                <div v-if="false" :class="[formStyles.formMessage]" />
            </div>

            <button :class="formStyles.formButton">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'
import formStyles from '@default-scss-modules/form.module.scss'

export default defineComponent({
    name: 'RegistrationPage',
    data() {
        return {
            captionStyle,
            formStyles,
        }
    },
    methods: {
        onSubmit() {
            alert('Форма отправлена')
        },
    },
})
</script>

<style lang="scss" module>
.page {
    &__caption {
        margin-bottom: 40px;
    }
}
</style>
