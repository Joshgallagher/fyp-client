<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <navigation-bar />
    <main class="flex-grow">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="font-bold text-4xl">{{ author.name }}'s posts</h1>
          <p class="text-xl text-gray-700">
            Find out what {{ author.name }} has been writing about.
          </p>
        </div>
        <template v-for="(article, i) in articles">
          <div
            class="col-span-2"
            :key="article.id"
            :class="{ 'col-start-2': i % 2 === 0, 'col-end-6': i % 2 !== 0 }"
          >
            <article-item :article="article" />
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
import store from "@/store";

import NavigationBar from "@/components/NavigationBar";
import ArticleItem from "@/components/ArticleItem";

export default {
  name: "profile",
  components: {
    NavigationBar,
    ArticleItem
  },
  beforeRouteEnter(to, from, next) {
    store
      .dispatch("user/getAuthorProfile", to.params.userId)
      .then(() => next());

    store
      .dispatch("article/getAuthorArticles", to.params.userId)
      .then(() => next());
  },
  computed: {
    ...mapGetters({
      articles: "article/articles",
      author: "user/author"
    })
  },
  methods: {
    ...mapActions({
      getArticles: "article/getAuthorArticles"
    })
  }
};
</script>
