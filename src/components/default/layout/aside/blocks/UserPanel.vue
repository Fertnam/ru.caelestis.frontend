<template>
    <AsideBlock :class="$style.userPanel" border-after-caption>
        <template #caption>
            Привет,
            <span :class="$style.userPanelName" v-text="user.getUsername()" />!
        </template>

        <template #default>
            <div :class="$style.userPanelBody">
                <div :class="$style.userPanelHead">
                    <img
                        :class="$style.userPanelHeadSource"
                        src="https://img.itch.zone/aW1nLzMwNDY5OTAuanBn/original/4PwN%2Bj.jpg"
                        :alt="user.getUsername()"
                    />
                </div>

                <ul :class="$style.userPanelMenu">
                    <li :class="$style.userPanelMenuItem">
                        <router-link
                            :class="$style.userPanelMenuLink"
                            :to="{ name: 'default.index' }"
                            exact-active-class=""
                            active-class=""
                        >
                            Личный кабинет
                        </router-link>
                    </li>

                    <li :class="$style.userPanelMenuItem">
                        <router-link
                            :class="$style.userPanelMenuLink"
                            :to="{ name: 'default.profile' }"
                            exact-active-class=""
                            active-class=""
                        >
                            Профиль игрока
                        </router-link>
                    </li>

                    <li :class="$style.userPanelMenuItem">
                        <router-link
                            :class="$style.userPanelMenuLink"
                            :to="{ name: 'default.index' }"
                            exact-active-class=""
                            active-class=""
                        >
                            Онлайн-магазин
                        </router-link>
                    </li>

                    <li :class="$style.userPanelMenuItem" @click="logout">
                        Выход
                    </li>
                </ul>
            </div>
        </template>
    </AsideBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideBlock from '@default-components/layout/aside/Block.vue'

export default defineComponent({
    name: 'UserPanel',
    components: {
        AsideBlock,
    },
    computed: {
        user() {
            return this.$store.getters['auth/user']
        },
    },
    methods: {
        logout() {
            this.$services.users.logout()
        },
    },
})
</script>

<style lang="scss" module>
.user-panel {
    &__name {
        color: var(--yellow);
    }

    &__body {
        display: flex;
        justify-content: center;

        user-select: none;
    }

    &__head {
        --size: 55px;

        margin-right: 20px;

        width: var(--size);
        height: var(--size);

        pointer-events: none;

        &-source {
            width: 100%;
            height: 100%;

            object-fit: contain;
            object-position: center;
        }
    }

    &__menu {
        &-item {
            text-transform: uppercase;
            cursor: pointer;

            transition: color var(--transition-duration);

            &:not(:last-child) {
                margin-bottom: 14px;
            }

            &:hover {
                color: var(--yellow);
            }
        }
    }
}
</style>
