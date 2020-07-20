<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="py-6 px-12 flex flex-row justify-between">
      <h1 class="text-teal-400 font-bold text-xl">Pondr.</h1>
      <div>
        <router-link
          :to="{ name: 'sign-up' }"
          class="mr-4 px-4 py-2 bg-teal-400 text-white rounded font-bold"
          >Sign up</router-link
        >
        <a class="px-4 py-2 text-teal-400 rounded font-bold">Log in</a>
      </div>
    </header>
    <main class="flex-grow">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="font-bold text-4xl">
            Home
          </h1>
          <p class="text-xl text-gray-700">
            Find out what people have been writing about.
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

import ArticleItem from "@/components/ArticleItem";

export default {
  name: "Home",
  components: {
    ArticleItem
  },
  mounted() {
    this.getArticles();
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser",
      articles: "article/articles"
    })
  },
  methods: {
    ...mapActions({
      logIn: "auth/authenticateOidcPopup",
      signOut: "auth/signOutOidc",
      getArticles: "article/getArticles"
    })
  }
};
</script>
