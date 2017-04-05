<template>
  <div>
      <h2>联系人页</h2>
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

<style>

</style>
