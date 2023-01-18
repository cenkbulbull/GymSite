import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//styles
import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome.min.css"
import "./assets/css/tooplate-gymso-style.css"

import VueSmoothScroll from 'vue3-smooth-scroll'
createApp(App).use(store).use(router).use(VueSmoothScroll).mount('#app')
