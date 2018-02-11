<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >
            <v-list>
                <v-list-tile
                        value="true"
                        :key="menu.id" v-for="(menu, i) in categories" :to="getLink(menu)"
                >
                    <v-list-tile-action>
                        <v-icon v-html="menu.info.class_name"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="menu.name"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                app
                :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>


        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>

        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                clipped: false,
                drawer: false,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js',
                categories: []
            }
        },
        name: 'App',
        created() {
            // axios.get(`http://localhost:8069/v1/bgd/web-app/category`)
            //     .then(response => {
            //         // JSON responses are automatically parsed.
            //         //console.log(response.data);
            //         this.categories = response.data.data
            //     })
            //     .catch(e => {
            //         this.errors = e;
            //     })
        },
        methods: {
            getLink: function (cat) {
                let postUrl = '/category/' + cat.id
                return postUrl
            }
        }
    }
</script>
