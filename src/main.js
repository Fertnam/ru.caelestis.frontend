import { createApp } from 'vue'
import App from './App'
import router from './router'

// Подключаем сторонние библиотеки
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Подключаем плагины (из папки plugins)
import '@plugins/font-awesome-icons'

// Подключаем корневой CSS-файл
import '@scss/app.scss'

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#caelestis')
