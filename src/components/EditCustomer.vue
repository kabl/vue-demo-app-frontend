<template>
  <v-container class>
    <h2>Edit Customer</h2>

    <v-form ref="form">
      <v-text-field v-model="customer.name" label="Name" required></v-text-field>
      <v-text-field v-model="customer.mail" label="E-mail"></v-text-field>
      <v-text-field v-model="customer.address" label="Address" required></v-text-field>
      <v-text-field v-model="customer.notes" label="Notes"></v-text-field>
      <v-btn color="error" class="mr-4">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "EditCustomer",

  data() {
    return {
      customer: Object
    };
  },
  mounted() {
    axios
      .get("https://run.mocky.io/v3/06144573-957f-41f1-a2e1-3d581eb4630a")
      .then(response => {
        this.customer = response.data[this.$route.params.id - 1];
      });
  },
  created() {
    console.log("route", this.$route.params.id);
  }
};
</script>
