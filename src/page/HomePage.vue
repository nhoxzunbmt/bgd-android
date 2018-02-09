<template>
    <div>
        <main class="bd-masthead" id="content" role="main">
            <div class="container">
                <PostList v-bind:posts="posts"></PostList>
            </div>
        </main>
    </div>
</template>

<script>
    import PostList from '@/components/PostList'
    export default {
        components: {
            PostList
        },
        computed: {
            posts () {
                return this.$store.getters.allPosts
            }
        },
        created() {
            if (this.posts.length === 0) {
                this.$store.dispatch('allPosts')
            }
        }
    }
</script>
