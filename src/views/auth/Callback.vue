<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "callback",
  methods: {
    ...mapActions("auth", ["oidcSignInCallback"])
  },
  mounted() {
    this.oidcSignInCallback()
      .then(path => this.$router.push(path))
      .catch(() => this.$router.push("/oidc-callback-error"));
  }
};
</script>
