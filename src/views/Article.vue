<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <comments-sidebar :article="article" />
    <div class="fixed floatingBar flex flex-col ml-10">
      <rating-button :article="article" class="mb-4" />
      <button
        @click="viewComments"
        class="text-2xl hover:text-teal-400 transition linear duration-500 mb-4 flex flex-row items-center"
      >
        <ion-icon name="chatbubble-outline"></ion-icon>
        <p class="text-sm text-gray-700 pl-2">{{ comments.length }}</p>
      </button>
      <bookmark-button :article="article" size="2xl" />
    </div>
    <navigation-bar />
    <main class="flex-grow bg-white">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="font-bold text-6xl mt-8 mb-2">{{ article.title }}</h1>
          <p class="text-2xl text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            asperiores perferendis voluptatem possimus similique enim saepe sit,
            expedita dolores? Libero commodi id temporibus nemo assumenda
            suscipit totam cumque repudiandae incidunt?
          </p>
          <router-link
            :to="{ name: 'profile', params: { userId: article.userId } }"
            class="flex flex-row justify-between items-center pt-8 pb-4 transition linear duration-500"
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
            <bookmark-button :article="article" />
          </router-link>
          <div class="mt-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsam accusantium quod earum debitis obcaecati, incidunt rem dolor
            fugit est quidem aspernatur. Nesciunt, fugiat iusto commodi veniam
            accusantium eligendi excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt ipsam accusantium quod earum
            debitis obcaecati, incidunt rem dolor fugit est quidem aspernatur.
            Nesciunt, fugiat iusto commodi veniam accusantium eligendi
            excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt ipsam accusantium quod earum debitis obcaecati, incidunt
            rem dolor fugit est quidem aspernatur. Nesciunt, fugiat iusto
            commodi veniam accusantium eligendi excepturi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt ipsam accusantium quod
            earum debitis obcaecati, incidunt rem dolor fugit est quidem
            aspernatur. Nesciunt, fugiat iusto commodi veniam accusantium
            eligendi excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt ipsam accusantium quod earum debitis
            obcaecati, incidunt rem dolor fugit est quidem aspernatur. Nesciunt,
            fugiat iusto commodi veniam accusantium eligendi excepturi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam
            accusantium quod earum debitis obcaecati, incidunt rem dolor fugit
            est quidem aspernatur. Nesciunt, fugiat iusto commodi veniam
            accusantium eligendi excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt ipsam accusantium quod earum
            debitis obcaecati, incidunt rem dolor fugit est quidem aspernatur.
            Nesciunt, fugiat iusto commodi veniam accusantium eligendi
            excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt ipsam accusantium quod earum debitis obcaecati, incidunt
            rem dolor fugit est quidem aspernatur. Nesciunt, fugiat iusto
            commodi veniam accusantium eligendi excepturi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt ipsam accusantium quod
            earum debitis obcaecati, incidunt rem dolor fugit est quidem
            aspernatur. Nesciunt, fugiat iusto commodi veniam accusantium
            eligendi excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt ipsam accusantium quod earum debitis
            obcaecati, incidunt rem dolor fugit est quidem aspernatur. Nesciunt,
            fugiat iusto commodi veniam accusantium eligendi excepturi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam
            accusantium quod earum debitis obcaecati, incidunt rem dolor fugit
            est quidem aspernatur. Nesciunt, fugiat iusto commodi veniam
            accusantium eligendi excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt ipsam accusantium quod earum
            debitis obcaecati, incidunt rem dolor fugit est quidem aspernatur.
            Nesciunt, fugiat iusto commodi veniam accusantium eligendi
            excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt ipsam accusantium quod earum debitis obcaecati, incidunt
            rem dolor fugit est quidem aspernatur. Nesciunt, fugiat iusto
            commodi veniam accusantium eligendi excepturi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deserunt ipsam accusantium quod
            earum debitis obcaecati, incidunt rem dolor fugit est quidem
            aspernatur. Nesciunt, fugiat iusto commodi veniam accusantium
            eligendi excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt ipsam accusantium quod earum debitis
            obcaecati, incidunt rem dolor fugit est quidem aspernatur. Nesciunt,
            fugiat iusto commodi veniam accusantium eligendi excepturi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam
            accusantium quod earum debitis obcaecati, incidunt rem dolor fugit
            est quidem aspernatur. Nesciunt, fugiat iusto commodi veniam
            accusantium eligendi excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt ipsam accusantium quod earum
            debitis obcaecati, incidunt rem dolor fugit est quidem aspernatur.
            Nesciunt, fugiat iusto commodi veniam accusantium eligendi
            excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt ipsam accusantium quod earum debitis obcaecati, incidunt
            rem dolor fugit est quidem aspernatur. Nesciunt, fugiat iusto
            commodi veniam accusantium eligendi excepturi.
          </div>
          <hr class="border-gray-200" />
        </div>
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
import moment from "moment";
import store from "@/store";
import { EventBus } from "@/main";
import { mapGetters } from "vuex";

import NavigationBar from "@/components/NavigationBar";
import ReadingTime from "@/components/ReadingTime";
import BookmarkButton from "@/components/BookmarkButton";
import RatingButton from "@/components/RatingButton";
import CommentsSidebar from "@/components/CommentsSidebar";

export default {
  name: "article-view",
  components: {
    NavigationBar,
    ReadingTime,
    BookmarkButton,
    RatingButton,
    CommentsSidebar
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("article/getArticle", to.params.slug).then(() => next());
    store.dispatch("comment/getComments", to.params.id).then(() => next());
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser",
      article: "article/article",
      comments: "comment/comments"
    }),
    createdAt() {
      return moment(this.article.createdAt).format("MMM YY");
    }
  },
  methods: {
    viewComments() {
      EventBus.$emit("comments:open", {});
    }
  }
};
</script>

<style>
.floatingBar {
  top: 50%;
  transform: translateY(-50%);
}
</style>
