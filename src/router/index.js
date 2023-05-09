/*jshint -W033 */

import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Country from '@/views/Country.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
    {
        path: '/rest-countries-api/',
        name: 'home',
        component: Home
    },
    {
        path: '/rest-countries-api/:name',
        name: 'country',
        component: Country,
        props: true,
    },
    {
        path: '/rest-countries-api/:catchAll(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
})

export default router