<template>
  <ContactDetails
    :contact-name="userDetails.name"
    :contact-number="userDetails.phone"
  ></ContactDetails>
</template>

<script>
import ContactDetails from "@/components/ContactDetails.vue";
import getResults from "../api/getResults";

export default {
  name: "Contact",
  components: {
    ContactDetails,
  },
  data() {
    return {
      userDetails: {},
    };
  },
  created() {
    this.userDetails = this.getUserDetails();
  },
  methods: {
    getUserDetails: function () {
      return getResults(this.$route.params.contactName)[0];
    },
  },
};
</script>
