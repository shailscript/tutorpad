<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <div class="my-5">
        <div class="mx-3 flex justify-between">
          <h2 class="p-2 font-serif font-hairline text-3xl">Login</h2>
          <!-- <button class="hidden lg:block px-4 font-hairline text-xl bg-blue-darkest text-white rounded-lg">Submit</button> -->
        </div>
        <p class="mx-3 p-2 font-sans font-thin text-lg text-grey-dark">
          Do not have an account yet? <a href="#" class="text-blue-dark">Register here</a>
        </p>
      </div>
      <div class="flex flex-col align-center md:w-2/3 lg:w-1/2 mx-auto">
        <p class="my-2 mx-5 font-sans text-lg text-grey-darker">Email</p>
        <input class="w-full mx-4 p-4 border border-grey-light rounded-lg" type="text" name="" id="">
        <p class="my-2 mx-5 font-sans text-lg text-grey-darker">Password</p>
        <input class="w-full mx-4 p-4 border border-grey-light rounded-lg" type="text" name="" id="">
        <button class="hidden lg:block w-1/2 my-4 mx-auto py-3 font-hairline text-xl bg-blue-darkest text-white rounded-lg">Submit</button>
      </div>
    </div>
    <div class="lg:hidden sticky pin-x pin-b bg-grey-light p-4 flex justify-around">
      <button class="w-full py-2 font-hairline text-xl bg-blue-darkest text-white rounded">Submit</button>
    </div>
  </div>
</template>