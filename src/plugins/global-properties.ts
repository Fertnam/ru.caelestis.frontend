import { App } from 'vue'
import axios from 'axios'
import api from '@api/index'
import services from '@services/index'
import mitt from 'mitt'

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
        app.config.globalProperties.$mitter = mitt()
    },
}
