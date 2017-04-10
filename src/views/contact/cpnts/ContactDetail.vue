<template>
  <div class="msg">
      {{msg}}
      <span class="icon-font">&#xe6a9;</span>
      <hr>
      <el-button type="primary" @click="getContactsString">vuex请求数据</el-button>
     contactsString from vuex:{{contactsString}}
     <hr>
      <el-button type="primary" @click="getContactsStringComplex">vuex请求数据 复杂结构</el-button>
     contactsStringComplex from vuex:{{contactsStringComplex}}
     <br>
     <br>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'contactDetail',
  computed: {
    ...mapGetters({
      contactsString: 'contactsString',
      contactsStringComplex: 'contactsStringComplex'
    })
  },
  methods: mapActions([
    'getContactsString',
    'getContactsStringComplex'
  ]),
  data () {
    return {
      msg: '联系子页面内容'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
