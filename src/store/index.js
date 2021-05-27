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
  },
  getters: {
    searchTermGetter: state => state.searchTerm,
  },

  actions: {

    updateSearchValue({ commit }, searchTerm) {
      commit('updateSearchValue', searchTerm);
    },

    getResults( { commit, dispatch} ) {
      console.log("I work");

      let termValue = this.getters.searchTermGetter;
      console.log("INPUT VALUE", termValue);
      let url = 'http://localhost:8080/contacts';
      console.log("this is the url", url);
      axios.get(`${url}`, { params: { term: termValue } }).then(response => {
        console.log("THIS IS THE RESPONSE", response);
        this.state.results = response;
      })
      .catch(error => {
        console.log("this is the error", error);
      });
    },
  },

  mutations: {
    updateSearchValue(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
  }

});
