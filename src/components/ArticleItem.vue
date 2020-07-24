<template>
  <router-link
    :to="{ name: 'article', params: { slug: article.slug } }"
    class="group block shadow-md rounded bg-white hover:shadow-xl transition linear duration-500"
  >
    <h1
      class="pt-4 px-4 font-bold text-3xl mb-4 group-hover:text-teal-400 transition linear duration-500"
    >
      {{ article.title }}
    </h1>
    <p class="mb-6 px-4 text-gray-700">
      {{ article.subtitle }}
    </p>
    <hr class="border-gray-200" />
    <router-link
      :to="{ name: 'profile', params: { userId: article.userId } }"
      class="flex flex-row justify-between items-center px-4 py-4 hover:bg-gray-100 transition linear duration-500"
    >
      <span class="flex flex-row">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="Avatar"
          class="w-12 h-auto mr-4 rounded-full"
        />
        <span class="flex flex-col justify-between">
          <p class="font-medium">
            <span class="font-normal">Published by</span>
            {{ article.author }}
          </p>
          <span class="flex flex-row">
            <time
              :datetime="article.createdAt"
              class="text-gray-700 text-sm mr-1"
              >{{ createdAt }}</time
            >
            <span class="text-gray-700 text-sm mr-1">·</span>
            <reading-time :content="article.body" />
          </span>
        </span>
      </span>
      <bookmark-button :article="article" />
    </router-link>
  </router-link>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

import ReadingTime from "./ReadingTime";
import BookmarkButton from "@/components/BookmarkButton";

export default {
  name: "article-item",
  props: ["article"],
  components: { ReadingTime, BookmarkButton },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    }),
    createdAt() {
      return moment(this.article.createdAt).format("MMM YY");
    }
  },
  methods: {
    ...mapActions({
      bookmark: "bookmark/bookmark",
      unbookmark: "bookmark/unbookmark"
    })
  }
};
</script>
