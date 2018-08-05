import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewWallet from '@/views/NewWallet.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wallet/create',
      name: 'newWallet',
      component: NewWallet
    }
  ]
})
