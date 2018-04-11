<template>
  <div id="single-blog" v-cloak>
    <h1>{{ blog.title }}</h1>
    <p>
      <span class="badge badge-pill badge-secondary category" v-for="category in blog.categories">{{ category }}</span>
    </p>
    <p class="author">Written by {{ blog.author }}</p>
    <article>{{ blog.content }}</article>
    <ul>

    </ul>
  </div>

</template>

<script>
  import { postsRef } from '../firebase'

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
  [v-cloak] {
    display: none
  }
  .author {
    font-size: 0.8em;
    color: limegreen;
    margin-bottom: 10px;
  }
</style>
