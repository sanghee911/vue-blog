<template>
  <div class="container">
    <div id="add-blog">
      <h2>Edit Post</h2>
      <form v-if="!submitted">
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">Blog Title:</label>
          <div class="col-sm-10">
            <input type="text" required v-model.lazy="blog.title" class="form-control" id="title">
          </div>
        </div>
        <div class="form-group row">
          <label for="content" class="col-sm-2 col-form-label">Blog Content:</label>
          <div class="col-sm-10">
            <textarea class="form-control" v-model="blog.content" ref="content" id="content"></textarea>
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Categories:</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="python" value="Python" v-model="blog.categories">
                <label class="form-check-label" for="python">
                  Python
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="javascript" value="JavaScript" v-model="blog.categories">
                <label class="form-check-label" for="javascript">
                  JavaScript
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="checkbox" id="ruby" value="Ruby" v-model="blog.categories">
                <label class="form-check-label" for="ruby">
                  Ruby
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <label for="author" class="col-sm-2 col-form-label">Author:</label>
          <div class="col-sm-10">
            <select id="author" class="form-control form-control-sm" v-model="blog.author">
              <option v-for="author in authors">{{ author }}</option>
            </select>
          </div>
        </div>
        <div class="form-row text-center">
          <div class="col-12">
            <button type="button" class="col-4 text-center btn btn-outline-primary btn-sm" v-on:click.prevent="edit">Save</button>
          </div>
        </div>
      </form>
      <div v-if="submitted">
        <h3>Post has been added!</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import { postsRef } from '../firebase'

  export default {
    name: "edit-blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
        submitted: false,
        authors: ["Sanghee Lee", "Atsuko Nakayama", "Curtis Lee"],
      }
    },
    created: function () {
//      this.$http.get('https://vue-blog-307cc.firebaseio.com/posts/' + this.id + '.json').then(
//        function (data) {
//          console.log(data.json());
//          return data.json();
//        }
//      ).then(function (data) {
//        this.blog = data;
//      })
      this.blog = postsRef.child(this.id);
      console.log(this.blog)
    },
    methods: {
      edit: function () {
        postsRef.child(this.id).update(this.blog);
        window.location.href="/";
      }
    },
  }
</script>

<style scoped>

</style>
