<template>
  <transition name="modal">
    <div class="modal-mask" v-if="modalOpen">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h1>Find out where you can get Willie’s!</h1>
          <vue-google-autocomplete
            id="autocomplete"
            placeholder="Enter your address..."
            @placechanged="addressChange"
            country="us"
            :enable-geolocation="true"
          />
          <label>Start typing your address, and choose the best option that pops up!</label>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import store from '@/store.js'
import { mapState } from 'vuex'

export default {
  name: 'locator-modal',
  components: {
    VueGoogleAutocomplete
  },
  computed: mapState({
    modalOpen: state => state.modalOpen
  }),
  mounted () {
    store.commit('toggleModal', true)
  },
  methods: {
    addressChange (address) {
      store.commit('setAddress', address)
      store.commit('toggleModal', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 30px 30px 120px;
  background-color: #fefefe;
  border-radius: 11px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

h1 {
  font-size: 37px;
  line-height: 1;
  letter-spacing: 0.07px;
  color: #011e41;
  margin: 0px;
}

input {
  margin-top: 30px;
  width: 100%;
  border-radius: 1px;
  border: solid 1px #020202;
  background-color: #fefefe;
  padding: 10px;
}

label {
  display: block;
  margin-top: 5px;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.03px;
  color: #002554;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
