import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
      // モジュールシステムを利用しているときはあらかじめ Vue.use(Vuex) を呼び出していることを確認しておいてください
    state: {
      cart:[]
    },

    mutations: {
      addToCart(state, item){
        state.cart.push(item);
      }
    }

  });