
export const postGetters = {
    allPosts: (state, getters) => {
        return state.posts
    },
    postById: (state, getters) => id => {
        if (getters.allPosts.length > 0) {
            return getters.allPosts.filter(p => p._id === id)[0]
        } else {
            return state.post
        }
    }
}

export const categoryGetters = {
    allCategories: state => state.categories
}
