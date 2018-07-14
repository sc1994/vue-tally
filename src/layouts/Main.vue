<template>
  <div>
    <div style="padding:10px">
      <slot></slot>
    </div>
    <botton-navigation class="bot-van"></botton-navigation>
  </div>
</template>

<script>
import BottonNavigation from '../components/BottonNavigation.vue'

export default {
  components: {
    BottonNavigation
  }
}
</script>

<style scoped>
.container {
  padding-right: 0px;
  padding-left: 0px;
}

.bot-van {
  position: fixed;
  bottom: 0px;
}

body,
html {
  overflow-x: hidden;
  background-color: #eee;
}
</style>
