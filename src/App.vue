<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import 'bulma/css/bulma.css';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  
</style>
