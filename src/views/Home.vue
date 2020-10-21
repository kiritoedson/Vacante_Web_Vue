<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import firebase from "firebase";

// @Component({
//   components: {
//     HelloWorld
//   },
//   methods: {
//     logout: function() {
//       firebase
//         .auth()
//         .signOut()
//         .then(() => {
//           this.$router.replace("login");
//         });
//     }
//   }
// })
// export default class Home extends Vue {}
export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
