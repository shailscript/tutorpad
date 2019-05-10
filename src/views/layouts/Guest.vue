<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Guest',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.nav {
  color: black;
}
</style>

