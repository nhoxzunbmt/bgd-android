import {
    ALL_POSTS,
    ALL_POSTS_SUCCESS,
    POST_DETAIL,

    ALL_CATEGORIES,
    CATEGORY_DETAIL, POST_BY_CATEGORY, POST_BY_CATEGORY_SUCCESS, POST_DETAIL_SUCCESS, GET_DBFILE, SET_DBFILE

} from './mutation-types'

export const postMutations = {
    [ALL_POSTS] (state) {
        state.showLoader = true
        // this[]
    },
    [ALL_POSTS_SUCCESS] (state,payload) {
        state.posts = payload
        state.showLoader = false
    },


    [POST_BY_CATEGORY] (state) {
        state.showLoader = true
    },


    [POST_BY_CATEGORY_SUCCESS] (state) {
        state.posts = payload
        state.showLoader = false
    },


    [POST_DETAIL] (state) {
        state.showLoader = true
    },
    [POST_DETAIL_SUCCESS] (state,payload) {
        state.post = payload
        state.showLoader = false
    },
    [GET_DBFILE] (state,dbFile) {
        //alert(dbFile)
        //console.log(dbFile);
        //console.log('begin GET_DBFILE mutations in store')
        state.dbFile = dbFile
        state.showLoader = true
        //console.log('this length ' + this.state.dbFile.length)
        //console.log('end GET_DBFILE mutations in store')
    },
    [SET_DBFILE] (state,payload) {
        state.db = payload.data
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


export const englishMutations = {

}
