<template>
    <v-container fluid grid-list-md class="grey lighten-4">
    <v-layout row wrap>

            <v-flex xs12 class="">
                <div class="post_container">

                    <h1 v-html="post.title.rendered" class="post_title"></h1>
                    <div class="pos_sub_title">Nguyên Liệu</div>
                    <div v-if="post.custom_fields" v-html="post.custom_fields.nguyen_lieu">
                    </div>
                    <div class="pos_sub_title">Cách làm</div>
                    <div class="post-content" v-html="post.content.rendered">
                    </div>

                </div>
            </v-flex>

    </v-layout>
    </v-container>
</template>
<style scoped>
    .post_container {
        padding: 30px 0;
    }

    .post_title {
        color: #a92929;
        font-size: 22px;
        font-weight: 700;
        padding-bottom: 20px;
    }

    .pos_sub_title {
        display: block;
        margin-bottom: 10px;
        color: #20c4f4;
        float: left;
        width: 100%;
        font-size: 16px;
        font-weight: bolder;
    }

    .post-content {
        font-size: 18px;
    }

    .post-content img {
        max-width: 100%;
        height: auto;
    }

    .post-content ul {
        margin-left: 25px;
    }
</style>
<script>
    import axios from 'axios'

    export default {
        computed: {
            post() {
                return this.$store.getters.postById
            }
        },
        created() {
            if (this.post.length === 0) {
                this.$store.dispatch('postById', {_id: this.$route.params.id})
            }
        },
        methods: {
            getLink: function (post) {
                let postUrl = post.link.replace('http://local.bepgiadinh.com', 'category')
                postUrl = 'post/' + post.id
                return postUrl
            }
        }
    }
</script>