import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'default.index',
        component: () => import('@/views/default/Index.vue'),
    },
]

export default routes
