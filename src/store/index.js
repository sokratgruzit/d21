import Vue from 'vue'
import Vuex from 'vuex'
import items from '@/items.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeMenu: null,
    navMenu: items.navigation,
    mainSliderItems: items.currency
  },
  getters: {
  },
  mutations: {
    setMenuStatus (state, data) {
      state.activeMenu = data
    },
    setCommunity (state, num) {
      state.communityNum = num
    },
    setStart (state, test) {
      state.start = test
    }
  },
  actions: {
  },
  modules: {
  }
})
