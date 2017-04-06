import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Hello = resolve => require(['@/components/Hello'], resolve)
const Contact = resolve => require(['@/pages/contact/contact'], resolve)
const User = resolve => require(['@/pages/user/user'], resolve)
const ShoppingCart = resolve => require(['@/pages/shoppingCart/shoppingCart'], resolve)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello(demo)',
      component: Hello
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
