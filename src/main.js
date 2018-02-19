// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'vuetify/src/stylus/main.styl'

import App from './layout/master'
// import BootstrapVue from 'bootstrap-vue'
import router from './router/routes'
import infiniteScroll from 'vue-infinite-scroll'
import store from './store/index'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

// Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(infiniteScroll)
Vue.use(Vuex)

Vue.filter('toMota', function (value) {
    return `Đây là mô tả : ${value}`;
});
// Vue.mixin({
//   created: function () {
//     var myOption = this.$options.myOption
//     if (myOption) {
//       console.log(myOption)
//     }
//   }
// })

// Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
//   return toVal
// }

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

