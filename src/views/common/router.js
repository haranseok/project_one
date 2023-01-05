const component = [
    {
        path: "/home",
        name: "login",
        component: () => import("@/views/common/LoginPage")
    },
    {
        path: "/main",
        name: "AdminMain",
        component: () => import("@/views/common/AdminMain")
    }
]

export default component;