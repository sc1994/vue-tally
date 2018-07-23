<template>

</template>

<script>
import routes from '../routes'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mounted() {
    var that = this
    var token = localStorage.getItem('token')
    axios
      .get('/getuser/' + token)
      .then(result => {
        var data = result.data
        if (data && data.result) {
          that.$emit('update:user', data.user)
        } else {
          alert('token失效')
          that.$root.currentRoute = '/login'
          window.history.pushState(null, routes['/login'], '/login')
        }
      })
      .catch(err => {
        alert('数据异常')
        console.log(err)
      })
  }
}
</script>

