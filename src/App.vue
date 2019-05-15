<template>
  <div id="app" class="min-h-screen">
    <router-view class="min-h-full"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;
</style>
