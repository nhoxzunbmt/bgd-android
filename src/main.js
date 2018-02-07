// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Vue from 'vue'
// import VueOnsen from 'vue-onsenui'
import store from './store'
import App from './layout/default'
import BootstrapVue from 'bootstrap-vue'
import router from './router/routes'
import infiniteScroll from 'vue-infinite-scroll'


Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)
Vue.use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
