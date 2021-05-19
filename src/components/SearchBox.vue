<template>
  <form class="search-box">
    <input
      v-model="$store.state.searchTerm"
      type="text"
      placeholder="Search for contacts"
      value=""
    />
    <button type="submit" @click="updateResults()">Search</button>
  </form>
</template>

<script>
import getResults from "../api/getResults";

export default {
  name: "SearchBox",
  methods: {
    updateResults: function () {
      this.$store.state.results = getResults(this.$store.state.searchTerm);
    },
  },
};
</script>
