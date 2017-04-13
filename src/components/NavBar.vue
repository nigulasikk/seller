<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-vertical-demo" mode="vertical" @select="handleSelect">
    <router-link to="/">
      <el-menu-item index="1">概况</el-menu-item>
    </router-link>
     <router-link to="/product">
      <el-menu-item index="2">商品</el-menu-item>
    </router-link>
     <router-link to="/marketing">
      <el-menu-item index="3">营销</el-menu-item>
    </router-link>
     <router-link to="/explore">
      <el-menu-item index="4">探索</el-menu-item>
    </router-link>
     <router-link to="/clue">
      <el-menu-item index="5">线索</el-menu-item>
    </router-link>
     <router-link to="/contact">
      <el-menu-item index="6">联系</el-menu-item>
    </router-link>
     <router-link to="/mail">
      <el-menu-item index="7">邮件</el-menu-item>
    </router-link>
     <router-link to="/order">
      <el-menu-item index="8">订单</el-menu-item>
    </router-link>
     <router-link to="/logistics">
      <el-menu-item index="9">物流</el-menu-item>
    </router-link>
     <router-link to="/fund">
      <el-menu-item index="10">资金</el-menu-item>
    </router-link> 
     <router-link to="/display">
      <el-menu-item index="11">展示</el-menu-item>
    </router-link>
      <router-link to="/statistical">
      <el-menu-item index="12">统计</el-menu-item>
    </router-link>
     <router-link to="/readMe">
      <el-menu-item index="101">readMe(user demo页)</el-menu-item>
    </router-link>
    <router-link to="contact">
      <el-menu-item index="102">https请求(contact demo页)</el-menu-item>
    </router-link>
    <router-link to="shoppingCart">
      <el-menu-item index="103">vuex购物车（shoppingCart demo页）</el-menu-item>
    </router-link>
     <router-link to="helloWorld">
      <el-menu-item index="104">helloWorld (demo) </el-menu-item>
    </router-link>
    </el-menu>
  </div>
</template>
<script>
import generalAPI from '@/api/generalAPI'
export default {
  name: 'navbar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted: function () {
    /**
     * 请求个人信息
     * @param  {[type]} ).then((res [description]
     * @return {[type]}             [description]
     */
    generalAPI.getPersonDetail().then((res) => {
    })
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
