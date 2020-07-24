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
              v-model="title"
              type="text"
              class="form-input mt-1 block w-full"
              placeholder="How to start an online business in 2020"
            />
          </label>
          <label class="block mb-4">
            <span class="text-gray-700">Subtitle</span>
            <textarea
              v-model="subtitle"
              type="text"
              rows="4"
              class="form-input mt-1 block w-full"
              placeholder="Follow these 7 simple steps to start you online business in 2020..."
            />
          </label>
          <p class="mb-1 text-gray-700">Content</p>
          <editor
            ref="editor"
            :config="config"
            class="border-gray-300 border-1 rounded py-4 mb-8"
          />
          <input
            @click.prevent="publish"
            type="submit"
            value="Publish"
            class="mb-12 py-3 w-full bg-teal-400 font-bold text-white rounded shadow-none border-none hover:bg-teal-600 cursor-pointer transition linear duration-500"
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
import router from "@/router";
import { create } from "@/store/article/api";

import NavigationBar from "@/components/NavigationBar";
import { Editor } from "vue-editor-js";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";

export default {
  name: "create-article-view",
  components: {
    NavigationBar,
    Editor
  },
  data() {
    return {
      title: "",
      subtitle: "",
      config: {
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4],
              defaultLevel: 2
            }
          },
          list: {
            class: List,
            inlineToolbar: true
          },
          code: {
            class: CodeTool
          },
          paragraph: {
            class: Paragraph
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3
            }
          },
          Marker: {
            class: Marker,
            shortcut: "CMD+SHIFT+M"
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author"
            }
          },
          inlineCode: {
            class: InlineCode,
            shortcut: "CMD+SHIFT+M"
          },
          delimiter: Delimiter
        },
        data: {
          time: 1591362820044,
          blocks: [
            {
              type: "paragraph",
              data: {
                text: "Start adding different elements to create your post!"
              }
            }
          ],
          version: "2.18.0"
        }
      }
    };
  },
  methods: {
    async publish() {
      const editorBlocks = await this.$refs.editor.state.editor.save();
      await create(
        this.title,
        this.subtitle,
        JSON.stringify(editorBlocks)
      ).then(({ data }) =>
        router.push({ name: "article", params: { slug: data.slug } })
      );
    }
  }
};
</script>

<style scoped>
.border-1 {
  border-width: 1px;
}
</style>
