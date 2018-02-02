<template>
  <div class="bd-home">
    <Nav />


    <router-view></router-view>


  </div>
</template>

<script>
    import Nav from '../components/nav.vue'
    export default {
        components: {
            Nav
        }
    }
</script>