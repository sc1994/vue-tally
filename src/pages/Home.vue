<template>
  <main-layout>
    <mu-paper :z-depth="3" class="paper-title">
      <mu-flex align-items="start">
        <mu-flex justify-content="center">
          <span style="color:white">当月预算还剩：100元</span>
        </mu-flex>
        <mu-flex justify-content="center" fill>
          <Residue :height="150" :residue="90"></Residue>
        </mu-flex>
      </mu-flex>
      </div>
    </mu-paper>
    <mu-paper :z-depth="3" style="height:100px;padding:10px">
      <mu-text-field style="height:80px;width:100%" v-model="value6" label="消费金额" prefix="￥" label-float></mu-text-field><br/>
    </mu-paper>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Residue from '../components/Residue.vue'

export default {
  components: {
    MainLayout,
    Residue
  },
  data() {
    return {
      value6: ''
    }
  },
  mounted() {}
}
</script>

<style scoped>
.paper-title {
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  background: linear-gradient(
    90deg,
    #01579b 0%,
    #006064 33%,
    #0d47a1 66%,
    #37474f 100%
  );
  background-position: 100% 0;
  animation: bgSize 5s infinite ease-in-out alternate;
}
@keyframes bgSize {
  0% {
    background-size: 300% 100%;
  }
  50% {
    background-size: 200% 200%;
  }
  100% {
    background-size: 100% 100%;
  }
}
</style>
