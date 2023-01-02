import { createRouter, createWebHistory } from "vue-router";
import Views from "@/views/router"
const routes = Views;
let router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;