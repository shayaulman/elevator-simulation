import Vue from "vue";
import App from "./App.vue";
import store from "./store/Vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/global.scss";

library.add(faSortUp);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");

Vue.component("font-awesome-icon", FontAwesomeIcon);
