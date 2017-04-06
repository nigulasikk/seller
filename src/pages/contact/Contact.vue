<template>
  <div>
      <h2 class="contact-title">联系人页</h2>
      <span class="icon-font">&#xe6d7;</span>
      <span class="icon-font">&#xe6e7;</span>
      <span class="icon-font">&#xe6a9;</span>
      <contact-detail></contact-detail>
      <button @click="req">请求</button>
      <div class="div">
      	{{reqResult}}
      </div>
  </div>
</template>

<script>
import ContactDetail from './components/ContactDetail'
import ContactAPI from '@/api/contactAPI'

export default {
  name: 'contact',
  data () {
    return {
      reqResult: ''
    }
  },
  components: {
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
