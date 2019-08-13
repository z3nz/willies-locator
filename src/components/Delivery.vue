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
        <img src="//via.placeholder.com/75x110">
        <!-- <img :src="product.thumb_url"> -->
        <div class="name">{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
        <div @click="buttonClick(product)" class="button">Add to Cart</div>
      </div>
    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
import axios from 'axios'
// import qs from 'qs'
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
        auth: null,
        suppliers: [],
        products: []
      }
    }
  },
  computed: {
    ...mapState({
      address: state => state.address
    }),
    options () {
      let amount = 0
      if (this.minibar.products.length) amount++
      return amount ? `${amount} available` : `0 currently in your area`
    },
    products () {
      // return [
      //   {
      //     'id': 16901,
      //     'name': 'Sparkling Giner & Lemon',
      //     'price': 9.99,
      //     'description': 'Adesso Cagnina di Romagna is soft garnet in color. It is medium in body with a pleasant nose of red berries and flavors of black raspberries, cherries and spice. It is nicely balanced to enjoy now and over the next 3-4 years. This wine is long and silky smooth on the finish and easy to love with low alcohol! Enjoy Adesso Cagnina di Romagna with pasta, veal Milanese, chicken cutlet and mild cheeses.',
      //     'sku': 'AC-P-1004',
      //     'volume': '750ML',
      //     'brand': 'Adesso',
      //     'stocks': 34,
      //     'tags': [],
      //     'thumb_url': 'https://images.squarespace-cdn.com/content/v1/5a9827308f51303fb5c9f4be/1553258236278-PREKT853AO0JQPLGW3DQ/ke17ZwdGBToddI8pDm48kGT5ta17mUrREhgpKOC3HkwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2XCR5bjbIC5G9leYBnppCmYyUQWY2YwTpuTVdhwZYUrQKMshLAGzx4R3EDFOm1kBS/New+Ginger+Mockup+small.png?format=500w',
      //     'image_url': 'http://localhost:5000/products/7271/product/Adesso-Cag.jpg?1403705966',
      //     'properties': [
      //       {
      //         'name': 'Volume',
      //         'value': '750ML'
      //       },
      //       {
      //         'name': 'Varietal',
      //         'value': 'not specified'
      //       },
      //       {
      //         'name': 'Country',
      //         'value': 'Italy'
      //       },
      //       {
      //         'name': 'Year',
      //         'value': '2011'
      //       }
      //     ],
      //     'supplier_id': 17
      //   },
      //   {
      //     'id': 16967,
      //     'name': 'Sparkling Pomegranate & Acai',
      //     'price': 9.99,
      //     'description': 'Cocoa di Vine Chocolate & Wine is a combination of rich chocolate cream from one of the country’s top creameries in Wisconsin and a white wine blend produced in the USA from Argentine grapes. This delicious beverage offers chocolate flavors with undertones of vanilla and caramel. Enjoy as a dessert.\r\nShake well before consuming. With proper refrigeration from date of purchase, this product has a shelf life of 9 to 12 months. Enjoy within six months when stored at room temperature.  Refrigerate after opening. This product contains dairy. -opiciwines.com',
      //     'sku': 'AC-P-1381',
      //     'volume': '750ML',
      //     'brand': 'Cocoa di Vine',
      //     'stocks': 4,
      //     'tags': [],
      //     'thumb_url': 'https://images.squarespace-cdn.com/content/v1/5a9827308f51303fb5c9f4be/1553258252958-I0C4SCZS4B78EN59XREK/ke17ZwdGBToddI8pDm48kGT5ta17mUrREhgpKOC3HkwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2XCR5bjbIC5G9leYBnppCmYyUQWY2YwTpuTVdhwZYUrQKMshLAGzx4R3EDFOm1kBS/New+Pom+Mockup+small.png?format=500w',
      //     'image_url': 'http://localhost:5000/products/7273/product/cocoa_di_v.jpg?1403705998',
      //     'properties': [
      //       {
      //         'name': 'Volume',
      //         'value': '750ML 750.0 ML'
      //       },
      //       {
      //         'name': 'Varietal',
      //         'value': 'not specified'
      //       },
      //       {
      //         'name': 'Region',
      //         'value': 'California'
      //       },
      //       {
      //         'name': 'Country',
      //         'value': 'United States'
      //       }
      //     ],
      //     'supplier_id': 17
      //   },
      //   {
      //     'id': 16966,
      //     'name': 'Sparkling Mango & Passionfruit',
      //     'price': 9.99,
      //     'description': 'Rich, velvety-smooth chocolate flavors, combine with undertones of vanilla and caramel. An intoxicating blend of chocolate and wine, Cocoa di Vine* is the ultimate indulgence! -totalwine.com',
      //     'sku': 'AC-P-1380',
      //     'volume': '750ML',
      //     'brand': 'Cocoa di Vine',
      //     'stocks': 2,
      //     'tags': [],
      //     'thumb_url': 'https://images.squarespace-cdn.com/content/v1/5a9827308f51303fb5c9f4be/1553258211051-QDII4FLGNT7IK8A3GTHY/ke17ZwdGBToddI8pDm48kGT5ta17mUrREhgpKOC3HkwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2XCR5bjbIC5G9leYBnppCmYyUQWY2YwTpuTVdhwZYUrQKMshLAGzx4R3EDFOm1kBS/Mango+Mockup+small.png?format=500w',
      //     'image_url': 'http://localhost:5000/products/7275/product/62dbcb6ed8.jpg?1403705994',
      //     'properties': [
      //       {
      //         'name': 'Volume',
      //         'value': '750ML 750.0 ML'
      //       },
      //       {
      //         'name': 'Varietal',
      //         'value': 'not specified'
      //       },
      //       {
      //         'name': 'Region',
      //         'value': 'California'
      //       },
      //       {
      //         'name': 'Country',
      //         'value': 'United States'
      //       }
      //     ],
      //     'supplier_id': 17
      //   }
      // ]
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
  async created () {
    // 42.359789, -71.07055309999998

    // 1156609
    // 1154176
    // await this.getMinibarToken()
    // this.checkMinibar()
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
      const { data } = await axios.post(`${this.minibar.url}api/v2/check_product_availability`, {
        product_id: '823763',
        coords: {
          lat: this.address.latitude,
          lng: this.address.longitude
        }
      }, {
        headers: this.minibarHeaders
      })
      console.log(data)
      this.minibar.products = [{ ...data.product, supplier: data.supplier }]
      // this.minibar.suppliers = []
      // const query = qs.stringify({ coords: {
      //   lat: this.address.latitude,
      //   lng: this.address.longitude
      // } }, { encode: false })

      // let { data } = await axios.get(`${this.minibar.url}api/v2/suppliers?${query}`, { headers: this.minibarHeaders })
      // console.log(data)
      // this.minibar.suppliers = data.suppliers

      // if (this.minibar.suppliers.length) {
      //   const ids = this.minibar.suppliers.map(s => s.id).join()
      //   let { data } = await axios.get(`${this.minibar.url}api/v2/supplier/${ids}/products`, {
      //     headers: this.minibarHeaders,
      //     params: {
      //       query: 'Budweiser'
      //     }
      //   })
      //   console.log(data)
      //   this.minibar.products = data.products
      // }
    },
    buttonClick (product) {
      window.open('https://minibardelivery.com/store/product/budweiser-select', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 125px;
  margin-left: 45px;

  img {
    margin-bottom: 5px;
    width: 75px;
  }

  .name,
  .price,
  .button {
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.03px;
    color: #002554;
  }

  .price {
    font-weight: bold;
    margin-top: 2px;
  }

  .button {
    display: inline-block;
    background-color: #011e41;
    color: #ffffff;
    padding: 8px 6px;
    border-radius: 5px;
    margin-top: 2px;
    cursor: pointer;
  }
}
</style>
