<template>
  <div class="Query">
    <form @submit.prevent="getPicture()">
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
export default {
  name: "Query",
  setup() {
    return {};
  },
  components: {},
};
</script>


<style lang="scss" scoped>
</style>