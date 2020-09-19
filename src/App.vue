<template>
  <v-app>
    <Navigation />
    <Bar />

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>footer</v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Bar from "./components/Bar";

export default {
  name: "App",

  components: {
    Navigation,
    Bar
  },

  data: () => ({
    //
  })
};
</script>
