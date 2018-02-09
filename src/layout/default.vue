<template>
  <v-app id="inspire">
  <div class="bd-home">
    <Nav />

    <v-content>

        <router-view></router-view>

    </v-content>



  </div>
  </v-app>
</template>

<script>
    import Nav from '../components/nav.vue'
    export default {
        components: {
            Nav
        }
    }
</script>