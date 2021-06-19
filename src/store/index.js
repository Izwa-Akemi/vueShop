import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countItem:0,
    ItemName:''
  },
  mutations: {
    addIncrement (state) {
      state.countItem++
      state.ItemName = "イチゴ"//この部分をリンク先の商品名にしたい。
    }
  },
})
