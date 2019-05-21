<template>
  <div class="h-full overflow-y-scroll">
    <div class="container mx-auto -mt-10">
      <div v-for="n in 10" :key="n" class="my-10">
        <tuition-card></tuition-card>
      </div>
    </div>
  </div>
</template>

<script>
import TuitionCard from '@/components/TuitionCard.vue';

export default {
  name: 'Tuitions',
  components: {
    TuitionCard,
  },
};
</script>
