/* eslint-disable prettier/prettier */
<template>
  <div>
    <div v-if="results" class="results">
      <ol>
        <li v-for="contact in this.$store.state.results" :key="contact.id">
          <router-link :to="'/contact/' + contact.name">{{
            contact.name
          }}</router-link>
        </li>
      </ol>
    </div>
    <div v-else-if="this.$store.state.wrapper">
      {{ noContacts }}
    </div>
    <div v-if="this.$store.state.errorStatus">
      {{ errorMessage }}
    </div>
  </div>

</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: "Results",
  data() {
    return {
      errorMessage: "Ops, something went wrong!",
      noContacts: "No contacts available",
    }
  },

  computed: {
    results() {
      return this.$store.state.results.length > 0 && this.$store.state.wrapper;
    },

   
  }

};
</script>
