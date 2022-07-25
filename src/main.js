import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";

import BootstrapVue from "bootstrap-vue";
import OneSignalVue from 'onesignal-vue'



/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPaperPlane, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* add icons to the library */
library.add(faPaperPlane, faTrashCan);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(OneSignalVue);

import Dayjs from "vue-dayjs";
Vue.use(ElementUI);
Vue.use(Dayjs, {
  lang: "en",
  filters: {
    ago: "ago",
  },

  directives: {
    countdown: "countdown",
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  beforeMount() {
    this.$OneSignal.init({ appId: '3b592f92-492d-492b-8674-fbb9669f645c' });
  }
}).$mount("#app");
