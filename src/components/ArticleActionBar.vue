<template>
  <div class="fixed floatingBar flex flex-col ml-10">
    <rating-button :article="article" class="mb-4" />
    <button
      v-if="comments"
      @click="viewComments"
      class="text-2xl hover:text-teal-400 transition linear duration-500 mb-4 flex flex-row items-center"
    >
      <ion-icon name="chatbubble-outline"></ion-icon>
      <p class="text-sm text-gray-700 pl-2">{{ comments.length }}</p>
    </button>
    <bookmark-button :article="article" size="2xl" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "@/main";

import BookmarkButton from "@/components/BookmarkButton";
import RatingButton from "@/components/RatingButton";

export default {
  name: "article-action-bar",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    BookmarkButton,
    RatingButton
  },
  computed: {
    ...mapGetters({
      comments: "comment/comments"
    })
  },
  methods: {
    viewComments() {
      EventBus.$emit("comments:open", {});
    }
  }
};
</script>

<style></style>
