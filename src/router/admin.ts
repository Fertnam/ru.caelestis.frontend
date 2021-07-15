import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'admin.index',
        component: () => import('@/views/admin/Index.vue'),
    },
]

export default routes
