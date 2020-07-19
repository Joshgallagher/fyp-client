import Vue from "vue";
import VueRouter from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
import store from "@/store";

import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Callback from "../views/auth/Callback.vue";
import PopupCallback from "../views/auth/PopupCallback.vue";
import ErrorCallback from "../views/auth/ErrorCallback.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/signup",
    name: "SignUp",
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(vuexOidcCreateRouterMiddleware(store, "auth"));

export default router;
