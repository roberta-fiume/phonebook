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
    wrapper: false,
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
      let url = 'http://localhost:8080/contacts';
      this.state.loading = true;
      commit('updateErrorStatus');
      this.state.wrapper = false;
      axios.get(`${url}`, { params: { term: termValue } }).then(response => {
        this.state.results = response.data;
        this.state.wrapper = true;
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
      console.log("ACTION", searchTerm);
    
      state.searchTerm = searchTerm;
    },

    updateErrorStatus(state, errorStatus) {
      if (state.errorStatus) {
        state.errorStatus = false;
      }
    },
  }

});
