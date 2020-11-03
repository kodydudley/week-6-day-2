<template>
  <div class="PlanetPicture">
    <h5>{{ state.explanation }}</h5>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
export default {
  name: "PlanetPicture",
  props: {
    planetData: Object,
  },
  setup(props) {
    const state = reactive({
      planet: computed(() => props.planetData),
    });
    return {
      state,
    };
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>