export {}

import { Store } from 'vuex'
import { Api } from '@classes/Api'
import { Services } from '@/services'
import { AxiosStatic } from 'axios'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store
        $style: any
        $timeout: (time: number) => Promise<unknown>
        $api: Api
        $services: Services
        $axios: AxiosStatic
    }
}
