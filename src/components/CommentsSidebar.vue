<template>
  <div
    class="fixed right-0 w-4/12 bg-white h-screen shadow-xl z-50 transition-all linear duration-500"
    :class="{ hide: this.open === false }"
  >
    <div class="h-screen overflow-auto p-8">
      <span class="flex flex-row justify-between items-center">
        <h1 class="font-bold text-xl text-black">
          Comments ({{ article.commentsCount }})
        </h1>
        <button class="text-black" @click="closeComments">
          <ion-icon name="close-outline" class="text-2xl"></ion-icon>
        </button>
      </span>
      <form
        v-if="authUser"
        class="my-6 bg-gray-100 p-4 rounded-lg"
        @submit.prevent="createComment"
      >
        <span class="flex flex-row items-center mb-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            alt="Avatar"
            class="w-8 h-auto mr-2 rounded-full"
          />
          <span class="flex flex-col justify-between">
            <p class="font-medium">{{ authUser.name }}</p>
          </span>
        </span>
        <textarea
          v-model="newComment"
          type="text"
          rows="1"
          :class="{ 'h-32': newComment.trim().length > 0 }"
          class="h-10 form-input w-full focus:h-32 transition-all linear duration-500 shadow-none mb-1"
          placeholder="What are your thoughts?"
        />
        <div class="flex flex-row justify-end">
          <input
            :disabled="newComment.trim().length === 0"
            type="submit"
            value="Comment"
            class="px-2 py-1 w-full bg-teal-400 text-white rounded font-bold hover:bg-teal-600 transition linear duration-500 disabled:opacity-75 disabled:bg-teal-700 cursor-pointer disabled:cursor-not-allowed"
          />
        </div>
      </form>
      <template v-for="comment in comments">
        <comment-item
          :key="comment.id"
          :comment="comment"
          :class="{ 'mt-6': !authUser }"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main";
import { mapGetters, mapActions } from "vuex";

import CommentItem from "@/components/CommentItem";

export default {
  name: "comments-sidebar",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  components: {
    CommentItem
  },
  data() {
    return {
      newComment: "",
      open: false
    };
  },
  mounted() {
    EventBus.$on("comments:open", () => (this.open = !this.open));
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser",
      comments: "comment/comments"
    })
  },
  methods: {
    ...mapActions({
      create: "comment/createComment"
    }),
    async createComment() {
      await this.create({
        articleId: this.article.id,
        comment: this.newComment
      });

      this.newComment = "";
    },
    closeComments() {
      EventBus.$emit("comments:open", {});
    }
  }
};
</script>

<style scoped>
.hide {
  right: -427px;
}
</style>
