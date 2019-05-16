<template>
  <div>
    <div id="hero-bg" class="bg-cover w-screen flex flex-col">
    </div>
    <div id="hero" class="w-screen">
      <div class="container mx-auto flex flex-col h-full">
        <navbar class-name="text-white"></navbar>
        <div class="w-3/4 my-auto">
          <p class="font-hairline antialiased font-serif px-5 text-4xl text-white">Your hunt for a tuition starts here.</p>
        </div>
      </div>
    </div>
    <ActionButton/>
    <div id="content" class="container mx-auto my-5 lg:my-16">
      <h2 class="py-1 px-3 font-serif font-thin text-1xl">Featured Tuitions</h2>
      <p class="px-3 font-sans font-thin text-lg text-grey-dark">These are editor's recommendations</p>
      <div id="cards" class="my-5 lg:my-16">
        <TuitionCard/>
        <TuitionCard/>
        <TuitionCard/>
        <TuitionCard/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ActionButton from '@/components/ActionButton.vue'
import TuitionCard from '@/components/TuitionCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ActionButton,
    TuitionCard
  }
}
</script>

<style scoped>
#hero-bg{
  background-image: url("../assets/hero.jpeg");
  height: 400px;
  position: absolute;
  z-index: -5;
}
#hero{
  background-color: rgba(0,0,0, 0.4);
  position: relative;
  height: 400px;
  z-index: -2;
}
</style>