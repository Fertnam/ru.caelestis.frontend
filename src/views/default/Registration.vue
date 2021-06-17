<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Регистрация</h1>

        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn animate__fast"
            leave-active-class="animate__animated animate__fadeOut animate__fast"
        >
            <div v-if="status === 'success'" :class="$style.pageResult">
                Регистрация прошла успешно. Подтвердите электронную почту
            </div>

            <div
                v-else-if="status === 'error'"
                :class="[$style.pageResult, $style.pageResultError]"
            >
                При регистрации возникла ошибка. Попробуйте еще раз
            </div>
        </transition>

        <form
            :class="[formStyles.form, formStyles.formThemeMain]"
            @submit.prevent="onSubmit"
        >
            <!-- Лучшая версия            -->
            <!--            <FormField>-->
            <!--                <template #label>Логин</template>-->
            <!--                <template #default>-->
            <!--                    <FormInput v-model="" />-->
            <!--                </template>-->
            <!--                <template #errors>-->
            <!--                    <FormError />-->
            <!--                </template>-->
            <!--            </FormField>-->

            <!--            2 версия-->
            <!--            <FormInputField v-model="" />-->

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Логин:
                    <input
                        v-model="v$.name.$model"
                        :class="formStyles.formInput"
                        type="text"
                    />
                </label>

                <div v-if="v$.name.$error" :class="formStyles.formMessage">
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="exclamation-circle"
                    />

                    <template v-if="v$.name.required.$invalid">
                        Укажите логин
                    </template>

                    <template v-else-if="v$.name.alphaNum.$invalid">
                        Логин содержит недопустимые символы
                    </template>

                    <template v-else-if="v$.name.minLength.$invalid">
                        Минимальный размер логина {{ name.length }} из
                        {{ v$.name.minLength.$params.min }}
                    </template>

                    <template v-else-if="v$.name.maxLength.$invalid">
                        Максимальный размер логина {{ name.length }} из
                        {{ v$.name.maxLength.$params.max }}
                    </template>
                </div>
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Email:
                    <input
                        v-model="v$.email.$model"
                        :class="formStyles.formInput"
                        type="text"
                    />
                </label>
                <div v-if="v$.email.$error" :class="formStyles.formMessage">
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="exclamation-circle"
                    />

                    <template v-if="v$.email.required.$invalid">
                        Укажите email
                    </template>

                    <template v-else-if="v$.email.email.$invalid">
                        Неверная структура email
                    </template>
                </div>
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Пароль:
                    <input
                        v-model="v$.password.$model"
                        :class="formStyles.formInput"
                        type="password"
                    />
                </label>
                <div
                    v-if="v$.password.$error"
                    :class="[formStyles.formMessage]"
                >
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="exclamation-circle"
                    />
                    Укажите пароль
                </div>
            </div>

            <div :class="formStyles.formItem">
                <label :class="formStyles.formLabel">
                    Повторите пароль:
                    <input
                        v-model="v$.passwordConfirm.$model"
                        :class="formStyles.formInput"
                        type="password"
                    />
                </label>
                <div
                    v-if="v$.passwordConfirm.$error"
                    :class="[formStyles.formMessage]"
                >
                    <fa-icon
                        :class="formStyles.formMessageIcon"
                        icon="exclamation-circle"
                    />

                    <template v-if="v$.passwordConfirm.required.$invalid">
                        Повторите пароль
                    </template>

                    <template v-else-if="v$.passwordConfirm.sameAs.$invalid">
                        Пароли не совпадают
                    </template>
                </div>
            </div>

            <button :class="formStyles.formButton">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'
import formStyles from '@default-scss-modules/form.module.scss'
import { UserRegisterFields } from '@api/Users'
import useVuelidate from '@vuelidate/core'
import {
    alphaNum,
    minLength,
    maxLength,
    required,
    email,
    sameAs,
} from '@vuelidate/validators'

enum RegistrationStatus {
    Success = 'success',
    Error = 'error',
    Unknown = 'unknown',
}

let status: RegistrationStatus = RegistrationStatus.Unknown

export default defineComponent({
    name: 'RegistrationPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            status,
            v$: useVuelidate(),
            captionStyle,
            formStyles,
        }
    },
    validations() {
        return {
            name: {
                required,
                alphaNum,
                minLength: minLength(3),
                maxLength: maxLength(24),
            },
            email: { required, email },
            password: { required },
            passwordConfirm: { required, sameAs: sameAs(this.password) },
        }
    },
    methods: {
        async onSubmit() {
            this.v$.$touch()

            if (this.v$.$error) {
                return
            }

            try {
                const data: UserRegisterFields = {
                    username: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirm,
                }

                await this.$api.users.create(data)

                this.status = RegistrationStatus.Success
            } catch (e) {
                console.error(e)
                this.status = RegistrationStatus.Error
            }
        },
    },
})
</script>

<style lang="scss" module>
.page {
    &__caption {
        margin-bottom: 40px;
    }

    &__result {
        @include box-shadow(5px, var(--dark-blue-v1));

        margin-bottom: 30px;
        padding: 12px;

        font-size: 1.1em;
        font-weight: bold;

        composes: light-theme light-theme--v_1 from '~@default-scss-modules/theme';

        &--error {
            @include red-theme;
            @include box-shadow(5px, var(--dark-red));
        }
    }
}
</style>
