<template>
  <div class="mb-4 last:mb-0">
    <div class="flex flex-row items-start mb-2">
      <img
        src="https://uifaces.co/our-content/donated/T5rm0m7W.jpg"
        alt="Avatar"
        class="w-12 h-auto mr-4 rounded-full"
      />
      <span class="flex flex-col justify-between">
        <p class="font-medium">{{ comment.name }}</p>
        <time :datetime="comment.createdAt" class="m text-sm text-gray-700 mb-2"
          >Posted {{ createdAt }}</time
        >
        <p>{{ this.userComment }}</p>
      </span>
    </div>
    <div
      v-if="authUser.sub === comment.userId"
      class="flex flex-row justify-end my-4"
    >
      <button
        @click="update"
        class="mr-4 px-2 py-1 bg-teal-400 text-white rounded font-bold hover:bg-teal-600 transition linear duration-500"
      >
        Update
      </button>
      <button
        class="px-2 py-1 bg-red-600 text-white rounded font-bold hover:bg-red-800 transition linear duration-500"
      >
        Delete
      </button>
    </div>
    <hr class="border-gray-200 w-full" />
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

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
    update() {
      this.updating = true;
    }
  }
};
</script>

<style></style>
