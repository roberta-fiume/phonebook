/* eslint-disable prettier/prettier */

<template>
  <form class="search-box">
    <input
      v-model="searchValue"
      type="text"
      placeholder="Search for contacts"
      value=""
    />
    <button  @click="getResults">Search</button>
  </form>
</template>

<script>
// import getResults from "../api/getResults";

/* eslint-disable no-unused-vars*/ 
/* eslint-disable prettier/prettier */

import { mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: "SearchBox",

  computed: {
    searchValue: {
      get() {
          return this.searchTermGetter
      },
      set(value) {
          return this.updateSearchValue(value);
      }, 

        ...mapGetters(['searchTermGetter']),
    },
  },
  methods: {

    ...mapActions(['updateSearchValue', 'getResults']),

  
    //  ...mapActions(['getResults']),
    // updateResults: function () {
    //   this.$store.state.results = getResults(this.$store.state.searchTerm);//make api call to api in store action and import action in here. Pass the searchTerm in action
    // },
  },
};
</script>
