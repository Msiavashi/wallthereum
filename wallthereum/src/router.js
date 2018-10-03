import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewWallet from '@/views/NewWallet.vue'
import store from '@/store'
import Dashboard from '@/views/Dashboard.vue'
import MethodSelection from '@/views/MethodSelection.vue'
import Networks from '@/NetworkManager'

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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: MethodSelection
    }
  ]
})

router.beforeEach((to, from, next) => {

  // initializing web3
  if (!store.web3){
    console.log("infura connected");
    store.web3 = new Web3(new Web3.providers.HttpProvider(Networks.InfuraMainNet.address));
  }

  if(to.name == "dashboard" && store.wallet == null){
    router.push({name: 'wallet'});
    // next();
  }
  else if(to.name == "newWallet" &&  store.password == null){
    alert("Password Required !");
    router.push({name: 'home'});
  }else{
    next();
  }
})

export default router;