<template>
  <div>
    <button
      v-if="authUser"
      @click="rate"
      class="text-2xl hover:text-teal-400 transition linear duration-500 flex flex-row items-center"
    >
      <ion-icon v-if="rated" name="heart"></ion-icon>
      <ion-icon v-else name="heart-outline"></ion-icon>
      <p class="text-sm text-gray-700 pl-2">
        {{ this.rating }}
      </p>
    </button>
    <button
      v-else
      class="text-2xl transition linear duration-500 flex flex-row items-center pointer-events-none"
    >
      <ion-icon name="heart-outline"></ion-icon>
      <p class="text-sm text-gray-700 pl-2">
        {{ this.rating }}
      </p>
    </button>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "rating-button",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rating: this.article.rating,
      rated: this.article.rated
    };
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
    async rate() {
      const { data } = await axios.post(
        "ratings",
        { articleId: this.article.id },
        {
          headers: { Authorization: `Bearer ${store.state.auth.access_token}` }
        }
      );

      if (data.rated) {
        this.rating += 1;
        this.rated = true;
      }
    }
  }
};
</script>

<style></style>
