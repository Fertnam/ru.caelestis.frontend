import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@layouts/default'
import AdminLayout from '@layouts/admin'

// Страницы
import DefaultChildren from './default'
import AdminChildren from './admin'

const routes = [
  {
    path: '/',
    name: 'default',
    component: DefaultLayout,
    children: DefaultChildren,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: AdminChildren,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
