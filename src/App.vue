<template>
  <div id="app">
    <!-- <div class="input-container">
      <vue-google-autocomplete
        id="autocomplete2"
        placeholder="Enter your address..."
        @placechanged="addressChange"
        country="us"
        :value="addressString"
      />
    </div> -->
    <Delivery/>
    <Grocery/>
    <!-- <MapBox/>
    <LocatorModal/> -->
  </div>
</template>

<script>
// import VueGoogleAutocomplete from 'vue-google-autocomplete'
import Delivery from '@/components/Delivery'
import Grocery from '@/components/Grocery'
// import MapBox from '@/components/MapBox'
// import LocatorModal from '@/components/LocatorModal'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    // VueGoogleAutocomplete,
    Delivery,
    Grocery
    // MapBox
    // LocatorModal,
  },
  computed: {
    ...mapGetters(['address'])
  },
  created () {
    // setTimeout(() => {
    //   const q = new URLSearchParams(window.location.search)
    //   q.set('lat', 42.4046319)
    //   q.set('lng', -71.1184477)
    //   const path = window.location.pathname + '?' + q.toString()
    //   history.pushState(null, '', path)
    //   console.log(window.location.search)
    // }, 3000)

    setInterval(() => {
      const q = new URLSearchParams(window.location.search)
      const latitude = +q.get('lat')
      const longitude = +q.get('lng')
      if (latitude && longitude) {
        if (!this.address || latitude !== this.address.latitude || longitude !== this.address.longitude) {
          console.log(this.address, latitude, longitude)
          this.$store.commit('setAddress', { latitude, longitude })
        }
      }
    }, 500)
  }
  // methods: {
  //   addressChange (address) {
  //     this.$store.commit('setAddress', address)
  //   }
  // }
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
