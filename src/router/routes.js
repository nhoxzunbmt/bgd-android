import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/HomePage'
import CategoryPage from '@/page/CategoryPage'
import PostPage from '@/page/PostPage'
import TestPage from '@/page/TestPage'
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
            path: '/post/:slug',
            name: 'PostPage',
            component: PostPage
        },
        {
            path: '/test',
            name: 'TestPage',
            component: TestPage
        },
        {
            path: '/admin',
            name: 'Admin',

            // Parent routes still has a component
            component: TestPage,

            // Child routes
            children: [
                {
                    path: 'new',
                    name: 'New',
                    component: TestPage
                },
                {
                    path: '',
                    name: 'Products',
                    component: TestPage
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: TestPage
                }
            ]
        }
    ]
})