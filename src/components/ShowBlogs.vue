<template>
  <div id="show-blogs" v-theme="'wide'">
    <h1>All Blog Articles</h1>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <div class="title-wrapper">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h2 class="blog-title">{{ blog.title | to-uppercase }}</h2>
        </router-link>
        <span class="delete" v-on:click.prevent="test">delete</span><button>teset</button>
      </div>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'
  import { bus } from '../main'

  export default {
    name: "show-blogs",
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    methods: {
      test: function () {
        console.log('teste')
      }
    },
    created() {
      this.$http.get('https://vue-blog-307cc.firebaseio.com/posts.json').then(
      function (data) {
        return data.json();
      }).then(function (data) {
        var blogsArray = [];
        for (let key in data) {
          console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
      bus.$on('searchChanged', (data) =>{
        this.search = data;
      })
    },
    computed: {

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
  }
  .blog-title:hover {
    color: #06afdf;
    border-bottom: 1px solid #06afdf;
  }
  .single-blog {
    box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
  }
  .single-blog a {
    text-decoration: none;
  }
  .single-blog .delete {
    font-size: small;
    vertical-align: middle;
    /*border: 1px solid orangered;*/
    padding: 5px;
    border-radius: 3px;
    border: 1px solid orangered;
    color: orangered;
    background-color: white;
    box-sizing: border-box;
    margin-left: 20px;
  }
  .delete:hover {
    border: 1px solid orangered;
    background-color: orangered;
    color: white;
    cursor: pointer;
  }
  .delete:focus {
    outline: none;
  }
</style>
