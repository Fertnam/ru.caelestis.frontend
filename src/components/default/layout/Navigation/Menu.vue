<template>
  <ul :class="$style.menu">
    <li
      v-for="(menuItem, menuItemIndex) in menu"
      :key="menuItemIndex"
      :class="$style.menuItem"
    >
      <router-link
        v-if="menuItem.to"
        :class="$style.menuLink"
        :to="menuItem.to"
        :exact-active-class="$style.menuLinkActive"
        active-class=""
        exact
      >
        <fa-icon :class="$style.menuLinkIcon" :icon="menuItem.icon" />
        {{ menuItem.name }}
      </router-link>

      <a
        v-else-if="menuItem.href"
        :class="$style.menuLink"
        :href="menuItem.href"
      >
        <fa-icon :class="$style.menuLinkIcon" :icon="menuItem.icon" />
        {{ menuItem.name }}
      </a>

      <template v-else>
        <div :class="$style.menuLink">
          <fa-icon :class="$style.menuLinkIcon" :icon="menuItem.icon" />
          {{ menuItem.name }}
        </div>
        <ul :class="$style.menuSubmenu">
          <li
            v-for="(submenuItem, submenuItemIndex) in menuItem.submenu"
            :key="submenuItemIndex"
            :class="$style.menuSubmenuItem"
          >
            <router-link
              :class="$style.menuSubmenuLink"
              :to="submenuItem.to"
              :exact-active-class="$style.menuSubmenuLinkActive"
              active-class=""
              exact
            >
              {{ submenuItem.name }}
            </router-link>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script>
import menu from '@default-data/menu'

export default {
  data() {
    return {
      menu,
    }
  },
}
</script>

<style lang="scss" module>
//Стили для активных пунктов меню и подменю
%active {
  color: $yellow;
}

//Transition для анимации смены состояния пунктов меню
%transition-for-menu-links {
  transition: color $transition-duration;
}

.menu {
  display: flex;

  margin: 0;
  padding: 0;

  &__item {
    position: relative;
    display: flex;

    cursor: pointer;

    &:first-child > .menu__link {
      padding-left: 0;
    }

    &:last-child > .menu__link {
      padding-right: 0;
    }

    &:hover > .menu__submenu {
      opacity: 1;
      visibility: visible;
    }
  }

  &__link {
    @extend %transition-for-menu-links;

    padding: 25px 18px;
    text-transform: uppercase;

    &:hover,
    &--active {
      @extend %active;
    }

    &-icon {
      margin-right: 3px;
      font-size: 1.1em;
    }
  }

  &__submenu {
    $submenu-mark-size: 10px;
    $shadow-size: 5px;

    @include dark-theme-with-box-shadow($shadow-size, $dark-blue-v3);

    position: absolute;
    top: calc(100% + #{$submenu-mark-size});
    right: 50%;

    z-index: 50;

    padding: 0;

    opacity: 0;
    visibility: hidden;

    list-style: none;

    text-align: center;
    white-space: nowrap;

    transform: translateX(calc(50% + #{$shadow-size}));

    transition: opacity $transition-duration, visibility $transition-duration;
    transition-delay: 150ms;

    &:before {
      position: absolute;
      top: -#{$submenu-mark-size * 2};
      right: 50%;

      border: $submenu-mark-size solid transparent;
      border-bottom: $submenu-mark-size solid $dark-blue-v3;

      transform: translateX(50%);

      content: '';
    }

    &-link {
      @extend %transition-for-menu-links;

      display: block;
      padding: 15px;

      &:hover,
      &--active {
        @extend %active;
      }
    }
  }
}
</style>
