<template>
  <div id="app">
    <Hero/>
    <ActionButton/>
    <div id="content" class="">
      <h2 class="py-1 px-3 font-serif font-thin text-1xl">Featured Tuition</h2>
      <p class="px-3 font-sans font-thin text-lg text-grey-dark">These are editor's recommendations</p>
      <div id="cards" class="my-5">
        <TuitionCard/>
        <TuitionCard/>
        <TuitionCard/>
        <TuitionCard/>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import ActionButton from '@/components/ActionButton.vue'
import TuitionCard from '@/components/TuitionCard.vue'

export default {
  name: 'app',
  components: {
    Hero,
    ActionButton,
    TuitionCard
  }
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;
</style>
