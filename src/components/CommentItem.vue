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
        <p>{{ comment.comment }}</p>
      </span>
    </div>
    <hr class="border-gray-200 w-full" />
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "comment-item",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAt() {
      return moment(this.comment.createdAt).fromNow();
    }
  }
};
</script>

<style></style>
