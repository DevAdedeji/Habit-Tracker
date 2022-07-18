import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Login from "../pages/Login.vue"
import Register from "../pages/Register.vue"

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       { path: '/',
        name: 'Home',
        component: Home,
    },
    { path: '/login',
        name: 'login',
        component: Login,
    },
    { path: '/register',
        name: 'register',
        component: Register,
    },
    ],
})

console.log(router);


export default router
