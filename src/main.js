import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import Element from 'element-ui'

Vue.use(Element);

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(BootstrapVue);

export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if(binding.value == 'narrow') {
      el.style.maxWidth = '600px';
    }
    if (binding.arg == 'column') {
      el.style.backgroundColor = '#e3e3e3';
      el.style.padding = '20px';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
