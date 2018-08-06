<template>
  <div id="app">
    <div>
      <sticky-navbar></sticky-navbar>
    </div>
    <router-view/>

    <div>
      <my-footer></my-footer>
    </div>
  </div>
</template>


<style>
body {
  margin: 0%;
  padding: 0%;

  font-family: 'Open Sans,Arial,sans-serif'
}
</style>

<script>
import StickyNavbar from '@/components/StickyNavbar'
import MyFooter from '@/components/MyFooter'
export default {
  components: {
    StickyNavbar,
    MyFooter
  }
}
</script>
