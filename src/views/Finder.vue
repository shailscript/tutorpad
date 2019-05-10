<template>
  <div>
    <h2 class="py-2 px-3 font-serif font-hairline text-3xl">Finder</h2>
    <p class="px-3 py-2 font-sans font-thin text-lg text-grey-dark">Select your preference from the options below, so we can assist you better</p>

    <cities></cities>
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

