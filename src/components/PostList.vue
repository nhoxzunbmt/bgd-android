<template>
    <v-layout column>
        <v-flex xs12 sm6 v-if="posts && posts.length" v-for="post of posts"
                :key="post.id">
            <v-card class="post_item">
                <v-card-media v-if="post.better_featured_image" :src="getFeaturedImage(post)" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">
                            <router-link :to="getLink(post)" v-html="post.title.rendered" class="post_title"></router-link>
                        </h3>
                        <span>{{ post.title.rendered | toMota }}</span>
                        <div v-html="getExcerpt(post)"></div>
                    </div>
                </v-card-title>

            </v-card>
        </v-flex>

        <div>
            <div md="4" class="post_item {selected: isSelected}" v-if="posts && posts.length" v-for="post of posts"
                 :key="post.id">
                <div v-if="post.better_featured_image">
                    <img :src="getFeaturedImage(post)" alt=""/>
                </div>

                <div>

                    <router-link :to="getLink(post)" v-html="post.title.rendered" class="post_title"></router-link>

                </div>
                <p class="card-text" v-html="getExcerpt(post)"></p>
                <!--<button v-on:click="viewPost(post.id)">Xem ngay</button>-->
            </div>
        </div>
    </v-layout>

</template>
<style scoped>
    .post_item {
        margin: 0 0 30px 0;
    }

    .post_title {
        text-align: center;
        font-size: 16px;
        color: #a92929;
        text-decoration: none;
        display: block;
        font-weight: bold;
        margin: 10px 0;
        padding: 0;
    }
    .card__title--primary
    {
        padding: 0 10px;
    }
</style>
<script>
    import _ from 'lodash'

    export default {
        props: {
            posts: {
                type: Array,
                require: true,
                default: function () {
                    return {}
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
                return post.better_featured_image.media_details.sizes.featured.source_url.replace('http://local.bepgiadinh.com', 'https://bepgiadinh.com')
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
