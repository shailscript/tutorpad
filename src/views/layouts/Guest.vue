<template>
  <div class="container mx-auto">
    <navbar text-color = "text-black"></navbar>
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
.text-color {
  color: black;
}
</style>

