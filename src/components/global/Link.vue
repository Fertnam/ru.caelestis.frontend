<template>
    <component :is="tag" :to="link.to" :href="link.href">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ILink } from '@/types/Link'

export default defineComponent({
    name: 'Link',
    props: {
        link: {
            type: Object as PropType<ILink>,
            required: true,
        },
    },
    computed: {
        tag(): string {
            if (this.link.to) {
                return 'router-link'
            }

            if (this.link.href) {
                return 'a'
            }

            return 'div'
        },
    },
})
</script>
