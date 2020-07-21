<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  mounted() {
    this.silentAuth();
  },
  methods: {
    ...mapActions({
      silentAuth: "auth/authenticateOidcSilent"
    })
  }
};
</script>

<style src="@/assets/styles/app.css" />

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
