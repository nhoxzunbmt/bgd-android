<template>
    <b-row>
        <b-col md="4" class="post_item" v-if="posts && posts.length" v-for="post of posts" :key="post.id">
            <div v-if="post.better_featured_image">
                <b-img :src="getFeaturedImage(post)" fluid alt="Responsive image" />
            </div>

            <div>

            <router-link :to="getLink(post)" v-html="post.title.rendered" class="post_title"></router-link>
            </div>
            <p class="card-text" v-html="getExcerpt(post)"></p>
            <button v-on:click="viewPost('${post.id}')">Xem ngay</button>
        </b-col>
    </b-row>
</template>
<style scoped>
    .post_item{
        margin-bottom: 30px;
    }
    .post_title{
        text-align: center;
        font-size: 16px;
        color: #a92929;
        text-decoration: none;
        display: block;
        font-weight: bold;
        margin: 10px 0;
    }
</style>
<script>
    export default {
        props: {
            posts: {
                type: Object,
                require: true,
                default: function () {
                    return {  }
                }
            },
        },
        methods: {
            getLink: function (post) {
                let postUrl = post.link.replace('http://local.bepgiadinh.com', 'category')
                postUrl = '/post/' + post.id
                return postUrl
            },
            getFeaturedImage: function (post) {
                if (_.isUndefined(post.better_featured_image.media_details.sizes.featured)) return ''
                return post.better_featured_image.media_details.sizes.featured.source_url
            },
            getExcerpt: function (post) {
                return _.truncate(post.excerpt.rendered, {
                    'length': 120
                })
            },
            viewPost: function (id_post) {
                this.$emit('viewPost', id_post)
            }
        }
    }
</script>
