<template>
  <div>
    <section>
      <SearchBox />
        <img v-if="this.$store.state.loading" :src="spinner" class="image" />
      <Results />
    </section>
  </div>
</template>

<script>
import Results from "@/components/Results.vue";
import SearchBox from "@/components/SearchBox.vue";

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

  },
};
</script>
