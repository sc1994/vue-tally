<template>
  <div>
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
        <mu-text-field @blur="showMode" style="height:80px;width:50%" v-model="money" label="消费金额" prefix="￥" type="number" label-float></mu-text-field>
        <mu-auto-complete @change="showMode" style="height:80px;width:45%" :data="consumes" label="消费类型" :max-search-results="5" v-model="consume" open-on-focus label-float></mu-auto-complete>
      </mu-paper>
      <br/>
      <mu-list>
        <mu-sub-header>
          最近消费
          <mu-button flat color="primary" class="button-right">查看全部</mu-button>
        </mu-sub-header>
        <mu-divider></mu-divider>
        <mu-list-item avatar button :ripple="true">
          <mu-list-item-action style="width:280px">
            300 元
          </mu-list-item-action>
          <mu-list-item-title>加油</mu-list-item-title>
          <mu-list-item-action style="width:380px">
            2018年7月14日
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="true">
          <mu-list-item-action style="width:280px">
            300 元
          </mu-list-item-action>
          <mu-list-item-title>加油</mu-list-item-title>
          <mu-list-item-action style="width:380px">
            2018年7月14日
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="true">
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
        <mu-list-item avatar button :ripple="true">
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
        <mu-list-item avatar button :ripple="true">
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
        <mu-list-item avatar button :ripple="true">
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
        <mu-list-item avatar button :ripple="true">
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
        <mu-list-item avatar button :ripple="true">
          <mu-list-item-action style="width:280px">
          </mu-list-item-action>
          <mu-list-item-title></mu-list-item-title>
          <mu-list-item-action>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </main-layout>
    <Self-Loading :show="loading"></Self-Loading>
    <Self-Alert :msg="alert.msg" :show.sync="show" :type="alert.type"></Self-Alert>
    <Self-User :user.sync="user" v-if="showUser"></Self-User>
    <mu-dialog fullscreen :open.sync="openScroll">
      <mu-appbar color="primary" :title="consume+'：'+money+' 元'">
        <mu-button slot="left" icon @click="openScroll = false">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat @click="submit" v-if="step==2">
          完成
        </mu-button>
      </mu-appbar>
      <br/>
      <mu-stepper :active-step="step" orientation="vertical">
        <mu-step :style="'height:'+stepHeight[0]+'px;'">
          <mu-step-label>
            收入/支出
            <b>{{modeForm.mode!=0 ? " ：":""}}{{modeForm.modes[modeForm.mode].content}}</b>
          </mu-step-label>
          <mu-step-content>
            <mu-list>
              <mu-list-item v-if="item.type!=0" :key="item.type" v-for="item in modeForm.modes">
                <mu-list-item-content>
                  <mu-radio :label="item.content" :value="item.type" v-model="modeForm.mode" @change="step++"></mu-radio>
                </mu-list-item-content>
              </mu-list-item>
            </mu-list>
          </mu-step-content>
        </mu-step>
        <mu-step :style="'height:'+stepHeight[1]+'px;'">
          <mu-step-label>
            方式
            <b>{{modeForm.channel!=0 ? " ：":""}}{{modeForm.channels[modeForm.channel].content}}</b>
          </mu-step-label>
          <mu-step-content>
            <mu-list>
              <mu-list-item v-if="item.type!=0" :key="item.type" v-for="item in modeForm.channels">
                <mu-list-item-content>
                  <mu-radio :label="item.content" :value="item.type" v-model="modeForm.channel" @change="step++"></mu-radio>
                </mu-list-item-content>
              </mu-list-item>
            </mu-list>
            <mu-button flat @click="step--" color="primary">上一步</mu-button>
          </mu-step-content>
        </mu-step>
        <mu-step :style="'height:'+stepHeight[2]+'px;'">
          <mu-step-label>
            其他
          </mu-step-label>
          <mu-step-content>
            <br/>
            <mu-form :model="modeForm.other" label-position="top" label-width="70">
              <mu-form-item prop="date" label="日期" style="height:50px">
                <mu-date-input v-model="modeForm.other.date" type="dateTime" actions></mu-date-input>
              </mu-form-item>
              <mu-form-item prop="input" label="备注" style="height:50px">
                <mu-text-field v-model="modeForm.other.remark"></mu-text-field>
              </mu-form-item>
              <mu-form-item>
                <mu-button flat @click="step--" color="primary">上一步</mu-button>
              </mu-form-item>
            </mu-form>
          </mu-step-content>
        </mu-step>
      </mu-stepper>
    </mu-dialog>
  </div>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Residue from '../components/Residue.vue'
