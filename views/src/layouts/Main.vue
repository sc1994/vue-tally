<template>
  <div style="background-color: #eee;height:100%">
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
  position: absolute;
  bottom: 0px;
}

body,html{overflow-x:hidden;}
</style>
