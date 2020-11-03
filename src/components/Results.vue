<template>
  <div class="Results col-10 offset-1 mt-4">
    <h2 class="text-center">Results:</h2>
    <planetPicture />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import PlanetPicture from "./PlanetPicture";
export default {
  name: "Results",
  setup() {
    return {
      planets: computed(() => AppState.planet),
    };
  },
  components: { PlanetPicture },
};
</script>


<style lang="scss" scoped>
</style>