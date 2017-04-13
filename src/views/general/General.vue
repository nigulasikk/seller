<template>
  <div>
    <nav-bar></nav-bar>
    <h3>概况页</h3>
     ✔ yarn @done (17-04-05 15:30)
      <br>✔ 目录结构 @done (17-04-05 15:38)
      <br> ✔ http 模块 ,API层，axios 封装层 @done (17-04-05 17:52)
      <br> ✔ mock数据 @done (17-04-06 11:47)
      <br> ✔ vue-router @done (17-04-05 16:22)
      <br> ✔ 全局css,安装less-loader @done (17-04-06 11:08)
      <br> ✔ 图标字体 @done (17-04-06 11:35)
      <br> ✔ element 按需引入 @done (17-04-06 13:57)
      <br> ✔ vuex @done (17-04-06 16:47)
      <br> ✔ 路由动态加载 @done (17-04-06 17:30)
      <br> ✔ 测试 @done (17-04-06 18:21)

      <h3>4个demo页在第一次发测前删除，现在留着做参考</h3>
      <h4>几个暂定书写约定（大家一起给些建议）</h4>
      <br>1.几个命令：yarn（相当于 npm install），yarn run dev, yarn run build, yarn run e2e.
      <br>2.样式：每个.vue文件 写样式尽量 scoped标签，避免不必要的样式bug（不同页面之间，同个类名）;全局样式写src/style/base.less里，全局样式变量定义在src/style/variable.less里
      <br>3.目录结构：项目对应的所有单页都要放在src/views 文件夹下，每个模块的层级结构必须清晰，有父子关系的，子模块要放在cpnts(components的简写)目录下【若层级复杂，可递归创建cpnts目录】
      <br>4.请求&mock数据： 一个模块一个API文件（可照着 src/api/contactAPI.js 写）；可以将mock数据放在/static/mock文件夹下，这时候只需要将/src/common/config.js 下 mock赋值为true 即可
      <br>5. ESLint（Standard）：项目配置了 ESLint（Standard）,写代码的时候注意书写规范 比如 a = 1 (等号左右都有空格)
      <br>6.iconfont字体：由于在App.vue全局引入了iconfont，所以只需要在页面写DOM即可调用到字体，如<span class="icon-font">&#xe6a9;</span>
      <br>7.vuex的使用可参照src/store/contactDemo文件夹和src/store/contactDemoComplex文件夹。若模块较为简单，用前者的方式把action，mutations,getters等都放在一个文件夹，若模块比较复杂，则建议用后者的方式.
      <br>8.饿了吗UI插件按需引入组件：项目用到新组件时候，需要在src/common/element-import.js 引入对应的组件模块     
      <br>9.字符串处理尽量用 过滤器 ，全局过滤器参照 src/common/filters.js  
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'shoppingcart',
  data () {
    return {}
  },
  components: { NavBar },
  methods: {}
}
</script>
<style>
</style>
