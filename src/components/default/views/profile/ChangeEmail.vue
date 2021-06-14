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
                        <input
                            v-model="v$.email.$model"
                            :class="formStyles.formInput"
                            type="text"
                        />
                    </label>
                    <div
                        v-if="v$.email.$error"
                        :class="[formStyles.formMessage]"
                    >
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

                <button :class="formStyles.formButton">Изменить</button>
            </form>
        </template>
    </ToggleContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleContent from '@default-components/ToggleContent.vue'
import formStyles from '@default-scss-modules/form.module.scss'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
    name: 'ChangeEmail',
    components: {
        ToggleContent,
    },
    data() {
        return {
            formStyles,
            v$: useVuelidate(),
            email: '',
            password: '',
        }
    },
    validations() {
        return {
            email: { required, email },
            password: { required },
        }
    },
    methods: {
        onSubmit() {
            this.v$.$touch()

            if (this.v$.$error) {
                return
            }

            alert('Email изменен')
        },
    },
})
</script>
