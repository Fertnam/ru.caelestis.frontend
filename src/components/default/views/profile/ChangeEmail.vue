<template>
    <ToggleContent>
        <template #title>Смена Email</template>
        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeMain]"
                @submit.prevent="onSubmit"
            >
                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Новый Email:
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
    name: 'ChangeEmail',
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
            alert('Email изменен')
        },
    },
})
</script>
