<template>
  <main-layout>
    <mu-paper :z-depth="3" class="paper-title">
      <Residue :height="165" :residue="90" style="margin-top: -10px;float:left;"></Residue>
      <div style="float:right;margin-top: 10px;">
        <span class="span-title">当月剩余：
          <span class="span-money">50,203</span> 元</span>
        <br /><br />
        <span class="span-title">当月消费：
          <span class="span-money" style="color:#4caf50">356</span> 元</span>
        <br /><br />
        <span class="span-title">6月的今天：
          <span class="span-money" style="color:#4caf50">478</span> 元</span>
      </div>
    </mu-paper>
    <mu-paper :z-depth="3" style="height:100px;padding:10px">
      <mu-text-field style="height:80px;width:60%" v-model="value6" label="消费金额" prefix="￥" type="number" label-float></mu-text-field>
      <mu-button ref="button" style="width:33%;margin-left: 5%;" @click="open = !open">记账</mu-button>
      <mu-popover cover :open.sync="open" :trigger="trigger">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>午餐</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>水果</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>奶粉</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>尿不湿</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>加油</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-popover>
    </mu-paper>
    <br/>
    <mu-list>
      <mu-sub-header>
        最近消费
        <mu-button flat color="primary" class="button-right">查看全部</mu-button>
      </mu-sub-header>
      <mu-divider></mu-divider>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          300 元
        </mu-list-item-action>
        <mu-list-item-title>加油</mu-list-item-title>
        <mu-list-item-action style="width:380px">
          2018年7月14日
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          300 元
        </mu-list-item-action>
        <mu-list-item-title>加油</mu-list-item-title>
        <mu-list-item-action style="width:380px">
          2018年7月14日
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          300 元
        </mu-list-item-action>
        <mu-list-item-title>加油</mu-list-item-title>
        <mu-list-item-action style="width:380px">
          2018年7月14日
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-sub-header>
        快速记录
        <mu-button flat color="primary" class="button-right">添加更多</mu-button>
      </mu-sub-header>
      <mu-divider></mu-divider>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          15 元
        </mu-list-item-action>
        <mu-list-item-title>午餐</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon color="#4caf50">
            <mu-icon right value="flight_takeoff"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          8 元
        </mu-list-item-action>
        <mu-list-item-title>公交</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon color="#4caf50">
            <mu-icon right value="flight_takeoff"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          8 元
        </mu-list-item-action>
        <mu-list-item-title>公交</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon color="#4caf50">
            <mu-icon right value="flight_takeoff"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
          8 元
        </mu-list-item-action>
        <mu-list-item-title>公交</mu-list-item-title>
        <mu-list-item-action>
          <mu-button icon color="#4caf50">
            <mu-icon right value="flight_takeoff"></mu-icon>
          </mu-button>
        </mu-list-item-action>
      </mu-list-item>
      <!-- 留个空的撑开样式 -->
      <mu-list-item avatar button :ripple="false">
        <mu-list-item-action style="width:280px">
        </mu-list-item-action>
        <mu-list-item-title></mu-list-item-title>
        <mu-list-item-action>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
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
      value6: '',
      open: false,
      trigger: null
    }
  },
  mounted() {
    this.trigger = this.$refs.button.$el
  }
}
</script>

<style scoped>
.button-right {
  margin-left: 55%;
}
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
