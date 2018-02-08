import axios from 'axios'

let API_BASE = process.env.API_URL;
import {
   ALL_POSTS,

} from './mutation-types'

export const postActions = {
  allPosts ({commit}) {
    commit(ALL_POSTS)
    axios.get(`${API_BASE}/posts`).then(response => {
      commit(ALL_POSTS_SUCCESS, response.data)
    })
  },
  postById ({commit}, payload) {
    commit(POST_DETAIL)
    axios.get(`${API_BASE}/posts/${payload}`).then(response => {
      console.log(payload, response.data)
      commit(POST_DETAIL_SUCCESS, response.data)
    })
  },
}


