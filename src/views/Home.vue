<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
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
