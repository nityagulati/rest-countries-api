/*jshint -W033 */

import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/rest-countries-api/',
        name: 'home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router