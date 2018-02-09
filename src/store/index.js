import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { postGetters, categoryGetters } from './getters'
import {postMutations, categoryMutations, englishMutations} from './mutations'
import { postActions } from './actions'
Vue.use(Vuex)
export default new Vuex.Store({

    strict: true,
    state: {
        // bought items
        cart: [
            {
                id: 1,
                name: 'Toy 1'
            }
        ],
        // ajax loader
        showLoader: false,
        // selected product
        product: {},
        // all products
        products: [],

        post: [],
        posts: [],

        categories: []
    },
    mutations: Object.assign({

    }, postMutations, categoryMutations, englishMutations),
    getters: Object.assign({}, postGetters, categoryGetters),
    actions: Object.assign({

    }, postActions),
    plugins: [createPersistedState()]
})