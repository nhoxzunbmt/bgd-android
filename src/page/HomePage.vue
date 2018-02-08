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
        components:{
            PostList
        },
        // computed: {
        //     posts () {
        //         return this.$store.getters.allPosts
        //     }
        // },
        // Fetches posts when the component is created.
        data() {
            return {
                posts : []
            };
        },
        created() {
            console.log('this.posts.length = ' + this.posts.length);
            if (this.posts.length === 0) {
                this.$store.dispatch('allPosts')
            }
        },
        methods: {
            fetchData: function () {
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
