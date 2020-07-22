<template>
  <div
    class="fixed right-0 w-4/12 p-8 bg-white h-screen shadow-xl z-50 transition-all linear duration-500"
    :class="{ hide: this.open === false }"
  >
    <div class="overflow-scroll">
      <span class="flex flex-row justify-between items-center">
        <h1 class="font-bold text-xl text-black">
          Comments ({{ article.commentsCount }})
        </h1>
        <button class="text-black" @click="closeComments">
          <ion-icon name="close-outline" class="text-2xl"></ion-icon>
        </button>
      </span>
      <div class="my-6 bg-gray-100 p-4 rounded-lg">
        <span class="flex flex-row items-center mb-2">
          <img
            src="https://uifaces.co/our-content/donated/T5rm0m7W.jpg"
            alt="Avatar"
            class="w-8 h-auto mr-2 rounded-full"
          />
          <span class="flex flex-col justify-between">
            <p class="font-medium">{{ authUser.name }}</p>
          </span>
        </span>
        <textarea
          type="text"
          rows="1"
          class="form-input w-full focus:h-32 transition linear duration-500 outline-none mb-1"
          placeholder="What are your thoughts?"
        ></textarea>
        <div class="flex flex-row justify-end">
          <button
            class="px-2 py-1 w-full bg-teal-400 text-white rounded font-bold hover:bg-teal-600 transition linear duration-500"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/main";
import { mapGetters } from "vuex";

export default {
  name: "comments-sidebar",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  mounted() {
    EventBus.$on("comments:open", () => (this.open = !this.open));
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
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
