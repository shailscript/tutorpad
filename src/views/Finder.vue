<template>
  <div class="h-full w-full flex flex-col">
    <div class="py-2 sm:bg-grey-lighter">
      <div class="container mx-auto px-4">
        <app-action-bar title="Finder">
          <div class="-mx-1">
            <app-button
              class="mx-1"
              v-if="!atFirstStep"
              @click.native="goPrevStep"
            >
              <i class="fas fa-arrow-left"></i> <span class="hidden sm:inline p-2">Prev</span>
            </app-button>

            <app-button
              class="mx-1"
              v-if="!atLastStep"
              @click.native="goNextStep"
            >
              <span class="hidden sm:inline p-2">Next</span> <i class="fas fa-arrow-right"></i>
            </app-button>

            <app-button
              class="mx-1"
              v-if="atLastStep"
              @click.native="completeFinder"
            >
              <span class="hidden sm:inline p-2">Done</span> <i class="fas fa-check"></i>
            </app-button>
          </div>
        </app-action-bar>
      </div>
    </div>

    <div class="flex-1 overflow-y-scroll">
      <component
        :is="selectedStep.component"
        :class="selectedStep.className"
      />
    </div>
  </div>
</template>

<script>
import AppActionBar from '../components/AppActionBar.vue';
import FinderIntroduction from '../components/FinderIntroduction.vue';
export default {
  name: 'Finder',
  components: {
    FinderIntroduction,
    AppActionBar,
  },
  data() {
    return {
      selected: 0,
      cities: {
        title: 'Cities',
        selected: [],
        items: [
          { title: 'Surat', image: 'https://placeimg.com/480/480/arch' },
          { title: 'Delhi', image: 'https://placeimg.com/480/480/arch' },
          { title: 'Bombay', image: 'https://placeimg.com/480/480/arch' },
        ],
      },
      boards: {
        title: 'Boards',
        selected: [],
        items: [
          { title: 'CBSE', image: 'https://placeimg.com/480/480/arch' },
          { title: 'ICSE', image: 'https://placeimg.com/480/480/arch' },
          { title: 'GSEB', image: 'https://placeimg.com/480/480/arch' },
        ],
      },
    };
  },
  computed: {
    steps() {
      return [
        {
          component: FinderIntroduction,
          className: 'h-full max-w-sm mx-auto',
        },
      ];
    },

    atFirstStep() {
      return this.selected === 0;
    },

    atLastStep() {
      return this.selected === this.steps.length - 1;
    },

    selectedStep() {
      return this.steps[this.selected];
    },
  },
  methods: {
    goPrevStep() {
      this.selected = this.selected - 1;
    },

    goNextStep() {
      this.selected = this.selected + 1;
    },

    updateKeySelected(key) {
      return (selected) => {
        this[key].selected = selected;
      };
    },

    completeFinder() {
      console.log('Finder Complete');
    },
  },
};
</script>
