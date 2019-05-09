<template>
  <div id="app">
    <div id="hero" class="hero bg-cover w-screen flex flex-col">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;

  #hero{
    background-image: url("./assets/hero.jpeg");
    height: 400px;
    position: absolute;
    z-index: -5;
  }
</style>
