import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = resolve => require(['@/views/helloWorld/helloWorld'], resolve)
const Contact = resolve => require(['@/views/contact/contact'], resolve)
const User = resolve => require(['@/views/user/user'], resolve)
const UserInfo = resolve => require(['@/views/user/cpnts/userInfo'], resolve)
const ShoppingCart = resolve => require(['@/views/shoppingCart/shoppingCart'], resolve)
const Login = resolve => require(['@/views/login/Login'], resolve)
const General = resolve => require(['@/views/general/General'], resolve)
const Clue = resolve => require(['@/views/clue/Clue'], resolve)
const Display = resolve => require(['@/views/display/Display'], resolve)
const Explore = resolve => require(['@/views/explore/Explore'], resolve)
const Fund = resolve => require(['@/views/fund/Fund'], resolve)
const Mail = resolve => require(['@/views/mail/Mail'], resolve)
const Marketing = resolve => require(['@/views/marketing/Marketing'], resolve)
const Logistics = resolve => require(['@/views/logistics/Logistics'], resolve)
const Order = resolve => require(['@/views/order/Order'], resolve)
const Product = resolve => require(['@/views/product/Product'], resolve)
const Statistical = resolve => require(['@/views/statistical/Statistical'], resolve)
const newsList = resolve => require(['@/views/school/newsList'], resolve)
const articleDetail = resolve => require(['@/views/school/articleDetail'], resolve)
const CreateShop = resolve => require(['@/views/register/CreateShop'], resolve)
const channelList = resolve => require(['@/views/displayChannel/channelList'], resolve)
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
      path: '/readMe',
      name: '用户页(demo)',
      component: User
    },
    {
      path: '/userInfo/:userId',
      // name: '用户详情页(动态路由demo)',
      name: 'userInfoName',
      component: UserInfo
    },
    {
      path: '/shoppingCart',
      name: '购物车',
      component: ShoppingCart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '概况',
      component: General
    },
    {
      path: '/newsList',
      name: '小学堂',
      component: newsList
    },
    {
      path: '/articleDetail/:Id',
      name: 'articleDetail',
      component: articleDetail
    },
    {
      path: '/clue',
      name: 'Clue',
      component: Clue
    },
    {
      path: '/display',
      name: 'Display',
      component: Display
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/fund',
      name: 'Fund',
      component: Fund
    },
    {
      path: '/mail',
      name: 'Mail',
      component: Mail
    },
    {
      path: '/marketing',
      name: 'Marketing',
      component: Marketing
    },
    {
      path: '/logistics',
      name: 'Logistics',
      component: Logistics
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/statistical',
      name: 'Statistical',
      component: Statistical
    },
    {
      path: '/createShop',
      name: '创建店铺',
      component: CreateShop
    },
    {
      path: '/channelList',
      name: 'channelList',
      component: channelList
    }
  ]
})
