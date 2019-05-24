<template>
  <div class="h-full w-full">
    <app-action-bar title='Register'></app-action-bar>

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
          Register
        </button>

        <p class="my-2 mx-auto text-grey-darker font-hairline text-xl">
          Already have an account?
          <router-link
            class="text-blue-dark no-underline px-1"
            to="login">
            Login
          </router-link>
          instead.
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
