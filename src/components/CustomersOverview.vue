<template>
  <!-- <v-container>
    <v-row no-gutters>
      <v-col v-for="c in companies" :key="c.id" cols="12" sm="4">
        <CustomerInfo :company=c />
      </v-col>
    </v-row>
  </v-container>-->
  <v-container class="">
    <h2>Customers</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Contact</th>
            <th class="text-left">Address</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in companies" :key="c.id">
            <td>{{ c.name }}</td>
            <td>{{ c.mail }}</td>
            <td>{{ c.address }}</td>
            <td>
              <v-btn color="primary" fab x-small v-on:click="editCustomer">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="my-2">
      <v-btn depressed small color="primary">Add Customer</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
//import CustomersOverview from "./CustomersOverview"

export default {
  components: {
  //  CustomersOverview
  },
  data() {
    return {
      companies: []
    };
  },
  mounted() {
    axios
      .get("https://run.mocky.io/v3/06144573-957f-41f1-a2e1-3d581eb4630a")
      .then(response => {
        this.companies = response.data;
        console.log(response.data);
      });
  },
  methods: {
    editCustomer(event) {
      console.log("edit customer", event);
      this.$router.push('customers/1');

    } 
  }
};
</script>
