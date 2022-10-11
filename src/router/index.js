/*jshint -W033 */

import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Country from '@/views/Country.vue'

const routes = [
    {
        path: '/rest-countries-api/',
        name: 'home',
        component: Home
    },
    {
        path: '/rest-countries-api/:country',
        name: 'country',
        component: Country
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router