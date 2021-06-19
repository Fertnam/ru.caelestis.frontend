import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@store/index'

// Layouts
import DefaultLayout from '@layouts/default.vue'
import AdminLayout from '@layouts/admin.vue'

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

router.beforeEach((to, from, next) => {
    const isGuest = store.getters['auth/isGuest']

    if (to.meta.requiresAuth && isGuest) {
        next(from)
        return
    }

    next()
})

export default router
