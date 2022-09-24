/*jshint -W033 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMoon, faLightbulb, faMagnifyingGlass)

import './assets/main.css'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
