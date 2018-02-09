import Vue from 'vue'
import Vuex from 'vuex'

import { postGetters, categoryGetters } from './getters'
import { postMutations, categoryMutations } from './mutations'
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
    actions: {
        ADD_TODO:  function ({ commit }, new_todo){
            var set_new = {
                todo: new_todo,
                status: false
            }
            commit('ADD_TODO_MUTATION', set_new);
        },
        COMPLETE_TODO: function ({commit}, todo){
            commit('COMPLETE_TODO_MUTATION', todo)
        },
        GET_POSTS: function ({commit}) {
            commit('ADD_TODO_MUTATION', set_new);
        }
    },
    mutations: {
        ADD_TODO_MUTATION: function(state, new_todo){
            state.todos.push(new_todo);
        },
        COMPLETE_TODO_MUTATION: function(state, todo){
            state.todos.find(x => x.todo === todo).status = true;
        }
    },
    getters: {
        not_done: state =>{
            var filtered = state.todos.filter(function(el){
                return el.status === false
            });
            return filtered;
        },
        done: state =>{
            var filtered = state.todos.filter(function(el){
                return el.status === true
            });
            return filtered;
        }
    }
})