import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewWallet from '@/views/NewWallet.vue'
import store from '@/store'
// import Web3 from 'web3'
var Web3 = require('web3');

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {

  // initializing web3
  store.web3 = new Web3('https://mainnet.infura.io/');

  if(to.name == "newWallet" &&  store.password == null){
      alert("Password Required !");
      router.push({name: 'home'});
  }else{
    next();
  }
})

export default router;