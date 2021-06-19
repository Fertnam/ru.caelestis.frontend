<template>
    <AsideBlock>
        <template #caption>Авторизация</template>

        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeAside]"
                @submit.prevent="onSubmit"
            >
                <input
                    v-model="username"
                    :class="formStyles.formInput"
                    type="text"
                    placeholder="Логин"
                />
                <input
                    v-model="password"
                    :class="formStyles.formInput"
                    type="password"
                    placeholder="Пароль"
                />

                <div
                    v-if="error"
                    :class="formStyles.formMessage"
                    v-text="error"
                />

                <button :class="formStyles.formButton">Войти</button>
            </form>
        </template>
    </AsideBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideBlock from '@default-components/layout/aside/Block.vue'
import formStyles from '@default-scss-modules/form.module.scss'
import { UserAuthFields } from '@classes/types/User'

export default defineComponent({
    name: 'AuthForm',
    components: {
        AsideBlock,
    },
    data() {
        return {
            username: '',
            password: '',
            error: '',
            status,
            formStyles,
        }
    },
    methods: {
        async onSubmit() {
            try {
                const data: UserAuthFields = {
                    username: this.username,
                    password: this.password,
                }

                await this.$services.users.login(data)

                this.error = ''
            } catch (e) {
                if (e.response.status === 401) {
                    this.error = 'Неверный логин или пароль'
                } else {
                    this.error =
                        'Возникла неизвестная ошибка. Обратитесь к администрации'
                }
            }
        },
    },
})
</script>
