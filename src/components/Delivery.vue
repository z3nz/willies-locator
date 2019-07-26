<template>
  <drawer>
    <h1 slot="header">Home alcohol delivery services (2 available)</h1>
    <div slot="content">

    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
import axios from 'axios'
export default {
  name: 'Delivery',
  components: {
    Drawer
  },
  created () {
    // 42.404754, -71.116237
    axios.get('', {
      headers: {
        // TODO
      }
    })
    axios.get('https://minibardelivery.com/api/v2/suppliers', {
      params: {
        coords: {
          lat: 42.404754,
          lng: -71.116237
        }
      }
    })
  }
}
</script>
