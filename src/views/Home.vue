<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="py-6 px-12">
      <h1 class="text-teal-400 font-bold text-xl">Pondr.</h1>
    </header>
    <main class="flex-grow"></main>
    <footer class="py-6 px-12">
      <p class="text-gray-700 text-sm text-center">
        Pondr is an open source project
      </p>
    </footer>
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
