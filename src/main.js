// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Vue from 'vue'
import Vuex from 'vuex'

import App from './layout/default'
import BootstrapVue from 'bootstrap-vue'
import router from './router/routes'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store/index'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)
Vue.use(infiniteScroll);
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

