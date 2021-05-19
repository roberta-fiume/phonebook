<template>
  <div class="contact-details">
    <h2>Contact details for: {{ firstName }}</h2>
    <dl>
      <dt>Full name</dt>
      <dd>{{ contactName }}</dd>
      <dt>Phone number</dt>
      <dd>{{ contactNumber }}</dd>
    </dl>
    <router-link :to="'/'">Back to search</router-link>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  props: {
    contactName: String,
    contactNumber: String,
  },
  computed: {
    firstName() {
      return this.contactName.split(" ")[0];
    },
  },
};
</script>
