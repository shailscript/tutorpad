<template>
  <div class="h-full w-full">
    <div class="py-2 px-4 sm:bg-grey-lighter">
      <div class="container mx-auto">
        <app-action-bar title='Tuitions'></app-action-bar>
      </div>
    </div>
    <div class="h-full overflow-y-scroll">
      <div class="container mx-auto">
        <div v-for="n in 10" :key="n" class="my-10">
          <tuition-card></tuition-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TuitionCard from '@/components/TuitionCard.vue';
import AppActionBar from '@/components/AppActionBar.vue';

export default {
  name: 'Tuitions',
  components: {
    TuitionCard,
    AppActionBar,
  },
};
</script>
