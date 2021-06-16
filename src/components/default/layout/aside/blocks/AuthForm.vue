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

                <div v-if="false" :class="formStyles.formMessage">Ошибка</div>

                <button :class="formStyles.formButton">Войти</button>
            </form>
        </template>
    </AsideBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideBlock from '@default-components/layout/aside/Block.vue'
import formStyles from '@default-scss-modules/form.module.scss'
import { UsersAuthData } from '@classes/Api/Users'

export default defineComponent({
    name: 'AuthForm',
    components: {
        AsideBlock,
    },
    data() {
        return {
            username: '',
            password: '',
            formStyles,
        }
    },
    methods: {
        async onSubmit() {
            try {
                const data: UsersAuthData = {
                    username: this.username,
                    password: this.password,
                }

                await this.$api.users.auth(data)
            } catch (e) {
                console.error(e)
            }
        },
    },
})
</script>
