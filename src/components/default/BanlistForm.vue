<template>
  <form :class="[formStyles.form, formStyles.formThemeRow]" @submit="onSubmit">
    <input
      :class="formStyles.formInput"
      type="text"
      placeholder="Введите ник игрока"
    />
    <button :class="formStyles.formButton">Найти</button>
  </form>
</template>

<script>
import formStyles from '@default-scss-modules/form'

export default {
  data() {
    return {
      formStyles,
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>
