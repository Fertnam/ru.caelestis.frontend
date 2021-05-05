import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'admin.index',
        component: () => import('@admin-views/Index.vue'),
    },
]

export default routes
