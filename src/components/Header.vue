<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand">Cocktail Demo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add a Blog</router-link>
        </li>
        <!--<li>-->
          <!--<input id="search-box" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">-->
        <!--</li>-->
      </ul>
      <form class="form-inline my-2 my-lg-0" v-show="$route.path==='/' ? true : false">
        <input class="form-control mr-sm-2 form-control-sm" type="search" placeholder="Search" aria-label="Search" v-model="search">
      </form>
    </div>
  </nav>
</div>
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
  /*nav {*/
    /*background-color: darkslategray;*/
    /*color: white;*/
    /*height: 50px;*/
  /*}*/
  /*#wrapper {*/
    /*max-width: 1200px;*/
    /*margin: 0 auto;*/
  /*}*/
  /*ul {*/
    /*list-style-type: none;*/
    /*display: inline-block;*/
    /*padding: 0;*/
  /*}*/
  /*li {*/
    /*display: inline-block;*/
    /*margin-right: 30px;*/
  /*}*/
  /*a {*/
    /*text-decoration: none;*/
    /*color: white;*/
  /*}*/
  /*a:hover {*/
    /*color: orange;*/
  /*}*/
  /*input {*/
    /*display: inline-block;*/
    /*!*right: 0;*!*/
    /*float: right;*/
    /*height: 30px;*/
    /*margin: 10px 0;*/
    /*box-sizing: border-box;*/
    /*border-radius: 3px;*/
    /*border: none;*/
    /*padding: 2px;*/
  /*}*/
  /*#title {*/
    /*font-weight: bold;*/
    /*color: lightgoldenrodyellow;*/
  /*}*/
  a.navbar-brand {
    color: #0c3404;
  }
  nav {
    margin-bottom: 30px;
  }
  #search-box {
    margin-left: 50px;
  }
  .navbar {
    background-color: #c3f0ff;
    /*border: 2px solid cyan;*/
    border-radius: 5px;
    margin-top: 5px;
  }
  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: #3c5817;
  }
  .nav-link {
    color: #3c5817;
  }
  .nav-link.router-link-exact-active {
  color: #3c5817;
  font-weight: bold;
  }

</style>
