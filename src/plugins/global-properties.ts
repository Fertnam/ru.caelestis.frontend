import { App } from 'vue'

export default {
    install(app: App): void {
        function timeout(time: number): Promise<unknown> {
            return new Promise((resolve) => {
                setTimeout(resolve, time)
            })
        }

        app.config.globalProperties.$timeout = timeout
    },
}
