import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/common/LoginPage'),
        },
        {
            path: '/main',
            name: 'HomeView',
            component: () => import('@/views/HomeView'),
            children: [
                {
                    path: 'qrhome',
                    name: 'QRhome',
                    component: () => import('@/views/common/AdminMain'),
                },
                {
                    path: "snapshot",
                    name: "SnapShot",
                    component: () => import("@/views/snapshot/SnapShot"),
                }
            ]
        },
    ]
});

export default router;