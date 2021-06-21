<template>
    <transition
        enter-active-class="animate__animated animate__slideInDown animate__faster"
        leave-active-class="animate__animated animate__slideOutUp animate__faster"
    >
        <div v-if="isOpen" :class="classes" v-text="message" />
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

enum Types {
    SUCCESS,
    ERROR,
}

let type: Types = Types.SUCCESS

export default defineComponent({
    name: 'Banner',
    data() {
        return {
            isOpen: false,
            message: '',
            type,
            Types,
        }
    },
    computed: {
        classes(): string[] {
            let classes: string[] = [this.$style.banner]

            if (this.type === Types.ERROR) {
                classes.push(this.$style.bannerError)
            }

            return classes
        },
    },
    methods: {
        async show(
            message: string,
            type: Types = Types.SUCCESS,
            time: number = 5000
        ): Promise<void> {
            this.type = type
            this.message = message

            this.isOpen = true

            await this.$timeout(time)

            this.isOpen = false

            this.type = Types.SUCCESS
            this.message = ''
        },
    },
})
</script>

<style lang="scss" module>
.banner {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    z-index: 150;

    padding: 14px;

    font-weight: bold;
    text-align: center;

    box-shadow: 0 0 5px var(--dark-blue-v2);

    composes: light-theme light-theme--v_1 from '~@default-scss-modules/theme';

    &--error {
        @include red-theme;
        box-shadow: 0 0 5px var(--dark-red);
    }
}
</style>
