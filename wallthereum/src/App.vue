<template>
  <div id="app">
    <div>
      <sticky-navbar></sticky-navbar>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>

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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
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
