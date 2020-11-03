<template>
  <div class="container-fluid text-center">
    <h1 class="align-middle">
      <img style="height: 50px" alt="Vue logo" src="./assets/logo.png" />iew the
      Astronomy Picture of the Day
    </h1>
    <query />
    <div class="row">
      <results />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState.js";
import Query from "./components/Query";
import Results from "./components/Results";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { Query, Results },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
