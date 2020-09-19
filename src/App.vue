<template>
  <v-app>
    <Navigation />
    <Bar />
    <v-main>
      <v-container fluid />
      <HelloWorld />
    </v-main>

    <v-footer app>footer</v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navigation from "./components/Navigation";
import Bar from "./components/Bar";

export default {
  name: "App",

  components: {
    Navigation,
    Bar,
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
