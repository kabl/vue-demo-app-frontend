<template>
  <div>
    <div>
      {{ count }}
      <button v-on:click="$store.commit('increment')">Add 1</button>
    </div>
    <v-card>
      <v-card-title>User Properties</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <!-- <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Property</th>
              </tr>
            </thead> -->
            <tbody>
              <tr>
                <td>Avatar</td>
                <td><v-img :src="avatarUrl" max-width="50px"></v-img></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{{userInfo.name}}</td>
              </tr>
              <tr>
                <td>Last Login</td>
                <td>{{lastLogin}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "UserInfo",

  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        }
      ]
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    userInfo() {
      console.log(this.$store);
      return this.$store.state.userInfo;
    },
    lastLogin() {
      var t = new Date();
      t.setSeconds(this.userInfo.lastLogin);
      return t.toUTCString();
    },
    avatarUrl() {
      return "https://avatars.dicebear.com/api/bottts/" + this.userInfo.name + ".svg";
    }
  }
};
</script>
