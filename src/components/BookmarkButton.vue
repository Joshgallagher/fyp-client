<template>
  <span v-if="authUser">
    <button v-if="isBookmarked" @click.prevent="bookmark">
      <ion-icon
        name="bookmark"
        :class="`text-${this.size}`"
        class="hover:text-teal-400 transition linear duration-500 text-black"
      ></ion-icon>
    </button>
    <button v-else @click.prevent="bookmark">
      <ion-icon
        name="bookmark-outline"
        :class="`text-${this.size}`"
        class="hover:text-teal-400 transition linear duration-500 text-black"
      ></ion-icon>
    </button>
  </span>
</template>

<script>
import { EventBus } from "@/main";
import { mapGetters } from "vuex";
import { create, remove } from "@/store/bookmark/api";

export default {
  name: "bookmark-button",
  props: {
    article: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: "xl"
    }
  },
  mounted() {
    EventBus.$on("bookmark:bookmarked", e =>
      this.article.slug === e.slug ? (this.isBookmarked = e.isBookmarked) : null
    );
  },
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
        EventBus.$emit("bookmark:bookmarked", {
          slug: this.article.slug,
          isBookmarked: false
        });

        return;
      }

      await create(slug);

      this.isBookmarked = true;
      EventBus.$emit("bookmark:bookmarked", {
        slug: this.article.slug,
        isBookmarked: true
      });
    }
  }
};
</script>

<style></style>
