<template>
  <div class="flex justify-between items-center">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppActionBar',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
