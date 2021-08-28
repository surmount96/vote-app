import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Datetime } from "vue-datetime";
import 'remixicon/fonts/remixicon.css'
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import Toast, { POSITION } from "vue-toastification";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import "vue-toastification/dist/index.css";
Vue.use(Toast, { position: POSITION.TOP_LEFT, timeout: 9000 });
// import Notifications from 'vue-notification'
import "@/assets/css/tailwind.css";

Vue.use(Datetime);
Vue.component("datetime", Datetime);
Vue.component("Multiselect", Multiselect);
import KProgress from "k-progress";
Vue.component("k-progress", KProgress);
Vue.config.productionTip = false;
// Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
