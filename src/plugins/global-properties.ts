import { App } from 'vue'
import Api from '@classes/Api/Api'
import axios from 'axios'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<unknown> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        app.config.globalProperties.$timeout = timeout
        app.config.globalProperties.$api = new Api()
        app.config.globalProperties.$axios = axios
    },
}
