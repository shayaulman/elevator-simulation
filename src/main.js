import Vue from "vue";
import App from "./App.vue";
import store from "./store/Vuex";

import "./assets/global.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
