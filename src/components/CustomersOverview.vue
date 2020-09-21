<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="c in companies" :key="c.id" cols="12" sm="4">
        <CustomerInfo :company=c />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomerInfo from "@/components/CustomerInfo.vue";
import axios from 'axios';

export default {
  name: "CustomersOverview",
  components: {
    CustomerInfo
  },
  data() {
    return {
      companies: []
    };
  },
  mounted() {
    axios
      .get("https://run.mocky.io/v3/06144573-957f-41f1-a2e1-3d581eb4630a")
      .then(response => {this.companies = response.data
      console.log(response.data)});
  }
};
</script>
