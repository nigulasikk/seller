<template>
  <div>
    <nav-bar></nav-bar>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
    <img src="../../assets/demo/vuex.png">
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import ProductList from './cpnts/ProductList.vue'
import Cart from './cpnts/Cart.vue'
export default {
  name: 'shoppingcart',
  data () {
    return {}
  },
  components: { ProductList, Cart, NavBar },
  methods: {}
}
</script>
<style>
</style>
