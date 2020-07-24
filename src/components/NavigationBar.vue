<template>
  <header class="py-6 px-12 flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="text-teal-400 font-bold text-xl">
      Pondr.
    </router-link>
    <span v-if="!authUser">
      <router-link
        :to="{ name: 'home' }"
        class="hover:text-teal-400 transition linear duration-500 mr-6"
        :class="{ 'underline text-teal-400': isHomeRoute }"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'sign-up' }"
        class="mr-4 px-4 py-2 bg-teal-400 text-white rounded font-bold hover:bg-teal-600 transition linear duration-500"
        >Sign up</router-link
      >
      <a
        class="px-4 py-2 text-teal-400 rounded font-bold cursor-pointer hover:text-teal-600 transition linear duration-500"
        @click="logIn"
        >Log in</a
      >
    </span>
    <span v-else class="flex flex-row items-center">
      <router-link
        :to="{ name: 'create-article' }"
        class="flex items-center hover:text-teal-400 transition text-2xl linear duration-500 mr-6"
        :class="{ 'underline text-teal-400': isCreateArticleRoute }"
      >
        <ion-icon v-if="isCreateArticleRoute" name="add-circle"></ion-icon>
        <ion-icon v-else name="add-circle-outline"></ion-icon>
      </router-link>
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center hover:text-teal-400 transition text-2xl linear duration-500 mr-6"
        :class="{ 'underline text-teal-400': isHomeRoute }"
      >
        <ion-icon v-if="isHomeRoute" name="home"></ion-icon>
        <ion-icon v-else name="home-outline"></ion-icon>
      </router-link>
      <router-link
        :to="{ name: 'bookmarks' }"
        class="flex items-center hover:text-teal-400 transition text-2xl linear duration-500 mr-6"
        :class="{ 'underline text-teal-400': isBookmarksRoute }"
      >
        <ion-icon v-if="isBookmarksRoute" name="bookmark"></ion-icon>
        <ion-icon v-else name="bookmark-outline"></ion-icon>
      </router-link>
      <router-link
        :to="{ name: 'profile', params: { userId: authUser.sub } }"
        class="group flex flex-row items-center mr-6 border-r-2"
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="Avatar"
          class="w-10 h-auto rounded-full"
        />
        <p
          class="font-medium pl-3 pr-5 text-black group-hover:text-teal-400 transition linear duration-500"
          :class="{ 'text-teal-400': isMyProfileRoute }"
        >
          {{ authUser.name }}
        </p>
      </router-link>
      <a
        class="text-teal-400 font-bold rounded cursor-pointer hover:text-teal-600 transition linear duration-500"
        @click="signOut"
        >Log out</a
      >
    </span>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "navigation-bar",
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    }),
    isCreateArticleRoute() {
      return this.$route.matched.some(route => route.name === "create-article");
    },
    isHomeRoute() {
      return this.$route.matched.some(route => route.name === "home");
    },
    isBookmarksRoute() {
      return this.$route.matched.some(route => route.name === "bookmarks");
    },
    isMyProfileRoute() {
      return (
        this.$route.matched.some(route => route.name === "profile") &&
        this.authUser.sub === this.$route.params.userId
      );
    }
  },
  methods: {
    ...mapActions({
      logIn: "auth/authenticateOidc",
      signOut: "auth/signOutOidc"
    })
  }
};
</script>
