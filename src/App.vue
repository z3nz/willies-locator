<template>
  <div id="app">
    <div class="input-container">
      <vue-google-autocomplete
        id="autocomplete2"
        placeholder="Enter your address..."
        @placechanged="addressChange"
        country="us"
        :value="addressString"
      />
    </div>
    <Delivery/>
    <Grocery/>
    <MapBox/>
    <LocatorModal/>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import LocatorModal from '@/components/LocatorModal'
import Delivery from '@/components/Delivery'
import Grocery from '@/components/Grocery'
import MapBox from '@/components/MapBox'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    VueGoogleAutocomplete,
    LocatorModal,
    Delivery,
    Grocery,
    MapBox
  },
  data () {
    return {
      // addressSearch: ''
    }
  },
  computed: {
    ...mapGetters(['addressString'])
  },
  // watch: {
  //   address: {
  //     handler (val) {
  //       if (val) {

  //       }
  //     }
  //   }
  // },
  methods: {
    addressChange (address) {
      this.$store.commit('setAddress', address)
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: europa;
}

.input-container {
  text-align: center;

  #autocomplete2 {
    margin: 10px 0px;
    width: 50%;
    border-radius: 1px;
    border: solid 1px #020202;
    background-color: #fefefe;
    padding: 10px;
  }
}

.pac-container {
  z-index: 1003;
}
</style>
