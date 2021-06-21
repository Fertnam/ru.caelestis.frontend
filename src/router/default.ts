import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'default.index',
        component: () => import('@default-views/Index.vue'),
    },
    {
        path: 'server/:name/:version?',
        name: 'default.server',
        component: () => import('@default-views/Server.vue'),
    },
    {
        path: 'banlist',
        name: 'default.banlist',
        component: () => import('@default-views/Banlist.vue'),
    },
    {
        path: 'donate',
        name: 'default.donate',
        component: () => import('@default-views/Donate.vue'),
    },
    {
        path: 'rules',
        name: 'default.rules',
        component: () => import('@default-views/Rules.vue'),
    },
    {
        path: 'registration',
        name: 'default.registration',
        component: () => import('@default-views/Registration.vue'),
    },
    {
        path: 'profile',
        name: 'default.profile',
        component: () => import('@default-views/Profile.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: 'activation/:code',
        name: 'default.activation',
        component: () => import('@default-views/Activation.vue'),
    },
]

export default routes
