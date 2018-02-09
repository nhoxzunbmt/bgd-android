<template>
    <b-container>
        <div class="post_container">
            <b-row>
                <b-col>
                    <!--<h1 v-html="post.title.rendered" class="post_title"></h1>-->
                    <div class="pos_sub_title">Nguyên Liệu</div>
                    <div v-if="post.custom_fields" v-html="post.custom_fields.nguyen_lieu">
                    </div>
                    <div class="pos_sub_title">Cách làm</div>
                    <div class="post-content">
                        {{ post.content.rendered }}
                    </div>
                </b-col>
            </b-row>
        </div>
    </b-container>

</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                post: {},
                errors: []
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                return axios.get(`${process.env.API_URL}wp/v2/posts/${this.$route.params.id}`)
                    .then((res) => {
                            this.post = res.data
                        }
                    )
            },
            getLink: function (post) {
                let postUrl = post.link.replace('http://local.bepgiadinh.com', 'category')
                postUrl = 'post/' + post.id
                return postUrl
            }
        }
    }
</script>
<style scoped>
    .post_container {
        padding: 50px 0;
    }

    .post_title {
        color: #a92929;
        font-size: 22px;
        font-weight: 700;
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