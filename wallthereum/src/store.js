import Vue from 'vue'
import Vuex from 'vuex'
import web3 from 'web3'
import { Networks } from '@/NetworkManager';
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      password: null,
      wallet: null,
      web3: null,
      connectedNetwork: Networks.InfuraMainNet
  },
  mutations: {

    PASSWORD(state, password){
      state.password = password;
    },

    WALLET(state, newWallet){
      state.wallet = newWallet;
    },

    WEB3(state, web3){
      state.web3 = web3;
    },

    CURRENTNETWORK(state, currentNetwork){
      // state.web3.currentNetwork = currentNetwork;
      state.web3.currentProvider.name = currentNetwork.name
    }

  },

  actions: {
    WALLET(context, wallet){
      context.commit("WALLET", wallet);
    },

    WEB3 (context, web3){
      context.commit("WEB3", web3);
    },

    

    CURRENTNETWORK(context, network){
      context.commit("CURRENTNETWORK", network);
    },

    changeProvider(context, newNetwork){
      context.state.web3.setProvider(new web3.providers.HttpProvider(newNetwork.address));
      // context.state.web3.currentNetwork = newNetwork;
      context.commit('CURRENTNETWORK', newNetwork);
      if(router.currentRoute.name == "dashboard"){
        router.push('/wallet');
      }
    }
  },
  getters: {
    currentNetwork: state => {
      return state.currentNetwork;
    },

    getWallet: state => {
      return state.wallet;
    },
    
    getWeb3: state => {
      return state.web3;
    }
  }
});
