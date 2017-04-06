<template>
  <div class="msg">
      {{msg}}
      <span class="icon-font">&#xe6a9;</span>
      <el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '联系子页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
