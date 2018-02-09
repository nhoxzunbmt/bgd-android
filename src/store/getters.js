
export const postGetters = {
    allPosts: (state, getters) => {
        return state.posts
    },
    postByCategory: (state, getters) => {
        return state.posts
    },
    postById: (state, getters) => {
        return state.post
    }
}

export const categoryGetters = {
    allCategories: state => state.categories
}
