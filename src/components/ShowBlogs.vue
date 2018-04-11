<template>
<div class="container">
  <div id="show-blogs" v-theme="'wide'">
    <h1>All Blog Articles</h1>
    <div v-for="blog in filteredBlogs" v-bind:key="blog['.key']" class="single-blog">
      <div class="title-wrapper">
        <router-link v-bind:to="'/blog/' + blog['.key']">
          <h2 class="blog-title">{{ blog.title | to-uppercase }}</h2>
        </router-link>
        <router-link v-bind:to="'/blog/' + blog['.key']">
          <button type="button" class="btn btn-outline-success btn-sm view-post btn-post">View</button>
        </router-link>
        <button type="button" class="btn btn-outline-info btn-sm edit-post btn-post" v-on:click="editPost(blog['.key'])" >Edit</button>
        <button type="button" class="btn btn-outline-danger btn-sm delete-post btn-post" v-on:click="removePost(blog['.key'])">delete</button>
        <span class="badge badge-pill badge-secondary category" v-for="category in blog.categories">{{ category }}</span>
      </div>
      <p class="author">Written by: {{ blog.author }}</p>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'
  import { bus } from '../main'
  import { postsRef } from '../firebase'

  export default {
    name: "show-blogs",
    data() {
      return {
        blogs: [],
        posts: [],
        search: ""
      }
    },
    methods: {
      removePost: function (key) {
        postsRef.child(key).remove();
      }
    },
    created() {
      // this.$http.get('https://vue-blog-307cc.firebaseio.com/posts.json').then(
      // function (data) {
      //   return data.json();
      // }).then(function (data) {
      //   var blogsArray = [];
      //   for (let key in data) {
      //     console.log(data[key]);
      //     data[key].id = key;
      //     blogsArray.push(data[key]);
      //   }
      //   this.blogs = blogsArray;
      // });
      bus.$on('searchChanged', (data) =>{
        this.search = data;
      });
//      this.blogs = posts
      console.log(this.posts)
    },
    computed: {

    },
    firebase: {
      blogs: postsRef
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      },
      snippet(value) {
        return value.slice(0, 100) + '...';
      }
    },
    mixins: [searchMixin],
    watch: {
      search: function () {
        console.log(this.search)
      }
    }
  }

</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
  }
  .title-wrapper {
    height: 50px;
  }
  .blog-title {
    margin: 0;
    font-size: 25px;
    display: inline-block;
    vertical-align: middle;
    color: #294646;
    border-bottom: 1px solid transparent;
  }
  .blog-title:hover {
    color: #0081df;
    border-bottom: 1px solid #0081df;
  }
  .single-blog {
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }
  .single-blog a {
    text-decoration: none;
  }

  .btn-post {
    margin-right: 10px;
  }
  .view-post {
    margin-left: 30px;
  }
  .category {
    margin-right: 5px;
  }
  .author {
    font-size: 0.8em;
    color: limegreen;
    margin-bottom: 10px;
  }
</style>
