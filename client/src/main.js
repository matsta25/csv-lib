import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueClip from 'vue-clip'
Vue.use(VueClip)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

import TreeView from "vue-json-tree-view"
Vue.use(TreeView)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
