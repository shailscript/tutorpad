<template>
  <div class="h-full w-full">
    <div class="py-2 px-4 sm:bg-grey-lighter">
      <div class="container mx-auto">
        <app-action-bar title='Login'></app-action-bar>
      </div>
    </div>
    <div class="h-full max-w-sm mx-auto -mt-20">
      <div class="h-full flex flex-col justify-center">
        <label
          class="m-2 text-grey-darker font-hairline text-xl"
          for="email"
        >
          Email
        </label>

        <input
          class="border-2 border-gray-darkest m-2 p-4 rounded"
          type="text"
          id="email"
          placeholder="example@example.com"
        >

        <label
          class="m-2 mt-4 text-grey-darker font-hairline text-xl"
          for="password"
        >
          Password
        </label>

        <input
          class="border-2 border-gray-darkest m-2 p-4 rounded"
          type="password"
          id="password">

        <button
          class="max-w-xs mx-auto m-2 px-16 py-4 bg-blue-darkest text-white rounded"
        >
          Login
        </button>
        <p class="my-2 mx-auto text-grey-darker font-hairline text-xl">
          Don't have an account yet?
          <router-link
            class="text-blue-dark no-underline px-1"
            to="register">
            Register
          </router-link>
          now.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppActionBar from '@/components/AppActionBar.vue';

export default {
  name: 'Login',
  components: {
    AppActionBar,
  },
};
</script>

<style>

</style>
