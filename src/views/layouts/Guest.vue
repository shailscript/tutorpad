<template>
  <div>
    <div class="container mx-auto">
      <navbar className="text-black"></navbar>
      <router-view></router-view>
    </div>
    <app-footer class="hidden lg:block mt-16"></app-footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'
export default {
  name: 'Guest',
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style scoped>
.text-color {
  color: black;
}
</style>

