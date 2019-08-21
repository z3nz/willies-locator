import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: null,
    modalOpen: false
  },
  getters: {
    address: state => state.address
  },
  mutations: {
    setAddress (state, address) {
      state.address = address
    },
    toggleModal (state, open) {
      state.modalOpen = open
    }
  },
  actions: {

  }
})
