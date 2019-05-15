<template>
  <div>
    <h2 class="py-2 px-3 font-serif font-hairline text-3xl">Finder</h2>
    <p class="px-3 py-2 font-sans font-thin text-lg text-grey-dark">Select your preference from the options below, so we can assist you better</p>
    <cities></cities>
    <div class="sticky pin-x pin-b bg-grey-light p-4 flex justify-between">
      <button class="w-full mr-1 py-2 font-hairline text-xl bg-blue-darkest text-white rounded">Back</button>
      <button class="w-full ml-1 py-2 font-hairline text-xl bg-blue-darkest text-white rounded">Next</button>
    </div>
  </div>
</template>

<script>
import Cities from '@/components/Cities.vue'

export default {
  name: 'Finder',
  components: {
    Cities
  }
}
</script>

<style>

</style>

