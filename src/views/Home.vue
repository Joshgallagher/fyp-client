<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="py-6 px-12 flex flex-row justify-between">
      <h1 class="text-teal-400 font-bold text-xl">Pondr.</h1>
      <div>
        <router-link
          :to="{ name: 'sign-up' }"
          class="mr-4 px-4 py-2 bg-teal-400 text-white rounded font-bold"
          >Sign up</router-link
        >
        <a class="px-4 py-2 text-teal-400 rounded font-bold">Log in</a>
      </div>
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
