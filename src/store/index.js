import Vue from "vue";
import Vuex from "vuex";

import authConfig from "../config/auth";

import { vuexOidcCreateStoreModule } from "vuex-oidc";
import article from "./article";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: vuexOidcCreateStoreModule(authConfig, {
      namespaced: true,
      dispatchEventsOnWindow: true
    }),
    article,
    user
  }
});
