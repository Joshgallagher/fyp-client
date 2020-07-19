<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a @click.prevent="logIn">
      Log in
    </a>
    <div v-if="authUser">
      Signed in as {{ authUser.sub }}
      <button @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
    ...mapActions({
      logIn: "auth/authenticateOidcPopup",
      signOut: "auth/signOutOidc"
    })
  }
};
</script>
