<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <h3>Author: {{ blog.author }}</h3>
    <h3>Categories:</h3>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "single-blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created: function () {
      this.$http.get('https://vue-blog-307cc.firebaseio.com/posts/' + this.id + '.json').then(
        function (data) {
          return data.json();
        }
      ).then(function (data) {
        this.blog = data;
      })
    },
  }
</script>

<style scoped>
  #single-blog {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
