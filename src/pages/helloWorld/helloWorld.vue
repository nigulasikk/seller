<template>
  <div>
      <nav-bar></nav-bar>
      <hello></hello>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Hello from '@/components/Hello'

export default {
  name: 'helloWorld',
  data () {
    return {
    }
  },
  components: {
    NavBar,
    Hello
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
