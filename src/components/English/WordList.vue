<template>
    <div class="word_list">
        <p>{{ word_name }}</p>

        <ul>
            <li v-for="word in word_list" :key="word">
                <span v-bind:style="{ color: word == word_name ? 'red' : '' }">{{ word }}</span>
            </li>
        </ul>
    </div>
</template>


<style>
    .word_list {
        padding: 20px;
        background-color: #2196F3;
        color: #FFF
    }
</style>

<script>
    export default {
        props: {
            word_name: {
                type: String,
                require: false,
                default: function () {
                    return ''
                }
            },
            word_list:{
                type: Array,
                require: true,
                default: function () {
                    return []
                }
            },
            word_number:{
                type: Number,
                require: false,
                default: function () {
                    return 0
                }
            },
        },
    }
</script>