<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <navigation-bar />
    <main class="flex-grow">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="font-bold text-4xl">
            My bookmarks
          </h1>
          <p class="text-xl text-gray-700">
            Here you will find all of your bookmarks.
          </p>
        </div>
        <template v-for="(bookmark, i) in bookmarks">
          <div
            class="col-span-2"
            :key="bookmark.id"
            :class="{ 'col-start-2': i % 2 === 0, 'col-end-6': i % 2 !== 0 }"
          >
            <article-item :article="bookmark" />
          </div>
        </template>
      </div>
    </main>
    <footer class="py-6 px-12">
      <p class="text-gray-700 text-sm text-center">
        Pondr is an open source project
      </p>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import NavigationBar from "@/components/NavigationBar";
import ArticleItem from "@/components/ArticleItem";

export default {
  name: "bookmarks",
  components: {
    NavigationBar,
    ArticleItem
  },
  mounted() {
    this.getBookmarks();
  },
  computed: {
    ...mapGetters({ bookmarks: "bookmark/bookmarks" })
  },
  methods: {
    ...mapActions({ getBookmarks: "bookmark/getAllBookmarks" })
  }
};
</script>
