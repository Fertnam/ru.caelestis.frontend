<template>
    <form
        :class="[formStyles.form, formStyles.formThemeRow]"
        @submit="onSubmit"
    >
        <input
            :class="formStyles.formInput"
            type="text"
            placeholder="Введите ник игрока"
        />
        <button :class="formStyles.formButton">Найти</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import formStyles from '@default-scss-modules/form.module.scss'

export default defineComponent({
    name: 'SearchForm',
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
