<template>
  <v-navigation-drawer app clipped>
    <v-list dense>
      <v-list-item link to="/">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/customers">
        <v-list-item-action>
          <v-icon>mdi-account-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>customers</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/settings">
        <v-list-item-action>
          <v-icon>mdi-account-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/about">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>