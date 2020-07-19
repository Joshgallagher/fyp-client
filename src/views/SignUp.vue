<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="py-6 px-12">
      <h1 class="text-teal-400 font-bold text-xl">Pondr.</h1>
    </header>
    <main class="flex-grow flex justify-center items-center">
      <div class="grid grid-cols-12">
        <h1 class="col-start-5 col-end-9 text-4xl font-bold">
          Join Pondr Today.
        </h1>
        <p class="col-start-5 col-end-9 text-xl mb-8 text-gray-700">
          Share your thoughts with the world.
        </p>
        <form class="flex flex-col col-start-5 col-end-9">
          <label class="block mb-4">
            <span class="text-gray-700">Name</span>
            <input
              type="text"
              class="form-input mt-1 block w-full"
              placeholder="Jane Doe"
            />
          </label>
          <label class="block mb-4">
            <span class="text-gray-700">Email</span>
            <input
              type="email"
              class="form-input mt-1 block w-full"
              placeholder="jane.doe@example.com"
            />
          </label>
          <label class="block mb-8">
            <span class="text-gray-700">Password</span>
            <input
              type="password"
              class="form-input mt-1 block w-full"
              placeholder="******"
            />
          </label>
          <input
            type="submit"
            value="Sign up"
            class="py-3 bg-teal-400 font-bold text-white rounded shadow-none border-none hover:bg-teal-600 cursor-pointer transition linear duration-500"
          />
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

export default {
  name: "SignUp",
  computed: {
    ...mapGetters({
      authUser: "auth/oidcUser"
    })
  },
  methods: {
    ...mapActions({
      logIn: "auth/authenticateOidcPopup",
      signOut: "auth/signOutOidc"
    })
  }
};
</script>
