import Vue from "vue";
import VueRouter from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import store from "@/store";

import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Article from "../views/Article.vue";
import CreateArticle from "../views/CreateArticle.vue";
import Bookmarks from "../views/Bookmarks.vue";
import SignUp from "../views/SignUp.vue";
import Callback from "../views/auth/Callback.vue";
import PopupCallback from "../views/auth/PopupCallback.vue";
import ErrorCallback from "../views/auth/ErrorCallback.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/profile/:userId",
    name: "profile",
    component: Profile,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/bookmarks",
    name: "bookmarks",
    component: Bookmarks,
    meta: {
      isPublic: false
    }
  },
  {
    path: "/signup",
    name: "sign-up",
    component: SignUp,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback
  },
  {
    path: "/popup-callback",
    name: "PopupCallback",
    component: PopupCallback
  },
  {
    path: "/callback-error",
    name: "ErrorCallback",
    component: ErrorCallback,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/create",
    name: "create-article",
    component: CreateArticle,
    meta: {
      isPublic: false
    }
  },
  {
    path: "/:slug",
    name: "article",
    component: Article,
    meta: {
      isPublic: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(vuexOidcCreateRouterMiddleware(store, "auth"));

export default router;
