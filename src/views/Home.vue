<template>
  <div class="h-full w-full flex flex-col overflow-scroll">
    <div>
      <div class="hero bg-cover w-screen flex items-center">
        <h2
          class="text-white font-hairline antialiased text-3xl pl-5 w-3/4"
          :style="{ textShadow: '0px 0px 10px rgb(10,10,10)' }"
        >
          Your hunt for a tuition starts here.
        </h2>
      </div>

      <div
        class="primary-gradient max-w-xs mx-auto -my-8 rounded-lg shadow-md"
        @click="router.push({ path: 'finder' })"
      >
        <div class="py-6 text-white flex justify-center">
          <p class="inline pr-3 text-2xl">Try Finder</p>
          <i class="fas fa-arrow-right text-2xl"></i>
        </div>
      </div>
    </div>

    <div class="my-20 container mx-auto">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
