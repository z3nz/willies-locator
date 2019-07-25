<template>
  <div id="app">
    <locator-modal/>
  </div>
</template>

<script>
import LocatorModal from './components/LocatorModal.vue'

export default {
  name: 'app',
  components: {
    LocatorModal
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
