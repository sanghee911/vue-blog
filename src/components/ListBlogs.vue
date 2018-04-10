<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 class="blog-title" v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>

  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'

  export default {
    name: "list-blogs",
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    methods: {

    },
    created: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(
        function (data) {
          console.log(data);
          this.blogs = data.body;
        }
      )
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
    mixins: [searchMixin]
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
    background-color: #eee;
  }
</style>
