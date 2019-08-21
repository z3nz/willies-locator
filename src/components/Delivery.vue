<template>
  <drawer :open="open" class="yellow">
    <span @click="open = !open" slot="header" class="header">Home alcohol delivery services ({{ options }})</span>

    <div v-if="open" slot="options">Minibar</div>

    <div slot="content">
      <div
        v-for="product in products"
        :key="product.id"
        class="product"
      >
        <!-- <img src="//via.placeholder.com/75x110"> -->
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
import axios from 'axios'
import qs from 'qs'
import { mapGetters } from 'vuex'

const minibarLinks = {
  "Willie's Superbrew Pomegranate & Acai": 'https://minibardelivery.com/store/product/willie-s-superbrew-pomegranate-acai-6-pack/',
  "Willie's Superbrew Sparkling Mango & Passionfruit": 'https://minibardelivery.com/store/product/willie-s-superbrew-mango-passionfruit/',
  "Willie's Superbrew Sparkling Ginger Lemon": 'https://minibardelivery.com/store/product/willie-s-superbrew-ginger-lemon-1a800/'
}

export default {
  name: 'delivery',
  components: {
    Drawer
  },
  data () {
    return {
      open: false,
      minibar: {
        url: 'https://minibardelivery.com/',
        id: '6a5ede78e518df233ee25beeee17637ea1ae4eabc285564509639e959ba76a6a',
        secret: '37beb6ab595a6511fe3c70ebd5e7fd7549304a8874914e84005a03a6bdb042ae',
        auth: null,
        suppliers: [],
        products: []
      }
    }
  },
  computed: {
    ...mapGetters(['address']),
    options () {
      let amount = 0
      if (this.minibar.products.length) amount++
      return amount ? `${amount} available` : '0 currently in your area'
    },
    products () {
      return this.minibar.products
    },
    minibarHeaders () {
      return {
        'Authorization': `Bearer ${this.minibar.auth.access_token}`
      }
    }
  },
  watch: {
    address: {
      async handler (val) {
        if (val) {
          await this.getMinibarToken()
          this.checkMinibar()
        }
      }
    }
  },
  methods: {
    getMinibarToken () {
      return new Promise(resolve => {
        if (!this.minibar.auth) {
          axios.post(`${this.minibar.url}oauth/token`, {
            client_id: this.minibar.id,
            client_secret: this.minibar.secret,
            grant_type: 'client_credentials'
          })
            .then(({ data }) => {
              this.minibar.auth = data
              resolve()
            })
            .catch(e => console.error(e))
        } else {
          resolve()
        }
      })
    },
    async checkMinibar () {
      this.minibar.suppliers = []
      const query = qs.stringify({ coords: {
        lat: this.address.latitude,
        lng: this.address.longitude
      } }, { encode: false })

      let { data } = await axios.get(`${this.minibar.url}api/v2/suppliers?${query}`, { headers: this.minibarHeaders })
      console.log(data)
      this.minibar.suppliers = data.suppliers

      if (this.minibar.suppliers.length) {
        const ids = this.minibar.suppliers.map(s => s.id).join()
        let { data } = await axios.get(`${this.minibar.url}api/v2/supplier/${ids}/products`, {
          headers: this.minibarHeaders,
          params: {
            query: 'Willie\'s Superbrew'
          }
        })
        console.log(data)
        this.minibar.products = data.products.sort((a, b) => a.name.localeCompare(b.name))
      }

      // NOTE: leaving incase we want to search by product id
      // const { data } = await axios.post(`${this.minibar.url}api/v2/check_product_availability`, {
      //   product_id: '823763',
      //   coords: {
      //     lat: this.address.latitude,
      //     lng: this.address.longitude
      //   }
      // }, {
      //   headers: this.minibarHeaders
      // })
      // console.log(data)
      // this.minibar.products = [{ ...data.product, supplier: data.supplier }]
    },
    buttonClick (product) {
      window.open(`${minibarLinks[product.name]}${product.permalink}`, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 115px;
  margin-left: 45px;

  img {
    margin-bottom: 5px;
    width: 75px;
  }

  .name,
  .price,
  .volume,
  .button {
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.03px;
    color: #002554;
  }

  .volume, .price {
    font-weight: bold;
    margin-top: 5px;
  }

  .button {
    display: inline-block;
    background-color: #011e41;
    color: #ffffff;
    padding: 8px 6px;
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
  }
}
</style>
