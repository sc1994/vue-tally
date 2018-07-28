<template>
  <main-layout :alert.sync="alert" :loading.sync="loading" :user.sync="user" :initUser="initUser">
    <mu-paper :z-depth="5" style="height:110px;padding:10px">
      <mu-list textline="two-line">
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar style="width:60px;height:60px">
              <img src="/src/static/head-default.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content style="margin-left: 22px;">
            <mu-list-item-title>这里是昵称</mu-list-item-title>
            <mu-list-item-sub-title>账号 : suncheng</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-paper>
    <br/>
    <mu-list toggle-nested>
      <mu-sub-header>账户设置</mu-sub-header>
      <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
        <mu-list-item-title>基本设置</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_up" v-if="open === 'send'"></mu-icon>
          <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" v-else></mu-icon>
        </mu-list-item-action>
        <mu-list-item button :ripple="true" slot="nested">
          <mu-list-item-title>头像</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="edit"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="true" slot="nested">
          <mu-list-item-title>昵称</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="edit"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="true" slot="nested">
          <mu-list-item-title>密码</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="edit"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
    <br/><br/>
    <mu-container class="button-wrapper">
      <mu-flex justify-content="center" align-items="center">
        <mu-button round color="success" @click="loginOut" full-width>退出登陆</mu-button>
      </mu-flex>
    </mu-container>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  components: {
    MainLayout
  },
  data() {
    return {
      open: 'send',
      alert: {
        msg: '',
        type: 'success',
        show: false
      },
      loading: false,
      initUser: 1,
      user: {}
    }
  },
  methods: {
    loginOut() {
      var that = this
      axios
        .get('/removetoken/' + localStorage.getItem('token'))
        .then(result => {
          localStorage.clear()
          alert('已退出登陆')
          that.$root.currentRoute = '/login'
          window.history.pushState(null, routes['/login'], '/login')
        })
    }
  }
}
</script>

<style>
</style>
