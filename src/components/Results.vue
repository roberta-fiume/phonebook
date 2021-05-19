<template>
  <div v-if="this.$store.state.results.length > 0" class="results">
    <ol>
      <li v-for="contact in this.$store.state.results" :key="contact.id">
        <router-link :to="'/contact/' + contact.name">{{
          contact.name
        }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
};
</script>
