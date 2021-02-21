<template>
  <div class="layout">
    <header class="header">
      <div class="logo header__logo">
        <router-link
          class="logo__image"
          src="/images/logo.png"
          alt="Логотип"
          tag="div"
          exact
          exact-active-class=""
          active-class=""
          :to="{ name: 'default.index' }"
        />
      </div>
    </header>

    <nav class="nav">
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu__link" :to="{ name: 'default.index' }" exact>
            Главная
          </router-link>
        </li>

        <li class="menu__item">
          <a class="menu__link" href="/forum">Форум</a>
        </li>

        <li class="menu__item">
          <div class="menu__link">Сервера</div>
          <ul class="menu-submenu">
            <li class="menu-submenu__item">
              <router-link
                class="menu__submenu-link"
                :to="{ name: 'default.index' }"
              >
                Decor 1.12.2
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu__item">
          <router-link class="menu__link" :to="{ name: 'default.banlist' }">
            Бан-лист
          </router-link>
        </li>

        <li class="menu__item">
          <router-link class="menu__link" :to="{ name: 'default.donate' }">
            Донат
          </router-link>
        </li>

        <li class="menu__item">
          <router-link class="menu__link" :to="{ name: 'default.rules' }">
            Правила
          </router-link>
        </li>
      </ul>

      <router-link
        class="btn nav__start-link"
        exact
        exact-active-class=""
        active-class=""
        :to="{ name: 'default.registration' }"
      >
        Пора играть
      </router-link>
    </nav>

    <main class="main">
      <router-view />
    </main>

    <aside class="aside">Боковая часть</aside>

    <footer class="footer">
      <div class="footer__copyright">© 2021 Caelestis</div>
    </footer>
  </div>
</template>
