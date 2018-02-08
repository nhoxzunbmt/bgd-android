import {
    ALL_POSTS,
    POST_DETAIL,

    ALL_CATEGORIES,
    CATEGORY_DETAIL

} from './mutation-types'

export const postMutations = {
    [ALL_POSTS] (state) {
        state.showLoader = true
        // this[]
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


