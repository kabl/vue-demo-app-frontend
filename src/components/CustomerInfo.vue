<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">{{company.name}}</div> -->
        <v-list-item-title class="headline mb-1">{{company.name}}</v-list-item-title>
        <v-list-item-subtitle>{{company.address}}</v-list-item-subtitle>
      </v-list-item-content>

      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CustomersInfo",
  props: {
    company: Object
  }
};
</script>
