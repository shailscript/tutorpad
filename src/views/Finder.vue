<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <div class="my-5">
        <div class="mx-3 flex justify-between">
          <h2 class="p-2 w-1/2 font-serif font-hairline text-3xl">Finder</h2>
          <div class="hidden lg:block w-1/2 flex justify-end">
            <button class="w-1/3 p-2 font-hairline text-xl bg-blue-darkest text-white rounded-lg">Back</button>
            <button class="w-1/3 p-2 font-hairline text-xl bg-blue-darkest text-white rounded-lg">Next</button>
          </div>
        </div>
        <h2 class="mx-3 p-2 font-serif font-hairline text-3xl"></h2>
        <p class="mx-3 p-2 font-sans font-thin text-lg text-grey-dark">
          Select your preference from the options below, so we can assist you better
        </p>
      </div>
      <cities></cities>
    </div>
    <div class="lg:hidden sticky pin-x pin-b bg-grey-light p-4 flex justify-around">
      <button class="w-1/2 mr-1 py-2 font-hairline text-xl bg-blue-darkest text-white rounded">Back</button>
      <button class="w-1/2 ml-1 py-2 font-hairline text-xl bg-blue-darkest text-white rounded">Next</button>
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

