<template>
  <nav :class="$style['navigation']">
    <ul :class="$style['menu']">
      <li :class="$style['menu__item']">
        <router-link
          :class="$style['menu__link']"
          :to="{ name: 'default.index' }"
          exact
        >
          Главная
        </router-link>
      </li>

      <li :class="$style['menu__item']">
        <a :class="$style['menu__link']" href="/forum">Форум</a>
      </li>

      <li :class="$style['menu__item']">
        <div :class="$style['menu__link']">Сервера</div>

        <ul :class="$style['menu__submenu']">
          <li :class="$style['menu__submenu-item']">
            <router-link
              :class="$style['menu__submenu-link']"
              :to="{ name: 'default.index' }"
            >
              Decor 1.12.2
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="$style['menu__item']">
        <router-link
          :class="$style['menu__link']"
          :to="{ name: 'default.banlist' }"
        >
          Бан-лист
        </router-link>
      </li>

      <li :class="$style['menu__item']">
        <router-link
          :class="$style['menu__link']"
          :to="{ name: 'default.donate' }"
        >
          Донат
        </router-link>
      </li>

      <li :class="$style['menu__item']">
        <router-link
          :class="$style['menu__link']"
          :to="{ name: 'default.rules' }"
        >
          Правила
        </router-link>
      </li>
    </ul>

    <router-link
      :class="$style['navigation__start-link']"
      :to="{ name: 'default.registration' }"
      exact
    >
      Пора играть
    </router-link>
  </nav>
</template>

<style lang="scss" module>
.navigation {
  @include dark-theme;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 $base-padding-of-area-for-default-layout;

  &__start-link {
    $shadow-size: 5px;

    @include light-theme-with-box-shadow($shadow-size, $dark-blue-v1);

    width: 300px - $shadow-size;

    margin-top: -$shadow-size;
    padding: 8px 30px;

    font-weight: bold;
    font-size: 1.2em;

    text-align: center;
    text-transform: uppercase;
  }
}

.menu {
  display: flex;

  margin: 0;
  padding: 0;

  &__item {
    position: relative;
    display: flex;

    &:not(:last-child) {
      margin-right: 4em;
    }
  }

  &__link {
    padding: 30px 0;
  }

  &__submenu {
    display: none;
  }
}
</style>
