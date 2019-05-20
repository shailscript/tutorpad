  <template>
  <button class="bg-blue-dark text-white w-8 sm:w-auto h-8 rounded-full p-2">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
};
</script>