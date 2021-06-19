import { App } from 'vue'
import axios from 'axios'
import mitt from 'mitt'
import services from '@services/index'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<void> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        app.config.globalProperties.$axios = axios
        app.config.globalProperties.$mitter = mitt()

        app.config.globalProperties.$timeout = timeout
        app.config.globalProperties.$services = services
    },
}
