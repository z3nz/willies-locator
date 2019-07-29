<template>
  <div id="app">
    <delivery/>
    <locator-modal/>
  </div>
</template>

<script>
import LocatorModal from '@/components/LocatorModal'
import Delivery from '@/components/Delivery'

export default {
  name: 'app',
  components: {
    LocatorModal,
    Delivery
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
