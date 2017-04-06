import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contact from '@/pages/contact/contact'
import User from '@/pages/user/user'
import ShoppingCart from '@/pages/shoppingCart/shoppingCart'

Vue.use(Router)

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
