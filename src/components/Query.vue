<template>
  <div class="Query col-10 offset-1">
    <form @submit.prevent="getPlanets()">
      <label for="query">Enter Date</label>
      <input
        type="text"
        name="query"
        class="form-control"
        placeholder="YYYY-MM-DD"
        v-model="state.query"
      />
      <button class="btn btn-primary btn-block" type="submit">Search</button>
    </form>
  </div>
</template>


<script>
import { reactive } from "vue";
import { planetService } from "../Services/PlanetService";
export default {
  name: "Query",
  setup() {
    const state = reactive({
      quert: "",
    });
    return {
      state,
      getPlanets() {
        planetService.getPlanets(state.query);
      },
    };
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>