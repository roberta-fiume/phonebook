/* eslint-disable prettier/prettier */
<template>
  <div>
    <div v-if="this.$store.state.results.length > 0" class="results">
      <ol>
        <li v-for="contact in this.$store.state.results" :key="contact.id">
          <router-link :to="'/contact/' + contact.name">{{
            contact.name
          }}</router-link>
        </li>
      </ol>
    </div>
    <div v-else class="results">
      {{ noContacts }}
    </div>
    <div v-if="this.$store.state.errorStatus" class="results">
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
  }
};
</script>
