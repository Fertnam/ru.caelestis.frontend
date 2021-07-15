import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/default.vue'
import AdminLayout from '@/layouts/admin.vue'

// Страницы
import DefaultPages from './default'
import AdminPages from './admin'

const routes: RouteRecordRaw[] = [
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
})

export default router
