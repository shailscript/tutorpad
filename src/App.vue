<template>
  <div id="app">
    <div id="hero-bg" class="hero bg-cover w-screen flex flex-col">
    </div>
    <div id="hero" class="flex w-screen flex-col">
      <div class="nav flex justify-between p-5">
        <div>
          <font-awesome-icon icon="bars" size="2x"></font-awesome-icon>
        </div>
        <div class="logo">
          <font-awesome-icon icon="chalkboard-teacher" size="2x"></font-awesome-icon>
        </div>
        <div>
          <font-awesome-icon icon="user" size="2x"></font-awesome-icon>
        </div>
      </div>
      <div class="w-3/4 my-auto">
        <p class="font-hairline font-serif px-5 text-4xl text-white">Your hunt for a tuition starts here.</p>
      </div>
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

  #hero-bg{
    background-image: url("./assets/hero.jpeg");
    height: 400px;
    position: absolute;
    z-index: -5;
  }
  #hero{
    background-color: rgba(0,0,0, 0.4);
    position: relative;
    height: 400px;
    z-index: -2;
  }
</style>
