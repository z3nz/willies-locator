<template>
  <drawer :open="open" class="yellow">
    <h1 @click="open = !open" slot="header">Home alcohol delivery services (2 available)</h1>

    <div v-if="open" slot="options">Minibar</div>

    <div slot="content">

    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
import axios from 'axios'
import qs from 'qs'
import { mapState } from 'vuex'

export default {
  name: 'delivery',
  components: {
    Drawer
  },
  data () {
    return {
      open: false,
      minibar: {
        url: 'https://cors-anywhere.herokuapp.com/https://sandbox.minibardelivery.com/',
        id: 'c62eab20b346b6984ea3eb6d841888cab22c25353b08c4b85db5d42e67d33141',
        secret: 'f3c45e232f3300bf4c3916ce9487591eb94bfbe7f83736e1f3dbbcfc5dec7a8e',
        auth: null
      }
    }
  },
  computed: {
    ...mapState({
      address: state => state.address
    }),
    headers () {
      return {
        'Authorization': `Bearer ${this.minibar.auth.access_token}`
      }
    }
  },
  // watch: {
  //   address: {
  //     async handler (val) {
  //       if (val) {
  //         await this.getMinibarToken()
  //         this.checkMinibar()
  //       }
  //     }
  //   }
  // },
  async created () {
    // 42.359789, -71.07055309999998

    // 1156609
    // 1154176
    await this.getMinibarToken()
    this.checkMinibar()
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
    checkMinibar () {
      axios.get(`${this.minibar.url}api/v2/suppliers?${qs.stringify({ address: this.address }, { encode: false })}`, {
        headers: this.headers
      })
        .then(({ data }) => {
          console.log(data)
        })

      // axios.post(`${this.minibar.url}api/v2/check_product_availability`, {
      //   product_id: '1156609',
      //   coords: {
      //     lat: this.address.latitude,
      //     lng: this.address.longitude
      //   }
      // }, {
      //   headers: {
      //     'Authorization': `Bearer ${this.minibar.auth.access_token}`
      //   }
      // })
      //   .catch(async e => {
      //     if (e.response.status === 401) {
      //       this.minibar.auth = null
      //       await this.getMinibarToken()
      //       this.checkMinibar()
      //     }
      //   })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
