<template>
  <div>
    <section>
      <SearchBox />
        <img v-if="this.$store.state.loading" :src="spinner" />
      <Results />
    </section>
  </div>
</template>

<script>
import Results from "@/components/Results.vue";
import SearchBox from "@/components/SearchBox.vue";
// import getResults from "../api/getResults";
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars*/ 

export default {
  name: "Search",
  components: {
    Results,
    SearchBox,
  },

  data() {
    return {
      spinner: require('/public/loading.gif'),
    }
  },
  mounted() {
    // var term = this.$route.params?.term;
    // if (term) {
    //   this.$store.state.searchTerm = term;
    //   this.$store.state.results = getResults(this.$store.state.searchTerm);
    // } else {
    //   this.$store.state.searchTerm = "";
    //   this.$store.state.results = [];
    // }
  },
};
</script>
