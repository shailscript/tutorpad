<template>
  <div id="actionButton" class="flex justify-center">
    <router-link to="/finder">
      <div class="-mt-10 px-28 primary-gradient rounded-lg flex justify-center shadow-lg">
        <p class="font-hairline text-white text-2xl py-6 pr-3">Try finder</p>
        <font-awesome-icon icon="arrow-right" size="1x" :style="{color: 'white'}" class="my-auto"></font-awesome-icon>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'ActionButton',
}
</script>

<style scoped>
.primary-gradient{
  background: linear-gradient(283.71deg, #292E49, #536976);
}
a{
  text-decoration: none;
  cursor: pointer;
}
</style>

