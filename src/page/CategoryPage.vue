<template>
    <div>
        <main class="bd-masthead" id="content" role="main">

            <b-container>
                <PostList v-bind:posts="posts" v-on:viewPost="viewPost"></PostList>




                <b-row>
                    <b-pagination :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>
                    <!--<div>currentPage: {{currentPage}}</div>-->
                </b-row>

                <!--<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">-->
                    <!--...-->
                <!--</div>-->
            </b-container>

        </main>
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
    import axios from 'axios'
    import PostList from '@/components/PostList'

    export default {
        components: {
            PostList
        },
        computed: {
            posts () {
                //console.log('posts')
                return this.$store.getters.postByCategory
            }
            //version: () => 1

        },
        // data() {
        //     return {
        //         category_name: 'Mon Ngon',
        //         posts: [],
        //         errors: [],
        //         currentPage: 1,
        //         id_post: 0,
        //         busy: false,
        //         count:0,
        //         isSelected:true
        //     }
        // },
        // Fetches posts when the component is created.
        created() {
            if (this.posts.length === 0) {
                //console.log('allPosts')
                this.$store.dispatch('postByCategory',{_id:this.$route.params.id,currentPage:this.currentPage})
            }
            //this.fetchData()
            // if (this.posts.length === 0) {
            //     console.log('allPosts')
            //     this.$store.dispatch('allPosts')
            // }
        },
        watch: {
            //'$route': 'fetchData',
            //'currentPage': 'fetchData'
        },
        methods: {
            fetchData: function () {
                // axios.get(`${process.env.API_URL}wp/v2/posts?page=${this.currentPage}&per_page=12&fields=id,title,slug,date,better_featured_image,excerpt&categories=${this.$route.params.id}`)
                //     .then(response => {
                //         // JSON responses are automatically parsed.
                //         this.posts = response.data
                //
                //     })
                //     .catch(e => {
                //         this.errors.push(e)
                //     })

            },
            viewPost: function (id_post) {
                console.log('ID POST VIEW = ' + id_post)
            }
        }
    }
</script>
