<template>
  <div>
      <nav-bar></nav-bar>
      <h2 class="contact-title">联系人页</h2>
      <span class="icon-font">&#xe6d7;</span>
      <span class="icon-font">&#xe6e7;</span>
      <span class="icon-font">&#xe6a9;</span>
      <contact-detail></contact-detail>
      <el-button type="primary" @click="req">https请求数据(get)</el-button>
      <el-button type="primary" @click="reqPost">https请求数据(post)</el-button>
      <div class="div">
      	{{reqResult}}
      </div>
      <hr>
    <h5>路由动态传参</h5>
    <router-link :to="{ name: 'userInfoName', params: { userId: 1 }}">User1</router-link>
    <router-link :to="{ name: 'userInfoName', params: { userId: 2 }}">User2</router-link>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ContactDetail from './cpnts/ContactDetail'
import ContactAPI from '@/api/contactAPI'

export default {
  name: 'contact',
  data () {
    return {
      reqResult: ''
    }
  },
  components: {
    NavBar,
    ContactDetail,
    ContactAPI
  },
  methods: {
    req: function () {
      ContactAPI.getPersonInfo().then((res) => {
        this.reqResult = res
      })
    },
    reqPost: function () {
      let postObj = {
        firstName: 315,
        mails: [{'type': 0, 'mail': 'yaxin_zhu@163.com'}],
        purchaserId: 323,
        createSource: 'inquiry_create'
      }
      ContactAPI.postTest(postObj).then((res) => {
        this.reqResult = res
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/style/variable.less';
.contact-title{
	color:@success;
}
</style>
