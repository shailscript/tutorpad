<template>
  <div class="bg-grey-lightest border-t border-b border-grey p-4 flex">
    <div class="w-1/4 sm:1/3">
      <img src="@/assets/logo.png" class="block h-auto w-full rounded-full">
    </div>
    <div class="mx-5 w-3/4 sm:2/3 p-2">
      <p class="font-serif font-hairline text-xl lg:">One Tuition</p>
      <p class="my-1 font-thin text-grey-darker text-sm lg:py-2">Vastrapur, Ahmedabad</p>
      <div class="my-2">
        <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">CBSE</span>
        <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">Group</span>
        <span class="bg-blue-darker text-white text-xs rounded-full px-2 py-1 mr-1">
          1 to 12
        </span>
      </div>
      <p class="hidden md:block pt-5 leading-normal font-serif font-hairline text-grey-darkest">
        Subject: Physics, Chemistry, Mathematics, and English.
      </p>
      <p class="hidden lg:block pt-2 leading-loose font-serif font-hairline text-grey-darkest">
        Description: Lorem ipsum is placeholder text commonly used in the graphic, print,
        and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuitionCard',
};
</script>
