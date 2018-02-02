<template>
  <b-navbar type="light" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>

          <b-navbar-brand :to="{ name: 'HomePage' }">
              <img src="https://www.bepgiadinh.com/logo-noel.png" class="d-inline-block align-top logo_site" alt="BV">
          </b-navbar-brand>


          <b-nav-item :to="{ name: 'HomePage' }">Trang chủ</b-nav-item>

          <b-nav-item :key="item.id" v-for="(item, i) in categories" :to="getLink(item)">
            {{ item.name }}
          </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style>
    .logo_site{
        width: 150px;
    }
</style>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                disableRouteWatcher: true,
                clipped: false,
                drawer: false,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'BGD',
                logo_src: 'https://www.bepgiadinh.com/logo-noel.png',
                categories: {}
            }
        },
        created () {
            axios.get(`https://www.bepgiadinh.com/wp-json/wp/v2/categories`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.categories = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        methods: {
            getLink: function (cat) {
                let postUrl = '/category/' + cat.id
                return postUrl
            }
        }

    }
</script>