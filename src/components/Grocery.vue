<template>
  <drawer :open="open" class="pink">
    <span @click="open = !open" slot="header" class="header">Grocery delivery options ({{ options }})</span>

    <div v-if="open" slot="options"></div>

    <div slot="content">
      <div
        v-for="product in products"
        :key="product.id"
        class="product"
      >
        <img :src="product.thumb_url">
        <div class="name">{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
        <div class="volume">{{ product.volume.replace('cans', '') }}</div>
        <div @click="buttonClick(product)" class="button">Order Now</div>
      </div>
    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
// import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Grocery',
  components: {
    Drawer
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters(['address']),
    options () {
      // TODO
      return '0 currently in your area'
    },
    products () {
      // TODO
      return []
    }
  },
  watch: {
    address: {
      async handler (val) {
        if (val) {
          // TODO
        }
      }
    }
  },
  methods: {
    buttonClick (product) {
      // TODO
      // window.open(`${minibarLinks[product.name]}${product.permalink}`, '_blank')
    }
  }
}
</script>
