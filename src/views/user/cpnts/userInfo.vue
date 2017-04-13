<template>
  <div>
    <h3>路由动态参数</h3>
    UserId: {{ $route.params.userId }}
    <router-link :to="{ path: '/contact'}">
      <el-button type="primary">返回</el-button>
    </router-link>
    <h3>同个组件之间跳转,不会有mounted钩子回调</h3>
    <router-link :to="{ name: 'userInfoName', params: { userId: 1 }}">User1</router-link>
    <router-link :to="{ name: 'userInfoName', params: { userId: 2 }}">User2</router-link>


  </div>
</template>

<script>

export default {
  name: 'info',
  data () {
    return {
    }
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {
    console.log('mounted')
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
