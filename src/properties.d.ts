export {}

import { Store } from 'vuex'
import { Api } from '@api/index'
import { Services } from '@services/index'
import { AxiosStatic } from 'axios'
import { Emitter } from 'mitt'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store
        $style: any
        $timeout: (time: number) => Promise<unknown>
        $api: Api
        $services: Services
        $axios: AxiosStatic
        $mitter: Emitter
    }
}
