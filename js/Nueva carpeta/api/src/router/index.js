import {createRouter, createWebHistory, routerKey} from "vue-router";
import Usuarios from '../views/Usuarios.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/users',
        name: 'Users',
        component: Usuarios
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router.routerKey;