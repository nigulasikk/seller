<template>
  <div>
    <div class="login_header">
      <div class=" w-1200"> 
      <!-- <img src="../../../../dist/static/img/logo.png"> -->
      <a>商家社区</a>
        <ul class="ul" id="LoginInfo">
          <li class="lib"><span>手机用户</span>
            <a href="#">{{loginUser.loginAccount}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu">
      <div class="w-1200">
        <a href="../../index.html">首页</a>
        <router-link :to="{ path: '/newsList'}" class="bt">小学堂</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import schoolAPI from '@/api/schoolAPI'
export default {
  name: 'newinfo',
  data () {
    return {
      loginUser: ''
    }
  },
  components: {
    schoolAPI
  },
  methods: {
  },
  created () {
    schoolAPI.getLoginInfo().then((res) => {
      this.loginUser = res.data.data
      console.log(res)
    })
  }
}
</script>
