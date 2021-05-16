<template>
    <ToggleContent>
        <template #title>Смена пароля</template>
        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeMain]"
                @submit.prevent="onSubmit"
            >
                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Старый пароль:
                        <input :class="formStyles.formInput" type="password" />
                    </label>
                    <div v-if="false" :class="[formStyles.formMessage]" />
                </div>

                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Новый пароль:
                        <input :class="formStyles.formInput" type="password" />
                    </label>
                    <div v-if="false" :class="[formStyles.formMessage]">
                        Пароль корректный
                    </div>
                </div>

                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Повторите новый пароль:
                        <input :class="formStyles.formInput" type="password" />
                    </label>
                    <div v-if="false" :class="[formStyles.formMessage]">
                        Пароль корректный
                    </div>
                </div>

                <button :class="formStyles.formButton">Изменить</button>
            </form>
        </template>
    </ToggleContent>
</template>

<script>
import { defineComponent } from 'vue'
import ToggleContent from '@default-components/ToggleContent.vue'
import formStyles from '@default-scss-modules/form.module.scss'

export default defineComponent({
    name: 'ChangePassword',
    components: {
        ToggleContent,
    },
    data() {
        return {
            formStyles,
        }
    },
    methods: {
        onSubmit() {
            alert('Пароль изменен')
        },
    },
})
</script>
