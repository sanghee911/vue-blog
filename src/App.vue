<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import ListBlogs from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'
import Header from './components/Header'


export default {
  components: {
//    'add-blog': AddBlog,
//    'show-blogs': ShowBlogs,
//    'list-blogs': ListBlogs,
//    'single-blog': SingleBlog,
    'app-header': Header,
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Verdana;
}
</style>
