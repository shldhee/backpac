import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import CardPage from './views/CardPage'
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
      component: CardPage,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
  ],
})

export default router
