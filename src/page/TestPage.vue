<template>
    <div>

        <div class="app"
             style="height: 1200px;"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="busy"
             infinite-scroll-distance="10">
            <PostList v-bind:posts="posts" v-on:viewPost="viewPost"></PostList>
        </div>
    </div>
</template>

<style>

</style>
<style scoped>
    .post_title a {
        text-align: center;
        font-size: 18px;
        color: #a92929;
        text-decoration: none;
        margin-bottom: 10px;
        display: block;
    }
</style>

<script>
    import PostList from '@/components/PostList'
    import axios from 'axios'
    export default {
        components: {
            PostList
        },
        data() {
            return {
                busy: false,
                page:1,
                posts: [],
            }
        },

        methods: {
            loadMore: function () {
                this.busy = true;
                this.fetchData();
                this.page++;
            },
            fetchData: function () {

                axios.get(`${process.env.API_URL}wp/v2/posts?page=${this.page}&per_page=12&fields=id,title,slug,date,better_featured_image,excerpt&categories=1`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.posts = response.data

                    })
                    .then( () => {
                        this.busy = false;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

            },
            viewPost: function (id_post) {
                console.log('ID POST VIEW = ' + id_post)
            }
        }
    }
</script>
