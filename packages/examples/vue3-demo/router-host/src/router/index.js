import {createRouter, createWebHashHistory} from 'vue-router'
import {defineAsyncComponent} from 'vue'

const Home = {template: '<p>Home</p>'}

const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/introduce'
        },
        {
            path: '/login',
            name: 'Login',
            // component: () => import(/* webpackChunkName: "account" */ '../views/Login.vue')
            component: defineAsyncComponent(() => import("router-remote/Login"))
        },
        {
            path: '/shopping',
            name: 'Shopping',
            component: () => import(/* webpackChunkName: "shopping" */ '../views/Shopping.vue')
        }
        ,
        {
            path: '/account',
            name: 'Account',
            component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
        }
    ]
})

export default router
