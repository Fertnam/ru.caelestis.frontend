<template>
    <div :class="$style.page">
        <h1 :class="[captionStyle, $style.pageCaption]">Профиль</h1>

        <div v-if="isAuth" :class="$style.personal">
            <Skin :class="$style.personalSkin" />

            <div :class="$style.personalInfo">
                <InfoTable :class="$style.personalInfoItem" />

                <ChangeEmail :class="$style.personalInfoItem" />
                <ChangePassword :class="$style.personalInfoItem" />
                <ChangeIpProtection :class="$style.personalInfoItem" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skin from '@default-components/views/profile/Skin.vue'
import InfoTable from '@default-components/views/profile/InfoTable.vue'
import ChangeEmail from '@default-components/views/profile/ChangeEmail.vue'
import ChangePassword from '@default-components/views/profile/ChangePassword.vue'
import ChangeIpProtection from '@default-components/views/profile/ChangeIpProtection.vue'
import { caption as captionStyle } from '@default-scss-modules/caption.module.scss'

export default defineComponent({
    name: 'ProfilePage',
    components: {
        Skin,
        InfoTable,
        ChangeEmail,
        ChangePassword,
        ChangeIpProtection,
    },
    data() {
        return {
            captionStyle,
        }
    },
    computed: {
        isAuth(): boolean {
            return this.$store.getters['auth/user'].isAuth()
        },
    },
    watch: {
        isAuth(newValue: boolean): void {
            if (!newValue) {
                this.$router.push({ name: 'default.index' })
            }
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
