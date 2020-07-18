import Vue from "vue";
import Vuex from "vuex";

import { vuexOidcCreateStoreModule } from "vuex-oidc";

import authConfig from "../config/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: vuexOidcCreateStoreModule(authConfig, {
      namespaced: true,
      dispatchEventsOnWindow: true
    })
  }
});
