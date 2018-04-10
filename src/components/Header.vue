<template>
  <nav>
    <div id="wrapper">
      <ul>
        <li><span id="title">Cocktail Demo</span></li>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/add">Add a New Blog</router-link></li>
      </ul>
      <input type="text" v-model="search" placeholder="search">
    </div>
  </nav>
</template>

<script>
  import { bus } from '../main'


  export default {
    name: "app-header",
    data() {
      return {
        search: ''
      }
    },
    watch: {
      search: function() {
        console.log(this.search);
        bus.$emit('searchChanged', this.search)
      }
    }

  }
</script>

<style scoped>
  nav {
    background-color: darkslategray;
    color: white;
    height: 50px;
  }
  #wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  ul {
    list-style-type: none;
    display: inline-block;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-right: 30px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: orange;
  }
  input {
    display: inline-block;
    /*right: 0;*/
    float: right;
    height: 30px;
    margin: 10px 0;
    box-sizing: border-box;
    border-radius: 3px;
    border: none;
    padding: 2px;
  }
  #title {
    font-weight: bold;
    color: lightgoldenrodyellow;
  }

</style>
