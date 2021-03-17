import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@layouts/default'
import AdminLayout from '@layouts/admin'

// Страницы
import DefaultPages from './default'
import AdminPages from './admin'

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultLayout,
    children: DefaultPages,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: AdminPages,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
})

export default router
