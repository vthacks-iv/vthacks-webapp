// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from '../node_modules/vuetify/dist/vuetify.js'
import VueResource from 'vue-resource'
import App from './App'

import store from '../src/store'
import { router } from './routes'

/* eslint-disable no-new */

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.headers.common['Content-Type'] = 'application/json'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
