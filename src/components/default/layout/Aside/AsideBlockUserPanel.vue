<template>
  <AsideBlock>
    <template #caption>Авторизация</template>

    <template #default>
      <form
        :class="[formStyles.form, formStyles.formThemeAside]"
        @submit.prevent="submit"
      >
        <input :class="formStyles.formInput" type="text" placeholder="Логин" />
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
import AsideBlock from '@default-components/layout/Aside/AsideBlock'
import form from '@default-scss-modules/form'

export default {
  components: {
    AsideBlock,
  },
  data() {
    return {
      formStyles: form,
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>
