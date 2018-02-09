import axios from 'axios'

let API_BASE = process.env.API_URL;
import {
    ALL_POSTS,
    ALL_POSTS_SUCCESS,
    POST_BY_CATEGORY,
    POST_BY_CATEGORY_SUCCESS,
    POST_DETAIL,
    POST_DETAIL_SUCCESS

} from './mutation-types'

export const postActions = {
    allPosts({commit}) {
        console.log('allPosts running')
        commit(ALL_POSTS)
        axios.get(`${API_BASE}wp/v2/posts?page=1&per_page=12&fields=id,title,slug,date,better_featured_image,excerpt`).then(response => {
            console.log('allPosts Get Success')
            commit(ALL_POSTS_SUCCESS, response.data)
        })
    },

    getPostByCategory({commit}, payload) {
        console.log('getPostByCategory running')
        commit(POST_BY_CATEGORY)
        axios.get(`${API_BASE}wp/v2/posts?page=${payload.currentPage}&per_page=12&fields=id,title,slug,date,better_featured_image,excerpt&categories=${payload._id}`).then(response => {
            commit(POST_BY_CATEGORY_SUCCESS, response.data)
        })
    },


    postById({commit}, payload) {
        commit(POST_DETAIL)
        axios.get(`${API_BASE}wp/v2/posts/${payload._id}`).then(response => {
            console.log(payload, response.data)
            commit(POST_DETAIL_SUCCESS, response.data)
        })
    },
}


