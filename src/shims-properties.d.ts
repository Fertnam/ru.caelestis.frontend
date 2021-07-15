export {}

import { Store } from 'vuex'
import { AxiosStatic } from 'axios'
import { Emitter } from 'mitt'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store
        $style: any
        $refs: any
        $timeout: (time: number) => Promise<void>
        $axios: AxiosStatic
        $mitter: Emitter
    }
}
