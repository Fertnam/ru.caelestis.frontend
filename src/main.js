import { createApp } from 'vue'
import App from './App'
import router from './router'

// Подключаем корневой CSS-файл
import '@scss/app.scss'

createApp(App).use(router).mount('#caelestis')
