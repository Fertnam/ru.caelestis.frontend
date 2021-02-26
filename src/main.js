import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Подключаем корневой CSS-файл
import './assets/scss/app.scss'

createApp(App).use(router).mount('#caelestis')
