import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Плагины (из папки plugins)
import globalProperties from '@plugins/global-properties'
import fontAwesomeIcons from '@plugins/font-awesome-icons'

// Корневой CSS-файл
import '@scss/app.scss'

// Экземпляр приложения
const app = createApp(App)

app.use(store)
    .use(router)
    .use(globalProperties)
    .use(fontAwesomeIcons)
    .mount('#caelestis')
