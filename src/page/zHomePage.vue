<template>
    <div>
        <main class="bd-masthead" id="content" role="main">
            <div class="container">
                <PostList v-bind:posts="posts"></PostList>
            </div>
        </main>
    </div>
</template>

<style>

</style>


<script>
    import axios from 'axios'
    import _ from 'lodash'
    import PostList from '@/components/PostList'

    export default {
        components: {
            PostList
        },
        computed: {
            posts () {
                //console.log('posts')
                return this.$store.getters.allPosts
            }
        },
        // data() {
        //     return {
        //         category_name: 'Mon Ngon',
        //         posts: [],
        //         errors: []
        //     }
        // },
        // Fetches posts when the component is created.
        created() {
            if (this.posts.length === 0) {
                //console.log('allPosts')
                this.$store.dispatch('allPosts')
            }
        },
        methods: {
            fetchData(){
                axios.get(`${process.env.API_URL}wp/v2/posts?page=1&per_page=12&fields=id,title,slug,date,better_featured_image,excerpt`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
