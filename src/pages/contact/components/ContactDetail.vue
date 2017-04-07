<template>
  <div class="msg">
      {{msg}}
      <span class="icon-font">&#xe6a9;</span>
     
  </div>
</template>

<script>
export default {
  name: 'hello',
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
