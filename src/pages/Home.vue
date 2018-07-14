<template>
  <main-layout>
    <mu-paper :z-depth="3" class="paper-title">
      <Residue :height="165" :residue="90" style="margin-top: -10px;float:left;"></Residue>
      <div style="float:right;margin-top: 10px;">
        <span class="span-title">当月剩余：<span class="span-money">20,203</span> 元</span>
        <br /><br />
        <span class="span-title">当月消费：<span class="span-money" style="color:#4caf50">356</span> 元</span>
        <br /><br />
        <span class="span-title">6月的今天：<span class="span-money" style="color:#4caf50">478</span> 元</span>
      </div>
    </mu-paper>
    <mu-paper :z-depth="3" style="height:100px;padding:10px">
      <mu-text-field style="height:80px;width:100%" v-model="value6" label="消费金额" prefix="￥" label-float></mu-text-field><br/>
    </mu-paper>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import Residue from "../components/Residue.vue";

export default {
  components: {
    MainLayout,
    Residue
  },
  data() {
    return {
      value6: ""
    };
  },
  mounted() {}
};
</script>

<style scoped>
.span-title {
  color: #424242;
  margin-right: 10px;
}
.span-money {
  font-size: 20px;
  font-weight: 500;
  color: #ff5722;
}
.paper-title {
  height: 180px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at top center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;
}
</style>
