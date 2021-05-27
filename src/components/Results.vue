/* eslint-disable prettier/prettier */
<template>
  <div v-if="this.$store.state.results.length > 0" class="results">
    <ol>
      <li v-for="contact in this.$store.state.results" :key="contact.id">
        <router-link :to="'/contact/' + contact.name">{{
          contact.name
        }}</router-link>
      </li>
    </ol>
    <div class="results">

    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: "Results",
  data() {
    return {
      spinner: require('/public/loading.gif'),
    }
  }
};
</script>
