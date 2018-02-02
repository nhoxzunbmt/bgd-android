import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/HomePage'
import CategoryPage from '@/page/CategoryPage'
import PostPage from '@/page/PostPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/category/:id',
            name: 'CategoryPage',
            component: CategoryPage
        },
        {
            path: '/post/:id',
            name: 'PostPage',
            component: PostPage
        }
    ]
})