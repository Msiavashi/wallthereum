import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      password: null,
      wallet: null,
      web3: null,
      connectedNetwork: null
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
    }

  },

  actions: {

  }

});
