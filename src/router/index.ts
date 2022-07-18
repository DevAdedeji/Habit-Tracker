import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"





const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       { path: '/',
        name: 'Home',
        component: Home,
    },
    { path: '/login',
        name: 'login',
        component: () => import("../pages/Login.vue"),
    },
    { path: '/register',
        name: 'register',
        component: () => import("../pages/Register.vue"),
    },
    ],
})

console.log(router);


export default router
