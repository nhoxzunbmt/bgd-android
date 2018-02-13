<template>
    <div style="background-color: #ccc">
        <h1>{{ upCase() + ' - ' + word_number }}</h1>
        <v-btn-toggle v-model="toggle_exclusive" multiple>
            <v-btn flat @click="prev()">
                <v-icon>skip_previous</v-icon>
            </v-btn>
            <v-btn flat @click="play()">
                <v-icon>play_circle_outline</v-icon>
            </v-btn>
            <v-btn flat @click="pause()" v-show="false">
                <v-icon>pause_circle_outline</v-icon>
            </v-btn>
            <v-btn flat @click="next()">
                <v-icon>skip_next</v-icon>
            </v-btn>
            <v-btn flat @click="stop()">
                <v-icon>stop</v-icon>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>
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
            word_list: {
                type: Array,
                require: true,
                default: function () {
                    return []
                }
            },
            word_number: {
                type: Number,
                require: false,
                default: function () {
                    return 0
                }
            },
        },
        data() {
            return {
                toggle_exclusive: [0, 1, 2, 3, 4]
            }
        },
        methods: {
            upCase() {
                return this.word_name.toUpperCase()
            },
            prev() {

            },
            play() {

                // if ((this.word_number + 1) === this.word_list.length) {
                //     this.word_number = 0
                // }
                // else {
                //     this.word_number += 1
                //
                // }
                //
                // this.word_name = this.word_list[this.word_number]

                this.$emit('Playing')

                //this.$emit('WordNumberWasChange', this.word_number)


            },
            pause() {

            },
            next() {

            },
            stop() {

            }
        }
    };
</script>
