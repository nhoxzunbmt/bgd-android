<template>
    <div class="hello">
        <h1 class="text-sm-center">{{ msg }}</h1>

        <v-app id="inspire">
            <v-card>
                <v-card-text>
                    <p>{{ word_number }}</p>
                    <v-slider v-model="word_number" step="1" min="1" max="3000"></v-slider>
                </v-card-text>
            </v-card>

            <v-card>
                <v-card-text>
                    <h1 class="text-md-center" style="text-align: center;text-transform: uppercase">{{
                        english_word.WordName }}
                    </h1>
                    <p style="text-align: center;color:red">
                        {{ english_word.Pronounce }}
                    </p>
                </v-card-text>

                <div class="sound-pronunciation">

                    <div v-for="sound in filteredItems(english_word.WordPronunciationId)" class="sound-item">
                            <audio ref="soundElm" :src="getSoundSrc(sound.WordName,sound.Position)"></audio>
                            {{ sound.Pronounce }}
                    </div>

                </div>
                    <button v-on:click="play_sound" type="button">Click Me to Play Sound</button>
                    <audio ref="audioElm" :src="getSoundSrc(english_word.WordName,english_word.Position)"></audio>
                <div>

                </div>
            </v-card>
        </v-app>


        <!--<h1>Number of row : {{ lengthOfValues }}</h1>-->
        <!--<ul v-for="row in englishes">-->
        <!--&lt;!&ndash;<li>{{ row }}</li>&ndash;&gt;-->
        <!--<li>{{ row.Pronounce }} / {{ row.WordName }}</li>-->

        <!--<ul>-->
        <!--<li  v-for="sound in filteredItems(row.WordPronunciationId)">-->
        <!--<audio controls>-->
        <!--<source :src="getSoundSrc(sound.WordName,sound.Position)" type="audio/mp3">-->
        <!--</audio>-->
        <!--{{ sound.WordName}} / {{ sound.Pronounce }}-->
        <!--</li>-->
        <!--</ul>-->
        <!--</ul>-->


        <!--<p>{{ data_db }}</p>-->
        <br>

    </div>
</template>
<style lang="scss" scoped>
    .sound-pronunciation {
        display: block;
        text-align: center;
        width: 100%;
        float: left;

        .sound-item {
            float: left;
            border: 1px solid red;
            padding: 10px;
        }
    }
</style>
<script>
    import SQL from 'sql.js'
    import axios from 'axios'
    import _ from 'lodash'

    export default {
        data() {
            return {
                msg: 'ENGLISH FOR TODAY',
                english_word: [],
                english_sound: [],

                englishes: [],
                englishes_sound_items: [],

                word_number: 0
            }
        },

        created: function () {
            // this.$store.dispatch('getDBFile', { self: this })
            this.DBFileIsLoaded()


        },

        computed: {
            // lengthOfValues: function () {
            //     return this.$store.state.english.length
            // },
            // getValues: function () {
            //     console.log(this.$store.state.english);
            //     return this.$store.state.english
            // }

        },
        methods: {
            play_sound: function (event) {
                this.$refs.audioElm.play();
                // this.$refs.soundElm.each(function ($this) {
                //     $this.play();
                // })
                console.log(this.$refs.soundElm)
                for(let i = 0;i<=this.$refs.soundElm.length; i++){
                    this.$refs.soundElm[i].play()
                }
            },
            getSoundSrc(name, position) {
                return 'https://lingcor.net/LearningEnglish/pronunciation/' + name + position + '.mp3';
            },
            filteredItems(id) {
                return this.englishes_sound_items.filter(item => {
                    return item.WordPronunciationId === id
                })
            },
            DBFileIsLoaded: function () {
                axios.get('http://localhost:8082/src/assets/lingcor.db3', {responseType: 'arraybuffer'}).then(response => {
                    let rawDataDBFile = new Uint8Array(response.data)
                    let dataDBFile = []
                    for (let i = 0; i < rawDataDBFile.length; ++i) {
                        dataDBFile[i] = String.fromCharCode(rawDataDBFile[i])
                    }
                    return dataDBFile.join('');
                }).then(response => {
                    let db = new SQL.Database(response)
                    let sql = 'select * from tbl_Word LIMIT 5'
                    //let stmt = db_data.exec(sql)
                    let stmt = db.prepare(sql);
                    stmt.getAsObject();
                    let id_item = [];
                    //let englishes_items = [];
                    while (stmt.step()) { //
                        let row = stmt.getAsObject();
                        //console.log(row)
                        //this.englishes.push(row)
                        //englishes_items[row.ID] = row;
                        this.englishes.push(row);
                        id_item.push(row.WordPronunciationId);
                    }

                    this.english_word = this.englishes[0]
                    // this.englishes = englishes_items;
                    //console.log(englishes_items);

                    sql = 'select * from tbl_WordChild where WordPronunciationId IN( ' + id_item.join(',') + ')'
                    stmt = db.prepare(sql);
                    stmt.getAsObject();

                    //let englishes_sound_items = [];
                    while (stmt.step()) { //
                        let sound_row = stmt.getAsObject();
                        this.englishes_sound_items.push(sound_row);
                    }
                    //console.log(englishes_sound_items);
                    //this.englishes_sound_items = englishes_sound_items;
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
