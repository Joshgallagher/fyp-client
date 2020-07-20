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
            Here you will find what people have been writing about...
          </p>
        </div>
        <template v-for="(article, i) in articles">
          <router-link
            :to="{ name: 'home' }"
            :key="article.id"
            class="col-span-2 shadow-md rounded bg-white hover:shadow-xl transition linear duration-500"
            :class="{ 'col-start-2': i % 2 === 0, 'col-end-6': i % 2 !== 0 }"
          >
            <h1 class="pt-4 px-4 font-bold text-3xl mb-4">
              {{ article.title }}
            </h1>
            <p class="mb-6 px-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum delectus rerum doloribus possimus.
            </p>
            <hr class="border-gray-200" />
            <router-link
              :to="{ name: 'profile', params: { uuid: article.userId } }"
              class="flex flex-row px-4 py-4 hover:bg-gray-100 transition linear duration-500"
            >
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
                  <time class="text-gray-700 text-sm mr-1">Jun 19</time>
                  <span class="text-gray-700 text-sm">·</span>
                  <p class="text-gray-700 text-sm ml-1">12 min read</p>
                </span>
              </span>
            </router-link>
          </router-link>
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

export default {
  name: "Home",
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
