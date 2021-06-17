import { App } from 'vue'
import api from '@classes/Api'
import services from '@/services'
import axios from 'axios'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<unknown> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        app.config.globalProperties.$timeout = timeout
        app.config.globalProperties.$api = api
        app.config.globalProperties.$services = services
        app.config.globalProperties.$axios = axios
    },
}
