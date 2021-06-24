import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countItem:0,
    ItemName:''
  },
  mutations: {
    addIncrement (state,payload) {
      state.countItem++
      state.ItemName=payload;
    }
  },
})




