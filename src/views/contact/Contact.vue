<template>
  <div>
      <nav-bar></nav-bar>
      <h2 class="contact-title">联系人页</h2>
      <span class="icon-font">&#xe6d7;</span>
      <span class="icon-font">&#xe6e7;</span>
      <span class="icon-font">&#xe6a9;</span>
      <contact-detail></contact-detail>
      <el-button type="primary" @click="req">https请求数据</el-button>

      <div class="div">
      	{{reqResult}}
      </div>
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
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
@import '../../assets/style/variable.less';
.contact-title{
	color:@success;
}
</style>
