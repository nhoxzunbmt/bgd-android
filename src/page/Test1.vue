<template>
    <div id="example">
        <PostList v-bind:posts="posts"></PostList>
    </div>
</template>

<script>
    import PostList from '@/components/PostList'
    export default {
        name: 'Test1',
        created () {

            if (this.posts.length === 0) {
                console.log('allPosts')
                this.$store.dispatch('allPosts')
            }
        },
        components: {
            PostList
        },
        computed: {
            posts () {
                console.log('posts')
                return this.$store.getters.allPosts
            }
        },
        data() {
            return {
                message: 'người đông bến đợi thuyền xuôi ngược',
                counter:1,

            }
        }
    }
</script>