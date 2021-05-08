<template>
    <AsideBlock>
        <template #caption>Авторизация</template>

        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeAside]"
                @submit.prevent="onSubmit"
            >
                <input
                    :class="formStyles.formInput"
                    type="text"
                    placeholder="Логин"
                />
                <input
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

<script>
import { defineComponent } from 'vue'
import AsideBlock from '@default-components/layout/aside/Block.vue'
import formStyles from '@default-scss-modules/form.module.scss'

export default defineComponent({
    name: 'UserPanel',
    components: {
        AsideBlock,
    },
    data() {
        return {
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
