// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from '../node_modules/vuetify/dist/vuetify.js'
import VueResource from 'vue-resource'
import App from './App'
import { routes } from './routes.js'

/* eslint-disable no-new */

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.options.root = 'https://vthacks.webscript.io/'
Vue.http.headers.common['Content-Type'] = 'application/json'

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
