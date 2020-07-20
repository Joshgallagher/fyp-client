<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <navigation-bar />
    <main class="flex-grow flex justify-center items-center">
      <div class="grid grid-cols-12 min-w-full">
        <h1 class="col-start-5 col-end-9 text-4xl font-bold">
          Join Pondr Today.
        </h1>
        <p class="col-start-5 col-end-9 text-xl mb-8 text-gray-700">
          Share your thoughts with the world 🌎
        </p>
        <form
          class="flex flex-col col-start-5 col-end-9"
          @submit.prevent="submit"
        >
          <label class="block mb-4">
            <span
              class="text-gray-700"
              :class="{ 'text-red-600': this.error.field === 'name' }"
              >Name</span
            >
            <input
              type="text"
              class="form-input mt-1 block w-full"
              :class="{ 'border-red-600': this.error.field === 'name' }"
              placeholder="Jane Doe"
              v-model="form.name"
            />
            <p
              class="mt-2 ml-2 text-red-600 text-sm"
              v-if="this.error.field === 'name'"
            >
              {{ this.error.message }}
            </p>
          </label>
          <label class="block mb-4">
            <span
              class="text-gray-700"
              :class="{ 'text-red-600': this.error.field === 'email' }"
              >Email</span
            >
            <input
              type="email"
              class="form-input mt-1 block w-full"
              :class="{ 'border-red-600': this.error.field === 'email' }"
              placeholder="jane.doe@example.com"
              v-model="form.email"
            />
            <p
              class="mt-2 ml-2 text-red-600 text-sm"
              v-if="this.error.field === 'email'"
            >
              {{ this.error.message }}
            </p>
          </label>
          <label class="block mb-8">
            <span
              class="text-gray-700"
              :class="{ 'text-red-600': this.error.field === 'password' }"
              >Password</span
            >
            <input
              type="password"
              class="form-input mt-1 block w-full"
              :class="{ 'border-red-600': this.error.field === 'password' }"
              placeholder="******"
              v-model="form.password"
            />
            <p
              class="mt-2 ml-2 text-red-600 text-sm"
              v-if="this.error.field === 'password'"
            >
              {{ this.error.message }}
            </p>
          </label>
          <input
            type="submit"
            value="Sign up"
            class="mb-4 py-3 bg-teal-400 font-bold text-white rounded shadow-none border-none hover:bg-teal-600 cursor-pointer transition linear duration-500"
          />
          <p class="text-center">
            Already have an account?
            <a
              class="text-teal-400 hover:underline cursor-pointer"
              @click="logIn"
              >Log in</a
            >
          </p>
        </form>
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
import axios from "axios";

import NavigationBar from "@/components/NavigationBar";

export default {
  name: "sign-up",
  components: {
    NavigationBar
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: {
        field: null,
        message: null
      }
    };
  },
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
    ...mapActions({
      logIn: "auth/authenticateOidc",
      signOut: "auth/signOutOidc"
    }),
    async submit() {
      let response = null;

      Object.assign({ field: null, message: null }, this.error);

      try {
        response = await axios.post("user", this.form);

        if (response.data.registered === true) {
          this.logIn();
        }
      } catch ({ response }) {
        if (response.status === 422) {
          this.error.field = response.data.field;
          this.error.message = response.data.message;
        }
      }
    }
  }
};
</script>
