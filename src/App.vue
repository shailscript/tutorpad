<template>
  <div id="app">
    <Hero/>
    <div id="actionButton" class="flex justify-center mb-20">
      <div class="-my-10 px-28 primary-gradient rounded-lg flex justify-center">
        <p class="font-hairline text-white text-2xl my-auto pr-3">Try finder</p>
        <font-awesome-icon icon="arrow-right" size="1x" :style="{color: 'white'}" class="my-auto"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;


.primary-gradient{
  background: linear-gradient(283.71deg, #292E49, #536976);
}
</style>
