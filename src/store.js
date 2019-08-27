import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address: null,
    modalOpen: false
  },
  getters: {
    address: state => state.address,
    addressString: ({ address }) => {
      return address ? `${address.street_number} ${address.route}, ${address.locality}, ${address.administrative_area_level_1} ${address.postal_code}` : ''
    }
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
