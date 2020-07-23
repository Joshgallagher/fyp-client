<template>
  <div class="mb-4 last:mb-0">
    <div class="flex flex-row items-start mb-2">
      <img
        src="https://uifaces.co/our-content/donated/T5rm0m7W.jpg"
        alt="Avatar"
        class="w-12 h-auto mr-4 rounded-full"
      />
      <span class="flex flex-col justify-between w-full">
        <p class="font-medium">{{ comment.name }}</p>
        <time :datetime="comment.createdAt" class="m text-sm text-gray-700 mb-2"
          >Posted {{ createdAt }}</time
        >
        <p v-if="!updating">{{ this.userComment }}</p>
        <textarea
          v-else
          v-model="userComment"
          type="text"
          rows="1"
          :class="{ 'h-32': userComment.trim().length > 0 }"
          class="h-10 form-input w-full focus:h-32 transition-all linear duration-500 shadow-none mb-1"
          placeholder="What are your thoughts?"
        />
      </span>
    </div>
    <div
      v-if="authUser && authUser.sub === comment.userId"
      class="flex flex-row justify-end my-4"
    >
      <button
        v-if="!updating"
        @click="updateCommentState"
        class="mr-4 px-2 py-1 text-gray-700 rounded font-medium hover:bg-gray-200 transition linear duration-500"
      >
        Update
      </button>
      <button
        v-if="!updating"
        @click="deleteComment"
        class="flex items-center px-2 py-1 bg-red-600 text-white rounded font-medium hover:bg-red-800 transition linear duration-500"
      >
        <ion-icon name="trash-outline"></ion-icon>
      </button>
      <template v-else>
        <button
          @click="cancelUpdateComment"
          class="mr-4 px-2 py-1 text-gray-700 rounded font-medium hover:bg-gray-200 transition linear duration-500"
        >
          Cancel
        </button>
        <button
          @click="updateComment"
          class="px-2 py-1 bg-teal-400 text-white rounded font-medium hover:bg-teal-600 transition linear duration-500"
        >
          Save
        </button>
      </template>
    </div>
    <hr class="border-gray-200 w-full" />
  </div>
</template>

<script>
import moment from "moment";
import { update } from "@/store/comment/api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "comment-item",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      updating: false,
      originalComment: this.comment.comment,
      userComment: this.comment.comment
    };
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    }),
    createdAt() {
      return moment(this.comment.createdAt).fromNow();
    }
  },
  methods: {
    ...mapActions({
      removeComment: "comment/deleteComment"
    }),
    updateCommentState() {
      this.updating = true;
    },
    async updateComment() {
      await update(this.comment.id, this.userComment);

      this.updating = false;
      this.originalComment = this.userComment;
    },
    cancelUpdateComment() {
      this.updating = false;
      this.userComment = this.originalComment;
    },
    async deleteComment() {
      if (confirm("Are you sure you want to delete this comment?")) {
        await this.removeComment(this.comment.id);
      }
    }
  }
};
</script>

<style></style>
