<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "popup-callback",
  methods: {
    ...mapActions("auth", ["oidcSignInPopupCallback"])
  },
  created() {
    this.oidcSignInPopupCallback();
  }
};
</script>
