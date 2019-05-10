<template>
  <div class="bg-grey-lightest border-t border-b border-grey p-4 flex">
    <div class="w-1/4 sm:1/3">
      <img src="@/assets/logo.png" class="block h-auto w-full rounded-full">
    </div>
    <div class="mx-5 w-3/4 sm:2/3 p-2">
      <p class="font-serif font-hairline text-xl">One Tuition</p>
      <p class="py-1 font-thin text-grey-darker text-sm">Vastrapur, Ahmedabad</p>
      <span class="bg-blue-dark text-white text-sm rounded-lg px-2 mr-2">CBSE</span>
      <span class="bg-blue-dark text-white text-sm rounded-lg px-2 mr-2">Group</span>
      <span class="bg-blue-dark text-white text-sm rounded-lg px-2 mr-2">English</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuitionCard'
}
</script>