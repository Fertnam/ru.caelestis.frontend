<template>
  <nav :class="$style['navigation']">
    <ul :class="$style['menu']">
      <li :class="$style['menu-item']">
        <router-link class="menu__link" :to="{ name: 'default.index' }" exact>
          Главная
        </router-link>
      </li>

      <li :class="$style['menu-item']">
        <a class="menu__link" href="/forum">Форум</a>
      </li>

      <li :class="$style['menu-item']">
        <div class="menu__link">Сервера</div>
        <ul :class="$style['submenu']">
          <li class="menu__submenu-item">
            <router-link
              class="menu__submenu-link"
              :to="{ name: 'default.index' }"
            >
              Decor 1.12.2
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="$style['menu-item']">
        <router-link class="menu__link" :to="{ name: 'default.banlist' }">
          Бан-лист
        </router-link>
      </li>

      <li :class="$style['menu-item']">
        <router-link class="menu__link" :to="{ name: 'default.donate' }">
          Донат
        </router-link>
      </li>

      <li :class="$style['menu-item']">
        <router-link class="menu__link" :to="{ name: 'default.rules' }">
          Правила
        </router-link>
      </li>
    </ul>

    <router-link
      class="navigation__start-link"
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

  padding: $default-layout-areas-padding;

  & > .menu {
    display: flex;

    margin: 0;
    padding: 0;

    & > .menu-item {
      position: relative;
      display: flex;

      &:not(:last-child) {
        margin-right: 4em;
      }

      & > .submenu {
        display: none;
      }
    }
  }
}
</style>
