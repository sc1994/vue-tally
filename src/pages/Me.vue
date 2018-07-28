<template>
  <!-- <main-layout>
    <mu-container class="button-wrapper">
      <mu-flex justify-content="center" align-items="center">
        <mu-button round color="success" full-width>退出登陆</mu-button>
      </mu-flex>
    </mu-container>
  </main-layout> -->
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  components: {
    MainLayout
  },
  methods: {
    loginOut() {
      axios
        .get('/removetoken/' + localStorage.getItem('token'))
        .then(result => {
          localStorage.clear()
        })
    }
  }
}
</script>

<style>
</style>
