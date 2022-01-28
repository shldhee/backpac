import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Card from './views/Card'
import Form from './views/Form'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
  ],
})

export default router
