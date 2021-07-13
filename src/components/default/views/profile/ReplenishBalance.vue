<template>
    <ToggleContent>
        <template #title>Пополнить баланс</template>
        <template #default>
            <form
                :class="[formStyles.form, formStyles.formThemeMain]"
                action="https://merchant.intellectmoney.ru/ru/"
                name="pay"
                method="POST"
            >
                <input type="hidden" name="eshopId" value="459474" />
                <input type="hidden" name="orderId" :value="Date.now()" />
                <input
                    id="preference"
                    type="hidden"
                    name="preference"
                    value=""
                />
                <input
                    type="hidden"
                    name="serviceName"
                    value="Пополнение баланса личного кабинета"
                />
                <input
                    id="recipientAmount"
                    v-model="sum"
                    type="hidden"
                    name="recipientAmount"
                />
                <input type="hidden" name="recipientCurrency" value="TST" />
                <input
                    type="hidden"
                    name="user_email"
                    value="theTopic@internet.ru"
                />
                <input
                    type="hidden"
                    name="successUrl"
                    value="http://caelestis.ru/profile"
                />
                <input type="hidden" name="HoldMode" value="0" />
                <input
                    type="hidden"
                    name="UserName"
                    :value="user.getUsername()"
                />

                <div :class="formStyles.formItem">
                    <label :class="formStyles.formLabel">
                        Сумма пополнения:
                        <input
                            v-model="sum"
                            name="Amount"
                            :class="formStyles.formInput"
                            type="text"
                        />
                    </label>
                </div>

                <button type="submit" :class="formStyles.formButton">
                    Пополнить
                </button>
            </form>
        </template>
    </ToggleContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleContent from '@default-components/ToggleContent.vue'
import formStyles from '@default-scss-modules/form.module.scss'
import { User } from '@models/User'

export default defineComponent({
    name: 'ReplenishBalance',
    components: {
        ToggleContent,
    },
    data() {
        return {
            formStyles,
            sum: null,
        }
    },
    computed: {
        user(): User {
            return this.$store.getters['auth/user']
        },
    },
})
</script>
