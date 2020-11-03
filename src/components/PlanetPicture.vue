<template>
  <div class="PlanetPicture">
    <h1 class="mb-3">{{ state.planet.title }}</h1>
    <div v-if="state.planet.media_type == 'image'">
      <img :src="`${state.planet.url}`" alt="" srcset="" />
    </div>
    <div v-if="state.planet.media_type == 'video'">
      <iframe :src="state.planet.url"></iframe>
    </div>
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