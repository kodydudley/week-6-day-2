<template>
  <div class="PlanetPicture">
    <h5>{{ state.planet.explanation }}</h5>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
import { AppState } from "../AppState";
export default {
  name: "PlanetPicture",
  setup() {
    const state = reactive({
      planet: computed(() => AppState.planet),
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