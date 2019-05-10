<template>
  <div id="app">
    <Hero/>
    <ActionButton/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import ActionButton from '@/components/ActionButton.vue'

export default {
  name: 'app',
  components: {
    Hero,
    ActionButton
  }
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;
</style>
