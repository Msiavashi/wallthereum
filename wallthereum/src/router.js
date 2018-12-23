import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewWallet from '@/views/NewWallet.vue'
import store from '@/store'
import Dashboard from '@/views/Dashboard.vue'
import MethodSelection from '@/views/MethodSelection.vue'
import Networks from '@/NetworkManager'
import About from '@/views/About.vue'
import VuexPersist from 'vuex-persist';

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
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  // initializing web3
  if (!store.getters.getWeb3){
    // store.state.web3 = new Web3(new Web3.providers.HttpProvider(Networks.InfuraMainNet.address));
    // console.log(JOSN.parse(localStorage.getItem('currentProvider')));
    let web3 = new Web3(new Web3.providers.HttpProvider(localStorage.getItem('currentProvider') ? JSON.parse(localStorage.getItem('currentProvider')).address : Networks.InfuraMainNet.address));
    store.dispatch('WEB3', web3);
    store.dispatch("CURRENTNETWORK", JSON.parse(localStorage.getItem('currentProvider')) || Networks.InfuraMainNet);
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