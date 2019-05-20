<template>
  <div
    class="flex flex-col justify-between h-32 rounded cursor-pointer"
    :style="{ backgroundImage: `url(${item.image})` }"
    @click="$emit(isActive ? 'deselect' : 'select')"
  >
    <p class="-m-2">
      <i
        class="text-white rounded-full w-6 h-6 p-1 fas fa-check shadow-sm"
        :class="isActive ? 'bg-green' : 'bg-grey-light'"
      >
        <!-- Icon -->
      </i>
    </p>

    <p
      class="text-xl font-bold text-white p-4"
      :style="{ textShadow: '0px 2px 2px #222' }"
    >
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FinderGroupItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>