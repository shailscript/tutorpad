<template>
  <div class="py-2 px-4 sm:bg-grey-lighter">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <h2>{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
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
