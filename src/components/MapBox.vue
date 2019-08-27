<template>
  <drawer :open="open" class="orange">
    <span @click="open = !open" slot="header" class="header">Locations near you</span>

    <div v-if="open" slot="options"></div>

    <div slot="content">
      <div class="content-container">
        <div class="img-container">
          <img src="https://images.squarespace-cdn.com/content/v1/5a9827308f51303fb5c9f4be/1558627060882-MYUQSJW26Z5K5HGF33QY/ke17ZwdGBToddI8pDm48kFbHyiaqzKjpddqViNudU3LlfiSMXz2YNBs8ylwAJx2qgRUppHe6ToX8uSOdETM-XldvY_sAIyUlfjhoEMtv77FisOkbpBjeI4FIBUZPqpY8GIsmWneP-r9jaCKUuajR9P_ZvJPBNg4ijehBznvvgzk/Asset+20%400.5x.png?format=750w">
        </div>
        <div class="map-container">
          <div id="map"></div>
          <div id="listings">
            <h1>Our locations</h1>
            <div id="results"></div>
          </div>
        </div>
      </div>
    </div>
  </drawer>
</template>

<script>
import Drawer from './Drawer.vue'
// import axios from 'axios'
import { mapGetters } from 'vuex'

var map

function getId (props) {
  var id = props.title || props.Title || props['Address components'] || ''
  return id.toLowerCase().replace(/[^0-9a-z-]/g, '')
}

function flyToStore (currentFeature, zoom) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom
  })
}

function createPopUp (currentFeature) {
  // Check if there is already a popup on the map and if so, remove it
  window.$('.mapboxgl-popup').remove()

  new window.mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + (currentFeature.properties.title || currentFeature.properties.Title) + '</h3>' + '<br>' + '<p>' + currentFeature.properties['Address components'] + '</p>')
    .addTo(map)
}

function filterListings () {
  var features = map.queryRenderedFeatures({ layers: ['farmer-willies-locations'] })

  // Populate the listings section
  var results = document.getElementById('results')
  // Clear old results
  window.$('#results .item:not(.active)' + features.map(function (f) { return ':not(#' + getId(f.properties) + ')' }).join('')).remove()
  // Iterate through the list of stores
  for (var i = 0; i < features.length; i++) {
    var currentFeature = features[i]
    // Shorten data.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties
    var id = getId(prop)

    // Make sure not to keep appending the same location
    if (window.$('#' + id).length) continue
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listing = results.appendChild(document.createElement('div'))
    listing.className = 'item'
    listing.id = id

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'))
    link.href = '#'
    link.className = 'title'
    link.dataPosition = i
    link.innerHTML = prop.title || prop.Title

    // Create a new div with the class 'details' for each store
    // and fill it with the city
    var details = listing.appendChild(document.createElement('div'))
    details.innerHTML = prop['Address components']

    // Add an event listener for the links in the sidebar listing
    link.addEventListener('click', function (e) {
      e.preventDefault()
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      window.$('#results .item.active').removeClass('active')
      this.parentNode.classList.add('active')
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = features[this.dataPosition]
      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing)
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing)
    })
  }
}

const initMap = function () {
  window.mapboxgl.accessToken = 'pk.eyJ1IjoiZmFybWVyd2lsbGllcyIsImEiOiJqTEFZd3d3In0.GBgh7oDoeAgvuHUlJdLJSQ'
  map = new window.mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/farmerwillies/cjh59ph8d3w0s2rnw4z4vfmaw'
  })

  // map.addControl(new window.MapboxGeocoder({
  //   accessToken: window.mapboxgl.accessToken
  // }))

  map.addControl(new window.mapboxgl.NavigationControl({
    showZoom: true
  }), 'top-left')

  window.$.getJSON('https://cdn.jsdelivr.net/gh/z3nz/farmer-willies/features.geojson')
    .done(function (data) {
      map.on('load', function () {
        map.addSource('the-goods', {
          type: 'geojson',
          data: data
        })

        // Add an event listener for when a user clicks on the map
        map.on('click', function (e) {
          // Query all the rendered points in the view
          var features = map.queryRenderedFeatures(e.point)
          if (features.length) {
            var clickedPoint = features[0]
            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            window.$('#results .item.active').removeClass('active')
            // Select the correct list item using the found index and add the active class
            window.$('#' + getId(clickedPoint.properties)).addClass('active')
            // 1. Fly to the point
            flyToStore(clickedPoint)
            // 2. Close all other popups and display popup for clicked store
            createPopUp(clickedPoint)
          }
        })
      })
    })

  map.on('render', filterListings)
}

export default {
  name: 'MapBox',
  components: {
    Drawer
  },
  data () {
    return {
      open: true
    }
  },
  computed: {
    ...mapGetters(['address'])
  },
  watch: {
    address: {
      handler (val) {
        if (val) flyToStore({ geometry: { coordinates: [val.longitude, val.latitude] } }, 13)
      }
    }
  },
  mounted () {
    initMap()
  }
}
</script>

<style lang="scss">
  .content-container {
    padding: 15px 30px;
  }

  .img-container {
    text-align: center;
  }

  #map,
  #listings {
    display: inline-block;
    vertical-align: top;
    height: 500px;
  }

  #map {
    width: 66%;
  }

  #listings {
    width: 33%;
    background-color: white;
  }

  #listings h1 {
    background: white;
    text-align: center;
    padding: 5px;
    margin: 0;
  }

  #listings #results {
    height: calc(100% - 56px);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5px;
  }

  #listings #results .item {
    margin-bottom: 10px;
  }

  #listings #results .item.active {
    background-color: whitesmoke;
  }

  @media only screen and (max-width: 768px) {
    #listings {
      display: none;
    }

    .map-container {
      margin: 0px -34px;
    }

    #map {
      width: 100%;
    }
  }

  @media only screen and (max-width: 640px) {
    .map-container {
      margin: 0px -20px;
    }
  }
</style>
