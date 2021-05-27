/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars*/ 
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require('axios').default;


export default new Vuex.Store({
  state: {
    searchTerm: "",
    results: [],
    loading: false,
    errorStatus: false,
  },
  getters: {
    searchTermGetter: state => state.searchTerm,
  },

  actions: {

    updateSearchValue({ commit }, searchTerm) {
      commit('updateSearchValue', searchTerm);
    },

    getResults( { commit, dispatch} ) {
      let termValue = this.getters.searchTermGetter;
      console.log("INPUT VALUE", termValue);
      let url = 'http://localhost:8080/contacts';
      console.log("this is the url", url);
      this.state.loading = true;
      axios.get(`${url}`, { params: { term: termValue } }).then(response => {
        this.state.results = response.data;
      })
      .catch(error => {
        this.state.errorStatus = true;
      }).finally(() => {
        this.state.loading =  false;
    });
    },
  },

  mutations: {
    updateSearchValue(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
  }

});
