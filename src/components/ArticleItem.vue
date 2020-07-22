<template>
  <router-link
    :to="{ name: 'home' }"
    class="group block shadow-md rounded bg-white hover:shadow-xl transition linear duration-500"
  >
    <h1
      class="pt-4 px-4 font-bold text-3xl mb-4 group-hover:text-teal-400 transition linear duration-500"
    >
      {{ article.title }}
    </h1>
    <p class="mb-6 px-4 text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      delectus rerum doloribus possimus.
    </p>
    <hr class="border-gray-200" />
    <router-link
      :to="{ name: 'profile', params: { userId: article.userId } }"
      class="flex flex-row justify-between items-center px-4 py-4 hover:bg-gray-100 transition linear duration-500"
    >
      <span class="flex flex-row">
        <img
          src="https://uifaces.co/our-content/donated/T5rm0m7W.jpg"
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
      <template v-if="authUser">
        <button v-if="isBookmarked" @click.prevent="bookmark">
          unBookmark
        </button>
        <button v-else @click.prevent="bookmark">
          Bookmark
        </button>
      </template>
    </router-link>
  </router-link>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
import { create, remove } from "@/store/bookmark/api";

import ReadingTime from "./ReadingTime";

export default {
  name: "article-item",
  props: ["article"],
  components: { ReadingTime },
  data() {
    return {
      isBookmarked: this.article.bookmarked
    };
  },
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
    }),
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
