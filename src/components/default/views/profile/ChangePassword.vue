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
                        <input
                            v-model="v$.oldPassword.$model"
                            :class="formStyles.formInput"
                            type="password"
                        />
                    </label>
                    <div
                        v-if="v$.oldPassword.$error"
                        :class="[formStyles.formMessage]"
                    >
                        <fa-icon
                            :class="formStyles.formMessageIcon"
                            icon="exclamation-circle"
                        />

                        <template v-if="v$.oldPassword.required.$invalid">
                            Укажите старый пароль
                        </template>
                    </div>
                </div>

                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Новый пароль:
                        <input
                            v-model="v$.newPassword.$model"
                            :class="formStyles.formInput"
                            type="password"
                        />
                    </label>
                    <div
                        v-if="v$.newPassword.$error"
                        :class="[formStyles.formMessage]"
                    >
                        <fa-icon
                            :class="formStyles.formMessageIcon"
                            icon="exclamation-circle"
                        />

                        <template v-if="v$.newPassword.required.$invalid">
                            Укажите новый пароль
                        </template>
                    </div>
                </div>

                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Повторите новый пароль:
                        <input
                            v-model="v$.newPasswordRepeat.$model"
                            :class="formStyles.formInput"
                            type="password"
                        />
                    </label>
                    <div
                        v-if="v$.newPasswordRepeat.$error"
                        :class="[formStyles.formMessage]"
                    >
                        <fa-icon
                            :class="formStyles.formMessageIcon"
                            icon="exclamation-circle"
                        />

                        <template v-if="v$.newPasswordRepeat.required.$invalid">
                            Повторите новый пароль
                        </template>
                        <template
                            v-else-if="v$.newPasswordRepeat.sameAs.$invalid"
                        >
                            Пароли не совпадают
                        </template>
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
import useVuelidate from '@vuelidate/core'
import { email, required, sameAs } from '@vuelidate/validators'

export default defineComponent({
    name: 'ChangePassword',
    components: {
        ToggleContent,
    },
    data() {
        return {
            formStyles,
            v$: useVuelidate(),
            oldPassword: '',
            newPassword: '',
            newPasswordRepeat: '',
        }
    },
    validations() {
        return {
            oldPassword: { required },
            newPassword: { required },
            newPasswordRepeat: { required, sameAs: sameAs(this.newPassword) },
        }
    },
    methods: {
        onSubmit() {
            this.v$.$touch()

            if (this.v$.$error) {
                return
            }

            alert('Пароль изменен')
        },
    },
})
</script>
