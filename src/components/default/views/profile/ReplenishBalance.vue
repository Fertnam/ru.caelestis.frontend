<template>
    <ToggleContent>
        <template #title>Пополнить баланс</template>
        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeMain]"
                @submit.prevent="onSubmit"
            >
                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Сумма пополнения:
                        <input
                            v-model="v$.sum.$model"
                            :class="formStyles.formInput"
                            type="text"
                        />
                    </label>
                    <div v-if="v$.sum.$error" :class="[formStyles.formMessage]">
                        <fa-icon
                            :class="formStyles.formMessageIcon"
                            icon="exclamation-circle"
                        />

                        <template v-if="v$.sum.required.$invalid">
                            Укажите сумму пополнения
                        </template>

                        <template v-else-if="v$.sum.integer.$invalid">
                            Сумма пополнения должна быть целым числом
                        </template>
                    </div>
                </div>

                <button :class="formStyles.formButton">Пополнить</button>
            </form>
        </template>
    </ToggleContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleContent from '@default-components/ToggleContent.vue'
import formStyles from '@default-scss-modules/form.module.scss'
import useVuelidate from '@vuelidate/core'
import { required, integer } from '@vuelidate/validators'

export default defineComponent({
    name: 'ReplenishBalance',
    components: {
        ToggleContent,
    },
    data() {
        return {
            formStyles,
            sum: null,
            v$: useVuelidate(),
        }
    },
    validations() {
        return {
            sum: { required, integer },
        }
    },
    methods: {
        onSubmit() {
            this.v$.$touch()

            if (this.v$.$error) {
                return
            }

            alert(`Баланс пополнен на ${this.sum} рублей`)
        },
    },
})
</script>
