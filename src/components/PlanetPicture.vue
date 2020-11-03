<template>
  <div class="PlanetPicture">
    <h1 class="mb-3">{{ state.planet.title }}</h1>
    <img :src="`${state.planet.url}`" alt="" srcset="" />
    <h6 class="mt-3">{{ state.planet.explanation }}</h6>
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