<template>
  <div class="bg-grey-lightest border-t border-b border-grey p-4 flex">
    <div class="w-1/4 sm:1/3">
      <img src="@/assets/logo.png" class="block h-auto w-full rounded-full">
    </div>
    <div class="mx-5 w-3/4 sm:2/3 p-2">
      <p class="font-serif font-hairline text-xl">One Tuition</p>
      <p class="my-1 font-thin text-grey-darker text-sm">Vastrapur, Ahmedabad</p>
      <div class="my-2">
        <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">CBSE</span>
        <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">Group</span>
       <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">English</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuitionCard'
}
</script>