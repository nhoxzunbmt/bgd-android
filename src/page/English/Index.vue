<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>Number of row : {{ lengthOfValues }}</h1>
        <ul v-for="row in getValues">
            {{ row[0] }} / {{ row[1] }}
        </ul>
        <br>
        <h2>github.com</h2>
        <ul>
            <li><a href="https://github.com/skysign/public/tree/master/vue.js/boilerplate/vuejs-sqljs-boilerplate/" target="_blank">vuejs-sqljs-boilerplate</a></li>
        </ul>
    </div>
</template>

<script>
    import SQL from 'sql.js'

    export default {
        data () {
            return {
                msg: 'Welcome to Vue.js sql.js boilerplate'
            }
        },

        created: function () {
            this.$store.dispatch('getDBFile', { self: this })
        },

        computed: {
            lengthOfValues: function () {
                return this.$store.state.english.length
            },
            getValues: function () {
                return this.$store.state.english
            }
        },


        methods: {
            DBFileIsLoaded: function () {
                //console.log('begin DBFileIsLoaded')
                let db_data = new SQL.Database(this.$store.state.dbFile)
                this.$store.commit('SET_DBFILE',{data: db_data})
                let sql = 'select * from days'
                let rlt = this.$store.state.db.exec(sql)
                this.$store.state.english = rlt[0].values

                //console.log(rlt)
                //console.log('end DBFileIsLoaded')
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
