<template>
  <div class="drawer">
    <slot name="header"/>
    <div class="content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer'
}
</script>
