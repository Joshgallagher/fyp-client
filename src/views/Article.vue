<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <comments-sidebar v-if="article" :article="article" />
    <article-action-bar v-if="article" :article="article" />
    <navigation-bar />
    <main class="flex-grow bg-white">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="font-bold text-6xl mt-8 mb-2">{{ article.title }}</h1>
          <p class="text-2xl text-gray-700 leading-relaxed">
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
            <div class="flex flex-row justify-center items-center">
              <bookmark-button :article="article" size="2xl" class="pt-2" />
              <button
                v-if="authUser && authUser.sub === article.userId"
                @click="removeArticle"
                class="ml-4 flex items-center px-2 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-800 transition linear duration-500"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          </router-link>
          <div class="mt-8 mb-8">
            <template v-for="(block, i) in JSON.parse(article.body).blocks">
              <p
                :key="i"
                v-if="block.type === 'paragraph'"
                class="mb-6 last:mb-0 leading-relaxed"
                v-html="block.data.text"
              />
              <template v-else-if="block.type === 'header'">
                <h2
                  v-if="block.data.level === 2"
                  :key="i"
                  class="text-2xl font-bold mb-2 last:mb-0"
                >
                  {{ block.data.text }}
                </h2>
                <h3
                  v-else-if="block.data.level === 3"
                  :key="i"
                  class="text-xl font-bold mb-2 last:mb-0"
                >
                  {{ block.data.text }}
                </h3>
                <h4 v-else :key="i" class="text-lg font-bold mb-2 last:mb-0">
                  {{ block.data.text }}
                </h4>
              </template>
              <template v-else-if="block.type === 'list'">
                <ul
                  v-if="block.data.style === 'unordered'"
                  :key="i"
                  class="list-disc ml-5 mb-4"
                >
                  <template v-for="(item, itemIndex) in block.data.items">
                    <li :key="itemIndex" class="mb-1">{{ item }}</li>
                  </template>
                </ul>
                <ol
                  v-if="block.data.style === 'ordered'"
                  :key="i"
                  class="list-decimal ml-5"
                >
                  <template v-for="(item, itemIndex) in block.data.items">
                    <li :key="itemIndex">{{ item }}</li>
                  </template>
                </ol>
              </template>
              <code v-else-if="block.type === 'code'" :key="i">
                <pre class="bg-gray-100 rounded py-6 mb-4">
                {{ block.data.code }}
                </pre>
              </code>
              <div v-else-if="block.type === 'quote'" :key="i">
                <p class="font-bold">{{ block.data.caption }}</p>
                <blockquote class="ml-4 text-gray-700">
                  {{ block.data.text }}
                </blockquote>
              </div>
              <hr
                v-else-if="block.type === 'delimiter'"
                :key="i"
                class="border-gray-200 my-6"
              />
            </template>
          </div>
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
import router from "@/router";
import { mapGetters, mapActions } from "vuex";

import NavigationBar from "@/components/NavigationBar";
import ReadingTime from "@/components/ReadingTime";
import BookmarkButton from "@/components/BookmarkButton";
import CommentsSidebar from "@/components/CommentsSidebar";
import ArticleActionBar from "@/components/ArticleActionBar";

export default {
  name: "article-view",
  components: {
    NavigationBar,
    ReadingTime,
    BookmarkButton,
    CommentsSidebar,
    ArticleActionBar
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("article/getArticle", to.params.slug).then(article => {
      store.dispatch("comment/getComments", article.id).then(() => next());
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch("article/getArticle", to.params.slug).then(article => {
      store.dispatch("comment/getComments", article.id).then(() => next());
    });
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
    ...mapActions({
      deleteArticle: "article/deleteArticle"
    }),
    async removeArticle() {
      if (confirm("Are you sure you want to delete this article?")) {
        await this.deleteArticle(this.article.slug);

        router.push({ name: "home" });
      }
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
