<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <navigation-bar />
    <main class="flex-grow bg-white">
      <div class="grid grid-cols-6 gap-8">
        <div class="col-start-2 col-end-6">
          <h1 class="mt-8 mb-2 font-bold text-4xl">
            Create Post
          </h1>
          <p class="text-xl text-gray-700">
            Start creating your new post.
          </p>
        </div>
        <form class="col-start-2 col-end-6">
          <label class="block mb-4">
            <span class="text-gray-700">Title</span>
            <input
              type="text"
              class="form-input mt-1 block w-full"
              placeholder="How to start an online business in 2020"
            />
          </label>
          <label class="block mb-4">
            <span class="text-gray-700">Subtitle</span>
            <textarea
              type="text"
              rows="4"
              class="form-input mt-1 block w-full"
              placeholder="Follow these 7 simple steps to start you online business in 2020..."
            ></textarea>
          </label>
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
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "create-article-view",
  components: {
    NavigationBar
  }
};
</script>
