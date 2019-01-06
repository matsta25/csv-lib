import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Github from './views/Github.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Github',
      name: 'github',
      component: Github
    }
  ]
})
