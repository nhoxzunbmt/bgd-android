import {
    ALL_POSTS,
    ALL_POSTS_SUCCESS,
    POST_DETAIL,

    ALL_CATEGORIES,
    CATEGORY_DETAIL

} from './mutation-types'

export const postMutations = {
    [ALL_POSTS] (state) {
        state.showLoader = true
        // this[]
    },
    [ALL_POSTS_SUCCESS] (state) {
        state.showLoader = true
    },
    [POST_DETAIL] (state) {
        state.showLoader = true
    }
}

export const categoryMutations = {
    [ALL_CATEGORIES] (state) {
        state.showLoader = true
        // this[]
    },
    [CATEGORY_DETAIL] (state) {
        state.showLoader = true
    },
}


