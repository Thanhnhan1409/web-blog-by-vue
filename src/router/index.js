import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'posts',
        meta: { layout: 'auth' },
        component: () => import('../views/posts/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'empty' },
        component: () => import('../views/auth/loginPage.vue'),
    },
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