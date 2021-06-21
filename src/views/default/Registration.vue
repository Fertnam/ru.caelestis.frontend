<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Регистрация</h1>

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

            <button :class="formStyles.formButton" :disabled="inProgress">
                Зарегистрироваться
            </button>
        </form>

        <Banner ref="banner" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from '@default-components/Banner.vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'
import formStyles from '@default-scss-modules/form.module.scss'
import { UserRegisterFields } from '@classes/types/User'
import useVuelidate from '@vuelidate/core'
import {
    alphaNum,
    minLength,
    maxLength,
    required,
    email,
    sameAs,
} from '@vuelidate/validators'

export default defineComponent({
    name: 'RegistrationPage',
    components: {
        Banner,
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            inProgress: false,
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
        onSubmit() {
            this.v$.$touch()

            if (this.v$.$error) {
                return
            }

            this.register()
        },
        async register() {
            if (!this.inProgress) {
                this.inProgress = true

                try {
                    const data: UserRegisterFields = {
                        username: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.passwordConfirm,
                    }

                    await this.$services.users.create(data)
                    await this.showSuccessBanner()
                    await this.$router.push({ name: 'default.index' })

                    this.resetFields()
                } catch (e) {
                    console.error(e)
                    await this.showErrorBanner()
                } finally {
                    this.inProgress = false
                }
            }
        },
        showErrorBanner(): Promise<void> {
            const message: string =
                'При регистрации возникла ошибка. Попробуйте ещё раз'

            return this.$refs.banner.show(
                message,
                this.$refs.banner.Types.ERROR
            )
        },
        showSuccessBanner(): Promise<void> {
            const message: string =
                'Регистрация прошла успешно. Подтвердите аккаунт через электронную почту'

            return this.$refs.banner.show(message)
        },
        resetFields() {
            this.name = this.email = this.password = this.passwordConfirm = ''
            this.v$.$reset()
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
