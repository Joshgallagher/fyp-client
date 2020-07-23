import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = process.env.VUE_APP_API_GATEWAY_URI;

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

export const EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
