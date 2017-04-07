<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <router-link to="/">
      <el-menu-item index="1">readMe(user)</el-menu-item>
    </router-link>
    <router-link to="contact">
      <el-menu-item index="2">https请求(联系人)</el-menu-item>
    </router-link>
    <router-link to="shoppingCart">
      <el-menu-item index="3">vuex购物车</el-menu-item>
    </router-link>
     <router-link to="helloWorld">
      <el-menu-item index="4">helloWorld</el-menu-item>
    </router-link>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
