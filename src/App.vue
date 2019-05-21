<template>
  <div id="app">
    <div class="h-screen w-screen overflow-hidden flex flex-col">
      <div class="text-center p-4 bg-blue-darkest">
        <div class="container mx-auto flex justify-between items-center">
          <div
            class="inline-block bg-grey-light w-12 h-12 rounded"
            @click="$router.push('/')"
          >
            <!-- Logo -->
          </div>

          <div @click="$router.push('tuitions')">
            <i class="fas fa-university text-4xl text-white"></i>
          </div>

          <div @click="$router.push('login')">
            <i class="fas fa-user text-2xl text-white"></i>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-hidden">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<!--suppress CssInvalidAtRule -->
<style>
  @import url('https://cdn.jsdelivr.net/npm/tailwindcss@0.7.4/dist/tailwind.min.css');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500i,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
  p {
    font-family: 'Roboto', 'sans-serif';
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', serif;
  }
</style>
