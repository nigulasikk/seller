<template>
  <div>
    <div class="login-wraper">
      <h3>seller登录页</h3>
      <el-input placeholder="用户名" v-model="userName" @keyup.native.enter="login">
        <template slot="prepend">用户名</template>
      </el-input>
      <br>
      <br>
       <el-input placeholder="密码" v-model="passwd" @keyup.native.enter="login">
        <template slot="prepend">密&nbsp;&nbsp;码</template>
      </el-input>
      <br>
      <br>
      <el-input v-model="vCode" size="small" placeholder="输入验证码" @keyup.native.enter="login"></el-input>
      <img src="https://server.onloon.com.cn/bshop/login/captcha/get" alt="">
      <br>
      <br>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import LoginAPI from '@/api/loginAPI'
import '@/assets/js/security'

export default {
  name: 'login',
  data () {
    return {
      /**
       * rsa publickey 初始化参数
       * @type {String}
       */
      rediskey: '',
      exponent: '',
      modulus: '',
      /**
       * 用户名 密码 验证码
       * @type {String}
       */
      userName: '15988852474',
      vCode: '',
      passwd: '654321'
    }
  },
  components: {
  },
  mounted: function () {
    /**
     * 初始化公钥
     * @param  {[type]} res [description]
     * @return {[type]}     [description]
     */
    LoginAPI.getRSAPublicKey().then(res => {
      if (res.data.code === 0) {
        let callbackData = res.data.data
        this.rediskey = callbackData.rediskey
        this.exponent = callbackData.exponent
        this.modulus = callbackData.modulus
      } else {
        console.log('初始化公钥失败')
      }
    })
  },
  methods: {
    encryptRSA (text) {
      var key = window.RSAUtils.getKeyPair(this.exponent, '', this.modulus)
      return window.RSAUtils.encryptedString(key, text)
    },
    login () {
      let postObj = {
        'loginAccount': this.userName,
        'password': this.encryptRSA(this.passwd),
        'captcha': this.vCode,
        'rediskey': this.rediskey
      }
      LoginAPI.login(postObj).then(res => {
        if (res.data.code === 0) {
          console.log('登录成功')
          this.$router.push({ path: '/' })
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-wraper {
    width:350px;
    margin:200px auto;
    h3{
      text-align: center;
    }
  }
</style>
