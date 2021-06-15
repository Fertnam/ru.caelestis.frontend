export {}

import Api from '@classes/Api/Api'
import { AxiosStatic } from 'axios'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $style: any
        $timeout: (time: number) => Promise<unknown>
        $api: Api
        $axios: AxiosStatic
    }
}
