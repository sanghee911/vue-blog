<template>
  <div class="container">
    <div id="add-blog">
      <h2>Add a Post</h2>
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
            <vue-editor v-model="blog.content" id="content"></vue-editor>
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
            <button type="button" class="col-4 text-center btn btn-outline-primary btn-sm" v-on:click.prevent="post">Add Blog</button>
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
  import { VueEditor } from 'vue2-editor'

  export default {
    name: "add-blog",
    data() {
      return {
        blog: {
          title: "",
          content: "",
          categories: [],
          author: ""
        },
        content: '',
        authors: ["Sanghee Lee", "Atsuko Nakayama", "Curtis Lee"],
        submitted: false
      }
    },
    methods: {
      post: function () {
        // this.$http.post('https://vue-blog-307cc.firebaseio.com/posts.json', this.blog).then(function(data) {
          postsRef.push(this.blog).then((data) => {
          console.log(data);
          this.submitted = true;
          window.location.href="/";
        })
      }
    },
    watch: {
      'blog.content': function () {
        let el = this.$refs.content;
//        console.log(this.blog.content);
        console.log(el);
//        var el = this;
        setTimeout(function(){
          el.style.cssText = 'height:auto; padding:0';
          // for box-sizing other than "content-box" use:
          // el.style.cssText = '-moz-box-sizing:content-box';
          el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
      }
    },
    components: {
      VueEditor
    },

  }
</script>

<style scoped>

  /*#add-blog * {*/
    /*box-sizing: border-box;*/
  /*}*/

  /*#add-blog {*/
    /*!*margin: 20px auto;*!*/
    /*!*max-width: 500px;*!*/
  /*}*/

  /*label {*/
    /*display: block;*/
    /*margin: 20px 0 10px;*/
  /*}*/

  /*input[type="text"], textarea {*/
    /*display: block;*/
    /*width: 100%;*/
  /*}*/

  /*#preview {*/
    /*padding: 10px 20px;*/
    /*border: 1px dotted #ccc;*/
    /*margin: 30px 0;*/
  /*}*/

  /*h3 {*/
    /*margin-top: 10px;*/
  /*}*/

  /*#checkboxes input {*/
    /*display: inline-block;*/
    /*margin-right: 10px;*/
  /*}*/

  /*#checkboxes label {*/
    /*display: inline-block;*/
  /*}*/

</style>
