<template>
  <div>
    <div class="my-5">
      <h2 class="py-2 px-5 font-serif font-hairline text-3xl">Tuitions</h2>
      <p class="px-5 py-2 font-sans font-thin text-lg text-grey-dark">10 results.</p>
    </div>
    <div class="mx-5">
      <tuition-card></tuition-card>
      <tuition-card></tuition-card>
      <tuition-card></tuition-card>
      <tuition-card></tuition-card>
    </div>
  </div>
</template>

<script>
import TuitionCard from '@/components/TuitionCard.vue'
export default {
  name: 'Tuitions',
  components: {
    TuitionCard
  }
}
</script>

<style>

</style>
