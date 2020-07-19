<template>
  <div class="fixed">
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>
<script>
import NavMenu from './common/NavMenu'
export default {
  name: 'Home',
  components: {
    NavMenu
  }
}
</script>

<style scoped>
.fixed {
  height: 100%
}
</style>
