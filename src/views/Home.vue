<template>
  <div class="h-full w-full flex flex-col overflow-scroll">
    <div>
      <div class="hero bg-cover w-screen flex items-center">
        <div class="container mx-auto">
          <h2
          class="text-white font-hairline antialiased text-4xl pl-5 w-3/4"
          :style="{ textShadow: '0px 0px 10px rgb(10,10,10)' }"
        >
          Your hunt for a tuition starts here.
        </h2>
        </div>
      </div>

      <div
        class="primary-gradient max-w-xs mx-auto -my-8 rounded-lg shadow-md"
        @click="$router.push({ path: 'finder' })"
      >
        <div class="py-6 text-white flex justify-center">
          <p class="inline pr-3 text-2xl">Try Finder</p>
          <i class="fas fa-arrow-right text-2xl"></i>
        </div>
      </div>
    </div>

    <div class="my-20 container mx-auto">
      <div v-for='n in 5' :key="n">
        <TuitionCard></TuitionCard>
      </div>
    </div>
  </div>
</template>

<script>
import TuitionCard from '@/components/TuitionCard.vue';

export default {
  name: 'Home',
  components: {
    TuitionCard,
  },
};
</script>

<style>
.hero{
  background-image: url('../assets/hero.jpeg');
  height: 400px;
}
.primary-gradient{
  background: linear-gradient(283.71deg, #292E49, #536976);
}
</style>
