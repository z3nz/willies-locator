<template>
  <drawer :open="open" class="yellow">
    <h1 @click="open = !open" slot="header">Home alcohol delivery services (2 available)</h1>

    <div v-if="open" slot="options">Drizly | Minibar</div>

    <div slot="content">

    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
// import axios from 'axios'

export default {
  name: 'delivery',
  components: {
    Drawer
  },
  data () {
    return {
      open: false
    }
  },
  created () {
    // 42.404754, -71.116237
    // axios.get('', {
    //   headers: {
    //     // TODO
    //   }
    // })
    // axios.get('https://minibardelivery.com/api/v2/suppliers', {
    //   params: {
    //     coords: {
    //       lat: 42.404754,
    //       lng: -71.116237
    //     }
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
</style>
