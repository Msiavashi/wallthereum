<template>
  <div id="app">
    <div>
      <sticky-navbar></sticky-navbar>
    </div>
    <router-view/>
  </div>
</template>


<style>
body {
  margin: 0%;
  padding: 0%;
}
</style>

<script>
import StickyNavbar from '@/components/StickyNavbar'
export default {
  components: {
    StickyNavbar
  }
}
</script>
