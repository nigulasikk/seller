import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = resolve => require(['@/pages/helloWorld/helloWorld'], resolve)
const Contact = resolve => require(['@/pages/contact/contact'], resolve)
const User = resolve => require(['@/pages/user/user'], resolve)
const ShoppingCart = resolve => require(['@/pages/shoppingCart/shoppingCart'], resolve)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld(demo)',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: '联系人页(demo)',
      component: Contact
    },
    {
      path: '/',
      name: '用户页(demo)',
      component: User
    },
    {
      path: '/shoppingCart',
      name: '购物车',
      component: ShoppingCart
    }
  ]
})
