<template>
  <div class="drawer">
    <font-awesome-icon icon="angle-right" size="2x" :class="['caret', { open }]"/>

    <slot name="header"/>

    <div class="options">
      <slot name="options"/>
    </div>

    <div v-show="open" class="content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  width: 100%;
  border: 17px solid;
  padding: 15px 0px 15px;
  position: relative;

  &.yellow {
    border-color: #f6eb39;
    background-color: #f8f6dd;
  }

  &.pink {
    border-color: #f6397c;
    background-color: #f8dde7;
  }

  &.orange {
    border-color: #f6a439;
    background-color: #f8eddd;
  }

  .caret {
    position: absolute;
    left: 20px;
    top: 7px;
    transition: transform .3s ease;
    cursor: pointer;

    &.open {
      transform: rotate(90deg);
    }
  }

  h1 {
    font-size: 20px;
    line-height: 0.72;
    letter-spacing: 0.04px;
    color: #002554;
    margin: 0px;
    padding-left: 50px;
    cursor: pointer;
    user-select: none;
    z-index: 1;
    position: relative;
  }

  .options {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 20px;
    font-weight: bold;
    line-height: 0.72;
    letter-spacing: 0.04px;
    text-align: left;
    color: #002554;
  }

  .content {
    padding: 15px 0px 0px;
  }
}

</style>
