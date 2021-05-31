/* eslint-disable prettier/prettier */

<template>
  <form class="search-box">
    <input
      v-model="searchValue"
      type="text"
      placeholder="Search for contacts"
      value=""
    />
    <button type="button" @click="getResults">Search</button>
  </form>
</template>

<script>

/* eslint-disable no-unused-vars*/ 
/* eslint-disable prettier/prettier */

import { mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: "SearchBox",


  computed: {
    searchValue: {
      get() {
          return this.searchTermGetter;
      },
      set(value) {
          return this.updateSearchValue(value);
      }, 

        ...mapGetters(['searchTermGetter']),
    },
  },
  methods: {

    ...mapActions(['updateSearchValue', 'getResults']),
  },
};
</script>
