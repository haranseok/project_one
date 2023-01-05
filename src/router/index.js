import { createRouter, createWebHistory } from "vue-router";
import Views from "@/views/index"
const routes = Views;
let router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;