import SelfLoading from '../components/Loading.vue'
import SelfAlert from '../components/Alert.vue'
import SelfUser from '../components/User.vue'

export default {
  components: {
    MainLayout,
    Residue,
    SelfLoading,
    SelfAlert,
    SelfUser
  },
  data() {
    return {
      modeForm: {
        mode: '0',
        channel: '0',
        other: {
          date: '',
          remark: ''
        },
        channels: [
          {
            type: '0',
            content: '' // 空类型用以展示
          },
          {
            type: '1',
            content: '微信支付'
          },
          {
            type: '2',
            content: '支付宝余额'
          },
          {
            type: '3',
            content: '花呗'
          },
          {
            type: '4',
            content: '银行卡'
          },
          {
            type: '5',
            content: '信用卡'
          },
          {
            type: '6',
            content: '现金'
          }
        ],
        modes: [
          {
            type: '0',
            content: '' // 空类型用以展示
          },
          {
            type: '1',
            content: '收入'
          },
          {
            type: '2',
            content: '支出'
          }
        ]
      },
      step: 0,
      show: false,
      openScroll: false,
      alert: {
        msg: '',
        type: 'success'
      },
      loading: false,
      money: '',
      consumes: [],
      consume: '',
      user: {},
      stepHeight: [130, 50, 50],
      showUser: false
    }
  },
  methods: {
    submit() {
      var that = this
      that.loading = true
      axios
        .post('/inserttally', {
          token: localStorage.getItem('token'),
          money: that.money,
          type: that.consume,
          mode: that.modeForm.mode,
          channel: that.modeForm.channel,
          remark: that.modeForm.other.remark,
          ctime: that.modeForm.other.date
        })
        .then(result => {
          if (result.data.result) {
            that.initUser()
            that.alert.msg = '记录完成'
            that.alert.type = 'success'
            that.show = true
            that.loading = false
            setTimeout(() => {
              that.openScroll = false
              that.modeForm.mode = '0'
              that.modeForm.channel = '0'
              that.modeForm.mode = '0'
              that.modeForm.other = {}
              that.money = ''
              that.consume = ''
              that.step = 0
            }, 500)
          }
        })
        .catch(err => {
          that.alert.msg = '系统异常请重试'
          that.alert.type = 'error'
          that.show = true
          that.loading = false
        })
    },
    showMode() {
      var that = this
      if (that.money.length <= 0 || that.consume.length <= 0) return
      setTimeout(() => {
        that.openScroll = true
      }, 200)
    },
    initUser() {
      this.showUser = false
      setTimeout(() => {
        this.showUser = true
      }, 100)
    }
  },
  watch: {
    'user.ConsumeType'(val) {
      this.consumes = []
      if (val.length > 0)
        val.forEach(x => {
          this.consumes.push(x.Content)
        })
    },
    step(val) {
      var that = this
      var min = 50
      var height1 = 130
      var height2 = 370
      var height3 = 300
      if (val == 0) {
        that.stepHeight[0] = height1
        that.stepHeight[1] = min
        that.stepHeight[2] = min
      } else if (val == 1) {
        that.stepHeight[0] = min
        that.stepHeight[1] = height2
        that.stepHeight[2] = min
      } else if (val == 2) {
        that.stepHeight[0] = min
        that.stepHeight[1] = min
        that.stepHeight[2] = height3
        that.modeForm.other.date = new Date().toString()
        that.modeForm.other.remark = `${that.consume}${
          that.modeForm.modes[that.modeForm.mode].content
        }了${that.money}元。`
      }
    }
  },
  mounted() {
    this.showUser = true
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
