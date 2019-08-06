import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: {
      address1: '45 Bond Street',
      address2: '',
      city: 'New York',
      state: 'NY',
      zip_code: '10012'
    },
    modalOpen: false
  },
  getters: {

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
