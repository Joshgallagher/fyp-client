<template>
  <span v-if="authUser">
    <button v-if="isBookmarked" @click.prevent="bookmark">
      <ion-icon
        name="bookmark"
        class="text-xl hover:text-teal-400 transition linear duration-500"
      ></ion-icon>
    </button>
    <button v-else @click.prevent="bookmark">
      <ion-icon
        name="bookmark-outline"
        class="text-xl hover:text-teal-400 transition linear duration-500"
      ></ion-icon>
    </button>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import { create, remove } from "@/store/bookmark/api";

export default {
  name: "bookmark-button",
  props: ["article"],
  data() {
    return {
      isBookmarked: this.article.bookmarked
    };
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
    async bookmark() {
      const slug = this.article.slug;

      if (this.isBookmarked) {
        await remove(slug);
        this.isBookmarked = false;

        return;
      }

      await create(slug);
      this.isBookmarked = true;
    }
  }
};
</script>

<style></style>
