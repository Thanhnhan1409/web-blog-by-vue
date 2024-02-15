import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '/',
    //     name: 'dashboard',
    //     meta: { layout: 'empty' },
    //     component: () => import('@/views/Dashboard.vue'),
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     meta: { layout: 'empty' },
    //     component: () => import('@/views/auth/LoginPage.vue'),
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     meta: { layout: 'empty' },
    //     component: () => import('@/views/auth/RegisterPage.vue'),
    // },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router