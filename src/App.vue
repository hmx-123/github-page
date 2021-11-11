<template>
  <div id="app">
    <div data-reactroot="" class="container">
      <v-search></v-search>
      <v-list></v-list>
    </div>
  </div>
  
</template>

<script>
import Search from "./components/Search"
import List from "./components/List"

export default {
  name: 'App',
  components: {
    "v-search":Search,
    "v-list":List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
