import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Contact from '@/pages/contact/contact'
import User from '@/pages/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contact',
      name: '联系人页',
      component: Contact
    },
    {
      path: '/',
      name: '用户页',
      component: User
    }
  ]
})
