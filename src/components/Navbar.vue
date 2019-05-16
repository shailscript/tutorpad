<template>
  <div class="flex justify-between p-5">
    <div>
      <font-awesome-icon icon="bars" size="2x" :class="className"></font-awesome-icon>
    </div>
    <router-link to='/'>
      <font-awesome-icon icon="chalkboard-teacher" size="2x" :class="className"></font-awesome-icon>
    </router-link>
    <router-link to='/login'>
      <font-awesome-icon icon="user" size="2x" :class="className"></font-awesome-icon>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    className : {
      type:String,
      default: 'text-black'
    }
  },
  name: 'Navbar',
}
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
