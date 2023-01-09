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
            name: 'login',
            component: () => import('@/views/common/LoginPage')
        },
        {
            path: '/main',
            name: 'Homeview',
            component: () => import('@/views/HomeView'),
            children: [
                {
                    path: 'qrhome',
                    name: 'QRhome',
                    component: () => import('@/views/common/AdminMain')
                },
                {
                    path: "snapshot",
                    name: "SnapShot",
                    component: () => import("@/views/snapshot/SnapShot")
                }
            ]
        }
    ]
});

export default router;