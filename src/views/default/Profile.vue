<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Профиль</h1>

        <div v-if="isAuth" :class="$style.personal">
            <Skin
                :class="$style.personalSkin"
                @skin-updated="showSuccessBanner('Скин успешно изменен')"
                @cape-updated="showSuccessBanner('Плащ успешно изменен')"
                @skin-updating-failed="
                    showErrorBanner('Не удалось сменить скин')
                "
                @cape-updating-failed="
                    showErrorBanner('Не удалось сменить плащ')
                "
            />

            <div :class="$style.personalInfo">
                <InfoTable :class="$style.personalInfoItem" />

                <ChangeEmail :class="$style.personalInfoItem" />
                <ChangePassword :class="$style.personalInfoItem" />
                <ChangeIpProtection :class="$style.personalInfoItem" />
                <ReplenishBalance :class="$style.personalInfoItem" />
            </div>
        </div>

        <Banner ref="banner" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Skin from '@default-components/views/profile/Skin.vue'
import InfoTable from '@default-components/views/profile/InfoTable.vue'
import ReplenishBalance from '@default-components/views/profile/ReplenishBalance.vue'
import ChangeEmail from '@default-components/views/profile/ChangeEmail.vue'
import ChangePassword from '@default-components/views/profile/ChangePassword.vue'
import ChangeIpProtection from '@default-components/views/profile/ChangeIpProtection.vue'
import Banner from '@default-components/Banner.vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'

export default defineComponent({
    name: 'ProfilePage',
    components: {
        Skin,
        InfoTable,
        ReplenishBalance,
        ChangeEmail,
        ChangePassword,
        ChangeIpProtection,
        Banner,
    },
    data() {
        return {
            captionStyle,
            bannerTime: 2500,
        }
    },
    computed: {
        ...mapGetters({
            isAuth: 'auth/isAuth',
        }),
    },
    watch: {
        isAuth(isAuth: boolean): void {
            if (!isAuth) {
                this.$router.push({ name: 'default.index' })
            }
        },
    },
    methods: {
        showSuccessBanner(message: string): Promise<void> {
            return this.$refs.banner.show(
                message,
                this.$refs.banner.Types.SUCCESS,
                this.bannerTime
            )
        },
        showErrorBanner(message: string): Promise<void> {
            return this.$refs.banner.show(
                message,
                this.$refs.banner.Types.ERROR,
                this.bannerTime
            )
        },
    },
})
</script>

<style lang="scss" module>
.page {
    &__caption {
        margin-bottom: 40px;
    }
}

.personal {
    display: flex;

    &__skin {
        margin-right: 20px;
        user-select: none;
    }

    &__info {
        flex-grow: 1;

        &-item:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
